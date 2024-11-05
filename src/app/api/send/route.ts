import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { title, description, type } = body;
  console.log("Request body:", request.body);

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'vkakarott7@gmail.com', 
      subject: `Novo Relatório: ${type}`,
      text: `Título: ${title}\n\nDescrição:\n${description}`,
    });

    return NextResponse.json({ message: 'Email enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
    return NextResponse.json({ message: 'Erro ao enviar o email.', error }, { status: 500 });
  }
}
