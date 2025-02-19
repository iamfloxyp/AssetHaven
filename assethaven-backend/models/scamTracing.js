const mongoose = require("mongoose");

const scamTracingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  country: String,
  lostAmount: Number,
  message:{type:String, required:true} ,

  date: { type: Date, default: Date.now },
});

const ScamTracing = mongoose.model("ScamTracing", scamTracingSchema);
module.exports = ScamTracing;