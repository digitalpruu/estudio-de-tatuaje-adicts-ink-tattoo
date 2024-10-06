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
        description1: "Soy artista, estudié de artes plásticas en la Academia de Artes Guerrero, luego de un tiempo tome la decisión redireccionar mi enfoque hacia la Aerógrafia, hago mención que me gusta la pintura tradicional, sobre todo la técnica en acrílico y la acuarela.\n" +
            "Dentro de mi desarrollo personal, estoy me gusta estar en constantemente aprendiendo.\n" +
            "Actualmente, adicional de hacer Aerografías o arte tradicional soy Tatuadora y también realizó piercings, en el tatuaje mis estilos favoritos son el Dotwork, Blackwork, Botánico, aunque no son los únicos que me gustan.\n" +
            "De mis influencias y referencias artisticas algunos de ellos son: Renne Magritte, Basquiat, Francis Bacon, Richard Avedon, Deborah Ravelo, Fredao Oliveira entre otros.\n" +
            "En la Aerógrafia la mayoría de ilustración que realizó son en estilo realismo.                                                                                        Soy una artista dedicada al arte corporal. Brindo una experiencia personalizada en cada diseño, trabajando con cada cliente para crear piezas únicas que reflejen su estilo y personalidad. Con un enfoque en la calidad y el detalle, me especializo en tatuajes en escala de grises, así como en perforaciones corporales profesionales. Mi pasión por el arte, garantiza que cada sesión sea una experiencia memorable. Ya sea tu primer tatuaje o uno más para tu colección, en mi estudio-taller haré realidad tus\n" +
            "ideas."},
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
