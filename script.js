function rollDice() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;

    setDiceValue('dice1', dice1);
    setDiceValue('dice2', dice2);

    document.getElementById('dice-total').innerText = `Total: ${sum}`;

    resetHighlighting();

    if (sum > 7) {
        highlightWinner('seven-up', 'seven-up-winner');
    } else if (sum === 7) {
        highlightWinner('seven', 'seven-winner');
    } else {
        highlightWinner('seven-down', 'seven-down-winner');
    }
}

function resetGame() {
    setDiceValue('dice1', 1);
    setDiceValue('dice2', 1);
    document.getElementById('dice-total').innerText = 'Total: 2';
    resetHighlighting();
}

function setDiceValue(diceId, value) {
    const dice = document.getElementById(diceId);
    dice.className = `dice dice-${value}`;
    dice.innerHTML = '';

    for (let i = 1; i <= value; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dice.appendChild(dot);
    }
}

function highlightWinner(sectionId, winnerId) {
    const section = document.getElementById(sectionId);
    const winnerText = document.getElementById(winnerId);
    section.classList.add('winner');
    winnerText.innerText = 'WINNER';
}

function resetHighlighting() {
    const sections = ['seven-up', 'seven', 'seven-down'];
    const winnerIds = ['seven-up-winner', 'seven-winner', 'seven-down-winner'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        section.classList.remove('winner');
    });
    winnerIds.forEach(id => {
        const winnerText = document.getElementById(id);
        winnerText.innerText = '';
    });
}
