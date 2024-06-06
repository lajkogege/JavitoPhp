import {  tesztTablaOsszeallit, megjelenites} from "./fugvenyek.js";
import { tesztesetekLISTA } from "./adat.js";


init(tesztesetekLISTA);

function init(lista){
    let txt= tesztTablaOsszeallit(lista);
    megjelenites(txt);
}

function kattint(){
    const valaszELEM=$(".valasz");
    valaszELEM.on("click", function(){
        let kerdesSzovegELEM=valaszELEM.val();
        
    })
}