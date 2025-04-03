// const questions = [
//     {
//         question: "what is the capital city of pakistan",
//          answers: [
//             {text: "karachi", correct: false},
//             {text: "islamabad", correct: true},
//             {text: "lahore", correct: false},
//             {text: "peshawar", correct: false}
//        ]
//     },
//     {
//     question : "highest building in the world",
//     answers : [
//         {text: "burj khalifa", correct: true},
//         {text: "Warisan Merdeka Tower ", correct: false},
//         {text: "Burj Ul Arab", correct: false},
//         {text: "mian Mar", correct: false}
//     ]
//     },
//     {
//         question : "richest man in the world",
//         answers : [
//             {text: "Bill gates", correct: false},
//             {text: "Elon Musk", correct: true},
//             {text: "Jeff Bezos", correct: false},
//             {text: "Waran Buffet", correct: false}
//         ]
//     },
//     {
//         question : "who Make Js",
//         answers : [
//             {text: "Denis Ritche", correct: false},
//             {text: "Edin ", correct: false},
//             {text: "Macllum", correct: false},
//             {text: "Brenden Eich", correct: true}
//         ]
//     }
// ]

// const questionElem = document.getElementById("question");
// const ansButton = document.getElementById("ques-ans");
// const nextButton = document.getElementById("next-btn");

// let currentIndex = 0;
// let score = 0;

// function startQuiz(){
//     currentIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     // nextButton.style.display = "none";
//     showQues();
// }

// function showQues() {
//     resetState();
//     let currentQues = questions[currentIndex];
//     let quesNo = currentIndex + 1;
//     questionElem.innerHTML = quesNo + ") " + currentQues.question;

//     currentQues.answers.forEach(answer => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     ansButton.appendChild(button);
//     if(answer.correct){
//         button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click", selectAnswer);
// });
// }

// function resetState(){
//     nextButton.style.display = "none";
//     while(ansButton.firstChild){
//         ansButton.removeChild(ansButton.firstChild);
//     }
// }

// function selectAnswer(e){
//     const selectBtn = e.target;
//     const isCorrect = selectBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectBtn.classList.add("correct");
//         score++;
//     }else{
//         selectBtn.classList.add("incorrect");
//     }
//     Array.from(ansButton.children).forEach(button => {
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextButton.style.display = "block";
// }


// function showScore(){
//     resetState();
//     questionElem.innerHTML = `your Score is ${score} out of ${questions.length}!`
//     nextButton.innerHTML = "Play Again";
//     nextButton.style.display = "block";
// }
// function handleNextButton(){
//     currentIndex++;
//     if(currentIndex < questions.length){
//         showQues();
//     }else{
//         showScore();
//     }
// }

// nextButton.addEventListener("click", () => {
//     if(currentIndex < questions.length){
//         handleNextButton();
//     }
//     else{
//         startQuiz();
//     }
// });
// startQuiz();









// const questions = [
//     {
//         question: "what is the capital city of pakistan",
//          answers: [
//             {text: "karachi", correct: false},
//             {text: "islamabad", correct: true},
//             {text: "lahore", correct: false},
//             {text: "peshawar", correct: false}
//        ]
//     },
//     {
//     question : "highest building in the world",
//     answers : [
//         {text: "burj khalifa", correct: true},
//         {text: "Sky ", correct: false},
//         {text: "Burj Ul Arab", correct: false},
//         {text: "mian Mar", correct: false}
//     ]
//     },
//     {
//         question : "richest man in the world",
//         answers : [
//             {text: "Bill gates", correct: false},
//             {text: "Elon Musk", correct: true},
//             {text: "Jeff Bezos", correct: false},
//             {text: "Waran Buffet", correct: false}
//         ]
//     },
//     {
//         question : "who Make Js",
//         answers : [
//             {text: "Denis Ritche", correct: false},
//             {text: "Edin ", correct: false},
//             {text: "Macllum", correct: false},
//             {text: "Brenden Eich", correct: true}
//         ]
//     }
// ]

// let quesElem = document.getElementById("question");
// let ansBtn = document.getElementById("ques-ans");
// let nextBtn = document.getElementById("next-btn");

// currentIndex = 0;
// score = 0;

// function startQuiz(){
//     currentIndex = 0;
//     score = 0;
//     nextBtn.innerHTML = "Next";
//     showQuiz();
// }

// function showQuiz(){
//     resetState();
//     let ques = questions[currentIndex];
//     let num = currentIndex + 1;
//     quesElem.innerHTML = `${num} ) ${ques.question}`


