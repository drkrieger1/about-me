'use strict';
//Total score
var scoreTotal = [];
// intro game
alert('Welcome to Eriks page!');
var userName = prompt('What is your name?');
  console.log('unknown user entered their name as ' + userName);
  alert('Nice to meet you! ' + userName);
  alert(userName + ' please answer the following questions with yes or no');

//question 1
var answerNo = prompt(userName + ' Did Erik Play in a band?').toUpperCase();
if(answerNo === 'Y'|| answerNo === 'YES'){
  alert('Good Work, he did!');
  console.log(userName + ' now Knows you played Bass, in high school Q#1' )
  scoreTotal.push('q1');
  console.log('q1 pushed to Top score')
} else if(answerNo === 'N' || answerNo === 'NO'){
   alert('He played bass, back in high school.');
   console.log(userName + ' Knows you suck at Bass. Q#1');
} else {
    alert('Please use the right format to answer the question');
    console.log('Q1 wrong input');
}

//question2
var answer2 = prompt(userName + ' Do you think Erik likes hiking?').toUpperCase();
if(answer2 === 'Y' || answer2 === 'YES'){
   alert('Wrong he does not');
   console.log(userName + ' Said Yes to question #2')
} else if(answer2 === 'N' || answer2 === 'NO'){
    alert('Great Work! ' + userName + ', he does not.');
    console.log(userName + ' picked No.');
    scoreTotal.push('q2');
    console.log('q2 pushed to total score');
} else {
    alert('Please use the right format to answer the question');
    console.log('Q2 wrong input');
}

//question3
var answer3 = prompt(userName + ' Do you think Erik likes to cook?').toUpperCase();
if (answer3 === 'Y' || answer3 === 'YES'){
   alert('you\'re correct');
   console.log(userName + ' Said Yes to question #3');
   scoreTotal.push('q3');
   console.log('q3 pushed to total score');
} else if(answer3 === 'N' || answer3 === 'NO') {
    alert('Sorry ' + userName + ', but you\'re wrong.');
    console.log(userName + ' picked No. Q#3');
} else {
    alert('Please use the right format to answer the question');
    console.log('Q3 wrong input');
}

//question4
var answer4 = prompt(userName + ' Do you think Erik likes to code?').toUpperCase();
if (answer4 === 'Y' || answer4 === 'YES'){
   alert( 'Great!.. work!! ' + userName + '!');
   console.log(userName + ' Said Yes to question #4')
   scoreTotal.push('q4');
   console.log('q4 pushed to total score');
} else if(answer4 === 'N'|| answer4 === 'NO') {
    alert('Sorry ' + userName + ', but you\'re wrong.');
    console.log(userName + ' picked No. Q#4');
} else {
    alert('Please use the right format to answer the question');
    console.log('Q4 wrong input');
}

//question5
var answer5 = prompt(userName + ' Do you think Erik likes to play video games?').toUpperCase();
if (answer5 === 'Y' || answer5 === 'YES'){
    alert('Wrong! ' + userName);
    console.log(userName + ' Said Yes to question #5')
    alert('Just Kidding ' + userName + ', you got that one right!');
    console.log('bad joke deployed..');
    scoreTotal.push('q5');
    console.log('q5 pushed to total score');
} else if(answer5 === 'N'|| answer5 === 'NO') {
    alert('Sorry ' + userName + ', but you\'re wrong.');
    console.log(userName + ' picked No. Q#5');
}

//question 6
alert('Okay ' + userName + ' you will have 4 trys to guess Erik\'s favorit number.');
var i = 0;
var favNum = 8;
while(i < 4){
var answer6 = parseInt(prompt('What\'s Erik\'s favorit number? *hint its between 1 and 20'));
    if(answer6 === favNum){
      alert(userName +' you guessed too correct!');
      console.log('q6 done');
      scoreTotal.push('q6');
      break;

 } else if(answer6 > favNum){
        alert('Too high');
        console.log('Too high');
        i++;
        // atmp--;
    } else if(answer6 < favNum){
      alert('Too Low!');
      console.log(userName + 'guessed your favorit number');
      i++;
    }
}
//Question7
var x = 6;
var fruit = ['ORANGE', 'PEAR', 'TOMATO'];
while( x > 0){
var answer7 = prompt('What\'s Erik\'s favorit fruit?').toUpperCase();
    for(var i = 0; i < fruit.length; i++){
      if(answer7 === fruit[i]){
      alert(answer7 + ' is correct!!');
      scoreTotal.push('Q7');
      x = -2;
      break;
    }
  }
  if( x > 0 ){
    x--;
    alert('Sorry try agian [' + x + ']try\'s left');
  }
}


//Total score
 alert(userName + ' thank\s for playing. Your  Total score is ' + scoreTotal.length + ' out of 7');
