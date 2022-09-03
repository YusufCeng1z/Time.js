


let userName = prompt("Please enter your name : ");
let Name = document.querySelector("#Name");

Name.innerHTML = `${userName.length > 0 ? userName : ""}`;









function CanliZaman() {

    let date = new Date();
    let saat = date.getHours();
    let dakika = date.getMinutes();
    let saniye = date.getSeconds();
    let gun = date.getDay();

    let zaman = document.querySelector("#zaman");
    
    let zamans =`${saat}:${dakika}:${saniye} ${HangiGun(gun)}`;

    zaman.innerHTML =zamans;
    
}

setInterval(CanliZaman,1000);



function HangiGun(a) {
        if(a == 1) {
            return "Monday";
        }
        else if (a == 2){
            return "Tuesday";
        }
        else if (a == 3){
            return "Wednesday";
        }
        else if (a == 4){
            return "Thursday";
        }
        else if (a == 5){
            return "Friday";
        }
        else if (a == 6){
            return "Saturday";
        }
        else if (a == 7){
            return "Sunday";
        }
}