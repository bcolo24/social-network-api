// Importing the required dependencies from the mongoose library
const { Schema, model } = require('mongoose'); 

// Defining the User schema with the required fields and their respective data types
const userSchema = new Schema(
  {
    // Define the 'username' field with the following properties:
    username: {
      type: String,     
      required: true,   
      unique: true,     
      trim: true,       
    },
     
    // Define the 'email' field with the following properties:
    email: {
      type: String,     
      required: true,   
      unique: true,     
      match: [       
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please use a valid email address",
      ],
    },

    // Define the 'friends' field as an array of ObjectIds referencing the 'User' model
    friends: [
      {
        type: Schema.Types.ObjectId,  
        ref: 'User',                   
      }
    ],

    // Define the 'thoughts' field as an array of ObjectIds referencing the 'Thought' model
    thoughts: [
      {
        type: Schema.Types.ObjectId,  
        ref: 'Thought',       
      }
    ],
  },
  {
    // Define options for schema configuration
    toJSON: {
      virtuals: true, 
    },
    id: false,        
  }
);

// Defining a virtual property 'friendCount' which returns the number of friends in the friends array
userSchema.virtual('friendCount').get(function(){
  return this.friends.length;
});

// Creating the User model from the userSchema
const User = model('User', userSchema);

// Exporting the User model for use in other parts of the application
module.exports = User;