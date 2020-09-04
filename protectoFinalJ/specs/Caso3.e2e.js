const datosPasajero = require('../pageobjects/datosPasajero.page');
const ValidacionesViajes = require('../pageobjects/validacionesViajes.page');
const datosTicket = require('../pageobjects/datosTicket.page');
const tipoAsiento = require('../pageobjects/tipoAsiento.page');
const PagoTiquete = require('../pageobjects/pagarTiquete');


describe('Usar la barra para filtar viajes', () => {

    before(()=>{
        browser.url('https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31');
        browser.maximizeWindow();

    })
    it('Ingresar a datos vuelo', () =>{
      ValidacionesViajes.datosPasajero();
    })

    it('Llenar datos Correo y telefono', ()=>{
      datosPasajero.LlenarDatosCorreoYTelefono('jorge.arce.benavides@ucreativa.com', '8888888');
     })
     
     it('Llenar datos Nombre y apellido',()=>{
      datosPasajero.LlenarDatosNombreYApellido('David', 'Alfaro');
     })

     it('Seleccionar Nacionalidad',()=>{
      datosPasajero.SeleccionarNacionalidad('us');
     })
     it('Llenar datos Fecha Nacimiento',()=>{
      datosPasajero.LlenarDatosFechaNacimiento('10', '04', '1996');
     })
  
     it('Seleccionar Genero',()=>{
        datosPasajero.SeleccionarGenero('mr');
     })

     it('Llenar Datos Pasaporte',()=>{
      datosPasajero.LlenarDatosPasaporte('56465646');
     })

     it('Llenar Datos expira Pasaporte',()=>{
      datosPasajero.PasaporteFechaExpirar();
     })
     
    
     it('Continuar detalle payment',()=>{
      browser.setTimeout({'implicit':4000})
      datosPasajero.continuarDetallePayment();

     })

     it('Seleccionar tarifa del ticket',()=>{
      datosTicket.SeleccionarTarifa();

     })
     it('Seleccionar el tipo de asiento', () =>{
      tipoAsiento.seleccionarTipoAsiento();
     })

     it('Continuar con pago', ()=>{
      tipoAsiento.continuarTicket();

     })

     it('Validacion datos pasajero', () =>{
       browser.setTimeout({'implicit':5000})
       expect(PagoTiquete.getInformacionPasajero()).toBeDisplayed();
       PagoTiquete.getValidarNombre('Mr David Alfaro');
       PagoTiquete.getValidarCorreo('jorge.arce.benavides@ucreativa.com');
       expect(browser).toHaveUrlContaining('berlin-tegel-berlin-germany%2Flondon-united-kingdom%2F2020-10-01_2020-10-31%2F2020-10-01_2020-10-31');

     })
});