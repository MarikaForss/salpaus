

document.querySelector('#projektinappula').addEventListener ('click', e =>{
e.preventDefault();
console.log(document.querySelector('#lisaamerkinta').value);

document.querySelector('.ilmoitus').innerHTML ="Täytä kaikki kentät"

setTimeout(()=> document.querySelector('.ilmoitus').innerHTML='',3000);

});

document.querySelector('#nappulanappula').addEventListener('click', e =>{
 e.preventDefault();


if(document.querySelector('#html').checked){document.querySelector('.projektivalitsin').children[0].innerHTML = '<li class=".projektinsisalto"><input type="checkbox" id="html"checked> HTML SUORITETTU!</li>';
}
else{
document.querySelector('.projektivalitsin').children[0].innerHTML = '<li class="projektinsisalto"><input type="checkbox" id=html">HTML</li>';
}

});
