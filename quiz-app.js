      function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}
   
  const mathQuestions = [
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  },
  {
    question: "5 * 3 = ?",
    options: ["12", "14", "15", "16"],
    correctAnswer: "15"
  },
  {
    question: "7 - 1 = ?",
    options: ["5", "6", "8", "9"],
    correctAnswer: "6"
  },
  {
    question: "9 / 3 = ?",
    options: ["2", "3", "4", "6"],
    correctAnswer: "3"
  },
  {
    question: "11 + 1 = ?",
    options: ["10", "11", "12", "13"],
    correctAnswer: "12"
  },
  {
    question: "8 * 9 = ?",
    options: ["64", "72", "81", "90"],
    correctAnswer: "72"
  },
  {
    question: "4 * 6 = ?",
    options: ["20", "22", "24", "26"],
    correctAnswer: "24"
  },
  {
    question: "15 - 9 = ?",
    options: ["4", "5", "6", "8"],
    correctAnswer: "6"
  },
  {
    question: "6 + 8 = ?",
    options: ["12", "13", "14", "15"],
    correctAnswer: "14"
  },
  {
    question: "9 * 8 = ?",
    options: ["64", "72", "81", "90"],
    correctAnswer: "72"
  },
  {
    question: "24 / 4 = ?",
    options: ["4", "5", "6", "8"],
    correctAnswer: "6"
  },
  {
    question: "7 + 2 = ?",
    options: ["8", "9", "10", "11"],
    correctAnswer: "9"
  },
  {
    question: "3 * 9 = ?",
    options: ["24", "26", "27", "30"],
    correctAnswer: "27"
  },
  {
    question: "16 - 7 = ?",
    options: ["8", "9", "10", "11"],
    correctAnswer: "9"
  },
  {
    question: "5 + 4 = ?",
    options: ["8", "9", "10", "11"],
    correctAnswer: "9"
  },
  {
    question: "2 * 9 = ?",
    options: ["16", "17", "18", "19"],
    correctAnswer: "18"
  },
  {
    question: "11 - 4 = ?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7"
  },
  {
    question: "8 + 1 = ?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "9"
  },
  {
    question: "6 * 8 = ?",
    options: ["40", "42", "48", "50"],
    correctAnswer: "48"
  },
  {
    question: "9 - 3 = ?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "6"
  },
  {
    question: "4 + 9 = ?",
    options: ["11", "12", "13", "14"],
    correctAnswer: "13"
  },
  {
    question: "7 * 6 = ?",
    options: ["38", "40", "42", "44"],
    correctAnswer: "42"
  },
  {
    question: "15 + 2 = ?",
    options: ["16", "17", "18", "19"],
    correctAnswer: "17"
  },
  {
    question: "24 / 6 = ?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  },
  {
    question: "9 + 6 = ?",
    options: ["13", "14", "15", "16"],
    correctAnswer: "15"
  },
  {
    question: "8 * 6 = ?",
    options: ["40", "42", "46", "48"],
    correctAnswer: "48"
  },
  {
    question: "5 - 2 = ?",
    options: ["2", "3", "4", "6"],
    correctAnswer: "3"
  },
  {
    question: "4 * 9 = ?",
    options: ["32", "35", "36", "40"],
    correctAnswer: "36"
  },
  {
    question: "7 + 5 = ?",
    options: ["10", "11", "12", "13"],
    correctAnswer: "12"
  },
  {
    question: "18 / 3 = ?",
    options: ["5", "6", "7", "9"],
    correctAnswer: "6"
  }
];
    
let nexQ = 0;
let currentQ = 0;
let score = 0;
   
function  generateQ(){
 [mathQuestions[nexQ]].forEach(function(value){
    let html = `
     <div class="subject">
          <span class="change-sub">Math</span> quiz
      </div>
      <div class="q-a">
          <div class="question">
            ${value.question} 
          </div>
        <div class="answers ans-a" data-ans-a="${value.options[0]}">  
           A. ${value.options[0]}
          </div>
          <div class="answers ans-b"  data-ans-b="${value.options[0]} ">
           B. ${value.options[1]}
          </div>
          <div class="answers ans-c"  data-ans-c="${value.options[0]}">
           C. ${value.options[2]}
          </div>
          <div class="answers ans-d"  data-ans-d="${value.options[0]}">
           D. ${value.options[3]}
          </div>
      </div>
    `
   document.querySelector(".Q-A-section").innerHTML =html;

})
document.querySelectorAll(".answers").forEach((ans)=>{
  ans.addEventListener("click",()=>{
    const ansA = ans.dataset.ansA;
    const ansB = ans.dataset.ansB;
    const ansC = ans.dataset.ansC;
    const ansD = ans.dataset.ansD;
    console.log(ansA);
    console.log(ansB);
    console.log(ansC);
    console.log(ansD);

    
    [mathQuestions[nexQ]].forEach((index)=>{
      if(ansA || ansB || ansC || ansD   === index.correctAnswer){
        
      }
    })
    nexQ ++;
    generateQ()
  })
})
}
  
generateQ();

document.querySelector(".question-number").innerHTML = ``
 


// console.log([mathQuestions[2]]);
