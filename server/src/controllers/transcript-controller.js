const { TranscriptService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");



async function updateTranscript(req, res) {
  try {
    const response =  await TranscriptService.updateTranscript({
        id:req.params.transcriptId,
        content:req.body.content,
    });
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function getTranscriptbyPodcastId(req, res) {
  try {
    const response =  await TranscriptService.getTranscript(req.params.podcastId);
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}



module.exports={
    updateTranscript,
    getTranscriptbyPodcastId
}