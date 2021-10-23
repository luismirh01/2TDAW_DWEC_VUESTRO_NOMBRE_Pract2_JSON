'use strict'
// let nombre=prompt("¿Cual es el nombre del modelo?");
// let Precio=parseFloat(prompt("Dime el numero que quieras"));
// let categoria=prompt("¿Cual es su categoria? LED/OLED");
// let codigo=parseInt(prompt("¿Cual es su codigo de identificacion?"));
// let fecha=prompt("¿Cuando se compro? (separados por /)?");
// let partes_fecha = fecha.split("/");
// let [dia, mes, años]= partes_fecha;
// dia = parseInt(dia);
// mes = parseInt(mes);
// años = parseInt(años);


let objetos=[
    {"nombre":"LG monitor", "precio":55.99, "categoria":"LED","fecha":"13/04/2002","imagen":"lg.png"},
    {"nombre":"ASUS", "precio":60.85,"categoria":"OLED","fecha":"10/01/2020","imagen":"71-tgrKQilL._AC_SL1500_.jpg"},
    {"nombre":"Msi","precio":99.99,"categoria":"LED","fecha":"30/09/2003","imagen":"61XCyMSECfL._AC_SX466_.jpg"},
    {"nombre":"Huawei","precio":105.30,"categoria":"LED","fecha":"01/01/2000","imagen":"huawei-display-23.8-inch-KV.jpg"},
    {"nombre":"Xiaomi","precio":160.85,"categoria":"LED","fecha":"31/12/2021","imagen":"71HPLtoRFpL._AC_SL1500_.jpg"}
];
let orden=prompt("¿Order? precio(asc o des)");
if(orden==="asc"){
    objetos.sort(
            (a,b)=>{
                return a["precio"]-b["precio"];
            });
};
if(orden==="des"){
    objetos.sort(
            (a,b)=>{
                return b["precio"]-a["precio"];
            });
};



document.write(`<div class="titulodiv"><h1 class="tituloh1">Tipos de Monitores</h1></div>`)

objetos.forEach((producto,posicion) => {
    const{nombre,precio,categoria,codigo,fecha}=producto;

    document.write(`<div class="content">
                        <div>
                            <h1>${nombre}</h1>
                            <h3>Precio: ${precio}€</h3>
                            <p>Pantalla: ${categoria}</p>
                            <p>Fecha de salida: ${fecha}</p>
                            <img class="imagen" src=${producto["imagen"]}>
                        </div>
                        <hr>
                        <form  action="0" method="GET">
                            <fielset>
                                <legend><h2>Actualizar ${producto["nombre"]}</h2></legend>
                                <label for="nombre"> Nombre:</label>
                                <input type="text" size="90"  value="${producto["nombre"]}"
                                <br>
                                <label for="Precio">Precio:</label>
                                <input type="text" size="94" value="${producto["precio"]}"
                                <br>
                                <label for="Categoria">Categoria:</label>
                                <input type="text" size="87" value="${producto["categoria"]}"
                                <br>
                                <label for="fecha">Fecha:</label>
                                <input type="text" size="95" value="${producto["fecha"]}"
                                <br>
                                <label for="codigo">SRC del Producto:</label>
                                <input type="text" size="70" value="${producto["imagen"]}"
                                <br>
                                <input type="submit" value="Modificar">
                            </fielset>
                        </form>
                    </div>`);
});























// document.write(`<h1 class=cursiva> El nombre de la television es ${nombre}</h1>`);
// document.write(`<div style="background-color: red;">`);
// document.write(`<h2> Su precio es de: ${Precio}</h2>`);
// document.write(`<P>La categoria de este televisor es ${categoria} .Básicamente, las televisiones vienen en 5 sabores diferentes. Plasma, LCD, LED, OLED y CRT. Éste último es el televisor de toda la vida que ocupa medio salón, así que aquí nos vamos a dedicar a hablar de las otras tecnologías, que traen muchas más novedades.</P>`);
// document.write(`<p>La fecha de compra del producto es ${dia}/${mes}/${años}</p>`);
// document.write(`</div>`);

// document.write(`<h2> Informacion extra </h2>`);
// document.write(`<a href="https://www.lg.com/es/lg-signature?cmpid=2021SIG_ES_All_Awareness_Google_Initial_Search_TV_Desktop_Tech-Generic_K1091&gclid=Cj0KCQjwtMCKBhDAARIsAG-2Eu9jkEEbC79fof7tj3viCmgAti8Wn7qTHxauxLmzMegm27yV5gIK404aAre1EALw_wcB&gclsrc=aw.ds"><img src="https://www.lg.com/es/images/New%20Project%20-%202020-08-07T120436.120.jpg"></a>`);

// document.write(`<h2> Consumo </h2>`);
// document.write(`<table border>
//                 <tr>
//                     <td> Plasma </td>
//                     <td> LCD </td>
//                     <td> LED </td>
//                     <td> OLED </td>
//                     <td> CRT </td>
//                 </tr>
//                 <tr>
//                     <td>4/10</td>
//                     <td>8/10</td>
//                     <td>6/10</td>
//                     <td>9/10</td>
//                     <td>3/10</td>
//                 </tr>`);   
