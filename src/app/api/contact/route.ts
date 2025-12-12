import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const recipientEmail = process.env.CONTACT_FORM_EMAIL || 'zalajaydeep3110@gmail.com';

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

    // Send email using Resend SDK
    if (process.env.RESEND_API_KEY) {
      const { data, error } = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>', // Use your verified domain in production
        to: [recipientEmail],
        replyTo: email, // Allow replying directly to the sender
        subject: emailSubject,
        text: emailBody,
        html: emailHtml,
      });

      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
          { error: error.message || 'Failed to send email' },
          { status: 500 }
        );
      }

      console.log('Email sent successfully:', data);
    } else {
      // Fallback: Log to console (for development)
      console.log('=== CONTACT FORM SUBMISSION ===');
      console.log('To:', recipientEmail);
      console.log('Subject:', emailSubject);
      console.log('Body:', emailBody);
      console.log('==============================');
    }

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
