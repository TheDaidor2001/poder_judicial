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
            { text: "CSI", link: "/asesoria-juridica/csi" },
            { text: "CSPJ", link: "/asesoria-juridica/cspj" }
        ]
    },
    {
        text: "BIBLIOTECA JUDICIAL",
        link: "/historia",
        submenu: [
            { text: "Diccionarios Jurídicos", link: "/historia/diccionarios_juridicos" },
            { text: "Tratados y Manuales", link: "/historia/tratados_manuales" },
            { text: "Códigos Legales", link: "/historia/codigos_legales" }
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