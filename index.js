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
// let randomNumber = Math.floor(Math.random() * ((flashCard.length - 1) + 1))
// let randomCard = flashCard[randomNumber]

const questionArray = []
const answerArray = []

const button = document.createElement('button')

function showQuestion() {
    // empty the question and the answer
    document.getElementById('question').innerHTML = null
    document.getElementById('answer').innerHTML = null

    const randomNumber = Math.floor(Math.random() * ((flashCard.length - 1) + 1))
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

// function showAnswer() {
//     const randomAnswer = randomCard.answer
//     answerArray.push(randomAnswer)
//     // prevent the click button to show the answer multiple times
//     document.getElementById('answer').innerHTML = null

//     const answer = document.createElement('p')
//     answer.innerHTML = randomAnswer

//     const sectionAnswer = document.getElementById('answer')
//     sectionAnswer.appendChild(answer)
// }