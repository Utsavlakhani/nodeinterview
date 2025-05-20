const mongoose = require('mongoose');

const InstitueSchema = new mongoose.Schema({
  Instiute: {
    type: String,
    default: ""
  },
  Board: [],
  Class: []
});

module.exports = mongoose.model('institue', InstitueSchema); 