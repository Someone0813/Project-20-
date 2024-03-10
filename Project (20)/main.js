const QuestionNumberEl = document.querySelector(".QuestionNumber");
const QuestionEl = document.querySelector(".Question");
const TimeEl = document.querySelector(".Time");
const Test1El = document.getElementById("Test1");
const Test2El = document.getElementById("Test2");
const Test3El = document.getElementById("Test3");
const Test4El = document.getElementById("Test4");
const Answer1El = document.getElementById("Answer1");
const Answer2El = document.getElementById("Answer2");
const Answer3El = document.getElementById("Answer3");
const Answer4El = document.getElementById("Answer4");
const Choosebg1El = document.getElementById("Choosebg1");
const Choosebg2El = document.getElementById("Choosebg2");
const Choosebg3El = document.getElementById("Choosebg3");
const Choosebg4El = document.getElementById("Choosebg4");
const Choosetx1El = document.getElementById("Choosetx1");
const Choosetx2El = document.getElementById("Choosetx2");
const Choosetx3El = document.getElementById("Choosetx3");
const Choosetx4El = document.getElementById("Choosetx4");
const MainBtnEl = document.querySelector(".Main-Btn");
const Right1El = document.querySelector(".Right1");
const Right2El = document.querySelector(".Right2");
const Right3El = document.querySelector(".Right3");
const Right4El = document.querySelector(".Right4");
const Wrong1El = document.querySelector(".Wrong1");
const Wrong2El = document.querySelector(".Wrong2");
const Wrong3El = document.querySelector(".Wrong3");
const Wrong4El = document.querySelector(".Wrong4");

Test1El.addEventListener("click", function () {
  Test1El.style.border = "3px solid #A729F5";
  Choosebg1El.style.backgroundColor = "#A729F5";
  Choosetx1El.style.color = "white";
  Test2El.style.border = "none";
  Choosebg2El.style.backgroundColor = "#F4F6FA";
  Choosetx2El.style.color = "#626C7F";
  Test3El.style.border = "none";
  Choosebg3El.style.backgroundColor = "#F4F6FA";
  Choosetx3El.style.color = "#626C7F";
  Test4El.style.border = "none";
  Choosebg4El.style.backgroundColor = "#F4F6FA";
  Choosetx4El.style.color = "#626C7F";
});
Test2El.addEventListener("click", function () {
  Test2El.style.border = "3px solid #A729F5";
  Choosebg2El.style.backgroundColor = "#A729F5";
  Choosetx2El.style.color = "white";
  Test1El.style.border = "none";
  Choosebg1El.style.backgroundColor = "#F4F6FA";
  Choosetx1El.style.color = "#626C7F";
  Test3El.style.border = "none";
  Choosebg3El.style.backgroundColor = "#F4F6FA";
  Choosetx3El.style.color = "#626C7F";
  Test4El.style.border = "none";
  Choosebg4El.style.backgroundColor = "#F4F6FA";
  Choosetx4El.style.color = "#626C7F";
});
Test3El.addEventListener("click", function () {
  Test3El.style.border = "3px solid #A729F5";
  Choosebg3El.style.backgroundColor = "#A729F5";
  Choosetx3El.style.color = "white";
  Test1El.style.border = "none";
  Choosebg1El.style.backgroundColor = "#F4F6FA";
  Choosetx1El.style.color = "#626C7F";
  Test2El.style.border = "none";
  Choosebg2El.style.backgroundColor = "#F4F6FA";
  Choosetx2El.style.color = "#626C7F";
  Test4El.style.border = "none";
  Choosebg4El.style.backgroundColor = "#F4F6FA";
  Choosetx4El.style.color = "#626C7F";
});
Test4El.addEventListener("click", function () {
  Test4El.style.border = "3px solid #A729F5";
  Choosebg4El.style.backgroundColor = "#A729F5";
  Choosetx4El.style.color = "white";
  Test1El.style.border = "none";
  Choosebg1El.style.backgroundColor = "#F4F6FA";
  Choosetx1El.style.color = "#626C7F";
  Test2El.style.border = "none";
  Choosebg2El.style.backgroundColor = "#F4F6FA";
  Choosetx2El.style.color = "#626C7F";
  Test3El.style.border = "none";
  Choosebg3El.style.backgroundColor = "#F4F6FA";
  Choosetx3El.style.color = "#626C7F";
});

MainBtnEl.addEventListener('click', function(){
    if(Choosebg1El.style.backgroundColor = "#A729F5"){
        Test1El.style.border = "3px solid #26D782";
        Choosebg1El.style.backgroundColor = "#26D782"
        Right1El.style.display = "flex";
    }
});