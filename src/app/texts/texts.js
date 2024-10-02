const title = "Estudio de Tatuaje Adicts Ink Tattoo";
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
        description1: `En Adicts Ink Tattoo, somos un estudio de tatuajes dedicado al arte corporal y a la autoexpresión. Ofrecemos una experiencia personalizada en cada diseño, trabajando con nuestros clientes para crear piezas únicas que reflejen su estilo y personalidad. Con un enfoque en la calidad y el detalle, nos especializamos en tatuajes en escala de grises, así como en perforaciones corporales profesionales. Nuestra pasión por el arte, junto con un compromiso con la higiene y la seguridad, garantiza que cada sesión sea una experiencia memorable. Ya sea tu primer tatuaje o uno más para tu colección, en Adicts Ink Tattoo haremos realidad tus ideas.`,
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
