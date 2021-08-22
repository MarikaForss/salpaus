function laskutehtava(ekaArvo,tokaArvo){
  return ekaArvo+tokaArvo;
}
function pvmfin(vuosi,kk,pv){
  if(kk==03 || kk==04 || kk==05){
    return "kevät: " +pv+"."+kk+"."+vuosi;
}
else if(kk==06 || kk==07 || k==08){
  return "kesä: "+pv+"."+kk+"."+vuosi;
}
else if(kk==09 || kk==10 || k==11){
  return "syksy: "+pv+"."+kk+"."+vuosi;
}
else if(kk==12 || kk==01 || k==02){
  return "talvi: "+pv+"."+kk+"."+vuosi;
}

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

console.log(laskutehtava (123,123));

let pvm= "2021/01/18";

for(let i=1; i<=15; i++){
  console.log(i+" "+pvmfin(pv.split("/")[0],pv.split("/")[1],pvm.split("/"),pvm.split("/")));
}

//console.log(document.querySelector('#kenttä').type);
//console.log(document.querySelector('lisaanappi').value);

document.querySelector('lisaanappi').addEventListener('click', e=>{ e.preventDefault();
console.log(document.querySelector('#kentta').value);

document.querySelector('.ilmoitus').innerHTML="kentän sisältöon:<b>"+document.querySelector ('#kentta').value+"<b>";
{
document.querySelector('merkinta').addEventListener('click', e=>{e.preventDefault();
});

/*monen
rivin
kommentti
*/








