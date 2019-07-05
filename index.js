const flashCard = [
    {
        question: 'What is an array?',
        answer: 'Composite data type'
    },
    {
        question: 'What does CSS stand for?',
        answer: 'Cascading Style Sheet'
    },
    {
        question: 'What does HTML stand for?',
        answer: 'HyperText Markup Language'
    }
]

// get random item from array
const randomCard = flashCard[Math.floor(Math.random() * flashCard.length)]
const randomQuestion = randomCard.question
const randomAnswer = randomCard.answer

const question = document.createElement('p')
question.innerHTML = randomQuestion

const sectionQuestion = document.getElementById('question')
sectionQuestion.appendChild(question)

const button = document.createElement('button')

function clickStopper(e) {
    alert("click was blocked"); // ** you can remove this line **
    e.preventDefault(); // equivalent to 'return false'

}

function showAnswer() {
    const answer = document.createElement('p')
    answer.innerHTML = randomAnswer

    const sectionAnswer = document.getElementById('answer')
    sectionAnswer.appendChild(answer)

}

