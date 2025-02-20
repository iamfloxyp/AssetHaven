const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData, subject) => {
  try {
    console.log("📩 Email Data Being Sent:", formData.message);  

    const response = await resend.emails.send({
      from: "onboarding@resend.dev", 
      to: "maneyflorence@gmail.com",
      subject: subject,
      text: `
      📌 New Form Submission:

      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Country: ${formData.country}
      Recovery Type: ${formData.recoveryType || "N/A"}
      Wallet Type: ${formData.walletType || "N/A"}
      Wallet Value: ${formData.walletValue || "N/A"}
      Message: ${formData.message ? formData.message.replace(/\n/g, "<br>") : "No message provided"}
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