const { StatusCodes } = require('http-status-codes');
const {ProjectRepository}=require('../repositories');
const AppErrors = require('../utils/error/app-errors');
const { default: mongoose } = require('mongoose');

const projectRepo = new ProjectRepository();


async function createProjects(data){
    try {
        const response = await projectRepo.create(data);
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
       throw new AppErrors('Duplicate project name found. Please enter unique name', StatusCodes.CONFLICT);
       }
      
       
        throw new AppErrors("Something went wrong in the project-service: createProject", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getProjects(){
    try {
        const response = await projectRepo.getAll();
        return response;
    } catch (error) {
        
        throw new AppErrors("Something went wrong in the project-service: getProjects",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports={
    createProjects,
    getProjects
}