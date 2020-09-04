class tipoAsiento{

get btnTipoAseinto() {return $('div.Slide__StyledSlide-sc-1xbmdp2-0.fDtKVB div[data-test=SeatingSelectOptionDesktop-aisle]')}
get btnContinuar() {return $('button[data-test=StepControls-AdditionalService-next]')}


seleccionarTipoAsiento(){
    browser.pause(6000);
    this.btnTipoAseinto.click();
}

continuarTicket(){
    this.btnContinuar.click();
}




}
module.exports = new tipoAsiento();
