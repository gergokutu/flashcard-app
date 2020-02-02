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
    }
]

function showQuestion() {
    // empty the question and the answer
    document.getElementById('question').innerHTML = null
    document.getElementById('answer').innerHTML = null

    const randomNumber = Math.floor(Math.random() * flashCard.length)
    const randomCard = flashCard[randomNumber]
    const randomQuestion = randomCard.question
    const question = document.createElement('p')
    question.innerHTML = randomQuestion

    const questionSection = document.getElementById('question')
    questionSection.appendChild(question)
}

showQuestion()

function showAnswer() {
    const answerSection = document.getElementById("answer")
    const answer = document.createElement("p")

    flashCard.map((item) => {
        if (item.question === question.innerText) answer.innerHTML = item.answer
    })

    answerSection.appendChild(answer)
}

function addOwnCard() {
    flashCard.push(
        { 
            question: newQuestion.value,
            answer: newAnswer.value
        })
        
    const feedback = document.getElementById("feedback")
    feedback.innerText = "Q&A created"
    setTimeout(() => feedback.innerText = "", 4000)
}