document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contato');
    const formFeedback = document.getElementById('form-feedback');

    // Se o formulário e o feedback element existirem na página
    if (form && formFeedback) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault(); // Previne o envio padrão do formulário (recarregamento da página)

            formFeedback.textContent = ''; // Limpa mensagens anteriores

            // Coleta os dados do formulário
            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formFeedback.textContent = 'Mensagem enviada com sucesso! Em breve entrarei em contato.';
                    formFeedback.style.color = 'green';
                    form.reset(); // Limpa os campos do formulário
                } else {
                    const data = await response.json();
                    if (data.errors) {
                        formFeedback.textContent = 'Erro no envio: ' + data.errors.map(err => err.message).join(', ');
                    } else {
                        formFeedback.textContent = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.';
                    }
                    formFeedback.style.color = 'red';
                }
            } catch (error) {
                formFeedback.textContent = 'Não foi possível conectar ao servidor. Verifique sua conexão ou tente mais tarde.';
                formFeedback.style.color = 'red';
                console.error('Erro de rede ou Formspree:', error);
            }
        });
    }
});