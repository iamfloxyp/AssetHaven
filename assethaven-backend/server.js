const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const Contact = require("./models/contact");
const ScamTracing = require("./models/scamTracing");
const sendEmail = require("./sendEmail"); // Import sendEmail function

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Contact Form Submission Route
app.post("/api/contact", async (req, res) => {
  try {
    const formData = req.body;

    // ✅ Store in MongoDB
    const newContact = new Contact(formData);
    await newContact.save();

    // ✅ Send Email using Resend
    await sendEmail(formData, "New Contact Form Submission");

    res.status(201).json({ message: "✅ Contact Form submitted successfully!" });

  } catch (error) {
    console.error("❌ Error submitting form:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Scam Tracing Form Submission Route
app.post("/api/scam-tracing", async (req, res) => {
  try {
    const formData = req.body;

    // ✅ Store in MongoDB
    const newScamReport = new ScamTracing(formData);
    await newScamReport.save();

    // ✅ Send Email using Resend
    await sendEmail(formData, "New Scam Tracing Submission");

    res.status(201).json({ message: "✅ Scam tracing form submitted successfully!" });

  } catch (error) {
    console.error("❌ Error submitting scam tracing form:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));