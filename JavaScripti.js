

document.querySelector('#projektinappula').addEventListener ('click', e =>{
e.preventDefault();

//document.querySelector('.kentta').innerHTML = document.querySelector('#nimi').value+ " "+ document.querySelector('#tieto').value;


if(document.querySelector('#nimi').value== "" || document.querySelector('#tieto').value==""){ 
  document.querySelector('.ilmoitus').innerHTML= "Täytä kaikki kentät";
  setTimeout(()=> document.querySelector('.ilmoitus').innerHTML='',3000);
}
else{
 document.querySelector('.kentta').innerHTML = document.querySelector('#nimi').value+ " "+ document.querySelector('#tieto').value;
}
});


document.querySelector('#nappulanappula').addEventListener('click', e =>{
 e.preventDefault();

if(document.querySelector('#html').checked){document.querySelector('.projektivalitsin').children[0].innerHTML = '<li class="projektinsisalto"><input type="checkbox" id="html"checked> HTML on suoritettu!</li>';
}
else{
document.querySelector('.projektivalitsin').children[0].innerHTML = '<li class="projektinsisalto"><input type="checkbox" id="html"> HTML</li>';
}
if(document.querySelector('#css').checked){document.querySelector('.projektivalitsin').children[1].innerHTML = '<li class="projektinsisalto"><input type="checkbox" id="css"checked> CSS on suoritettu!</li>';
}
else{
document.querySelector('.projektivalitsin').children[1].innerHTML = '<li class="projektinsisalto"><input type="checkbox" id="css"> CSS</li>';
}
if(document.querySelector('#javascript').checked){document.querySelector('.projektivalitsin').children[2].innerHTML = '<li class="projektinsisalto"><input type="checkbox" id="javascript"checked> JavaScript on suoritettu!</li>';
}
else{
document.querySelector('.projektivalitsin').children[2].innerHTML = '<li class="projektinsisalto"><input type="checkbox" id="javascript">JavaScript</li>';
}
if(document.querySelector('#cicd').checked){document.querySelector('.projektivalitsin').children[3].innerHTML = '<li class="projektinsisalto"><input type="checkbox" id="cicd"checked> CI/CD on suoritettu!</li>';
}
else{
document.querySelector('.projektivalitsin').children[3].innerHTML = '<li class="projektinsisalto"><input type="checkbox" id="cicd">CI/CD</li>';
}


});










