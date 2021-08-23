

document.querySelector('#projektinappula').addEventListener ('click', e =>{
e.preventDefault();
console.log(document.querySelector('#lisaamerkinta').value);

document.querySelector('.ilmoitus').innerHTML ="Täytä kaikki kentät:"+ document.querySelector('#lisaamerkinta').value+ "</b>";

setTimeout(()=> document.querySelector('.ilmoitus').innerHTML='',3000);

})

