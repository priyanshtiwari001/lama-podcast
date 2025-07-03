const moongoose = require('mongoose');
const {Schema,model} = moongoose;

const projectSchema = new Schema(
  {
    projectname: {
      type: String,
      required: true,
      unique: true,
      maxlength: 100,
      trim: true,
    },
  },
  { timestamps: true } 
);
const Project =  model('Project',projectSchema)

module.exports = Project;