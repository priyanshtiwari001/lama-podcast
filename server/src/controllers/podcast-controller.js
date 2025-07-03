const { PodcastService,TranscriptService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const AppErrors = require("../utils/error/app-errors");

async function createPodcast(req, res) {
  const { podcastname, content } = req.body;
  const { projectId } = req.params;
  try {
    const podcast = await PodcastService.createPodcast({
      projectId,
      podcastname,
    });
    if(!podcast){
        throw new AppErrors("Podcast details is missing", StatusCodes.BAD_REQUEST)
    }
    const podcastId = podcast._id;
    if (content) {
      await TranscriptService.createTranscript({podcastId, content });
    }
    SuccessResponse.data = podcast;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function getPodcastbyProjectId(req, res) {
  try {
    const response = await PodcastService.getPodcastByProjectId(req.params.projectId);
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function deletePodcastbyId(req, res) {
  try {
    const response = await PodcastService.deletePodcast(req.params.podcastId);

    if(response){
        await TranscriptService.deleteTranscript(req.params.podcastId);
    }
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}


module.exports = {
  createPodcast,
  getPodcastbyProjectId,
  deletePodcastbyId
};
