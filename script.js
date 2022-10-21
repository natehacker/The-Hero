let valueOfPrompt = prompt("BATMAN OR SUPERMAN")
console.log(valueOfPrompt)
alert(` ${valueOfPrompt} we have to move quick things are getting bad`)

let valuePrompt = prompt("The city is under attack will you help batman take back the city ")
alert(` The time is now lets get suited up`)

// charater must insert there age 
let age = () =>
alert(`${age}!+ wow you are old enough to play`)

//using the var variable and asking the character where they would like to go
let place = prompt("CAR OR BIKE" )
console.log(place)
//letting the character know they have arrived!
alert(`you have arrived  time to save the city`)
// locations for places characters can go to

//  getting the 2d context from html
let context = c.getContext("2d");
// batman  picture image with src Tag
    let nateBatman = new Image();
    nateBatman.src = "NATE.PNG";
    //cordinates for batman 
    nateBatmanX = nateBatmanDY = score = bestScore = 0; //cordinates for the bird
    interval = nateBatmanSize = pipeWidth = topPipeBottomY = 30;
    nateBatmanY = pipeGap = 200;
    canvasSize = pipeX = 400;
    c.onclick = () => (nateBatmanDY = 9) ;// click the scree to make batman fly
    setInterval(() => {
      context.fillStyle = "red";//canavs color
      context.fillRect(0,0,canvasSize,canvasSize); // covering the whole canvas with the color red 
      nateBatmanY -= nateBatmanDY -= 0.5; // Gravity in which the bird drops  and moves vertically 
      context.drawImage(nateBatman, nateBatmanX, nateBatmanY, nateBatmanSize * (450/350), nateBatmanSize); // drawing batman image 
      context.fillStyle = "black";
      pipeX -= 8; // Move pipe
      pipeX < -pipeWidth && // checking if the Pipe went off screen then implents new pipe 
        ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random())); // Reset pipe and randomize gap. 
      context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); // Drawing the top pipe
      context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize); // Draw bottom pipe
      context.fillStyle = "black";
      context.fillText(score++, 9, 25); // Increase and draw score
      bestScore = bestScore < score ? score : bestScore; // New best score
      context.fillText(`Best: ${bestScore}`, 9, 50); // Draw best score
      (((nateBatmanY < topPipeBottomY || nateBatmanY > topPipeBottomY + pipeGap) && pipeX < nateSize * (620/450))// batman hit pipe?
       || nateBatmanY > canvasSize) && // batman falls off screen
      ((nateBatmanDY = 0), (nateBatmanY = 200), (pipeX = canvasSize), (score = 0)); // batman died
    }, interval)