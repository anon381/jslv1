# Resend Email Setup Guide for JSL Church

## 🎯 Why Resend is Perfect for Your Needs

✅ **Receives emails** - Contact form messages sent to your church email  
✅ **Sends auto-replies** - Immediate response to contact form submitters  
✅ **Newsletter welcome emails** - Instant welcome message to new subscribers  
✅ **Scheduled emails** - Can send weekly/monthly newsletters  
✅ **Easy setup** - Perfect for Next.js applications  
✅ **Free tier** - 3,000 emails/month free  

## 🚀 Quick Setup (5 minutes)

### Step 1: Sign up for Resend
1. Go to [resend.com](https://resend.com)
2. Click "Get Started" 
3. Sign up with your email (use your church email address)
4. Verify your email address

### Step 2: Get Your API Key
1. After signing in, go to the **API Keys** section
2. Click **"Create API Key"**
3. Name it "JSL Church Website"
4. Copy the API key (starts with `re_`)

### Step 3: Add Environment Variables
Create a file called `.env.local` in your project root:

```env
RESEND_API_KEY=re_your_api_key_here
CHURCH_EMAIL=your-church-email@example.com
```

### Step 4: Verify Your Domain (Optional but Recommended)
1. In Resend dashboard, go to **Domains**
2. Add your domain (e.g., `yourdomain.com`)
3. Follow the DNS setup instructions
4. Update the `from` email in `lib/email.ts` to use your domain

## 📧 How It Works

### Contact Form Flow:
1. **User submits form** → Form data sent to `/api/contact`
2. **Email sent to church** → Your church email receives the message
3. **Auto-reply sent** → User gets immediate "Thank you" email with service times

### Newsletter Flow:
1. **User subscribes** → Email sent to `/api/newsletter`
2. **Welcome email sent** → User gets immediate welcome message with church info

## 🎨 Email Templates

### Contact Form Email (to church):
- **Subject**: "New Contact Form Message from [Name]"
- **Content**: Form details in a professional layout
- **Recipient**: Your church email address

### Auto-Reply Email (to user):
- **Subject**: "Thank you for contacting JSL Church"
- **Content**: Thank you message + service times + social links
- **Recipient**: The person who submitted the form

### Newsletter Welcome Email:
- **Subject**: "Welcome to JSL Church Newsletter!"
- **Content**: Welcome message + church schedule + social links
- **Recipient**: New newsletter subscriber

## 🔧 Customization Options

### Change Email Templates
Edit the HTML in `lib/email.ts` to customize:
- Colors and styling
- Church information
- Service times
- Social media links

### Add More Email Types
You can easily add:
- Weekly sermon announcements
- Event reminders
- Prayer request notifications
- Monthly newsletters

### Schedule Emails
For scheduled emails (weekly newsletters), you can:
1. Use a cron job or scheduler
2. Create a new API route for bulk emails
3. Use Resend's scheduling features

## 🧪 Testing

### Test in Development:
1. Start your server: `npm run dev`
2. Fill out the contact form
3. Check browser console for logged data
4. Verify toast notifications appear

### Test in Production:
1. Set up your Resend API key
2. Submit a test contact form
3. Check your church email inbox
4. Check the sender's email for auto-reply

## 📊 Monitoring

### Resend Dashboard:
- Track email delivery rates
- Monitor bounce rates
- View email analytics
- Check API usage

### Logs:
- Check server logs for errors
- Monitor email sending status
- Track form submissions

## 🔒 Security & Best Practices

### Environment Variables:
- Never commit API keys to git
- Use `.env.local` for local development
- Use environment variables in production

### Rate Limiting:
- Consider adding rate limiting to prevent spam
- Monitor for unusual activity
- Set up alerts for high usage

### Email Validation:
- All emails are validated before sending
- Invalid emails are rejected
- Error handling for failed sends

## 🚨 Troubleshooting

### Common Issues:

**"Cannot find module 'resend'"**
```bash
npm install resend
```

**"API key not found"**
- Check your `.env.local` file
- Restart your development server
- Verify the API key is correct

**"Emails not sending"**
- Check Resend dashboard for errors
- Verify domain verification (if using custom domain)
- Check API key permissions

**"Auto-reply not working"**
- Check if `sendAutoReply` function is being called
- Verify email templates are correct
- Check for JavaScript errors

## 📈 Next Steps

### Immediate:
1. Set up Resend account
2. Add API key to environment variables
3. Test contact form
4. Test newsletter subscription

### Future Enhancements:
1. Add database storage for submissions
2. Implement weekly newsletter automation
3. Add email templates for different events
4. Set up email analytics tracking

## 💰 Pricing

**Free Tier:**
- 3,000 emails/month
- Perfect for most churches
- No credit card required

**Paid Plans:**
- $20/month for 50,000 emails
- $50/month for 150,000 emails
- Pay-as-you-go available

## 🆘 Support

**Resend Support:**
- Email: support@resend.com
- Documentation: [resend.com/docs](https://resend.com/docs)
- Community: [resend.com/community](https://resend.com/community)

**Your Setup:**
- Check this guide for common issues
- Review server logs for errors
- Test with development mode first

---

## ✅ Checklist

- [ ] Sign up for Resend account
- [ ] Get API key
- [ ] Create `.env.local` file
- [ ] Add API key to environment variables
- [ ] Test contact form
- [ ] Test newsletter subscription
- [ ] Check email delivery
- [ ] Customize email templates (optional)
- [ ] Set up domain verification (optional)
- [ ] Monitor email analytics

Your email system is now ready for production! 🎉 