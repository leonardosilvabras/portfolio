const mongoose = require("mongoose");
const { Schema } = mongoose;
const slug = require("slug");

const portifolioSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    default: function () {
      return slug(this.title);
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("portifolio", portifolioSchema);
