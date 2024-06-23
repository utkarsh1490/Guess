let limit = prompt("Enter the max : ");
let random = Math.floor(Math.random()*limit)+1;
let guess;
while(1){

    guess = prompt("Enter your guess : ");

    if(guess=="quit"){
        console.log("You quitted the game");
        break;
    } else if(guess==random){
        console.log(`You have entered the right value, which is, ${guess}`);
        break;
    }
    else{
        if(guess>random){
            alert("You have entered larger value");
        }
        else{
            alert("You have entered smaller value");
        }
        console.log("Your guess is not correct. Please try again!!...")
    }

    
}