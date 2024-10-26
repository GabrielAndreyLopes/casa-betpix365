function sendBet() {
    const betValue = document.getElementById('bet').value;
    const resultElement = document.getElementById('result');

    if (betValue < 1 || betValue > 10) {
        resultElement.innerText = "Por favor, insira um número entre 1 e 10.";
    } else {
        resultElement.innerText = `Você apostou: ${betValue}`;
    }
}
