const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  country: String,
  recoveryType: String,
  walletType: String,
  walletValue: Number,
  message:{type:String, required:true} ,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;