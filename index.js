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
    },
    {
        question: 'What does JS stand for?',
        answer: 'Javascript'
    },
]

const questionArray = []
const answerArray = []

const button = document.createElement('button')

function showQuestion() {
    // empty the question and the answer
    document.getElementById('question').innerHTML = null
    document.getElementById('answer').innerHTML = null

    const randomNumber = Math.floor(Math.random() * flashCard.length)
    console.log("randomNumber", randomNumber)
    const randomCard = flashCard[randomNumber]
    const randomQuestion = randomCard.question
    const question = document.createElement('p')
    question.innerHTML = randomQuestion

    const sectionQuestion = document.getElementById('question')
    sectionQuestion.appendChild(question)
    questionArray.push(randomQuestion)
}

showQuestion()

function showAnswer() {
    const answer = document.createElement('p')
    const sectionAnswer = document.getElementById('answer')
    for (let i = 0; i < flashCard.length; i++) {
        if (document.getElementById('question') === flashCard[i].question) {
            document.getElementById('answer').innerHTML = flashCard[i].answer
            console.log(flashCard[i].answer)
            sectionAnswer.appendChild(answer)
        }
    }
}