// intro game
alert('Welcome to Eriks page!');
var userName = prompt('What is your name?');
  console.log('unknown user entered their name as ' + userName);
  alert('Nice to meet you! ' + userName);
  alert(userName + ' please answer the following questions with "y" for yes and "n" for no')

//question 1--forced no
var answerNo = prompt(userName + ' Did you know Erik Played in a band?').toUpperCase();
if (answerNo === 'N'){
  alert('He played bass, back in high school.');
  console.log(userName + ' now Knows you played Bass, in high school Q#1' )
}else{
   alert('You must be a fan!');
   console.log(userName + ' Knows you suck at Bass. Q#1');
};

//question2
var answer2 = prompt(userName + ' Do you think Erik likes hiking?').toUpperCase();
if (answer2 === 'Y'){
   alert('Wrong he does not');
   console.log(userName + ' Said Yes to question #2')
}else if(answer2 == 'N') {
    alert('Great Work! ' + userName + ', he does not.');
    console.log(userName + ' picked No.');
}

//question3
var answer3 = prompt(userName + ' Do you think Erik likes to cook?').toUpperCase();
if (answer3 ==='Y'){
   alert("you're correct");
   console.log(userName + ' Said Yes to question #3')
}else if(answer3 === 'N') {
    alert('Sorry ' + userName + ", but you're wrong.");
    console.log(userName + ' picked No. Q#3');
}

//question4
var answer4 = prompt(userName + ' Do you think Erik likes to code?').toUpperCase();
if (answer4 === 'Y'){
   alert("You're good at this " + userName);
   console.log(userName + ' Said Yes to question #4')
}else if(answer4 === 'N') {
    alert('Sorry ' + userName + ", but you're wrong.");
    console.log(userName + ' picked No. Q#4');
}

//question5
var answer5 = prompt(userName + ' Do you think Erik likes to play video games?').toUpperCase();
if (answer5 === 'Y'){
  alert('Wrong! ' + userName);
  console.log(userName + ' Said Yes to question #5')
  alert('Just Kidding ' + userName + ', you got that one right!');
  console.log('bad joke deployed..');
}else if(answer5 === 'N') {
    alert('Sorry ' + userName + ", but you're wrong.");
    console.log(userName + ' picked No. Q#5');
}
