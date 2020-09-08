const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min +1)) + min;
}

var i;
var arr1 = []; //array declaration

for (i=0;i<20;i++){
   var temp = randomNumber(18, 30); //for temperature
   arr1.push(temp);
}
   
var opclose = Math.random() >= 0.5;  //for door close and open

var maxVal = Math.max(...arr1);




if (maxVal >= 25)
{
   console.log("It is too hot... AC switched on");
         if (opclose)
            {
                console.log("Someone walked in...");
                console.log("Welcome home.. Lights switched on");
            }
            else 
            {
                console.log("Someone left...");
                console.log("Bye bye! Lights switched off");
            }

}

else  if (maxVal < 25)
{
    
    console.log("It is too cold.. AC switched off");
        if (opclose)
        {
            console.log("Someone walked in...");
            console.log("Welcome.. Lights switched on");
        }
        else 
        {
            console.log("Someone left...");
            console.log("Bye bye! Lights switched off");
        }
}

console.log("The sensor values are");
console.log("Temperature: " + maxVal + "C");
console.log("Lights-on: " + opclose);
 
