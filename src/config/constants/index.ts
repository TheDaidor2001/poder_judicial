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
    },
    {
        text: "ORGANIGRAMA",
        submenu: [
            { text: "CSJ", link: "/organigrama/csj", description: "Consejo Judicial" },
            { text: "CSPJ", link: "/organigrama/cspj", description: "Consejo Judicial Superior" }
        ]
    },
    {
        text: "BIBLIOTECA JUDICIAL",
        submenu: [
            {
                text: "Diccionarios Jurídicos",
                link: "/biblioteca/diccionario_juridico",
                description: "Definiciones legales clave"
            },
            {
                text: "Tratados y Manuales",
                link: "/biblioteca/tratados_manuales",
                description: "Doctrina legal especializada"
            },
            {
                text: "Códigos Legales",
                link: "/biblioteca/codigos_legales",
                description: "Leyes organizadas por materia"
            }
        ]
    },
    {
        text: "SERVICIOS",
        link: "/servicios"
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


