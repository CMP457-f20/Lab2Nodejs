const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min +1)) + min;
}

var i;
var arr1 = [];

for (i=0;i<20;i++){
   var temp = randomNumber(18, 30); //for temperature
   arr1.push(temp);
}
   
var opclose = randomNumber(0,1);  //for door close and open
console.log(arr1);
var maxVal = Math.max(...arr1);
console.log(maxVal);
console.log("The room tempterature is "+ temp);


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
 
