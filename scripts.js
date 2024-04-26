const questions = [
    { id: "question1", answer: "gelijkbenig" },
    { id: "question2", answer: "rechthoekig" },
    { id: "question3", answer: "gelijkzijdig" }
];

let previousQuestionId = "";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showRandomQuestion() {
    let currentQuestionId = "";
    do {
        shuffleArray(questions);
        currentQuestionId = questions[0].id;
    } while (currentQuestionId === previousQuestionId);
    
    previousQuestionId = currentQuestionId;
    
    questions.forEach(question => {
        document.getElementById(question.id).style.display = 'none';
    });
    document.getElementById(currentQuestionId).style.display = 'block';
}

function selectOption(answer, questionId) {
    const question = questions.find(q => q.id === questionId);
    const buttons = document.getElementById(questionId).getElementsByTagName('button');
    if (answer === question.answer) {
        alert("Correct! Goed gedaan.");
        Array.from(buttons).forEach(button => {
            if (button.textContent.includes(answer)) {
                button.classList.add('correct-answer');
                setTimeout(() => {
                    button.classList.remove('correct-answer');
                }, 1000);
            }
        });
        showRandomQuestion();
    } else {
        alert("Helaas, dat is niet correct. Probeer het opnieuw!");
    }
}

window.onload = showRandomQuestion;
