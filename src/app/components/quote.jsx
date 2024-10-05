import '../styles/quote.css'
import SolicitudForm from "@/app/components/solicitudForm";
import Texts from "@/app/texts/texts";
import {useAnimatedItems} from "@/app/components/animatedItems";

export default function Quote() {
    useAnimatedItems()
    return (
        <div id='Quote' className="quote-main-div">
            <div className="quote-container">
                <div className='quote-image-container animated-item'>
                    <h1 className="quote-title honk-title  ">Solicitud de Cotización</h1>
                    <SolicitudForm/>
                </div>
                <div className="quote-text-container animated-item">
                    <h1 className="about-title honk-title ">Cotiza</h1>
                    <p className='about-text'><b>
                        ME ESFUERZO POR OFRECERTE LOS MEJORES PRODUCTOS ADAPTADOS A TUS NECESIDADES. SI ESTÁS INTERESADO EN ALGUNO DE MIS PRODUCTOS, TE INVITO A SOLICITAR UNA COTIZACIÓN PERSONALIZADA. SIMPLEMENTE COMPLETA EL FORMULARIO CON TUS DATOS Y LOS DETALLES DEL PRODUCTO QUE TE INTERESA, Y REVISARÉ TU SOLICITUD DE INMEDIATO.
                        UNA VEZ QUE RECIBA TU INFORMACIÓN, TE ENVIARÉ UNA RESPUESTA DETALLADA A TU CORREO ELECTRÓNICO CON TODA LA INFORMACIÓN QUE NECESITAS PARA TOMAR LA MEJOR DECISIÓN.
                        ESTOY COMPROMETIDA CON BRINDARTE UN SERVICIO RÁPIDO Y EFICIENTE, POR LO QUE PUEDES ESPERAR UNA RESPUESTA EN EL MENOR TIEMPO POSIBLE.
                        SI TIENES ALGUNA DUDA DURANTE EL PROCESO O NECESITAS ASESORÍA ADICIONAL, NO DUDES EN PONERTE EN CONTACTO CONMIGO. ESTOY AQUÍ PARA AYUDARTE A ENCONTRAR LAS MEJORES SOLUCIONES. ¡GRACIAS POR CONFIAR EN MÍ!
                    </b>
                    </p>
                    <br/>
                </div>
            </div>

        </div>
    )
}
