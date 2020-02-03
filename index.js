const flashCards = [
    {
        coding: [
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
        ]
    },
    {
        diving: [
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
]

function showQuestion() {
    // empty the question and the answer
    document.getElementById('question').innerText = null
    document.getElementById('answer').innerText = null

    const randomNumber = Math.floor(Math.random() * flashCards.length)
    const randomCard = flashCards[randomNumber]
    const randomQuestion = randomCard.question

    const questionSection = document.getElementById('question')
    questionSection.innerText = randomQuestion
}

showQuestion()

function showAnswer() {
    const answerSection = document.getElementById("answer")

    flashCards.map((item) => {
        if (item.question === question.innerText) answerSection.innerText = item.answer
        // advanced console methods > count
        // console.count('Console.count')
    })
}

function addOwnCard() {
    flashCards.push(
        {   
            id: flashCards.length,
            question: newQuestion.value,
            answer: newAnswer.value
        })
        
    const feedback = document.getElementById("feedback")
    feedback.innerText = "Q&A created"
    setTimeout(() => feedback.innerText = "", 4000)

    // advanced console methods
    // console.log(`%cflashCards: ${flashCards}`, 'color: blue;')
    // I want the next result
    console.log('%cNewly created flashCard:', 'color: blue; font-size: small;', flashCards[flashCards.length - 1])
    console.table(flashCards)
}

// // advanced console methods > color, font-size
// console.log('%cConsole.log message with x-large orange letters', 'color: orange; font-size: x-large;')

// // console.dir
// const myObject = {
//     first: {
//         name: "Pocok",
//         age: 999
//     },
//     second: {
//         name: "Kutu",
//         age: 000
//     }
// }

// console.log('console.log:', myObject)
// console.dir(myObject)

// // console.table
// console.table(flashCards)
// console.table(myObject)

// // console.group, ...End(), ...Collapsed
// // identation just for better readability
// // console.group('%cMain group:', 'color: red; font-size: large; font-weight: bold;')
// console.groupCollapsed('%cMain group:', 'color: red; font-size: large; font-weight: bold;')
//     console.group('%cSubgroup 1:', 'color: orange;')
//         console.log('item1')
//         console.log('item1')
//         console.log('item1')
//         console.groupEnd()
//     console.groupCollapsed('%cSubgroup 2:', 'color: blue;')
//         console.log('item2')
//         console.log('item2')
//         console.log('item2')
//         console.groupEnd()
// console.groupEnd()

// // console the message in particular cases > assert()
// const errorMessage = 'Hey the number is not even'
// for (let i = 0; i < 10; i++) {
//     console.assert(i % 2 === 0, { i: i, errorMessage: errorMessage })
// }

// // console.trace()
// // This method displays a trace that shows how the code ended up at a certain point.
// function myFunction() {
//     myOtherFunction()
// }

// function myOtherFunction() {
//     console.trace()
// }

// myOtherFunction()
// myFunction()

// // console.time(), ...console.timeEnd()
// // tracking the time for actions
// // console.time() is a better way to track the microtime taken for JavaScript executions
// console.time('Action took:')
// let total = 0
// for (i = 0; i < 10000; i++) {
//     total += i
// }
// console.log('Total value:', total)
// console.timeEnd('Action took:')

// // console.memory()
// // how our JavaScript applications are using browser memory
// console.log(console.memory)
// // or simply write it into the console > console.memory

// // destroy all console messages
// // console.clear()