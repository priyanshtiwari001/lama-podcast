const express = require('express');
const router = express.Router();
const {ProjectController,PodcastController,TranscriptController}= require('../../controllers');
const { UserMiddleware } = require('../../middlewares');

router.post('/create',UserMiddleware.checkAuth, ProjectController.createProjects);

router.get('/get',UserMiddleware.checkAuth,ProjectController.getAllProjects)



// Podcast apis
router.post('/:projectId/podcast',UserMiddleware.checkAuth,PodcastController.createPodcast);

router.get('/:projectId/podcast',UserMiddleware.checkAuth,PodcastController.getPodcastbyProjectId)

router.delete("/:podcastId/podcast",UserMiddleware.checkAuth,PodcastController.deletePodcastbyId)

router.patch("/:projectId/podcast/:transcriptId",UserMiddleware.checkAuth,TranscriptController.updateTranscript)

router.get("/:projectId/podcast/:podcastId",UserMiddleware.checkAuth,TranscriptController.getTranscriptbyPodcastId)
module.exports=router;