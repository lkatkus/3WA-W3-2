function liekana(dalinys,daliklis){
    if(dalinys<daliklis){
        console.log("PABAIGA");
        return dalinys;
    }
    console.log("INCEPTION");
    return liekana(dalinys-daliklis, daliklis);
}

var car2;

var car1 = {
    gamintojas: "Mazda",
    spalva: "Pilka",
    metai: 2005,
    variklis:{
        kuras:"Benzinas",
        turis:1.6
    },
    muzika:{
        cd:"yra",
        usb:"nera"
    },
    keleiviai:["Jonas","Petras","Ona"]
}

car1.circle = car1;

function print(p,path){
    var top = false;
    if (!path) {
        top = true;
    }
    if(typeof p === "string" || typeof p === "number" || typeof p === "boolean" || typeof p === "undefined" || p === null){
        console.log(p);

    }else if(typeof p === "function"){
        console.log (p.toString());

    }else if(typeof p === "object"){
        if(!Array.isArray(path)){ /* circular reference prevention while saving depth of path */
            path = [];
            console.log("!!! PATH CREATED !!!");
        }else{
            for(var i = 0; i < path.length; i++){ /* callback function provides back a "path" of object into check array */
                if(path[i] === p){ /* checks if there is the same object in the path */
                    console.log("!!! CIRCULAR REFFERENCE !!!");
                    return;
                }
                console.log("=== ENTERING OBJECT ===");
            }
        }

        path.push(p);
        console.log(path);

        if(Array.isArray(p)){
            console.log("=== ENTERING ARRAY ===");
            for(var i = 0; i < p.length; i++){
                print(p[i], path);
            }
            console.log("=== EXIT ARRAY ===");

        }else{
                for(var key in p){
                    console.log(key);
                    print(p[key], path);
                }
            console.log("=== EXIT OBJECT ===");
        }
        path.pop();

    }else{
        console.log("symbol");
    }
    if (top) {
        console.log("FINAL");
    }
}
