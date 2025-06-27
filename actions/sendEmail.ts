"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
const brevo = require("@getbrevo/brevo");

let apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY || "");

let sendSmtpEmail = new brevo.SendSmtpEmail();

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  
  try {
    sendSmtpEmail.subject = "Connect from " + senderEmail;
    sendSmtpEmail.htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .container {
            max-width: 600px;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          .header {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
          }
          .content {
            font-size: 16px;
            color: #555;
            line-height: 1.5;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">Email from: ${senderEmail}</div>
          <div class="content">${message}</div>
        </div>
      </body>
    </html>
  `;

    sendSmtpEmail.sender = {
      name: "Portfolio",
      email: "phule.portfolio@apphub.com",
    };
    sendSmtpEmail.to = [{ email: "haodp.sut@gmail.com", name: "Phuc Hao Do" }];
    sendSmtpEmail.replyTo = {
      email: "haodp.sut@gmail.com",
      name: "Phuc Hao Do",
    };
    sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-" + Date.now() };
    sendSmtpEmail.params = { placeholder: "default" };

    return apiInstance.sendTransacEmail(sendSmtpEmail).then(
      function (data: any) {
        console.log(
          "API called successfully. Returned data: " + JSON.stringify(data)
        );
        return {
          data,
        };
      },
      function (error: any) {
        console.error(error);
        return {
          error: getErrorMessage(error),
        };
      }
    );
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
