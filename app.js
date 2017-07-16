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
function q1(){
var answerNo = prompt(userName + ' did Erik Play in a band?').toUpperCase();
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
}
q1();

//question2
function q2(){
  var answer2 = prompt(userName + ' do you think Erik likes hiking?').toUpperCase();
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
}
q2();

//question3
function q3(){
  var answer3 = prompt(userName + ' do you think Erik likes to cook?').toUpperCase();
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
}
q3();

//question4
function q4(){
  var answer4 = prompt(userName + ' do you think Erik likes to code?').toUpperCase();
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
}
q4();

//question5
function q5(){
  var answer5 = prompt(userName + ' do you think Erik likes to play video games?').toUpperCase();
  if (answer5 === 'Y' || answer5 === 'YES'){
      alert('Wrong! ' + userName);
      console.log(userName + ' Said Yes to question #5')
      alert('Just kidding ' + userName + ', you got that one right!');
      console.log('bad joke deployed..');
      scoreTotal.push('q5');
      console.log('q5 pushed to total score');
  } else if(answer5 === 'N'|| answer5 === 'NO') {
      alert('Sorry ' + userName + ', but you\'re wrong.');
      console.log(userName + ' picked No. Q#5');
  }
}
q5();

//question 6
function q6(){
  alert('Okay ' + userName + ' you will have 4 trys to guess Erik\'s favorit number.');
  var guessNum = 0;
  var favNum = 8;
  while(guessNum < 4){
  var userAns = parseInt(prompt('What\'s Erik\'s favorit number? *hint its between 1 and 20'));
      if(userAns === favNum){
        alert(userName +' you guessed correct!');
        console.log('q6 done');
        scoreTotal.push('q6');
        guessNum = 5;

   } else if(userAns > favNum){
          alert('Too high');
          console.log('Too high');
          guessNum++;

      } else if(userAns < favNum){
        alert('Too Low!');
        console.log(userName + 'guessed your favorit number');
        guessNum++;
      }
  }
}
q6();

//Question7
function q7(){
  var attpLeft = 6;
  var fruit = ['ORANGE', 'PEAR', 'TOMATO'];
  while( attpLeft > 0){
  var userGes = prompt('What\'s Erik\'s favorit fruit?').toUpperCase();
      for(var i = 0; i < fruit.length; i++){
        if(userGes === fruit[i]){
        alert(userGes + ' is correct!!');
        scoreTotal.push('Q7');
        attpLeft = -2;
        break;
      }
    }
    if( attpLeft > 0 ){
      attpLeft--;
      alert('Wrong! ' + attpLeft + ' try\'s left');
    }
    if ( attpLeft === 0 ) {
      alert('RIP GG!');
      console.log(usreName + ' failed to guess Q7');
     }
   }
 }
q7();

//Total score
 alert(userName + ' thank\s for playing. Your score is ' + scoreTotal.length + ' out of 7');
