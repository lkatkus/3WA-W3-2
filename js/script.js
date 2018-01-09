function liekana(dalinys,daliklis){
    if(dalinys<daliklis){
        console.log("PABAIGA");
        return dalinys;
    }
    console.log("INCEPTION");
    return liekana(dalinys-daliklis, daliklis);
}

var car1 = {
    // gamintojas: "Mazda",
    // spalva: "Pilka",
    // metai: 2005,
    variklis:{
        kuras:"Benzinas",
        turis:1.6
    },
    muzika:{
        cd: "Yra",
        usb: "Nera"
    },
    keleiviai:["Petras", "Jonas", "Aiste", "Ona"]
}

function print(p){
    if(typeof p === "string" || typeof p === "number" || typeof p === "boolean" || typeof p === "undefined" || p === null){
        return p;
    }else if(typeof p === "function"){
        return (p.toString());
    }else if(typeof p === "object"){
        if(Array.isArray(p)){
            return p;
            for(var i = 0; i < p.length; i++){
                console.log(i);
                print(p[i]);
            }
        }else{
                for(var key in p){
                    console.log(key + " - " + print(p[key]));
                }
            }
    }else{
        console.log("symbol");
    }
}
