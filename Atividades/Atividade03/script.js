// Função para retornar data e hora em tempo real
function getCurrentDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}


// Função para validar CPF
function validateCPF() {
    const cpfInput = document.getElementById('cpf');
    const cpf = cpfInput.value;
    if (validateCPFNumber(cpf)) {
        alert('CPF válido!');
    } else {
        alert('CPF inválido!');
    }
}

// Função para validar CNPJ
function validateCNPJ() {
    const cnpjInput = document.getElementById('cnpj');
    const cnpj = cnpjInput.value;
    if (validateCNPJNumber(cnpj)) {
        alert('CNPJ válido!');
    } else {
        alert('CNPJ inválido!');
    }
}

// Função para validar CPF
function validateCPFNumber(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
    if(cpf === '') return false;
    // Elimina CPFs invalidos conhecidos
    if (cpf.length !== 11 ||
        cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999') {
        return false;
    }
    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) {
        return false;
    }
    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(10))) {
        return false;
    }
    return true;
}

// Função para validar CNPJ
function validateCNPJNumber(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g,'');
    if(cnpj === '') return false;
    if (cnpj.length !== 14) return false;
    // Elimina CNPJs invalidos conhecidos
    if (cnpj === '00000000000000' ||
        cnpj === '11111111111111' ||
        cnpj === '22222222222222' ||
        cnpj === '33333333333333' ||
        cnpj === '44444444444444' ||
        cnpj === '55555555555555' ||
        cnpj === '66666666666666' ||
        cnpj === '77777777777777' ||
        cnpj === '88888888888888' ||
        cnpj === '99999999999999') {
        return false;
    }
    // Valida DVs
    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0,tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) return false;
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) return false;
    return true;
}

// Função para calcular o valor absoluto
function calculateAbsolute() {
    const numberInput = document.getElementById('number');
    const number = parseFloat(numberInput.value);
    const result = Math.abs(number);
    alert('O valor absoluto é: ' + result);
}

// Função para arredondar um número
function calculateRounded() {
    const numberInput = document.getElementById('number');
    const number = parseFloat(numberInput.value);
    const result = Math.round(number);
    alert('O número arredondado é: ' + result);
}

// Função para calcular a comissão com base em um valor de venda e uma taxa de comissão pré-definida
function calculateCommission() {
    const saleValueInput = document.getElementById('saleValue');
    const commissionRateInput = document.getElementById('commissionRate');

    const saleValue = parseFloat(saleValueInput.value);
    const commissionRate = parseFloat(commissionRateInput.value);

    const commission = saleValue * (commissionRate / 100);
    alert('A comissão é: R$ ' + commission.toFixed(2));
}

// Função para atualizar a data e hora em tempo real
function updateDateTime() {
    const datetimeDiv = document.getElementById('datetime');
    datetimeDiv.textContent =  getCurrentDateTime();
}

// Chamar a função updateDateTime() quando a janela for carregada
window.onload = function() {
    updateDateTime();
};

// Chamar a função de atualização a cada segundo
setInterval(updateDateTime, 1000);
