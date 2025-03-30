# EmailJS Setup for Contact Form

This document provides instructions for setting up the contact form in your portfolio website to send emails using EmailJS.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for an account.
2. Verify your email address.

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services" and click "Add New Service".
2. Choose an email service provider (like Gmail, Outlook, or custom SMTP).
3. Follow the instructions to connect your email account.
4. Once connected, note down the **Service ID**.

## Step 3: Create an Email Template

1. Go to "Email Templates" and click "Create New Template".
2. Design your email template. Make sure to include the following variables:
   - `{{from_name}}` - The name of the person sending the message
   - `{{from_email}}` - The email address of the person sending the message
   - `{{subject}}` - The subject of the message
   - `{{message}}` - The message content
3. Save the template and note down the **Template ID**.

## Step 4: Get Your Public Key

1. Go to "Account" > "API Keys".
2. Note down your **Public Key**.

## Step 5: Update Config File

1. Open the file `src/config/emailjs.js` in your project.
2. Update the values with your EmailJS credentials:

```javascript
const emailjsConfig = {
    serviceId: 'YOUR_SERVICE_ID',      // Replace with your Service ID
    templateId: 'YOUR_TEMPLATE_ID',    // Replace with your Template ID
    publicKey: 'YOUR_PUBLIC_KEY',      // Replace with your Public Key
};
```

## Testing the Contact Form

1. After updating the configuration, test the contact form by filling out all fields and submitting.
2. Check that you receive the email at the address associated with your EmailJS service.
3. Check the browser console for any error messages if emails are not being sent.

## Troubleshooting

- Ensure all your EmailJS credentials are correct.
- Make sure your email template variables match the ones sent in the code.
- Check if your EmailJS account has any sending limitations (free accounts have monthly limits).
- Verify that your emailjs package is properly installed (`npm install @emailjs/browser`). 