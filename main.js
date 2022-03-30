const getRandoomLower=()=>{
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
const getRandoomUpper=()=>{
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
const getRandoomNumber=()=>{
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
const getRandomSymbol=()=>{
    const symbols='!@#$%&*';
    return symbols[Math.floor(Math.random()*symbols.length)];
}
const randomFunction={getRandoomLower,getRandoomUpper,getRandoomNumber,getRandomSymbol}
const generatedPassword=()=>{
    const length=24;
    let generatedPassword='';
    for(let x=0;x<length;x++)
    generatedPassword+=Object.values(randomFunction)[Math.floor(Math.random()*4)]();
    return generatedPassword;
}
const spanResult=document.getElementById('result');
const generateBtn=document.getElementById('generate');
const clipBoardBtn=document.getElementById('clipboard');


generateBtn.addEventListener('click',()=>{
spanResult.innerText=generatedPassword();
});
clipBoardBtn.addEventListener('click',()=>{
    const paswd=spanResult.innerText;
    if(!paswd)
    return 
    const textarea=document.createElement('textarea');
    textarea.value=paswd;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    console.log('PAROLA kopyalandı');
});
