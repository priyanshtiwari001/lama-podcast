const mongoose = require('mongoose');
const { TranscriptModel } = require("./transcript-model");
const { Schema, model } = mongoose;

const podcastSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    podcastname: {
      type: String,
      required: true,
      trim: true,
      unique:true
    },
  },
  { timestamps: true }
);

const Podcast = model('Podcast', podcastSchema);
module.exports = Podcast;
