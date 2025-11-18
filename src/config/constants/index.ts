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
            { text: "CSPJ", link: "/organigrama/cspj", description: "Consejo Superior del Poder Judicial" },
            { text: "CSJ", link: "/organigrama/csj", description: "Corte Suprema de Justicia" },
            { text: "AUDIENCIAS", link: "/organigrama/audiencias", description: "Audiencias de los distritos" }
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
            // {
            //     text: "Tratados y Manuales",
            //     link: "/biblioteca/tratados_manuales",
            //     description: "Doctrina legal especializada"
            // },
            // {
            //     text: "Compendio de Leyes",
            //     link: "/biblioteca/codigos_legales",
            //     description: "Leyes organizadas por materia"
            // }
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


