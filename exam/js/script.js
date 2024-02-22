let name = document.querySelector(".input01");
let age = document.querySelector(".input02");
let height = document.querySelector(".input03");
let weight = document.querySelector(".input04");
let error01 = document.querySelector(".error01");
let error02 = document.querySelector(".error02");
let error03 = document.querySelector(".error03");
let error04 = document.querySelector(".error04");
let button = document.querySelector(".button");
let result = document.querySelector(".result");
let message = document.querySelector(".message");

button.addEventListener("click", function(){
    if(height.value == ""){
        error01.innerHTML ="Enter your name";
      }else{
        error01.innerHTML ="";
      }
    if(height.value == ""){
        error02.innerHTML ="Enter Your age";
    }else{
        error02.innerHTML ="";
    }
    if(height.value == ""){
      error03.innerHTML ="Enter Your Height (Inch)";
    }else{
      error03.innerHTML ="";
    }
    if(weight.value == ""){
      error04.innerHTML ="Enter Your Weight (KG)";
    }else{
      error04.innerHTML ="";
    }


    if (!height.value == "" && !weight.value == "") {
        let bmi =((weight.value * 2.20462) / ((height.value * height.value ))) * 703
        
        result.innerHTML = bmi.toFixed(2)

        if (bmi >= 18.5 && bmi <= 24.9) {
          message.innerHTML = "[Healthy-weight]";
        } else if (bmi >= 25 && bmi <= 29.9) {
          message.innerHTML = "[Overweight]";
        } else if (bmi >= 30) {
          message.innerHTML = "[Obese]";
        } else {
          message.innerHTML = "[Underweight]";
        }
    }
  
  })



  