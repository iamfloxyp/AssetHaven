require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Contact = require("./models/contact");
const ScamTracing = require("./models/scamTracing");
const sendEmail = require("./sendEmail");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const countryPhoneLengths = {
  "United States": 10,
  "United Kingdom": 10,
  "Canada": 10,
  "Australia": 9,
  "Germany": 11,
  "France": 9,
  "India": 10,
  "Nigeria": 11, // ✅ Nigeria allows 11 digits
  "South Africa": 9,
  "China": 11,
  "Japan": 10,
  "Brazil": 11,
  "Mexico": 10,
  "Russia": 10,
  "United Arab Emirates": 9,
  "Italy": 10,
  "Netherlands": 9,
  "Switzerland": 10,
  "Sweden": 9,
  "Singapore": 8,
  "Other": 10,
};

/**
 * ✅ Contact Form Submission Route
 */
app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, country, phone, email, recoveryType, walletType, message } = req.body;

    console.log("📩 Received Contact Form Data:", req.body);

    // ✅ Validate message field
    if (!message || message.trim() === "") {
      console.log("❌ Message field is empty or undefined");
      return res.status(400).json({ error: "Message field cannot be empty" });
    }

    // ✅ Validate email
    if (!email || !email.includes("@")) {
      console.error("❌ Invalid email format detected:", email);
      return res.status(400).json({ error: "Invalid email format" });
    }

    // ✅ Validate phone number length
    const expectedLength = countryPhoneLengths[country] || 10;
    if (phone.replace(/\D/g, "").length > expectedLength) {
      console.error(`❌ Phone number exceeds max length for ${country}`);
      return res.status(400).json({ error: `Phone number exceeds max length for ${country}` });
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
    console.log("✅ Saved to MongoDB");

    // ✅ Format the email message properly
    const emailMessage = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Recovery Type:</strong> ${recoveryType || "N/A"}</p>
      <p><strong>Wallet Type:</strong> ${walletType || "N/A"}</p>
      <p><strong>Message:</strong> ${message ? message.replace(/\n/g, "<br>") : "No message provided"}</p>
    `;

    await sendEmail(req.body, "New Contact Form Submission", emailMessage);
    res.status(201).json({ message: "✅ Contact Form submitted successfully!" });

  } catch (error) {
    console.error("❌ Error submitting contact form:", error);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * ✅ Scam Tracing Form Submission Route
 */
app.post("/api/scam-tracing", async (req, res) => {
  try {
    const { firstName, lastName, country, phone, email, lostAmount, message } = req.body;

    console.log("📩 Scam Tracing Email Data:", {
      firstName, lastName, email, phone, country, lostAmount, message
    });

    // ✅ Validate email
    if (!email || !email.includes("@")) {
      console.error("❌ Invalid email format detected:", email);
      return res.status(400).json({ error: "Invalid email format" });
    }

    // ✅ Validate phone number length
    const expectedLength = countryPhoneLengths[country] || 10;
    if (phone.replace(/\D/g, "").length > expectedLength) {
      console.error(`❌ Phone number exceeds max length for ${country}`);
      return res.status(400).json({ error: `Phone number exceeds max length for ${country}` });
    }

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
    console.log("✅ Scam tracing report saved to MongoDB");

    // ✅ Format email properly
    const emailMessage = `
      <h2>New Scam Tracing Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Estimated Loss (USD):</strong> ${lostAmount}</p>
      <p><strong>Message:</strong> ${message ? message.replace(/\n/g, "<br>") : "No additional info provided"}</p>
    `;

    await sendEmail(
      { firstName, lastName, email, phone, country, lostAmount, message },
      "New Scam Tracing Submission"
    );

    res.status(201).json({ message: "✅ Scam Tracing form submitted successfully!" });

  } catch (error) {
    console.error("❌ Error submitting scam tracing form:", error);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));