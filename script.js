function rollDice() {
    // Roll the dice numbers in advance but don't show them yet
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;

    // Show 'Rolling...' text immediately
    document.getElementById('dice-total').innerText = 'Rolling...';

    // Wait for 4 seconds before showing the result
    setTimeout(function() {
        // Set the dice values visually
        setDiceValue('dice1', dice1);
        setDiceValue('dice2', dice2);

        // Show the result after 4 seconds
        document.getElementById('dice-total').innerText = `Total: ${sum}`;

        // Highlight the correct section based on the sum
        resetHighlighting();
        if (sum > 7) {
            highlightWinner('seven-up', 'seven-up-winner');
        } else if (sum === 7) {
            highlightWinner('seven', 'seven-winner');
        } else {
            highlightWinner('seven-down', 'seven-down-winner');
        }
    }, 4000);  // 4-second delay
}

function resetGame() {
    // Reset the dice visually to blank or initial state
    setDiceValue('dice1', 1); // Set dice1 to 1
    setDiceValue('dice2', 1); // Set dice2 to 1

    // Reset the result text
    document.getElementById('dice-total').innerText = 'Total: 2'; // Reset total to default value

    // Remove winner highlights
    resetHighlighting();
}

function setDiceValue(diceId, value) {
    const dice = document.getElementById(diceId);
    dice.className = `dice dice-${value}`;  // Update dice class
    dice.innerHTML = '';  // Clear previous dots

    // Add the appropriate number of dots
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
