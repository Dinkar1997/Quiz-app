
const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Products",
        b: "Hey Transfer Products",
        c: "Hypertext Test Products",
        d: "Hypertext Transfer Protocal",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "Json Server",
        b: "jquery Server",
        c: "Java Script",
        d: "jAVA Server",
        ans: "ans3"
    }
];

let timeValue=20;

const start = document.querySelector(".start");
const rules = document.querySelector(".rules");
start.addEventListener('click', () => {
    console.log("Start is clicked");
    rules.style.display = "block";
    start.style.display = "none";
});


const exit = document.querySelector(".exit");

const continue1 = document.querySelector(".continue");

exit.addEventListener('click', () => {
    console.log("You have clicked exit");
    start.style.display = "block";
    rules.style.display = "none";
});

continue1.addEventListener('click', () => {
    document.querySelector(".inner-div").style.display = "block";
    rules.style.display = "none";
    startTimer(20);

});


const timeCount=document.querySelector(".timer .timer_sec");

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const qSection = document.querySelector(".question-section");


const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");
let questionCount = 0;
let score = 0;
let counter;


const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
  
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
}

const deselectAll = () => {
    answers.forEach((curAnsElem) => {
        curAnsElem.checked = false;
    });
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;

    deselectAll();
    checkAnswer();
    

});


function checkAnswer(){
    if (questionCount < quizDB.length) {
        loadQuestion();
       
        
    } else {
        clearInterval(counter);
        qSection.style.display="none";
        showScore.innerHTML = `
        <h2>You have completed ...</h2>
        <h3> You scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
}


function startTimer(time){
    counter=setInterval(timer,1000);
    function timer(){
        timeCount.textContent=time;
        time--;
        if(time<0)
        {
            clearInterval(counter);
            timeCount.textContent="00";
            qSection.style.display="none";
            showScore.innerHTML = `
        <h2>Your time is completed ...</h2>
        <h3>Try Next Time !!</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');          

        }
    }
}