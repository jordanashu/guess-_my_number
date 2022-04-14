//const guess=document.querySelector('.num').value;
//console.log(guess)



const check=Math.trunc(Math.random()*10)+1;

console.log(check)


let score=10;



const b=document.querySelector('.btn').addEventListener('click' ,function () {
    

    const guess=document.querySelector('.num').value;
    console.log(guess)

   
    


if(!guess)
{
    document.querySelector('.msg').textContent='🤔Guess ';  
}
else if(guess==check)
{
    
  document.querySelector('.num').textContent=check;

document.querySelector('.msg').textContent='😃You Win 🦸 ';

document.querySelector('body').style.backgroundColor='green';

score++;
document.querySelector('.score').textContent='score:'+score;


}

else if(guess>check)

{
    console.log(document.querySelector('.msg').textContent=`Too High ${guess}`);
  
    
    score--;
     document.querySelector('.score').textContent='score:'+score;
     
}


else if(guess<check)

{
    console.log(document.querySelector('.msg').textContent=`Too Low ${guess}`);
  
    
  
    score--;
    document.querySelector('.score').textContent='score:'+score;
}








});



document.querySelector('.re').addEventListener('click' ,function () {

let socre=10;
   const  check=Math.trunc(Math.random()*10)+1;

   
    document.querySelector('.msg').textContent='🤔Guess ';
   
    document.querySelector('.score').textContent='';

    document.querySelector('.num').value='';

    
    
document.querySelector('body').style.backgroundColor='black';


})