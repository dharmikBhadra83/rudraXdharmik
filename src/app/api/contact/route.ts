import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, ideas, agreeToTerms } = body;

    // Validation
    if (!firstName || !lastName || !email || !phone || !ideas || !agreeToTerms) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get recipient email from environment variable
    const recipientEmail = process.env.CONTACT_FORM_EMAIL;
    if (!recipientEmail) {
      return NextResponse.json(
        { error: 'CONTACT_FORM_EMAIL environment variable is not set' },
        { status: 500 }
      );
    }

    // Validate SMTP credentials
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    if (!smtpUser || !smtpPassword) {
      return NextResponse.json(
        { error: 'SMTP_USER and SMTP_PASSWORD environment variables are required' },
        { status: 500 }
      );
    }

    // Email content
    const emailSubject = `New Contact Form Submission from ${firstName} ${lastName}`;
    const emailBody = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${ideas}

---
This email was sent from the contact form on your website.
    `;

    // HTML version for better formatting
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #1a1a1a; margin-top: 0;">New Contact Form Submission</h2>
          <div style="margin-bottom: 20px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <h3 style="color: #1a1a1a; margin-top: 0;">Message:</h3>
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${ideas}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            This email was sent from the contact form on your website.
          </p>
        </div>
      </div>
    `;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', 
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Send email using Nodemailer
    // Sender is the client email (SMTP_USER), recipient is dharmik@rudrx.dev
    const mailOptions = {
      from: smtpUser, // Use SMTP_USER (dharmikbhadra8@gmail.com) as sender
      to: recipientEmail, // CONTACT_FORM_EMAIL (dharmik@rudrx.dev) as recipient
      replyTo: email, // Allow replying directly to the form submitter
      subject: emailSubject,
      text: emailBody,
      html: emailHtml,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
