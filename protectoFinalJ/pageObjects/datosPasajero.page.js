class datosPasajero{


get txtEmail(){return $("input[name=email]")}
get txtTelefono(){return $("input[name=phone]")}
get txtNombre() {return $('input[name=firstname]')}
get txtApellido() {return $('input[name=lastname]')}
get ddNacionalidad() {return $('select[name=nationality]')}
get ddGenero() {return $('select[name=title]')}
get ddMesNacimiento() {return $('select[name=birthMonth]')}
get txtDiaNacimiento() {return $('input[name=birthDay]')}
get txtAñoNacimiento() {return $('input[name=birthYear]')}
get txtPasaporte() {return $('//input[@name="idNumber"]')}
get cbVencimientoPasaporte (){return $('//input[@name="idNoExpiration"]/ancestor::label')}
get btnContinuar() { return $('button[data-test=StepControls-passengers-next]')}


LlenarDatosCorreoYTelefono(email, telefono){
    browser.pause(2000);
    this.txtEmail.scrollIntoView();
    this.txtEmail.setValue(email);
    this.txtTelefono.setValue(telefono);
}
LlenarDatosNombreYApellido(nombre, apellido){
    browser.pause(2000);
    this.txtNombre.click();
    this.txtNombre.setValue(nombre);
    this.txtApellido.click();
    this.txtApellido.setValue(apellido);
   
}

SeleccionarNacionalidad(nacionalidad){
    browser.pause(2000);
    this.ddNacionalidad.selectByAttribute('value', nacionalidad);
}

SeleccionarGenero(genero){
    browser.pause(2000);
    this.ddGenero.selectByAttribute('value',genero);

}

LlenarDatosFechaNacimiento(mes, dia, anio){
    browser.pause(2000);
    this.ddMesNacimiento.selectByAttribute('value', mes);
    this.txtDiaNacimiento.click();
    this.txtDiaNacimiento.setValue(dia);
    this.txtAñoNacimiento.click();
    this.txtAñoNacimiento.setValue(anio);
}


LlenarDatosPasaporte(numPasaporte){
    browser.pause(2000);
    this.txtPasaporte.click();
    this.txtPasaporte.setValue(numPasaporte);


  }

  PasaporteFechaExpirar(numPasaporte){
    browser.pause(2000);
    this.cbVencimientoPasaporte.click();

  }

continuarDetallePayment(){
    this.btnContinuar.click();
}

} 
module.exports = new datosPasajero();
