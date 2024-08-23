// Captura o formulário e elementos de mensagem
const form = document.getElementById('signup-form') as HTMLFormElement | null;
const responseMessage = document.getElementById('response-message') as HTMLParagraphElement | null;

// Verifica se o formulário e o elemento de mensagem existem antes de adicionar o event listener
if (form && responseMessage) {
    form.addEventListener('submit', function(event: Event) {
        event.preventDefault(); // Previne o comportamento padrão de enviar o formulário

        const name = (document.getElementById('name') as HTMLInputElement | null)?.value;
        const email = (document.getElementById('email') as HTMLInputElement | null)?.value;

        // Verificação básica de preenchimento
        if (name && email) {
            // Simula o envio dos dados e exibe a mensagem de agradecimento
            setTimeout(() => {
                responseMessage.textContent = `Obrigado, ${name}! Nós entraremos em contato em breve.`;
                form.reset(); // Limpa o formulário após o envio
            }, 500); // Pequeno delay para simular uma resposta do servidor
        } else {
            responseMessage.textContent = "Por favor, preencha todos os campos.";
        }
    });
} else {
    console.error('Formulário ou elemento de mensagem não encontrados no DOM.');
}
