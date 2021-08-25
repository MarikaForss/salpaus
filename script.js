

//console.log(document.querySelector('#kenttä').type);
//console.log(document.querySelector('lisaanappi').value);

document.querySelector('.lisaanappi').addEventListener ('click', e =>{
e.preventDefault();
console.log(document.querySelector('#kentta').value);

document.querySelector('.ilmoitus').innerHTML = "<b>"+ document.querySelector('#kentta').value+ "</b>";

setTimeout(()=> document.querySelector('.ilmoitus').innerHTML='',2000);

});

document.querySelector('.merkinta').addEventListener('click', e =>{
 e.preventDefault();
//console.log("nappi toimii");

if(document.querySelector('#teht_a').checked){document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a"checked>Tehtävä A on tehty!</li>';
}
else{
  document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id=teht_a">Tehtävä A</li>';  
}
if
(document.querySelector('#teht_b').checked){document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b"checked>Tehtävä B on tehty!</li>';
}
else{
 document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id=teht_b">Tehtävä B</li>';
}
});





