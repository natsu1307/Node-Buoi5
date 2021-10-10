const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const classSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    numberStudent: {
      type: Number, 
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
classSchema.plugin(toJSON);
classSchema.plugin(paginate);

classSchema.pre('save', async function (next) {
  next();
});

/**
 * @typedef Class
 */
const Class = mongoose.model('Class', classSchema);

module.exports = Class;
