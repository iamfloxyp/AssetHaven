const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData, subject) => {
  try {
    console.log("📩 Email Data Being Sent:", formData); // Debugging

    if (!formData || !formData.email) {
      console.error("❌ No valid email data provided.");
      return;
    }

    const emailBody = `
      📌 New Form Submission:
      
      Name: ${formData.firstName || "N/A"} ${formData.lastName || "N/A"}
      Email: ${formData.email || "N/A"}
      Phone: ${formData.phone || "N/A"}
      Country: ${formData.country || "N/A"}
      Recovery Type: ${formData.recoveryType || "N/A"}
      Wallet Type: ${formData.walletType || "N/A"}
      Wallet Value: ${formData.walletValue || "N/A"}
      Message: ${formData.message ? formData.message.replace(/\n/g, "<br>") : "No message provided"}
    `;

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@assethaven-sec.com",
      subject: subject,
      html: emailBody, // ✅ Changed text to html to properly format the email
    });

    console.log("✅ Email sent successfully!", response);
    return response;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
};

module.exports = sendEmail;