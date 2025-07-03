const { ProjectModel } = require("../models");
const CrudRepository = require("./crud-repository");

class ProjectRepository extends CrudRepository {

    constructor(){
        super(ProjectModel)
    }
}

module.exports = ProjectRepository;