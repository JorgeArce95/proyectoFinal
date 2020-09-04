const home = require('../pageobjects/home.page');
const validacionesViajes = require('../pageobjects/validacionesViajes.page');



describe('Buscar un viaje', () => {

    before(()=>{
        browser.url('https://www.kiwi.com/es');
        browser.maximizeWindow();
    })
    
    it('Seleccionar Origen', () => {
        browser.setTimeout({ 'pageLoad': 6000 });
        home.buscarLugarOrigen('txl');
        
    });
    it('Seleccionar Destino', () => {
        home.buscarLugarDestino('Londres');
    });

    it('Seleccionar cantidad pasajeros', () =>{
        home.selectPasajeros();
    });

    it('Seleccionar fecha salida y regreso', () =>{
        home.selectFechaSalidaRegreso();
    });

    it('Buscar vuelos', () =>{
        
        home.buscarVuelos();
    })

    it('Validar vuelos Disponibles', () =>{
        expect(browser).toHaveUrlContaining('aeropuerto-de-berlin-tegel-berlin-alemania/londres-reino-unido');
        expect(validacionesViajes.vuelosDisponibles()).toBeDisplayed();
        browser.pause(22000);
        expect(validacionesViajes.vuelosDisponibles()).toBeElementsArrayOfSize({gte:1});
    })

    

});


