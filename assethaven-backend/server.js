require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const Contact = require("./models/contact");
const ScamTracing = require("./models/scamTracing");
const sendEmail = require("./sendEmail");

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, country, phone, email, recoveryType, walletType, message } = req.body;


    console.log("Received Contact Form Data:", req.body);
    console.log("email data sent", {
      firstName, phone,email,message
    })

    if (!message || message.trim() === "") {
      console.log(" message filed is empty or undefined")
      return res.status(400).json({ error: "Message field cannot be empty" });
    }


    const newContact = new Contact({
      firstName,
      lastName,
      country,
      phone,
      email,
      recoveryType,
      walletType,
      message,
    });

    await newContact.save();
    console.log(' saved to mongodb')

    
    const emailMessage = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Recovery Type:</strong> ${recoveryType}</p>
      <p><strong>Wallet Type:</strong> ${walletType}</p>
      <p><strong>Message:</strong> ${message ? message :"No message provided"}</p>  <!-- ✅ Now message is guaranteed to be included -->
    `;

    
    await sendEmail(email, "New Contact Form Submission", emailMessage);

    res.status(201).json({ message: "✅ Contact Form submitted successfully!" });

  } catch (error) {
    console.error("❌ Error submitting contact form:", error);
    res.status(500).json({ error: "Server error" });
  }
});


app.post("/api/scam-tracing", async (req, res) => {
  try {
    const { firstName, lastName, country, phone, email, lostAmount, message } = req.body;

    
    console.log("Received Scam Tracing Data:", req.body);

    // ✅ Store in MongoDB
    const newScamReport = new ScamTracing({
      firstName,
      lastName,
      country,
      phone,
      email,
      lostAmount,
      message: message || "No additional info provided",
    });

    await newScamReport.save();

    
    const emailMessage = `
      <h2>New Scam Tracing Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Estimated Loss (USD):</strong> ${lostAmount}</p>
      <p><strong>Additional Info:</strong> ${additionalInfo || "No additional info provided"}</p>
    `;

    
    await sendEmail(email, "New Scam Tracing Submission", emailMessage);

    res.status(201).json({ message: "✅ Scam tracing form submitted successfully!" });

  } catch (error) {
    console.error("❌ Error submitting scam tracing form:", error);
    res.status(500).json({ error: "Server error" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));