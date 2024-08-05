function rollDice() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;

    document.getElementById('dice1').innerText = dice1;
    document.getElementById('dice2').innerText = dice2;

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
    document.getElementById('dice1').innerText = 1;
    document.getElementById('dice2').innerText = 1;
    resetHighlighting();
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
