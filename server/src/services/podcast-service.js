const { StatusCodes } = require('http-status-codes');
const {PodcastRepository}=require('../repositories');
const AppErrors = require('../utils/error/app-errors');
const { default: mongoose } = require('mongoose');

const podcastepo = new PodcastRepository();


async function createPodcast(data){
    try {
        const response = await podcastepo.create(data);
        return response;
    } catch (error) {
        let explaination = [];
    
       if(error instanceof mongoose.Error.ValidationError){
        Object.values(error.errors).map(err => {
            const result = {
                field: err.path,
                message:err.message
            };
            return explaination.push(result);
        })

        throw new AppErrors(explaination, StatusCodes.BAD_REQUEST);
      
       }

       // Duplicate Value
       if(error.name == 'MongoServerError' && error.code == 11000){ 
       throw new AppErrors('Duplicate podcast name found. Please enter unique name', StatusCodes.CONFLICT);
       }
      
       
        throw new AppErrors("Something went wrong in the podcast-service: createPodcast", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getPodcastByProjectId(id){
    try {
        const response = await podcastepo.getbyProjectId(id);
        return response;
    } catch (error) {
        console.log(error)
        throw new AppErrors("Something went wrong in the podcast-service: getPodcastByProjectId",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function deletePodcast(id){
    try {
        const response = await podcastepo.delete({_id:id});
        return response;
    } catch (error) {
        console.log(error)
        throw new AppErrors("Something went wrong in the podcast-service: deletePodcast",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


module.exports={
    createPodcast,
    getPodcastByProjectId,
    deletePodcast
}