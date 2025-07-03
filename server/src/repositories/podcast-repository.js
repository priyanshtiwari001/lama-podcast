const { PodcastModel } = require("../models");
const CrudRepository = require("./crud-repository");

class PodcastRepository extends CrudRepository {

    constructor(){
        super(PodcastModel)
    }

    async getbyProjectId(id){
      try {
          const response = await PodcastModel.find({projectId:id});
          return response;
      } catch (error) {
        console.log(error)
      }

    }
}

module.exports = PodcastRepository;