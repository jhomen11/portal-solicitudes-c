export const validador = (rut) => {
    //Obtener digito verificador
    const dvRut = rut.substring(rut.length - 1);
    
  
    //Limpiar Rut
    const rutSinDv = rut.substring(0, rut.length - 1).replace(/\D/g, "");
    const rutInvertido = rutSinDv.split("").reverse();
    let acumulador = 0;
    let multiplicador = 2;
  
    for (let numero of rutInvertido) {
      acumulador += parseInt(numero) * multiplicador;
      multiplicador++;
  
      if (multiplicador === 8) {
        multiplicador = 2;
      }
    }
    let dv = 11 - (acumulador % 11);
  
    if (dv === 11) dv = "0";
    if (dv === 10) dv = "k";
  
    // eslint-disable-next-line eqeqeq
    return dv == dvRut.toLowerCase();
  };  
  
  export const validaRutEmpresa = (rut) => {
    const rutEmpresa = 50000000
    const rutSinDv = rut.substring(0, rut.length -1).replace(/\D/g, "")
    if(rutSinDv < rutEmpresa){
      return true
    }else{
      return false
    }
  }

  export const validaRunSerie = async (obj) => {
    console.log(obj)
    const URL = `${process.env.REACT_APP_WS_DEP}/validanumserie`
    const resp = await fetch(URL, obj)
    const data = await resp.json()
    console.log('validaRunSerie', data)
    return data

  }
  
  export const valideKey = (e) => {
       
    if((e.keyCode < '48' || e.keyCode > '57') && (e.keyCode < '95' || e.keyCode > '105')
        && e.keyCode !== 189 && e.keyCode !== 173 && e.keyCode !== 8 && e.keyCode !== 75 && e.keyCode !== 109){
  
      e.preventDefault()
    }
    
  };

  export const bloqueoPegarCopiar = (e) => {
    e.preventDefault()
  }


