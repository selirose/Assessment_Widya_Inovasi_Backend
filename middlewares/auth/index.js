// Import Modules
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

// Import user model
const user = require("../../models/user");

// Signup Authentication
passport.use(
  "signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      user
        .create({
          name: req.body.name,
          gender: req.body.gender,
          email: email,
          password: bcrypt.hashSync(password, 12),
        })
        .then((result) => {
          return done(null, result, {
            message: "User created!",
          });
        })
        .catch((err) => {
          if (err) {
            if (err.code === 11000 && err.keyValue.email) {
              return done(null, false, {
                message: "Email already used!",
              });
            }
            return done(null, false, {
              message: err.message || "User failed to created!",
            });
          }
        });
    }
  )
);

// Login Authentication
passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      // Dont need PassReqToCallback because only variable email and password is passed
    },
    async (email, password, done) => {
      const userLogin = await user.findOne({
        email: email,
      });
      // Check if user exists with the email
      if (!userLogin) {
        return done(null, false, {
          message: "User not found!",
        });
      }

      const validate = await bcrypt.compare(password, userLogin.password);

      // Check if the password inputted same as the one kept in database
      if (!validate) {
        return done(null, false, {
          message: "Wrong password!",
        });
      }

      // If no error pass the user information found with the email
      return done(null, userLogin, {
        message: "Login success!",
      });
    }
  )
);

// Account/Profile Authentication
passport.use(
  "profile",
  new JWTstrategy(
    {
      secretOrKey: "secret_password", // key for jwt
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), // extract token from authorization
      passReqToCallback: true,
    },
    async (req, token, done) => {
      // Find user with params.email
      const userLogin = await user.findById(req.params.id);

      if (!userLogin) {
        return done(null, false, {
          message: "User not found",
        });
      }
      // Check is _id in token same as the params.email user
      if (userLogin._id == token.user._id) {
        return done(null, userLogin, {});
      }

      return done(null, false, {
        message: "Invalid Token!",
      });
    }
  )
);
