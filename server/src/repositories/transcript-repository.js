const { TranscriptModel } = require("../models");
const CrudRepository = require("./crud-repository");

class TranscriptRepository extends CrudRepository {

    constructor(){
        super(TranscriptModel)
    }
        async getbyPodcastId(id){
      try {
          const response = await TranscriptModel.find({podcastId:id});
          console.log(response)
          return response;
      } catch (error) {
        console.log(error)
      }

    }
}

module.exports = TranscriptRepository;