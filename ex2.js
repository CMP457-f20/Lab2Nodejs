const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min +1)) + min; //return random temp
}

var sensorValues = {temp:randomNumber(18,30), opclose:Math.random() >= 0.5}; //objects

if (sensorValues.temp >= 25)
{
   console.log("It is too hot... AC switched on");
         if (sensorValues.opclose)
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

else  if (sensorValues.temp < 25)
{
    console.log("It is too cold.. AC switched off")
        if (sensorValues.opclose)
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
console.log("Temperature: " + sensorValues.temp + "C");
console.log("Lights-on: " + sensorValues.opclose);