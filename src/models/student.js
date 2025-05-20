const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  Instiute: {
    type: String,
    default: ""
  },
  Board:  {
    type: String,
    default: ""
  },
  Class:  {
    type: String,
    default: ""
  },
  Standards: {
    type: String,
    default: ""
  },
  Class :  {
    type: String,
    default: ""
  },
  subject:  []
});

module.exports = mongoose.model('student', StudentSchema); 