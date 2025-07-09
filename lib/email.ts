// Email service configuration using Resend
let resend: any = null

try {
  const { Resend } = require('resend')
  resend = new Resend(process.env.RESEND_API_KEY)
} catch (error) {
  console.warn('Resend not available. Using development mode.')
}

// Send contact form message to church email
export async function sendEmail(data: { name: string; email: string; message: string }) {
  if (!resend || !process.env.RESEND_API_KEY) {
    // Development mode
    console.log('Contact form submission:', {
      from: data.email,
      name: data.name,
      message: data.message,
      timestamp: new Date().toISOString(),
    })
    await new Promise(resolve => setTimeout(resolve, 1000))
    return true
  }

  try {
    // Send to church email
    const { data: result, error } = await resend.emails.send({
      from: 'JSL Church <noreply@yourdomain.com>',
      to: [process.env.CHURCH_EMAIL || 'your-church-email@example.com'],
      subject: `New Contact Form Message from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #1e40af;">${data.message}</p>
          </div>
          <p style="color: #64748b; font-size: 14px;">This message was sent from the JSL Church website contact form.</p>
        </div>
      `,
    })

    if (error) {
      console.error('Email error:', error)
      return false
    }

    // Send auto-reply to the person who submitted the form
    await sendAutoReply(data.email, data.name)

    return true
  } catch (error) {
    console.error('Email sending failed:', error)
    return false
  }
}

// Send auto-reply to contact form submitter
async function sendAutoReply(email: string, name: string) {
  if (!resend || !process.env.RESEND_API_KEY) {
    return // Skip in development mode
  }

  try {
    const { error } = await resend.emails.send({
      from: 'JSL Church <noreply@yourdomain.com>',
      to: [email],
      subject: 'Thank you for contacting JSL Church',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Thank you for contacting us!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to Jesus the Spring of Life International Church. We have received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Service Times</h3>
            <ul style="list-style: none; padding: 0;">
              <li>🕐 Sunday Morning: 10:00 AM - 01:30 PM</li>
              <li>🕐 Monday Morning: 9:00 AM - 12:00 PM</li>
              <li>🕐 Tuesday Morning: 10:00 AM - 5:00 PM</li>
              <li>🕐 Thursday Evening: 05:00 PM - 08:30 PM</li>
            </ul>
          </div>
          <p>In the meantime, you can:</p>
          <ul>
            <li>📺 Watch our latest sermons on <a href="https://www.youtube.com/@pastorzenebechgessessejsltvwor" style="color: #1e40af;">YouTube</a></li>
            <li>📱 Follow us on <a href="https://t.me/JSLCHURCHOFFICIALCHANNEL" style="color: #1e40af;">Telegram</a></li>
            <li>📘 Connect with us on <a href="https://www.facebook.com/JSLTVWORLDWIDE" style="color: #1e40af;">Facebook</a></li>
          </ul>
          <p>God bless you,<br>The JSL Church Team</p>
        </div>
      `,
    })

    if (error) {
      console.error('Auto-reply error:', error)
    }
  } catch (error) {
    console.error('Auto-reply sending failed:', error)
  }
}

// Newsletter subscription with welcome email
export async function subscribeToNewsletter(email: string) {
  if (!resend || !process.env.RESEND_API_KEY) {
    // Development mode
    console.log('Newsletter subscription:', {
      email,
      timestamp: new Date().toISOString(),
    })
    await new Promise(resolve => setTimeout(resolve, 500))
    return true
  }

  try {
    // Send welcome email to subscriber
    const { error } = await resend.emails.send({
      from: 'JSL Church <noreply@yourdomain.com>',
      to: [email],
      subject: 'Welcome to JSL Church Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Welcome to JSL Church Newsletter!</h2>
          <p>Thank you for subscribing to our newsletter! You'll now receive updates about:</p>
          <ul>
            <li>📖 Weekly sermon announcements</li>
            <li>📅 Upcoming church events</li>
            <li>🙏 Prayer requests and testimonies</li>
            <li>🎵 Worship highlights</li>
            <li>👥 Community updates</li>
          </ul>
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">This Week's Schedule</h3>
            <ul style="list-style: none; padding: 0;">
              <li>🕐 Sunday Morning: 10:00 AM - 01:30 PM</li>
              <li>🕐 Monday Morning: 9:00 AM - 12:00 PM</li>
              <li>🕐 Tuesday Morning: 10:00 AM - 5:00 PM</li>
              <li>🕐 Thursday Evening: 05:00 PM - 08:30 PM</li>
            </ul>
          </div>
          <p>Stay connected with us:</p>
          <ul>
            <li>📺 <a href="https://www.youtube.com/@pastorzenebechgessessejsltvwor" style="color: #1e40af;">YouTube Channel</a></li>
            <li>📱 <a href="https://t.me/JSLCHURCHOFFICIALCHANNEL" style="color: #1e40af;">Telegram Channel</a></li>
            <li>📘 <a href="https://www.facebook.com/JSLTVWORLDWIDE" style="color: #1e40af;">Facebook Page</a></li>
          </ul>
          <p>God bless you,<br>The JSL Church Team</p>
        </div>
      `,
    })

    if (error) {
      console.error('Newsletter welcome email error:', error)
      return false
    }

    // Store subscriber in database (optional - you can add this later)
    // await saveSubscriberToDatabase(email)

    return true
  } catch (error) {
    console.error('Newsletter subscription failed:', error)
    return false
  }
} 