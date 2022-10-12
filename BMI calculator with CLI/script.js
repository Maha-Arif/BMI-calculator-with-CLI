//convert pounds into kgs
function weightConverter(valNum) {
    document.getElementById("outputKGrams").innerHTML = valNum * 0.45;
  }
 //convert inches into centimeters
  function weightConverter2(valNum){
    document.getElementById("outputcenti").innerHTML = valNum *2.54;
  }
//get values and create bmi formula
  function Calculate(){
    var height = document.getElementById("outputcenti").innerHTML;
    var weight = document.getElementById("outputKGrams").innerHTML;
//convert centimeters into meters 
    var result = (weight / ((height * height)/10000)).toFixed(2);

    if(!isNaN(result)){
        document.getElementById("bmi-output").innerHTML = result;
        if(result < 18.5){
            document.getElementById("bmi-status").innerHTML = "Underweight";
        }
        else if(result < 25){
            document.getElementById("bmi-status").innerHTML = "Healthy";
        }
        else if(result < 30){
            document.getElementById("bmi-status").innerHTML = "Overweight";
        }
        else{
            document.getElementById("bmi-status").innerHTML = "Obesity";
        }
    }
}