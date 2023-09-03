
let totPan = 0;
let totAlm = 0;
let totVerd = 0;
let totalVenta = 0;

const Devolver = a => a;

const Ganancia = (a, b) => a * (b/100);


function AbrirVenta() {
    let resp1 = Number(prompt('Buenos días, arrancamos? 1-Sí. \n 2-No.'));
    if (resp1 == 1){
        let newItem = prompt('Ingresar nuevo item? S/N').toUpperCase();
        while (newItem == 'S'){
            tipoItem = Number(prompt('Qué sector? 1- Panadería. \n 2-Almacen.   \n 3-Verdulería.?'));
            switch (tipoItem) {
                case 1 :
                    unitPan = Number(prompt('Ingrese monto : $ ' ));
                    totPan += unitPan;
                break;
                case 2 :
                    unitAlm = Number(prompt('Ingrese monto : $ ' ));
                    totAlm += unitAlm;
                    break;
                case 3 :
                    unitVerd = Number(prompt('Ingrese monto : $ ' ));
                    totVerd += unitVerd;
                break;
                default :
                
                break;
            };
            newItem = prompt('Ingresar nuevo item? S/N').toUpperCase();
        };
        totalVenta = (totPan + totAlm + totVerd);
        alert('Su total a abonar es de '+ totalVenta)
        Devolver(totAlm);
        Devolver(totPan);
        Devolver(totVerd);
    };
};

function TotalDia(){
    alert('Sus totales fueron: \n Panadería: '+ totPan +'\n Almacén: '+totAlm+ '\n Verdulería: '+ totVerd)
};

function Calcular(){
    let ganPan = Ganancia(totPan, 40);
    let ganVerd = Ganancia(totVerd,30);
    let ganAlm = Ganancia(totAlm, 25);

    alert('Su ganancia fue: \n Panadería: '+ ganPan +'\n Almacén: '+ganAlm+ '\n Verdulería: '+ ganVerd)

};
