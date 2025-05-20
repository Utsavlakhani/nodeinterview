const mongoose = require('mongoose');

const StdSubSchema = new mongoose.Schema({
  Standards: {
    type: String,
    default: ""
  },
  Std :  {
    type: String,
    default: ""
  },
  subject: [],
});

module.exports = mongoose.model('std-sub', StdSubSchema); 