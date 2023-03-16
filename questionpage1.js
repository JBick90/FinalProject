//         subChapter: "",
//         subQuestion: ,
//         difficulty: ,
//         questionText: "",
//         answerA: "",
//         answerB: "",
//         answerC: "",
//         answerD: "",
//         correctAnswer: ""
let questionBank = [
    {
        subChapter: "1.1.1",
        subQuestion: 1,
        difficulty: 3,
        questionText: "Which of these is not an energy store?",
        answerA: "Kinetic energy",
        answerB: "Electrical energy",
        answerC: "Nuclear energy",
        answerD: "Chemical energy",
        correctAnswer: "B"
    },
    {
        subChapter: "1.1.1",
        subQuestion: 2,
        difficulty: 3,
        questionText: "Which of these is not an energy store?",
        answerA: "Kinetic energy",
        answerB: "Elastic energy",
        answerC: "Thermal energy",
        answerD: "Sound energy",
        correctAnswer: "D"
    },
    {
         subChapter: "1.1.2",
         subQuestion: 1,
         difficulty: 3,
         questionText: "Which of these is the equation for kinetic energy?",
         answerA: "½mv²",
         answerB: "mgh",
         answerC: "½ke²",
         answerD: "mcΔθ",
         correctAnswer: "A"
    }
]
let myForm = document.getElementById("myForm");
let currentQuestion;
  
window.onload=function(){
   
  
    myForm.addEventListener("submit",(event)=>{
        
        event.preventDefault();                                 //Stops the page refreshing when you press submit
        specPoint = document.querySelector("#specPoint").value  //Takes the value in the text input from the html
        console.log(specPoint)                                  //Prints the value, just to check it's working
        const filterArrayOfObjects = (array, key, value) =>     //Defines a new constant using a function (arrow method)
        array.filter(object => object[key] === value);          //This is the function. It filters a given array use a key and a value.


        const filteredArray = filterArrayOfObjects(questionBank, "subChapter", specPoint);    //This this takes the predefined constant, which is a function, where the parameters are now defined.

        console.log(filteredArray);                             //Prints the new, filtered array and IT FINALLY WORKED

        const selectRandomObject = array => array[Math.floor(Math.random() * array.length)];
        const randomObject = selectRandomObject(filteredArray); //This code selects a random object from the filtered array and stores it into the randomObject variable

        const questionElement = document.getElementById("questionText"); //This code, and the code below loads the question and answers text into the HTML from the array of objects
        questionElement.innerHTML = randomObject.questionText;

        const answerAElement = document.getElementById("answerA");
        answerAElement.innerHTML = randomObject.answerA;

        const answerBElement = document.getElementById("answerB");
        answerBElement.innerHTML = randomObject.answerB;

        const answerCElement = document.getElementById("answerC");
        answerCElement.innerHTML = randomObject.answerC;

        const answerDElement = document.getElementById("answerD");
        answerDElement.innerHTML = randomObject.answerD;

        const container = document.getElementById("container"); //This loads in an answer box for the user
        if (container) {
            if (container.childNodes.length === 0) {            //This nifty bit will mean the answer box will only load if the container is empty, meaning it will only load once.
        const label = document.createElement("label");
        label.innerHTML = "My Answer: ";
        container.appendChild(label);

        const input = document.createElement("input");
        input.type = "text";
        input.className = "w-100 border border-black rounded-lg ps-1";
        container.appendChild(input);

        const button = document.createElement("button");
        button.innerHTML = "Submit";
        button.className = "bg-cyan-500 p-1.5 text-gray-50 rounded-lg";
        button.id = "checkAnswer"
        container.appendChild(button);       

        currentQuestion = randomObject
  }
}
})
}
function checkAnswer() {
    const userAnswer = document.querySelector("#container input").value;
    if (userAnswer.toUpperCase() === currentQuestion.correctAnswer) {
    console.log("Correct!");
    const feedback = document.createElement("div");
    feedback.innerHTML = "Correct! Well done!";
    container.appendChild(feedback);
    } else {
    console.log("Incorrect!");
    const feedback = document.createElement("div");
    feedback.innerHTML = "Incorrect! Try again!";
    container.appendChild(feedback);
    }
  }
  
  document.addEventListener("click", function(event) {
    if (event.target.id === "checkAnswer") {
      checkAnswer();
    }
  });