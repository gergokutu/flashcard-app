// store data locally > localStorage > string key-value pairs > workaround: stringify
const setData = (data) => {
    const localStorage = window.localStorage
    localStorage.setItem('flashCards', JSON.stringify(data))
}

// get data from window.localStorage
const getData = () => {
    const localStorage = window.localStorage
    flashCards = JSON.parse(localStorage.getItem('flashCards'))
}

// returns the value of the checked radio button
function categorySelect() {
    const categories = document.getElementById('categorySelect').children

    for (let i = 0; i < categories.length; i++) {
        if (categories[i].checked) return categories[i].value
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

function createRadioButton(newCategory) {
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
}

const showCategories = (flashCards) => {
    for (category in flashCards) {
        createRadioButton(category)
    }
}

function addOwnCard() {
    const category = categorySelect()
    const feedbackCard = document.getElementById("feedbackQ&A")

    if (newAnswer.value === '' || newQuestion.value === '') {
        showFeedback(feedbackCard, "Empty answer and/or question field")
    } else {
        flashCards[category].push(
            {
                id: flashCards[category].length,
                question: newQuestion.value,
                answer: newAnswer.value
            }
        )

        // console.table(flashCards[category])
        showFeedback(feedbackCard, "Q&A created")
        setData(flashCards)
    }
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
    
    createRadioButton(newCategory)
    showQuestion()
    setData(flashCards)
}

function addCategoryToScreen() {
    const feedbackCategory = document.getElementById("feedbackCat")
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
        showFeedback(feedbackCategory, "New category added")
    } else if (newCategory === '') {
        showFeedback(feedbackCategory, "Ensure a category name!")
    } else {
        showFeedback(feedbackCategory, "Category already exists")
    }
}

const deleteCategory = () => {
    const feedbackCategory = document.getElementById("feedbackCat")
    let newCategory = document.getElementById('newCategory').value

    // remove from screen
    const buttonToRemove = document.getElementById(newCategory)
    if (buttonToRemove === null) showFeedback(feedbackCategory, 'Category does not exist')
    if (buttonToRemove !== null) {
        // delet the text node next to the radio button node
        buttonToRemove.parentElement.removeChild(buttonToRemove.nextSibling)
        // and delete the button itself
        buttonToRemove.parentElement.removeChild(buttonToRemove)
        showFeedback(feedbackCategory, 'Category deleted')
    }
    // delete the property too
    delete flashCards[newCategory]

    setData(flashCards)
}

const deleteCard = () => {
    const feedbackCard = document.getElementById("feedbackQ&A")
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
            showFeedback(feedbackCard, message)
        })
    }

    setData(flashCards)
}

const showList = () => {
    hideList()
    const list = document.getElementById('questions')
    
    for (category in flashCards) {
        flashCards[category].map((card) => {
            const listItem = document.createElement('li')
            listItem.innerText = `${category.toUpperCase()} » ${card.question}`
            list.appendChild(listItem)
        })
    }
}

const hideList = () => {
    document.getElementById('questions').innerText = ''
}

// initial data
const starterCards = {
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
let flashCards = {}

// first app start > fill the local storage
if (window.localStorage.length === 0) setData(starterCards)
// fill flashCards
getData()
showCategories(flashCards)
showQuestion()