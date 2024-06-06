export function tesztTablaOsszeallit(lista){
    let txt=""; 
   
    lista.forEach((element, i) => {
        console.log(element)
       
        txt+=`<div class="tesztkerdes">
            <div class="kerdes">${element.kerdes}</div>
            <div class="valaszok">
                <div class="valasz"><button>${element.valasz1}</button></div>
                <div class="valasz"><button>${element.valasz2}</button></div>
                <div class="valasz"><button>${element.valasz3}</button></div>
                <div class="valasz"><button>${element.valasz4}</button></div>
            </div>
            </div>
        `
       // console.log("key: ",key, "akt.elem: ", element[key]);
      });
      return txt;
}

export function megjelenites(txt){
    const taroloELEM=$(".tarolo");
    taroloELEM.html(txt);
}

export function helyesEllenorzes(lista){
    lista.forEach(element => {
        if (element.valasz1 == element.helyes_valasz) {
            
            
        }
        else if (element.valasz2 == element.helyes_valasz) {

        }
        else if (element.valasz3 == element.helyes_valasz) {

        }
        else if (element.valasz4 == element.helyes_valasz) {

        }
    });
}