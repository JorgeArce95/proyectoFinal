const ValidacionesViajes = require('../pageobjects/ValidacionesViajes.page');




describe('Menu lateral para filtar viajes', () => {

    before(()=>{
        browser.url('https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31');
        browser.maximizeWindow();

    })
    it('Validar vuelos Disponibles', () =>{
        expect(browser).toHaveUrlContaining('2020-10-01_2020-10-31/2020-10-01_2020-10-31');
        expect(ValidacionesViajes.vuelosDisponibles()).toBeDisplayed();
        expect(ValidacionesViajes.vuelosDisponibles()).toBeElementsArrayOfSize({gte:1});
    })
    it('Filtrar por Bus', () =>{ 
        ValidacionesViajes.filtrarTransporteBus();
    })
    it('Validar que no hay resultados de viajes en bus', ()=>{
        expect(ValidacionesViajes.getSinResultados()).toBeDisplayed();
        expect(browser).toHaveUrlContaining('transport=bus');

    })
    it('Filtrar por Tren',()=>{
        ValidacionesViajes.filtrarTransporteTren();
        expect(browser).toHaveUrlContaining('2Ctrain');

    })
    it('Validar viajes disponibles', ()=>{
        expect(ValidacionesViajes.vuelosDisponibles()).toBeDisplayed();
        expect(ValidacionesViajes.vuelosDisponibles()).toBeElementsArrayOfSize({gte:1});
    })
});