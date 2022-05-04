const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name:{
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model('user', UserSchema);

UserSchema.pre(
    'save',
    async (next)=> {
      const user = this;
      const hash = await bcrypt.hash(this.password, 10);
  
      this.password = hash;
      next();
    }
  );
  UserSchema.methods.isValidPassword = async (password)=>{
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
  
    return compare;
  }  


module.exports = UserModel;
