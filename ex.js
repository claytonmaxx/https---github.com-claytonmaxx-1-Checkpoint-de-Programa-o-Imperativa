var pipoca_t = 10;
var macarrao_t = 8;
var carne_t = 15;
var feijao_t = 12;
var brigadeiro_t = 8 ;
var selecaoAlimento = ""
var selecaoTempo = 31;
var calculoTempo = 0;

function tempo(selecaoTempo){
    
    if (selecaoTempo>calculoTempo*2 && selecaoTempo<=calculoTempo*3){
        console.log("A comida queimou")
    }
    else if (selecaoTempo<calculoTempo){
        console.log ("Tempo insuficiente")
    }
    else if (selecaoTempo>calculoTempo*3 && calculoTempo>0){
        console.log("Kabumm")
    }
    else if (selecaoTempo && calculoTempo>0){
        console.log("Prato pronto! Bom apetite")
    }
}

function menu (selecaoAlimento){
    switch (selecaoAlimento){
        case "PIPOCA":
            calculoTempo = pipoca_t;
            tempo (selecaoTempo)
            break;
        case "MACARRÃO":
            calculoTempo = macarrao_t;
            tempo (selecaoTempo)
            break;
        case "CARNE":
            calculoTempo = carne_t;
            tempo (selecaoTempo)
            break;
        case "FEIJÃO":
            calculoTempo = feijao_t;
            tempo (selecaoTempo)
            break;
        case "BRIGADEIRO":
            calculoTempo = brigadeiro_t;
            tempo (selecaoTempo)
            break;
            
        default: console.log("Prato inexistente");
                 }
}
menu ("PIPOCA")

