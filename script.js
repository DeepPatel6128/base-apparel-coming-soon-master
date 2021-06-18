const emailInp = document.querySelector('#email');
const submitBtn = document.querySelector('#btn');
const errorSym = document.querySelector('.error');
const errorText = document.querySelector('.error-text');

//event listeners

submitBtn.addEventListener('click' , ()=>{
    let input = emailInp.value;
    let patt = new RegExp(emailInp.pattern);
    const res = patt.test(input)
    if(emailInp.value ==='' || !res){
        errorSym.classList.remove('hide')
        errorText.classList.remove('hide')
        emailInp.style.border ='2px solid red';
    }else{
        errorSym.classList.add('hide')
        errorText.classList.add('hide')
        alert('We got your email ID , Thankyou')
        emailInp.value= '';
        emailInp.style.border = '';
    }
})