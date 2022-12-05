
var name = prompt("Ism familyangizni kiriting");
var money = prompt(`${name} sayohat uchun qancha pulingiz bor (summ)`);

if( money >= (500*11100.61+250*11100.61+120*12247.79)){
    alert(`${name} behatar yol tilab qolamiz `)
}
else if( money < ( 500*11100.61+250*11100.61+120*12247.79 ) ){
    alert(`${name} mablagingiz yetarli emas kengi sapar inshalloh`)
}
else{
    alert(`${name}ozbek sumlarida kiriting `)
}