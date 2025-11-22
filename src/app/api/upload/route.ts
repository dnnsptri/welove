import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Email configuration from environment variables
const createTransporter = (): Transporter | null => {
  // If SMTP is configured, use it
  if (process.env.SMTP_HOST && process.env.SMTP_PORT) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // Otherwise, use Gmail (requires app password) or other default
  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  }

  // Fallback: Use Ethereal Email for testing (creates a test account automatically)
  // This will only work if nodemailer.createTestAccount() is called, which we'll do as fallback
  return null;
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('files');
    
    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'Geen bestanden ontvangen' },
        { status: 400 }
      );
    }

    // Validate file types
    const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const validFiles: File[] = [];
    const fileNames: string[] = [];
    
    for (const file of files) {
      if (file instanceof File) {
        if (!allowedTypes.includes(file.type)) {
          return NextResponse.json(
            { error: 'Een of meer bestanden hebben een ongeldig bestandstype' },
            { status: 400 }
          );
        }
        validFiles.push(file);
        fileNames.push(file.name);
      }
    }

    if (validFiles.length === 0) {
      return NextResponse.json(
        { error: 'Geen geldige bestanden ontvangen' },
        { status: 400 }
      );
    }

    // Create email transporter
    let transporter = createTransporter();

    // If no transporter, use test account for development
    if (!transporter) {
      console.warn('No email configuration found. Using test account. Set SMTP_* or GMAIL_* environment variables for production.');
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    // Prepare attachments
    const attachments = await Promise.all(
      validFiles.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        return {
          filename: file.name,
          content: buffer,
          contentType: file.type || undefined,
        };
      })
    );

    // Email options
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.GMAIL_USER || 'noreply@welovecarinsurance.nl',
      to: 'polis@welovecarinsurance.nl',
      subject: `Nieuwe polis upload: ${fileNames.join(', ')}`,
      text: `Er zijn ${validFiles.length} bestand(en) geüpload:\n\n${fileNames.map((name, idx) => `${idx + 1}. ${name}`).join('\n')}\n\nUpload tijd: ${new Date().toLocaleString('nl-NL')}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #3CB2D0;">Nieuwe polis upload</h2>
          <p>Er zijn <strong>${validFiles.length}</strong> bestand(en) geüpload:</p>
          <ul>
            ${fileNames.map((name) => `<li>${name}</li>`).join('')}
          </ul>
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
            Upload tijd: ${new Date().toLocaleString('nl-NL')}
          </p>
        </div>
      `,
      attachments,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    // Log test account info if using Ethereal
    if (!process.env.SMTP_HOST && !process.env.GMAIL_USER) {
      console.log('Test email sent. Preview URL: ', nodemailer.getTestMessageUrl(info));
    }

    return NextResponse.json({
      success: true,
      message: 'Bestanden succesvol verzonden naar polis@welovecarinsurance.nl',
      files: fileNames,
    });
  } catch (error) {
    console.error('Upload error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Onbekende fout';
    return NextResponse.json(
      { error: `Er is een fout opgetreden bij het verzenden van de bestanden: ${errorMessage}` },
      { status: 500 }
    );
  }
}

