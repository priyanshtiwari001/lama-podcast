const {ProjectService} = require('../services');
const {StatusCodes} = require('http-status-codes')
const {SuccessResponse,ErrorResponse} = require('../utils/common');


async function createProjects(req,res){
    try {
        const project = await ProjectService.createProjects({
            projectname:req.body.projectname
        })
        SuccessResponse.data = project;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
         ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


async function getAllProjects(req,res){
    try{
        const response = await ProjectService.getProjects();
        SuccessResponse.data=response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(error){
         ErrorResponse.error=error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}

module.exports={
    createProjects,
    getAllProjects
}