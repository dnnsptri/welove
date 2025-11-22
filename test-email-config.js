// Test script to verify email configuration
require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

console.log('Testing email configuration...\n');

// Check environment variables
console.log('Environment variables:');
console.log('SMTP_HOST:', process.env.SMTP_HOST || 'NOT SET');
console.log('SMTP_PORT:', process.env.SMTP_PORT || 'NOT SET');
console.log('SMTP_USER:', process.env.SMTP_USER || 'NOT SET');
console.log('SMTP_PASS:', process.env.SMTP_PASS ? '***SET***' : 'NOT SET');
console.log('SMTP_FROM:', process.env.SMTP_FROM || 'NOT SET');
console.log('');

if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
  console.error('❌ Missing required SMTP configuration variables!');
  console.log('\nPlease ensure .env.local contains:');
  console.log('- SMTP_HOST');
  console.log('- SMTP_PORT');
  console.log('- SMTP_USER');
  console.log('- SMTP_PASS');
  process.exit(1);
}

// Create transporter
try {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  console.log('✅ Transporter created successfully');
  console.log('Testing SMTP connection...\n');

  // Verify SMTP connection
  transporter.verify((error, success) => {
    if (error) {
      console.error('❌ SMTP connection failed:', error.message);
      console.error('\nCommon issues:');
      console.error('- Check if password is correct');
      console.error('- Verify SMTP server address');
      console.error('- Check if port is correct (587 for STARTTLS)');
      console.error('- Ensure firewall allows SMTP connections');
      process.exit(1);
    } else {
      console.log('✅ SMTP connection successful!');
      console.log('\nConfiguration is ready to send emails to: polis@welovecarinsurance.nl');
      
      // Optionally send a test email
      const sendTest = process.argv.includes('--send-test');
      if (sendTest) {
        console.log('\nSending test email...');
        transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: 'polis@welovecarinsurance.nl',
          subject: 'Test email from WeLoveCarInsurance',
          text: 'This is a test email to verify the configuration.',
          html: '<p>This is a <strong>test email</strong> to verify the configuration.</p>',
        }).then((info) => {
          console.log('✅ Test email sent successfully!');
          console.log('Message ID:', info.messageId);
          process.exit(0);
        }).catch((err) => {
          console.error('❌ Failed to send test email:', err.message);
          process.exit(1);
        });
      } else {
        console.log('\nTo send a test email, run: node test-email-config.js --send-test');
        process.exit(0);
      }
    }
  });
} catch (error) {
  console.error('❌ Error creating transporter:', error.message);
  process.exit(1);
}