//  ques.answers.forEach(answer => {
//     let button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     ansBtn.appendChild(button);
//    if(answer.correct){
//     button.dataset.correct = answer.correct;
//    }
//    button.addEventListener("click", selectAnswer);
// })
// }

//  function selectAnswer(e){
//     let selectBtn = e.target;
//     let isCorrect = selectBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectBtn.classList.add("correct");
//         score++;
//     }else{
//         selectBtn.classList.add("incorrect");
//     }
//     Array.from(ansBtn.children).forEach(button =>{
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct")
//         }else{
//             button.classList.add("incorrect");
//         }
//         button.disabled = true;

//     })
//     nextBtn.style.display = "block";
// };

// function resetState(){
//     nextBtn.style.display = "none";
//     while(ansBtn.firstChild){
//         ansBtn.removeChild(ansBtn.firstChild);
//     }
// }

// function showScore(){
//     resetState();
//     quesElem.innerHTML = `${score} out of ${questions.length}!`
//     nextBtn.innerHTML = "play Again";
//     nextBtn.style.display = "block";
// }

// nextBtn.addEventListener("click", function(){
//     if(currentIndex < questions.length){
//         handleNextQues()
//     }else{
//         startQuiz();
//     }
// })

// function handleNextQues(){
//     currentIndex ++;
//     if(currentIndex < questions.length){
//         showQuiz();
//     }else{
//         showScore();
//     }
// }




// startQuiz();




const questions = [
        {
            question: "what is the capital city of pakistan?",
             answers: [
                {text: "Karachi", correct: false},
                {text: "Islamabad", correct: true},
                {text: "Lahore", correct: false},
                {text: "Peshawar", correct: false}
           ]
        },
        {
        question : "highest building in the world?",
        answers : [
            {text: "Burj khalifa", correct: true},
            {text: "Warisan Merdeka Tower", correct: false},
            {text: "Burj Ul Arab", correct: false},
            {text: "Shanghai Tower", correct: false}
        ]
        },
        {
            question : "richest man in the world?",
            answers : [
                {text: "Bill gates", correct: false},
                {text: "Elon Musk", correct: true},
                {text: "Jeff Bezos", correct: false},
                {text: "Waran Buffet", correct: false}
            ]
        },
        {
            question : "who Make Js?",
            answers : [
                {text: "Denis Ritche", correct: false},
                {text: "Edin ", correct: false},
                {text: "Macllum", correct: false},
                {text: "Brenden Eich", correct: true}
            ]
        }
    ]
    
    let quesElem = document.getElementById("question");
    let ansBtn = document.getElementById("ques-ans");
    let nextBtn = document.getElementById("next-btn");
    
    currentIndex = 0;
    score = 0;
    
    function startQuiz(){
        currentIndex = 0;
        score = 0;
        nextBtn.innerHTML = "Next";
        showQuiz();
    }
    
    function showQuiz(){
        resetState();
        let ques = questions[currentIndex];
        let num = currentIndex + 1;
        quesElem.innerHTML = `${num} ) ${ques.question}`

        ques.answers.forEach(answer =>{
            let button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            ansBtn.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAns);
        })
    }

    function selectAns(e) {
        let select = e.target;
        let isCorrect = select.dataset.correct === 'true';
        if(isCorrect){
            select.classList.add("correct")
            score++;
        }else{
            select.classList.add("inCorrect")

        }
        Array.from(ansBtn.children).forEach(button =>{
            if(button.dataset.correct === "true"){ 
                button.classList.add("correct")
            }else{
                button.classList.add("inCorrect")
    
            }
            button.disabled = true;
        })
        nextBtn.style.display = "block";
    }

    function resetState(){
        nextBtn.style.display = 'none';
        while(ansBtn.firstChild){
            ansBtn.removeChild(ansBtn.firstChild);
        }
    }
    function showAns(){
        resetState();
        quesElem.innerHTML = ` Your score is ${score} out of ${questions.length}`
        nextBtn.innerHTML = "play Again";
        nextBtn.style.display = "block";
    }

    function handleNextQues(){
        currentIndex++;
        if(currentIndex < questions.length){
            showQuiz();
        }else{
            showAns();
        }
    }
    nextBtn.addEventListener('click', function(){
        if(currentIndex < questions.length){
            handleNextQues();
        }else{
            startQuiz();
        }
    })


    startQuiz();