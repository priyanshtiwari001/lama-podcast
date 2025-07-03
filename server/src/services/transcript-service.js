const { StatusCodes } = require("http-status-codes");
const { TranscriptRepository } = require("../repositories");
const AppErrors = require("../utils/error/app-errors");
const { default: mongoose } = require("mongoose");

const transcriptepo = new TranscriptRepository();

async function createTranscript(data) {
  try {
    const response = await transcriptepo.create(data);
    return response;
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const explanation = [];

      for (const err of Object.values(error.errors)) {
        if (err.kind === "maxlength") {
          explanation.push({
            message: `Transcript exceeds the maximum allowed characters.`,
            field: err.path,
            providedLength: data.content.length,
            allowedMax: err.properties.maxlength,
          });
        }
      }

      if (explanation.length > 0) {
        throw new AppErrors(explanation, StatusCodes.BAD_REQUEST);
      }
    }

    throw new AppErrors(
      "Something went wrong in the transcript-service: createTranscript",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateTranscript(data) {
  const { id, content } = data;
  try {
    const response = await transcriptepo.update(id, { content });
    return response;
  } catch (error) {
    console.log(error);
    throw new AppErrors(
      "Something went wrong in the Transcript-service: updateTranscript",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getTranscript(data) {
  console.log(data);
  try {
    const response = transcriptepo.getbyPodcastId(data);
    return response;
  } catch (error) {
    console.log(error);
    throw new AppErrors(
      "Something went wrong in the Transcript-service: getTranscript",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteTranscript(id) {
  try {
    const response = await transcriptepo.delete({ podcastId: id });
    return response;
  } catch (error) {
    console.log(error);
    throw new AppErrors(
      "Something went wrong in the Transcript-service: deleteTranscript",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createTranscript,
  updateTranscript,
  deleteTranscript,
  getTranscript
};
