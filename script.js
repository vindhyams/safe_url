"use strict"
const result=document.querySelector('.result');
const submit=document.querySelector('.submit');

result.classList.add('hidden');

submit.addEventListener('click',function(){
    let url=document.querySelector('.url').value;
    result.classList.remove('hidden')
    result.classList.add('result')
    document.querySelector('body').style.background="#ADFF2F";
})

