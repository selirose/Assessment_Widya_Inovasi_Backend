//import modules
const express = require("express");
const passport = require("passport");

// PASSPORT CONFIGURATION
require("../middlewares/auth/index");
const router = express.Router();

// Import Middlewares and Controller
const UserController = require("../controllers/userController");
const userValidator = require("../middlewares/validators/userValidator");

//Signup Routes
router.post("/signup", [
  userValidator.signup,
  function (req, res, next) {
    passport.authenticate(
      "signup",
      {
        session: false,
      },
      function (err, user, info) {
        if (!user) {
          res.status(401).json({
            status: "Error",
            message: info.message,
          });
          return;
        }
        UserController.signup(user, req, res, next);
      }
    )(req, res, next);
  },
]);

//Login Routes
router.post("/login", [
  userValidator.login,
  function (req, res, next) {
    passport.authenticate(
      "login",
      {
        session: false,
      },
      function (err, user, info) {
        if (!user) {
          res.status(401).json({
            status: "Error",
            message: info.message,
          });
          return;
        }
        UserController.login(user, req, res, next);
      }
    )(req, res, next);
  },
]);

// Get Profile Routes
router.get("/profile/:id", [
  userValidator.profile,
  function (req, res, next) {
    passport.authenticate(
      "profile",
      {
        session: false,
      },
      function (err, user, info) {
        if (!user) {
          res.status(401).json({
            status: "Error",
            message: info.message,
          });
          return;
        }
        UserController.profile(user, req, res, next);
      }
    )(req, res, next);
  },
]);

router.get('/', UserController.getAllUser)

module.exports = router;
