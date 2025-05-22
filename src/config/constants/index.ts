export { FOOTER_LINKS } from "./footerLinks";

// src/config/constants.js
export const SITE_MENU = [
    {
        text: "INICIO",
        link: "/"
    },
    {
        text: "HISTORIA",
        link: "/historia"
    },
    {
        text: "ASESORIA JURIDICA",
        link: "/asesoria-juridica",
        submenu: [
            { text: "ASESORAMENTO LEGAL", link: "/asesoria-juridica" },
            { text: "CSJ", link: "/asesoria-juridica/csi" },
            { text: "CSPJ", link: "/asesoria-juridica/cspj" }
        ]
    },
    {
        text: "BIBLIOTECA JUDICIAL",
        link: "/biblioteca",
        submenu: [
            { text: "Diccionarios Jurídicos", link: "/biblioteca" },
            { text: "Tratados y Manuales", link: "/biblioteca/tratados_manuales" },
            { text: "Códigos Legales", link: "/biblioteca/codigos_legales" }
        ]
    },
    {
        text: "NOTICIAS JUDICIALES",
        link: "/noticias_judiciales"
    },
    {
        text: "CONTACTO",
        link: "/contacto"
    }
];


