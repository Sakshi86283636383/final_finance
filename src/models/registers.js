const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  business: {
    type: String,
    required: true,
    // enum: ['Health', 'Stock', 'Real state'],
  }
});

// Create the model from the schema
const Contact = new mongoose.model('Querry', contactSchema);

module.exports = Contact;

// console.log(`schema set`);
