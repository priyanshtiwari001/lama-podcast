const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const transcriptSchema = new Schema(
  {
    podcastId: {
      type: Schema.Types.ObjectId,
      ref: 'Podcast',
      required: true,
    },
    content: {
      type: String,
      required: true,
      maxlength: 300, 
    },
  },
  { timestamps: true }
);

const Transcript = model('Transcript', transcriptSchema);
module.exports = Transcript;
