function laskutehtava(ekaArvo,tokaArvo){
    return ekaArvo +tokaArvo;
}
function pvmFin(vuosi,kk,pv){
  if(kk==03 || kk==04 || kk==05){
  return "kevät: "+ +pv+"."+kk+"."+vuosi;   
}
  else if(kk==06 || kk==07 || kk==08){
  return "kesä: " + +pv+"."+kk+"."+vuosi;
}
  else if (kk==09 || kk==10 || kk==11){
  return "syksy:"+ +pv+"."+kk+"."+vuosi;
}
  else{
  return "talvi:"+ +pv+"."+kk+"."+vuosi; ;
}
  return "Päivämäärä oikeassa järjestyksessä on: "+pv+"."+kk+"."+vuosi;   
}

console.log("Täällä ollaan!");

let ika = 41; //numerot kirjoitetaan ilman lainauismerkkejä
ika = ika +0; //integer (int)

let ikakirjaimina = 41; //string (str)
ikakirjaimina = ikakirjaimina + 0; 

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

let pvm= "2021/09/18";

for(let i=0; i<15; i++){
console.log(i+" "+pvmFin(pvm.split("/")[0],pvm.split("/")[1],pvm.split("/")[2]));
}





 




/*
Monen
rivin
kommentti
*/