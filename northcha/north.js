const quizQuestions = [
    {
        question: "You've just come home. You're 9 Stellas deep and Newcastle lost the footy. What scran will take the pain away? (Open the console for answer justifications)",
        answers: ["Curry Sauce + Chips", "Parmo", "Cucumber and Tuna Sandwich", "More Stellas"],
        correct: [1],
        image: "norf/fc.jpg",
        justification: "A Parmo is a Middlesborough invention, which is breaded chicken with parmesan cheese and bechamel sauce. But Northern!"
    },
    {
        question: "Opinion on the Arctic Monkeys?",
        answers: ["They're alright", "Cornerstone of northern culture", "Absolute shite", "Who?"],
        correct: [1],
        image: "norf/monke.png",
        justification: "I don't even know what a cornerstone is but they are one of them"
    },
    {
        question: "The pub where the first train in the world started its maiden voyage is called:",
        answers: ["The Station", "The Locomotion", "The Steamer", "The Railway"],
        correct: [1],
        image: "norf/loco.png",
        justification: "The Locomotion is a still-standing pub in Shildon. It was the site of the world's first test of a steam train."
    },
    {
        question: "What is Thatcher responsible for?",
        answers: ["Transforming the City of London", "Privatisation", "Wrecking Argentinians", "The decline of the north"],
        correct: [3],
        image: "norf/bitch.png",
        justification: "All of the above answers are true, but True Northerners would have picked #4"
    },
    {
        question: "Above the red line is the north. Where do you draw the line?",
        answers: ["Just above Leeds", "Just above London", "Just above Birmingham", "Scotland"],
        correct: [0],
        image: "norf/ingerlund.png",
        justification: "Leeds cosplaying as the North will never not be funny"
    },
    {
        question: "What is electricity?",
        answers: ["Southern propaganda", "What makes the footy gerron the telly innit", "Magic, bruv", "Idk but it keeps me fridge on"],
        correct: [0,1,3],
        image: "norf/leccie.png",
        justification: "Electricity is many things, but it is not magic"
    },
    {
        question: "Where is the Angel of the North?",
        answers: ["Sunderland", "Blackpool", "Cockermouth", "Newcastle"],
        correct: [3],
        image: "norf/angle.png",
        justification: "The Angel of the North is 'technically' in Gateshead, because culturally Gateshead natives would have nothing else to grasp to if it the Angel were 1 mile to the west."
    },
    {
        question: "You are very tired. What are you?",
        answers: ["Knackered", "Paggered", "Done in", "Eepy"],
        correct: [1],
        image: "norf/eepy.png",
        justification: "Paggered is a north-east term with little etymological roots. But if your norf'ern, yer paggered."
    },
    {
        question: "You're out on't 'oon and looking to shag. Who are you trying to pull?",
        answers: ["Sheep", "Ants", "Birds", "Llamas"],
        correct: [2],
        image: "norf/newc.png",
        justification: "'Bird' is the Newcastle native term for attractive woman. none of them, however, can fly."
    },
    {
        question: "What do you call this?",
        answers: ["Bacon bap", "Bacon barm", "Bacon roll", "Bacon sandwich"],
        correct: [0],
        image: "norf/bacon.png",
        justification: "Bacon bap. With brown sauce, because you're not a nonce"
    },
    {
        question: "What do you call Darlington?",
        answers: ["Darl'n", "The big train station", "Darlington", "Darlo"],
        correct: [3],
        image: "norf/darlington.png",
        justification: "Darlo is the only correct one. Source: Darlo natives"
    }
]

let currentQuestionIndex = 0;
let score = 0;

function renderQuestion(index) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = ''; // Clear previous content

    if (index < quizQuestions.length) {
        const item = quizQuestions[index];
        const questionEl = document.createElement('div');
        questionEl.className = 'question';

        questionEl.innerHTML = `
            <h2>Question ${index + 1}</h2>
            <p>${item.question}</p>
            <img src="${item.image}" alt="Image for question ${index + 1}">
            <div class="answers">
                ${item.answers.map((answer, index) => `<div class="answer" id=${index}>${answer}</div>`).join('')}
            </div>
        `;

        quizContainer.appendChild(questionEl);

        Array.from(document.getElementsByClassName('answer')).forEach(answerEl => {
            answerEl.addEventListener('click', () => {
                if (item.correct.includes(parseInt(answerEl.id))) {
                    score++;
                    console.log(`Correct! Score: ${score}`);
                }
                renderQuestion(currentQuestionIndex + 1);
                console.log(`Correct answer(s): ${item.answers[item.correct]}\n\n${item.justification}`)
            });
        });

    } else {
        if (score === 11) {
            quizContainer.innerHTML = `
            <h2>Captcha Complete</h2>
            <p>Your score was: ${score}</p>
            <p>YER A NORTHERNER</p>
            `;
        } else {
            quizContainer.innerHTML = `
            <h2>Captcha Complete</h2>
            <p>Your score was: ${score}</p>
            <p>YOU ARE NOT NORTHERN, FACK OAFF</p>
            `;
        }
    }

    currentQuestionIndex = index;
}

document.addEventListener('DOMContentLoaded', () => {
    renderQuestion(currentQuestionIndex);
});
