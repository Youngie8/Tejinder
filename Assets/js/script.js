const card = document.getElementsByClassName("card");

for(var i = 0; i < card.length; i++){
    card[i].addEventListener("mouseover", function(){
        this.classList.add("mouse-hover");
    });
    card[i].addEventListener("mouseout", function(){
        this.classList.remove("mouse-hover");
    });
}





















//PROMPT, ALERT, CONSOLE.LOG
/*let name = prompt("Hello there, what do you want Tejinder to address you as?")
alert(`Welcome to Tejinder! ${name}`)
console.log(`WELCOME ${name}`)
// IF, ELSE IF, ELSE
let age = prompt('please input your age')
if (age < 18 ){
    alert('sorry you are not allowed here')
}
else if(age<21){
    alert('You are allowed to view this webpage. However, you are considered to young to participate in challenges  ')
}
else(alert('Welcome '+name + 'youre qualified to view and participate here'))

var secretNumber = 5;
var stringGuess = prompt('Guess a number between 3 and 7!');
var guess = Number(stringGuess);
if (guess === secretNumber){
    console.log('You got it right!!!')
}
else if( guess < secretNumber){
    console.log('Guess too small!')
}
else{
    console.log('Guess too large!!')
}
//WHILE LOOP
var count = 4;
while(count < 26){
    console.log(`Count is: ${count}`);
    count+=2
}
console.log('PRINT ALL NUMBERS BTW -10 AND 19')
var numeric = -11;
while (numeric < 20){
    console.log(`Numeric given is ${numeric}`)
    numeric++
}
var mod = 4
while (mod<= 50){
    if (mod % 5 ===0 && mod % 3 === 0){
        console.log(mod)
    }
    mod+=1
}*/