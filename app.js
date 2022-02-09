// function calculateBmi(a, b) {
//   console.log(a + b);
// }

// function calculateBmi() {
//   const name = document.getElementById("name");
//   const heightVal = document.getElementById("height");
//   const weightVal = document.getElementById("weight");

//   const height =  parseFloat(heightVal.value);
//   const weight = parseFloat(weightVal.value);

//   let bmi = weight / (height * height);
//   console.log(bmi)
// }


function calculateBmi() {
  const name = document.getElementById("name");
  const weightVal = document.getElementById("weight");
  const heightVal = document.getElementById("height");
  const result = document.querySelector("#result");

  const height = parseFloat(heightVal.value);
  const weight = parseFloat(weightVal.value);

  let bmi = (weight / ( height*height )).toFixed(1);

  if (bmi <= 18.5 ) {
    status = "Underweight"
    document.getElementById("result").style.fontcolor = 'blue';
    // result.addEventListener('Underweight',() => content.style.color = 'red');
  } else if (bmi >18.5 && bmi <= 24.9) {
    status  = "Normal"
    document.getElementById("result").style.fontcolor = 'green';
  } else if (bmi >  25 && bmi <= 29.9) {
    status = "Owerweght"
    document.getElementById("result").style.fontcolor = 'yellow';
  } else {
    status = "Obese"
    document.getElementById("result").style.fontcolor = 'red';
  }

  result.textContent = (`${name.value}'s BMI is ${bmi} and
   Your status is "${status}"`);
}







// function calculateBmi(name, weight , height) {
//   let bmi = weight / (height * height);
//   console.log( ` ${name}'s BMI is ${bmi} ` )
// }

// calculateBmi("Aziz" , 88 , 1.5);
// calculateBmi("Sherali", 98 , 1.6);
// calculateBmi("Suxrob", 67 , 1.70);





// function calculateBmi(name, weight, height) {
//   let bmi = weight / (height * height);
//   console.log(`${name} 's BMI is ${bmi}`)
// }

// calculateBmi("Sherali", 85, 2.0);
// calculateBmi("Aziz" , 65 , 1.7);
// calculateBmi("Tolib" , 60 , 1.65);




 // //DOM = document object model

// const p = document.getElementById("p1");
// const button = document.querySelector("#click");
// const input = document.querySelector(".input");
// //p.innerHTML = "<span class='lorem'> ladaaedadade </span>";


// console.log(input.value);
// console.log(p.textContent);
// //p.textContent = "this is just a text"
// console.log(p);
// console.log(button);
// console.log(input);
// //console.log(name);