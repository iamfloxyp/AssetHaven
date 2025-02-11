const { Resend } = require("resend");
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData, subject) => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // Change to your domain email once verified
      to: "maneyflorence@gmail.com", // Replace with your email
      subject: subject,
      text: `
        🔹 New Form Submission:
        
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Country: ${formData.country}
        Recovery Type: ${formData.recoveryType || "N/A"}
        Wallet Type: ${formData.walletType || "N/A"}
        Wallet Value: ${formData.walletValue || "N/A"}
      `,
    });

    console.log("✅ Email sent successfully!", response);
    return response;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
};

module.exports = sendEmail;