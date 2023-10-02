import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required!']
  },
  lastname: {
    type: String,
    required: [true, 'Last Name is required!']
  },
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  password: {
    type: String,
    required: [true, 'Password is Required']
  },
  image: {
    type: String,
  }
},
  { timestamps: true }
);

const User = models.User || mongoose.model("User", UserSchema)

export default User;