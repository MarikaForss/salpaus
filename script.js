console.log("Täällä ollaan!");

let ika=41;//numerot kirjoitetaan ilman lainausmerkkejä
ika=ika+1;//integer (int) 

let ikakirjaimina="41";//string (str)
ikakirjaimina=ikakirjaimina +1;
  console.log(ikakirjaimina);

console.log("Sinun ikäsi on +ikä");

let juuvaiei=true; //boolen
  console.log(juuvaiei);

let nimi="Marika Forss"
  console.log("Kirjoita isolla:"+nimi.toUpperCase());
  console.log("Splittausharjoitus:"+nimi.split("")[0]);

  //while ja for loop:

for(let i=0; i<=10; i++){
  console.log("Loopin interaatioluku on:"+i);
}
if(ika>18 || nimi== "Marika Forss"){
  console.log("Onnea olet täysi-ikäinen ja/tai olet Marika!");
}
else if(ika=== 18 && nimi== "Keijo"){
  console.log("Onnea Keijo, olet juuri ja juuri täysi ikäinen!");
}
else{
  console.error("kasva vielä vähän...");
}

let pvm= "2021/01/18";

//console.log(document.querySelector('#kenttä').type);
//console.log(document.querySelector('lisaanappi').value);

document.querySelector('.lisaanappi').addEventListener ('click', e =>{
  e.preventDefault();

document.querySelector('.ilmoitus').innerHTML = document.querySelector('#kentta').value;

setTimeout(()=> document.querySelector('.ilmoitus').innerHTML='',3000);

});

document.querySelector('.merkinta').addEventListener('click', e =>{
  e.preventDefault();
  console.log("nappi toimii");
});

if(document.querySelector('#teht_a').checked){document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" checked> Tehtävä A on tehty!</li>';

}
else{
  document.querySelector('.boksit').children[0].innerHTML = '<li class= "sisalto"><input type="checkbox" id=teht_a"> Tehtävä A</li>';

}

if(document.querySelector('#teht_b').checked){document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" checked> Tehtävä B on tehty!</li>';
}

else{
 document.querySelector('.boksit').children[1].innerHTML = '<li class= "sisalto"><input type="checkbox" id=teht_b"> Tehtävä B</li>';
}






