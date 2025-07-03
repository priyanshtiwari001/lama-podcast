const CrudRepository = require('./crud-repository');
const {UserModel} = require('../models');

class UserRepository extends CrudRepository{
    constructor(){
        super(UserModel);
    }

    async getUserByEmail(data){
        try {
            const email = await UserModel.findOne({email:data}).exec();
            return email;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports=UserRepository;