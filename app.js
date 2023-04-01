let DisplaycomputersChoice = document.getElementById('computer-choice')
let DisplayusersChoice = document.getElementById('users-choice')
let displayresult = document.getElementById ('result')

let possiblechoices = document.querySelectorAll('button')
let userchoice
let computerchoice 
let Result



// Getting User choice 
 possiblechoices.forEach(choice => choice.addEventListener('click' , (e)=>{
     userchoice = e.target.id
     console.log(userchoice)
     DisplayusersChoice.innerHTML = userchoice
     generateComputerChoice()
     getresult()

}) )



// Getting computer's choice
function generateComputerChoice () {
     const random =  Math.floor( Math.random() * 3 )  + 1
     console.log(random)
     if ( random === 1 )
     {
          computerchoice = 'rock'
     }
     if ( random === 2 )
     {
          computerchoice = 'paper'
     }
     if ( random === 3 )
     {
          computerchoice = 'scissors'
     }

     DisplaycomputersChoice.innerHTML = computerchoice

}

// Getting the result

function getresult()
{
     if (userchoice === computerchoice)
     {
          Result = `It's a Draw`
     }

     if  ( userchoice =="rock" && computerchoice == 'scissors')
     {
          Result = `You Win!!`
     }
     if (userchoice == 'scissors' && computerchoice ==' paper')
     {
         Result = `You Win !!`
     }
     if (userchoice == 'paper'  && computerchoice == 'scissors')
     {
          Result = `You lost `
     }
     if ( userchoice == 'scissors' && computerchoice == 'rock')
     {
          Result = ` You lost`
     }
     if (userchoice == 'paper' && computerchoice =='scissors')
     {
          Result = `You lost`
     }
     if (userchoice == 'scissors' && computerchoice == 'paper')
     {
          Result= `You Win !!`
     }
     displayresult.innerHTML =`<b>${Result}</b>`

}
