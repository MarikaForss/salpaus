function laskutehtava(ekaArvo,tokaArvo){
    return ekaArvo +tokaArvo;
}
function pvmFin(vuosi,kk,pv){
    
}

console.log("Täällä ollaan!");

let ika = 41; //numerot kirjoitetaan ilman lainauismerkkejä
ika = ika +1; //integer (int)

let ikakirjaimina = 41; //string (str)
ikakirjaimina = ikakirjaimina + 1; 

console.log(ikakirjaimina);

console.log("sinun ikäsi on: " +ika);

let juuvaiei = true; //boolean

console.log(juuvaiei);

let nimi = "Marika Forss";

console.log("Kirjoita isolla: " + nimi.toUpperCase());

console.log("Splittausharjoitus: " + nimi.split("")[0]);

//While ja for loop:

for(let i=0; i<=10; i++){
  console.log("Loopin iteraatioluku on: " + i);
}

if(ika > 18 || nimi == "Marika Forss"){
 console.log("Onnea, olet täysi-ikäinen ja/ tai olet Marika!");
}
else if (ika === 18 && nimi == "Keijo"){
  console.log("Onnea Keijo, olet juri ja juuri täysi-ikäinen!");
}
else{
  console.error("kasva vielä vähän...");
}

console.log(laskutehtava(123,123));

let pvm= "2021/08/18";
console.log(pvmFin(pvm.split("/")[0],pvm.split("/")[1],pvm.split("/")[2]));




 




/*
Monen
rivin
kommentti
*/