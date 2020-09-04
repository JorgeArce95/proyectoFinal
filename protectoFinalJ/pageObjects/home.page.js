const { Console } = require("console")

class Home{

get btnCerrarLugarOrigen () {return $('svg.Icon__StyledIcon-sc-1pnzn3g-0.bRGQbR.closeIcon')}
get txtLugarOrigen() {return $('//div[@data-test="PlacePickerInput-origin"]/input')}   
get btnSelectLugarOrigen() {return $('div.PlacePickerstyled__PlacePickerItemName-hrtzfp-6.jVKPfo')}
get txtLugarDestino() {return $('//div[@data-test="PlacePickerInput-destination"]/input')}
get btnSelectLugarDestino() {return $('div.PlacePickerstyled__PlacePickerItemName-hrtzfp-6.jVKPfo')}
get ddPasajeros() {return $('div.PassengersAndBagsFieldstyled__StyledPassengersField-sc-1lwaoqz-0.eLIIFW')}
get btnMasPjAdultos() {return $("div[data-test='PassengersRow-adults']  button.ButtonPrimitive__StyledButtonPrimitive-q2qrvj-0.buDGhI")}
get btnMasPjNinos() {return $("div[data-test='PassengersRow-children']  button.ButtonPrimitive__StyledButtonPrimitive-q2qrvj-0.buDGhI")}
get btnMasPjBebes() {return $("div[data-test='PassengersRow-infants']  button.ButtonPrimitive__StyledButtonPrimitive-q2qrvj-0.buDGhI")}
get btnConfirmarPasajeros() {return $('button.ButtonPrimitive__StyledButtonPrimitive-q2qrvj-0.hUUYxx')}
get btnCalendario() {return $('input[name="search-outboundDate"]')}
get btnCalendarioDestino() {return $('div.Inputsstyled__Content-hexk8g-2.eCCXjL')}

get btnSalida() {return $("//div[@data-value='2020-10-07']")}
get btnRegreso() {return $("//div[@data-value='2020-10-16']")}
get btnEstablecerFechas() {return $('button.ButtonPrimitive__StyledButtonPrimitive-q2qrvj-0.fQZUGX')}
get btnBuscar() { return $('[data-Test=LandingSearchButton]')}



buscarLugarOrigen(lugarOrigen){
    this.btnCerrarLugarOrigen.click();
    browser.pause(5000);
    this.txtLugarOrigen.setValue(lugarOrigen);
    browser.pause(5000);
    this.btnSelectLugarOrigen.click();
}
buscarLugarDestino(lugarDestino){
    this.txtLugarDestino.click();
    this.txtLugarDestino.setValue(lugarDestino);
    browser.pause(4000);
    this.btnSelectLugarDestino.click();
}

selectPasajeros(){
    this.ddPasajeros.click();
    this.btnMasPjAdultos.click();
    this.btnMasPjNinos.click();
    this.btnMasPjNinos.click();
    this.btnMasPjNinos.click();
    this.btnMasPjBebes.click();
    this.btnConfirmarPasajeros.click();
}

selectFechaSalidaRegreso(){
    this.btnCalendario.click();
    this.btnSalida.click();
    this.btnCalendarioDestino.click();
    this.btnRegreso.click();
    this.btnEstablecerFechas.click();

}

buscarVuelos(){
    this.btnBuscar.click();
}


}

module.exports = new Home();
