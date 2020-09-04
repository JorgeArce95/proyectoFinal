class pagarTiquete{


 get DatosPasajero (){return $('div.PassengersOverview__PassengersOverviewWrapper-h152xh-0.bnOLXU')}
 get valirdarNombre() {return $('span.Text__StyledText-sc-19qtt4y-0.cKZayu')}
 get validarCorreo() {return $('div.SummaryPassengersContact__ItemWrapper-sc-1dsvx02-0.fgMgDf')}



getInformacionPasajero(){
    return this.DatosPasajero;
}

getValidarNombre(nombre){
    expect(this.valirdarNombre).toHaveTextContaining(nombre);
}

getValidarCorreo(correo){
    expect(this.validarCorreo).toHaveTextContaining(correo);

}



}module.exports = new pagarTiquete();
