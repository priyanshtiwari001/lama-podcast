const {Schema } = require('mongoose');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 12;

const userSchema = new Schema({
    email: {
        type:String,
        unique:true,
        required:true,
        validate: {
            validator: function (v) {
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message:'Invalid email format'
    },
},
    password:{
        type:String,
        required: [true, 'Password is required'],
        minlength: [5, 'Password must be at least 5 characters'],
    }
})

// Encrypt the password before saving to the database
userSchema.pre('save', async function encrypt(){ 
    this.password = await bcrypt.hashSync(this.password,saltRounds);
  })

const User = new mongoose.model('User',userSchema);



module.exports= User;