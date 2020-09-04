class validacionesViajes{

    get listViajes () {return $('[data-test=ResultList]').$$('[data-test=ResultCardWrapper]')}
    get CBTransportFlight() { return $('//input[@data-test="TransportOptionCheckbox-aircraft"]/ancestor::label')}   
    get CBTransportTrain() { return $('//input[@data-test="TransportOptionCheckbox-train"]/ancestor::label')}
    get noHayResultados() {return $('div.NoResultsstyled__NoResultsFiltersWrapper-sc-9bkg22-5.iqJlfI')}
    get btnBook(){ return $('.ResultCardcommonstyled__ResultCardWrapperCommon-tdu3nb-1:nth-child(2) .BookingButtonstyled__BookingButtonWrapper-sc-13kc164-0 .ButtonPrimitiveContentChildren__StyledButtonPrimitiveContentChildren-xn0ytv-0')    }    
   
   
   
    vuelosDisponibles(){
        return this.listViajes;
    }

   filtrarTransporteBus(){
      this.CBTransportTrain.click();
      this.CBTransportFlight.click();
    }

    getSinResultados(){ 
        
        browser.pause(6000);
     return this.noHayResultados;
    }

    filtrarTransporteTren(){
        this.CBTransportTrain.click();
    }

    datosPasajero()
    {
        this.btnBook.click();
    }
}
module.exports = new validacionesViajes();
