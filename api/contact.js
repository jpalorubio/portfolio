import nodemailer from 'nodemailer';

export default async function handler(req, res) {

  console.log("METHOD:", req.method);

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: subject || 'Nuevo mensaje',
      text: `
Nombre: ${name}
Email: ${email}

Mensaje:
${message}
      `
    });

    return res.status(200).json({ ok: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false });
  }
}
