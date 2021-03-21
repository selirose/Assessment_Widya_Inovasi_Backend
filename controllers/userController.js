// Import collection models
const user = require("../models/user");

// Import Modules
const jwt = require("jsonwebtoken");
const SECRET_KEY =process.env.SECRET_KEY;

// Create class
class UserController {
  // Signup function
  async signup(user, req, res) {
    // Decide the information kept in the token
    const body = {
      _id: user._id,
    };

    // Create token
    const token = jwt.sign(
      {
        user: body,
      },
      SECRET_KEY
    );

    res.status(200).json({
      message: "Signup success!",
      token: token,
    });
  }

  // Login function
  async login(user, req, res) {
    // Decide the information kept in the token
    const body = {
      _id: user._id,
    };

    // Create token
    const token = jwt.sign(
      {
        user: body,
      },
      SECRET_KEY
    );

    res.status(200).json({
      message: "Login success!",
      token: token,
    });
  }

  // Profile function
  async profile(err, req, res) {
    //Find user from req.params.email and return it
    user
      .findById(req.params.id, {
        deleted: 0,
        password: 0,
        created_at: 0,
        updated_at: 0,
        _id: 1,
      })
      .then((result) => {
        res.json({
          status: "succes",
          data: result,
        });
      });
  }

  async getAllUser(req, res) {
    user.find(req.params.id)
    .then((result) => {
      res.json({
        status: "succes",
        data: result,
      });
    });
  }
}

module.exports = new UserController();



