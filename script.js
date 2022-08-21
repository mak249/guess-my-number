
'use strict ';

let secretnumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;
const displaymessage =function(messsage){
    document.querySelector('.message').textContent = messsage;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
// document.querySelector('.message').textContent = '⛔️ No number!';

        displaymessage('⛔️ No number!');
    




    //when players wins
    } else if(guess === secretnumber){
        // document.querySelector('.message').textContent = "correct number meri jaan 🎉🎊"
        displaymessage('correct number meri jaan 🎉🎊');
        document.querySelector('.number').textContent = secretnumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;

        }

    } else if ( guess!== secretnumber){
        if( score>1){
        // document.querySelector('.message').textContent = guess > secretnumber ? 'too high' : 'too low';
        displaymessage(guess > secretnumber ? 'too high' : 'too low');
        score--;
        document.querySelector('.score').textContent = score;
        }else {
            // document.querySelector('.message').textContent  = " you lose the game 😭😖"
        displaymessage(" you lose the game 😭😖");
        document.querySelector('.score').textContent = 0;
    }

}


});



    // when too high 
//     else if (guess > secretnumber ){
//         if(score > 1){

//         document.querySelector('.message').textContent = "too high";
//         score--;
    
//         } else {
//             document.querySelector('.message').textContent  = " you lose the game 😭😖"
//         } 

//         document.querySelector('.score').textContent = 0;
//         //when too low

//     }else if (guess < secretnumber){
//         if(score > 1){
    
//         document.querySelector('.message').textContent = "too low"
//         score--;    
//         document.querySelector('.score').textContent = score;
            
//             } else {
//                 document.querySelector('.message').textContent  = " you lose the game     😭😖"
    
//         document.querySelector('.score').textContent = 0;
//     }
// }
// });



document.querySelector('.again').addEventListener('click',function(){



    score = 20;
    secretnumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'start guesing';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});



