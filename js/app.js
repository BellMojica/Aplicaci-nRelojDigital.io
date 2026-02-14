const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoFecha(fecha.getHours());
    let min = formatoFecha(fecha.getMinutes());
    let seg = formatoFecha(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May','Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic']
      const dias = ['Dom','Lun', 'Mar', 'Mie', 'Juv', 'Vie','Sab'];
      let diaSemana = dias[fecha.getDay()];
      let dia = formatoFecha(fecha.getDate());
      let mes = meses[fecha.getMonth()]
      let fechaTexto=`${diaSemana},${dia} ${mes}`;
      document.getElementById('fecha').innerHTML = fechaTexto;
      
      document.getElementById('contenedor').classList.toggle('animar');
};

const formatoFecha = (fecha) => {
    if (fecha < 10) fecha = "0" + fecha;
    return fecha;
};
setInterval(mostrarReloj, 1000);
