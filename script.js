
document.querySelector('.cross').style.display='none';

document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo')
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display ='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        (document.querySelector('.sidebar').classList.contains('sidebargo'))
        {
         document.querySelector('.cross').style.display ='inline'
         document.querySelector('.ham').style.display='none'

        }
    }
})
document.querySelector('.skillcont').style.display='flex';
document.querySelector('.educont').style.display='none';
document.querySelector('.skill').style.background='rgb(199, 103, 19)';
document.querySelector('.skill').style.color='white'
document.querySelector('.skill').addEventListener("click",()=>{
    document.querySelector('.educont').style.display='none'
    document.querySelector('.skillcont').style.display='flex'
    document.querySelector('.skill').style.background='rgb(199, 103, 19)'
    document.querySelector('.skill').style.color='white'
    document.querySelector('.education').style.background='transparent'
    document.querySelector('.education').style.color='#7a7988'
    

})


document.querySelector('.education').addEventListener("click",()=>{
    
    document.querySelector('.skillcont').style.display='none'
    document.querySelector('.educont').style.display='flex'
    document.querySelector('.education').style.background='rgb(199, 103, 19)'
    document.querySelector('.skill').style.background='transparent'
    document.querySelector('.education').style.color='white'
    document.querySelector('.skill').style.color='#7a7988'
})