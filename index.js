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
const randomQuestion = flashCard[Math.floor(Math.random()*flashCard.length)].question

const question = document.createElement('p')
question.innerHTML = randomQuestion

const body = document.querySelector('body')
body.appendChild(question)