document.getElementById('contato-form').addEventListener('submit', async (event) => {
    event.preventDefault();  // Impede o envio padrão do formulário
  
    const formData = {
      Nome: document.getElementById('nome').value,
      E_mail: document.getElementById('email').value,
      Msg: document.getElementById('mensagem').value,
    };
  
    try {
      const response = await fetch('/.netlify/functions/enviar-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.status === 200) {
        alert(data.message);  // Exibe mensagem de sucesso
      } else {
        alert('Erro ao enviar a mensagem.');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao enviar a mensagem.');
    }
  });
  