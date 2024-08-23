// Captura o formulário e elementos de mensagem
var form = document.getElementById('signup-form');
var responseMessage = document.getElementById('response-message');
// Verifica se o formulário e o elemento de mensagem existem antes de adicionar o event listener
if (form && responseMessage) {
    form.addEventListener('submit', function (event) {
        var _a, _b;
        event.preventDefault(); // Previne o comportamento padrão de enviar o formulário
        console.log('Formulário enviado'); // Verifica se o evento está sendo capturado
        var name = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value;
        var email = (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value;
        // Verificação básica de preenchimento
        if (name && email) {
            // Simula o envio dos dados e exibe a mensagem de agradecimento
            setTimeout(function () {
                console.log("Dados recebidos: Nome - ".concat(name, ", Email - ").concat(email)); // Verifica se os dados estão sendo capturados corretamente
                responseMessage.textContent = "Obrigado, ".concat(name, "! N\u00F3s entraremos em contato em breve.");
                form.reset(); // Limpa o formulário após o envio
            }, 500); // Pequeno delay para simular uma resposta do servidor
        }
        else {
            responseMessage.textContent = "Por favor, preencha todos os campos.";
        }
    });
}
else {
    console.error('Formulário ou elemento de mensagem não encontrados no DOM.');
}
