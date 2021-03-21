// Import Module for validations
const { check, validationResult } = require("express-validator");

module.exports = {
  // Signup validation
  signup: [
    check("name").notEmpty().withMessage("name can not null"),
    check("email")
      .normalizeEmail()
      .isEmail()
      .withMessage("please input email in correct format"),
    check("password", "password field must have 8 to 32 characters")
      .isString()
      .isLength({
        min: 8,
        max: 32,
      }),
    check(
      "passwordConfirmation",
      "passwordConfirmation field must have the same value as the password field"
    )
      .exists()
      .custom((value, { req }) => value === req.body.password),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped(),
        });
      }
      next();
    },
  ],
  // Login validation
  login: [
    check("email")
      .notEmpty()
      .withMessage("email cant null")
      .normalizeEmail({
        gmail_remove_dots: false,
      })
      .isEmail()
      .withMessage("input must be email address"),
    check("password", "password field must have 8 to 32 characters")
      .isString()
      .isLength({
        min: 8,
        max: 32,
      }),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped(),
        });
      }
      next();
    },
  ],

  // Profile validation
  profile: [
    check("id").custom((value, { req }) => {
      return user.findById(req.params.id).then((result) => {
        if (!result) {
          throw new Error("User not found!");
        }
      });
    }),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped(),
        });
      }
      next();
    },
  ],
};
