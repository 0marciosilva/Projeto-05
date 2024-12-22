Touchnetlify/functions/enviar-email.js

const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    // Parse the incoming data (the form data sent by the user)
    const { Nome, E_mail, Msg } = JSON.parse(event.body);

    // Configure your email transport (replace with your credentials)
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Use Gmail or another email service
      auth: {
        user: 'marciodacosta.sp@gmail.com',  // Substitua com seu e-mail
        pass: '0S&ilv@0302',  // Substitua com sua senha ou senha de app (se for Gmail)
      },
    });

    const mailOptions = {
      from: E_mail,
      to: 'marciodacosta.sp@gmail.com',  // O e-mail para onde o formulário será enviado
      subject: 'Novo Formulário de Contato',
      text: `Nome: ${Nome}\nE-mail: ${E_mail}\nMensagem: ${Msg}`,
    };

    try {
      // Envia o e-mail usando o Nodemailer
      await transporter.sendMail(mailOptions);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Mensagem enviada com sucesso!' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Erro ao enviar a mensagem.' }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'Método não permitido' }),
  };
};
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    // Parse the incoming data (the form data sent by the user)
    const { Nome, E_mail, Msg } = JSON.parse(event.body);

    // Configure your email transport (replace with your credentials)
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Use Gmail or another email service
      auth: {
        user: 'seuemail@gmail.com',  // Substitua com seu e-mail
        pass: 'suasenha',  // Substitua com sua senha ou senha de app (se for Gmail)
      },
    });

    const mailOptions = {
      from: E_mail,
      to: 'seuemail@gmail.com',  // O e-mail para onde o formulário será enviado
      subject: 'Novo Formulário de Contato',
      text: `Nome: ${Nome}\nE-mail: ${E_mail}\nMensagem: ${Msg}`,
    };

    try {
      // Envia o e-mail usando o Nodemailer
      await transporter.sendMail(mailOptions);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Mensagem enviada com sucesso!' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Erro ao enviar a mensagem.' }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'Método não permitido' }),
  };
};
