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

// returns the value of the checked radio button
function categorySelect() {
    const categories = document.getElementById('categorySelect').children

    for (let i = 0; i < categories.length; i++) {
        if (categories[i].checked) return categories[i].value
    }
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
    const feedback = document.getElementById("feedbackQ&A")

    if (newAnswer.value === '' || newQuestion.value === '') {
        showFeedback(feedback, "Empty answer and/or question field")
    } else {
        flashCards[category].push(
            {
                id: flashCards[category].length,
                question: newQuestion.value,
                answer: newAnswer.value
            }
        )

        console.table(flashCards[category])
        showFeedback(feedback, "Q&A created")
    }
}

function showQuestion() {
    const category = categorySelect()

    // empty the answer
    document.getElementById('answer').innerText = null

    // select a random question
    const randomNumber = Math.floor(Math.random() * flashCards[category].length)
    const randomCard = flashCards[category][randomNumber]
    const randomQuestion = randomCard.question

    // random question to the screen
    const questionSection = document.getElementById('question')
    questionSection.innerText = randomQuestion
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

    // create the new radio button
    const radioButton = document.createElement('input')
    radioButton.id = newCategory
    radioButton.classList.add("button")
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

const deleteCategory = () => {
    const feedback = document.getElementById("feedbackCat")
    let newCategory = document.getElementById('newCategory').value

    // remove from screen
    const buttonToRemove = document.getElementById(newCategory)
    if (buttonToRemove === null) showFeedback(feedback, 'Category does not exist')
    if (buttonToRemove !== null) {
        // delet the text node next to the radio button node
        buttonToRemove.parentElement.removeChild(buttonToRemove.nextSibling)
        // and delete the button itself
        buttonToRemove.parentElement.removeChild(buttonToRemove)
        showFeedback(feedback, 'Category deleted')
    }

    // delete the property too
    delete flashCards[newCategory]
}

const deleteCard = () => {
    const feedback = document.getElementById("feedbackQ&A")
    const questionToRemove = document.getElementById('newQuestion').value
    let message = 'Type the exact question to the input field'

    // loop over the categories
    for (category in flashCards) {
        flashCards[category].map((card, index) => {
            if (questionToRemove === card.question) {
                // delete the proper card from the category array
                flashCards[category].splice(index, 1)
                message = 'Card deleted'
            }
            showFeedback(feedback, message)
        })
    }
}

const showList = () => {
    hideList()
    let list = document.getElementById('questions')
    for (category in flashCards) {
        flashCards[category].map((card) => {
            // ver1
            // list.append(`${card.question}`)
            // const br = document.createElement("br")
            // list.appendChild(br)
            // ver2
            const listItem = document.createElement('li')
            listItem.innerText = `${category.toUpperCase()} » ${card.question}`
            list.appendChild(listItem)
        })
    } 
}

const hideList = () => {
    let list = document.getElementById('questions').innerText = ''
    console.log(list)
}

showQuestion()