# Backend Setup Guide for JSL Church Contact Forms

## Overview
This guide explains how to set up the backend functionality for the contact forms on your JSL Church website.

## What's Been Implemented

### 1. Contact Form Backend
- **API Route**: `/api/contact`
- **Features**: 
  - Form validation using Zod
  - Email sending functionality
  - Error handling
  - Success/error notifications

### 2. Newsletter Subscription Backend
- **API Route**: `/api/newsletter`
- **Features**:
  - Email validation
  - Subscription handling
  - Error handling

### 3. Frontend Integration
- **Form Handling**: Using react-hook-form with Zod validation
- **User Feedback**: Toast notifications for success/error states
- **Loading States**: Disabled buttons during submission
- **Error Display**: Real-time validation errors

## Current Setup (Development)

The forms are currently set up for development with:
- Console logging of form submissions
- Simulated email sending delays
- No actual email sending (for safety)

## Production Setup

### Option 1: Resend (Recommended for Next.js)

1. **Install Resend**:
   ```bash
   npm install resend
   ```

2. **Get API Key**:
   - Sign up at [resend.com](https://resend.com)
   - Get your API key from the dashboard

3. **Configure Environment Variables**:
   Create a `.env.local` file:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CHURCH_EMAIL=jslicasko@gmail.com
   ```

4. **Update Email Service**:
   - Open `lib/email.ts`
   - Uncomment the Resend implementation
   - Comment out the current development implementation

### Option 2: SendGrid

1. **Install SendGrid**:
   ```bash
   npm install @sendgrid/mail
   ```

2. **Get API Key**:
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Get your API key from the dashboard

3. **Configure Environment Variables**:
   ```env
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   CHURCH_EMAIL=jslicasko@gmail.com
   ```

4. **Update Email Service**:
   - Open `lib/email.ts`
   - Uncomment the SendGrid implementation
   - Comment out the current development implementation

### Option 3: Nodemailer with SMTP

1. **Install Nodemailer**:
   ```bash
   npm install nodemailer
   ```

2. **Configure Environment Variables**:
   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password_here
   CHURCH_EMAIL=jslicasko@gmail.com
   ```

3. **Update Email Service**:
   - Open `lib/email.ts`
   - Uncomment the Nodemailer implementation
   - Comment out the current development implementation

## Testing the Forms

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Test Contact Form**:
   - Fill out the contact form
   - Check the browser console for logged data
   - Verify toast notifications appear

3. **Test Newsletter Subscription**:
   - Enter an email in the newsletter form
   - Check the browser console for logged data
   - Verify toast notifications appear

## Form Validation Rules

### Contact Form:
- **Name**: Minimum 2 characters
- **Email**: Valid email format
- **Message**: Minimum 10 characters

### Newsletter Form:
- **Email**: Valid email format

## Customization

### Changing Email Templates
Edit the HTML templates in `lib/email.ts` to customize the email content.

### Adding Database Storage
To store form submissions in a database:

1. **Install a database package** (e.g., Prisma, MongoDB, etc.)
2. **Create database models** for contact submissions and newsletter subscriptions
3. **Update API routes** to save data to the database
4. **Add environment variables** for database connection

### Adding Spam Protection
Consider adding:
- reCAPTCHA integration
- Rate limiting
- Honeypot fields
- Email validation services

## Security Considerations

1. **Environment Variables**: Never commit API keys to version control
2. **Input Validation**: All inputs are validated on both client and server
3. **Rate Limiting**: Consider implementing rate limiting for production
4. **CORS**: Configure CORS if needed for cross-origin requests

## Troubleshooting

### Common Issues:

1. **Forms not submitting**:
   - Check browser console for errors
   - Verify API routes are accessible
   - Check network tab for failed requests

2. **Emails not sending**:
   - Verify API keys are correct
   - Check email service configuration
   - Review email service logs

3. **Validation errors**:
   - Check form validation rules
   - Verify input formats match requirements

## Support

For issues or questions:
1. Check the browser console for error messages
2. Review the API route logs
3. Verify environment variable configuration
4. Test with the development implementation first

## Next Steps

1. Choose an email service provider
2. Set up environment variables
3. Update the email service configuration
4. Test thoroughly in development
5. Deploy to production
6. Monitor form submissions and email delivery 