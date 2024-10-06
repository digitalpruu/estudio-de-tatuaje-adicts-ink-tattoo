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
                        Me esfuerzo por ofrecerte los mejores productos adaptados a tus necesidades. Si estás interesado en alguno de mis productos, te invito a solicitar una cotización personalizada. Simplemente completa el formulario con tus datos y los detalles del producto que te interesa, y revisaré tu solicitud de inmediato.
                        Una vez que reciba tu información, te enviaré una respuesta detallada a tu correo electrónico con toda la información que necesitas para tomar la mejor decisión.
                        Estoy comprometida con brindarte un servicio rápido y eficiente, por lo que puedes esperar una respuesta en el menor tiempo posible.
                        si tienes alguna duda durante el proceso o necesitas asesoría adicional, no dudes en ponerte en contacto conmigo. Estoy aquí para ayudarte a encontrar las mejores soluciones. Gracias por confiar en mí!
                    </b>
                    </p>
                    <br/>
                </div>
            </div>

        </div>
    )
}
