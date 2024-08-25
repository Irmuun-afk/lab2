// if,else -> nuhtcul shalgah
// tentcuu bnu? ih bnu? baga bnu?
var age=18;
if(age>17){
    console.log("ta nasand hursen baina");
}else{
    console.log("ta nasand hureegu baina")
}
var g=10;
var j=4;
if(g>j){
    console.log(g+" bag to bn");
}else if(g==j){
    console.log("2 too tentcuu bna");
}else{
    console.log(j+" ih to bn");
}
var r=5; // 5%2=1, 4%2=0
if(r%2==1){
    console.log("sondgoi too");
}else{
    console.log("tegsh too")
}
var l=9;
if(l>0){
    console.log("tegsh too");
}else{
    console.log("sorog");
}
// && -> and/bas, || -> or/esvel
var nas=25;
var huis="emegtei";
if(nas>17 && huis=="emgtei"){
    console.log("hasand hursen bas emgtei");
}else if(nas<18 && huis=="emegtei"){
    console.log("nasand huregu emegtei");
}else{
    console.log("nasand hureegu bas emgtei bish");
}
// var k=30, j=70, f=11;
// if(k>j && j>f){
//     console.log("ih");
// }else if(j>k && j>f){
//     console.log(ih);
// }else if(f>k && f>j){
//     console.log(ih);
// }else{
//     console.log("buh to tentcuu bn");
// }
// var number=25;
// if(number%5==0 || number%2==0){
//     console.log(number+" too 5 esvel 2t huuvaagdana");
// }else{
//     console.log(number+" too 5 esvel 2t alind n ch huuvagdahgui");
// }
// var dun=650;
// if(dun<59){
//     console.log(dun+" F");
// }else if(dun>59 && dun<69){
//     console.log(dun+" D");
// }else if(dun>69 && dun<79){
//     console.log(dun+" c");
// }else if(dun>79 && dun<89){
//     console.log(dun+" b");
// }else if(dun>89 && dun<100){
//     console.log(dun+" a");
// }else{
//     console.log(dun+" iim dun baihgu");
// }
alert("ta ogloo sersen getel hajuud chin mangas baisan. ta yu hiih ve? ");
alert("tand 3 songolt baiga. zugtah/zodoldoh/nuuhdah");
var choice = prompt("zugtah/zodoldoh/nuuhdah");
if (choice=="zugtah" || choice=="Zugtah"){
    alert("ta amjltai zuhdaj chadla gihde ta haan baiga midehgu. ta hojigdlo");
}else if(choice=="zodoldoh"){
    alert("ta mangasig barsan gu. ta hojigdlo");
}else if(choice=="nuuhdah" || choice=="Nuuhdah"){
    alert("ta bairgdla odoo ta yu hiih ve? tand 2 songolt bn ta aliin songoh ve");
    prompt("taind iim songoltuud bn: shidiin tosgon olh/vheh");
     if(choice=="vheh"){
    alert("ta vhsen");
}else if( choice=="shidiin tosgon olh"){
        alert("ta yalaa");
}
}
else{
    alert("taind iim songolt baihgu");
 }