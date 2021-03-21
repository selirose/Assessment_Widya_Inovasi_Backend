// Import Modules and Plugins
const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const uniqueValidator = require("mongoose-unique-validator");

// Create the CollectionSchema
const UserSchema = new mongoose.Schema(
  {
    // Setup the type and requirement(true or false) of each field
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      uniqueCaseInsensitive: true,
    },
    gender: {
      type: String,
      enum: ["female", "male"],
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: {
      // Add timestamps to the Schema
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    versionKey: false,
    toJSON: { getters: true },
  }
);

// Add the plugin
UserSchema.plugin(mongoose_delete, { overrideMethods: "all" });
UserSchema.plugin(uniqueValidator);

// Exports the model
module.exports = user = mongoose.model("user", UserSchema, "user");
