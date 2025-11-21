# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to enable email functionality in your portfolio's contact form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. After logging in, go to the "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps to connect your email
5. Give your service a descriptive name (e.g., "Portfolio Contact")
6. Copy your **Service ID** - you'll need this later

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Set up your template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message body

Example template:

```
Subject: New Contact Form Message: {{subject}}

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save your template and copy your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** (also called API Key)
3. Copy this key

## Step 5: Update Configuration File

Open `src/config/emailConfig.js` and replace the placeholder values:

```javascript
export const emailConfig = {
    serviceId: 'service_xxxxxxx',      // Replace with your Service ID
    templateId: 'template_xxxxxxx',    // Replace with your Template ID
    publicKey: 'xxxxxxxxxxxxxxxx'      // Replace with your Public Key
};
```

## Step 6: Test Your Contact Form

1. Start your development server: `npm start`
2. Navigate to the Contact page
3. Fill out the form and click "Send Message"
4. Check your email to confirm you received the message

## Troubleshooting

### Email not sending?
- Double-check all three IDs in `emailConfig.js`
- Verify your email service is connected properly in EmailJS dashboard
- Check the browser console for error messages
- Make sure you have an active internet connection

### Rate Limiting
- Free EmailJS accounts are limited to 200 emails/month
- Emails sent too quickly may be rate-limited

### Template Variables Not Working?
- Ensure template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- Variables are case-sensitive

## Security Note

The `emailConfig.js` file contains your public key, which is safe to include in your frontend code. However, if you plan to push this to a public repository, consider:

1. Adding `emailConfig.js` to `.gitignore`
2. Creating `emailConfig.example.js` with placeholder values for documentation
3. Using environment variables for added security

## Need Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/docs/support/)
