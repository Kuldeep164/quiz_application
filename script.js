// let questions = [
//     {
//         numb: 1,
//         question: "Why I like MOTO so much ?",
//         answer: "A. main iski bak bak mein ulajh chuka hu",
//         options: [
//             "A. main iski bak bak mein ulajh chuka hu",
//             "B. sotudu si hai...isliye psnd hai",
//             "C. abhi dekhlo yrr...tumhe kya reason lgta hai",
//             "D. None of these"
//         ]
//     },
//     {
//         numb: 2,
//         question: "Mein MOTO ko like krta hu...does that means ki usse mujhe like back krna padega ?",
//         answer: "B. It doesn't really matters to me...Main like krta hu utna kaafi hai",
//         options: [
//             "A. Hn...like back to krna padega",
//             "B. It doesn't really matters to me...Main like krta hu utna kaafi hai",
//             "C. abhi dekhlo yrr...tumhe kuchh aur option bharna hai to",
//             "D. None of these"
//         ]
//     },
//     {
//         numb: 3,
//         question: "Mein ye website dedicatedly MOTO k liye kyon bna rha hu ?",
//         answer: "C. both A & B",
//         options: [
//             "A. jisse meri practise ho jaaye....HTML, CSS aur JAVASCRIPT ki",
//             "B. MOTO really deserves to feel special from my side",
//             "C. both A & B",
//             "D. none of these"
//         ]
//     },
//     {
//         numb: 4,
//         question: "MOTO mujhe sbse jyada sundar kb lgti hai ?",
//         answer: "D. All of these",
//         options: [
//             "A. hmesha hi sundar lgti hai...bss bak bak na ruke iski",
//             "B. Jhhumke + without makeup or little bit touchup",
//             "C. jb neend me bhi jagi rehti hai....tb jyada sundar dikhti hai",
//             "D. All of these"
//         ]
//     },
//     {
//         numb: 5,
//         question: "Bahut tareef krli...ab thhodi si advice...",
//         answer: "D. All of these",
//         options: [
//             "A. Phone thhoda kam chalaya kro MOTO",
//             "B. Time se so jaao",
//             "C. Thhodi si exercise kro...sleep cycle fix ho jaayega",
//             "D. All of these"
//         ]
//     }
// ]


const questions = [
    {
        question: "Why I like MOTO so much ?",
        answers : [
            { text : "A. main iski bak bak mein ulajh chuka hu", correct : true },
            { text : "B. sotudu si hai...isliye psnd hai", correct : false },
            { text : "C. abhi dekhlo yrr...tumhe kya reason lgta hai", correct : false },
            { text : "D. None of these", correct : false },
        ]
    },

    {
        question: "Mein MOTO ko like krta hu...does that means ki usse mujhe like back krna padega ?",
        answers : [
            { text : "A. Hn...like back to krna padega", correct : false },
            { text : "B. It doesn't really matters to me...Main like krta hu utna kaafi hai", correct : true },
            { text : "C. abhi dekhlo yrr...tumhe kuchh aur option bharna hai to", correct : false },
            { text : "D. None of these", correct : false },
        ]
    },

    {
        question: "Mein ye website dedicatedly MOTO k liye kyon bna rha hu ?",
        answers : [
            { text : "A. jisse meri practise ho jaaye....HTML, CSS aur JAVASCRIPT ki", correct : false },
            { text : "B. MOTO really deserves to feel special from my side", correct : false },
            { text : "C. both A & B", correct : true },
            { text : "D. None of these", correct : false },
        ]
    },

    {
        question: "MOTO mujhe sbse jyada sundar kb lgti hai ?",
        answers : [
            { text : "A. hmesha hi sundar lgti hai...bss bak bak na ruke iski", correct : false },
            { text : "B. Jhhumke + without makeup or little bit touchup", correct : false },
            { text : "C. jb neend me bhi jagi rehti hai....tb jyada sundar dikhti hai", correct : false },
            { text : "D. All of these", correct : true },
        ]
    },

    {
        question: "Bahut tareef krli...ab thhodi si advice...",
        answers : [
            { text : "A. Phone thhoda kam chalaya kro MOTO", correct : false },
            { text : "B. Time se so jaao", correct : false },
            { text : "C. Thhodi si exercise kro...sleep cycle fix ho jaayega", correct : false },
            { text : "D. All of these", correct : true },
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    if (selectedBtn.dataset.correct === "true") {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct == "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `MOTO aapne score kra ${score} out of ${questions.length} !` ;
    nextButton.innerHTML = "Play Agaim !";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
