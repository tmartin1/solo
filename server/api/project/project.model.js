'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: String,
  summary: String,
  details: String,
  ownerName: String,
  _ownerId: String,
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  comments: [ { username: String, text: String } ],
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Project', ProjectSchema);