const flashCards = {
    coding:
        [
            {
                id: 0,
                question: 'What is an array?',
                answer: 'Composite data type'
            },
            {
                id: 1,
                question: 'What does CSS stand for?',
                answer: 'Cascading Style Sheet'
            },
            {
                id: 2,
                question: 'What does HTML stand for?',
                answer: 'HyperText Markup Language'
            },
            {
                id: 3,
                question: 'What does JS stand for?',
                answer: 'Javascript'
            }
        ],
    diving:
        [
            {
                id: 0,
                question: 'What is a BCD?',
                answer: 'Bouyancy Control Device'
            },
            {
                id: 1,
                question: 'What kind of kick do you know?',
                answer: 'Frog kick'
            }
        ]
}

function categorySelect() {
    const categories = document.getElementById('categorySelect').children
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].checked) return categories[i].value
    }
}

function showQuestion() {
    const category = categorySelect()

    document.getElementById('question').innerText = null
    document.getElementById('answer').innerText = null

    const randomNumber = Math.floor(Math.random() * flashCards[category].length)
    const randomCard = flashCards[category][randomNumber]
    const randomQuestion = randomCard.question

    const questionSection = document.getElementById('question')
    questionSection.innerText = randomQuestion
}

function showAnswer() {
    const category = categorySelect()
    const answerSection = document.getElementById("answer")

    flashCards[category].map((item) => {
        if (item.question === question.innerText) answerSection.innerText = item.answer

    })
}

function showFeedback(feedback, message) {
    feedback.innerText = message
    setTimeout(() => feedback.innerText = "", 4000)
}

function addOwnCard() {
    const category = categorySelect()

    flashCards[category].push(
        {
            id: flashCards[category].length,
            question: newQuestion.value,
            answer: newAnswer.value
        }
    )

    const feedback = document.getElementById("feedbackQ&A")
    feedback.innerText = "Q&A created"
    setTimeout(() => feedback.innerText = "", 4000)

    console.log(
        '%cNewly created flashCard:', 'color: blue; font-size: small;',
        flashCards[category][flashCards[category].length - 1]
    )
    console.table(flashCards[category])
}

function createCategory(newCategory) {
    // create new category by user input
    flashCards[newCategory] = []
    // push a default question
    flashCards[newCategory].push(
        {
            id: flashCards[newCategory].length,
            question: 'How to start your new category?',
            answer: 'Add a new question and answer with the form below!'
        }
    )
    console.log('%cNew flashCard:', 'color: tomato; font-size: medium;', flashCards)

    // create the new radio button
    const radioButton = document.createElement('input')
    radioButton.type = 'radio'
    radioButton.name = 'category'
    radioButton.value = newCategory
    radioButton.checked = 'checked'

    // append the radio button to the form
    const select = document.getElementById('categorySelect')
    select.appendChild(radioButton)
    
    // write the name of the radio button on the screen
    const textNode = document.createTextNode(newCategory)
    select.appendChild(textNode)

    showQuestion()
}

function addCategory() {
    const feedback = document.getElementById("feedbackCat")
    let newCategory = document.getElementById('newCategory').value

    // check if the category exists?
    let isExist = false    
    for (const category in flashCards) {
        if (category === newCategory) {
            isExist = true
            break
        }
    }

    // if not > create it
    if (!isExist && newCategory !== '') {
        createCategory(newCategory)
        showFeedback(feedback, "New category added")
    } else if (newCategory === '') {
        showFeedback(feedback, "Ensure a category name!")
    } else {
        showFeedback(feedback, "Category already exists")
    }
}

showQuestion()