const title = "Adriana Cetina";
const email = "artdrianatattoo@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los servicios de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3138682389";
const textos = {
    index: {
        title: `${title}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "\"SOY ARTISTA, ESTUDIÉ DE ARTES PLÁSTICAS EN LA ACADEMIA DE ARTES GUERRERO, LUEGO DE UN TIEMPO TOMÉ LA DECISIÓN DE REDIRECCIONAR MI ENFOQUE HACIA LA AEROGRAFÍA, HAGO MENCIÓN QUE ME GUSTA LA PINTURA TRADICIONAL, SOBRE TODO LA TÉCNICA EN ACRÍLICO Y LA ACUARELA.\n" +
            "DENTRO DE MI DESARROLLO PERSONAL, ME GUSTA ESTAR CONSTANTEMENTE APRENDIENDO.\n" +
            "ACTUALMENTE, ADEMÁS DE HACER AEROGRAFÍAS O ARTE TRADICIONAL, SOY TATUADORA Y TAMBIÉN REALIZO PIERCINGS. EN EL TATUAJE, MIS ESTILOS FAVORITOS SON EL DOTWORK, BLACKWORK, BOTÁNICO, AUNQUE NO SON LOS ÚNICOS QUE ME GUSTAN.\n" +
            "DE MIS INFLUENCIAS Y REFERENCIAS ARTÍSTICAS, ALGUNOS DE ELLOS SON: RENÉ MAGRITTE, BASQUIAT, FRANCIS BACON, RICHARD AVEDON, DEBORAH RAVELO, FREDAO OLIVEIRA, ENTRE OTROS.\n" +
            "EN LA AEROGRAFÍA, LA MAYORÍA DE LAS ILUSTRACIONES QUE REALIZO SON EN ESTILO REALISMO.\n" +
            "SOY UNA ARTISTA DEDICADA AL ARTE CORPORAL. BRINDO UNA EXPERIENCIA PERSONALIZADA EN CADA DISEÑO, TRABAJANDO CON CADA CLIENTE PARA CREAR PIEZAS ÚNICAS QUE REFLEJEN SU ESTILO Y PERSONALIDAD. CON UN ENFOQUE EN LA CALIDAD Y EL DETALLE, ME ESPECIALIZO EN TATUAJES EN ESCALA DE GRISES, ASÍ COMO EN PERFORACIONES CORPORALES PROFESIONALES. MI PASIÓN POR EL ARTE GARANTIZA QUE CADA SESIÓN SEA UNA EXPERIENCIA MEMORABLE. YA SEA TU PRIMER TATUAJE O UNO MÁS PARA TU COLECCIÓN, EN MI ESTUDIO-TALLER HARÉ REALIDAD TUS IDEAS.\""
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: "Arte que llevas en la piel, pasión que perdura.",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/nana.tattooarte/about",
        instagram: "https://www.instagram.com/nanistattoo_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
