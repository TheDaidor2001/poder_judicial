export const servicios = [
    {
        id: 1,
        nombre: "Inscripción de contrato de arrendamiento",
        descripcion: "Registro oficial de contratos de arrendamiento",
        tasas: [
            { rango: "Hasta 100.000", expedicion: 5000, renovacion: 5000 },
            { rango: "De 100.001 a 500.000", expedicion: 5000, renovacion: 10000 },
            { rango: "De 500.001 a 1.000.000", expedicion: 5000, renovacion: 15000 },
            { rango: "De 1.000.001 a 5.000.000", expedicion: 5000, renovacion: 20000 },
            { rango: "Más de 5.000.000", expedicion: 5000, renovacion: null }
        ]
    },
    {
        id: 2,
        nombre: "Comparecencia de bienes muebles e inmuebles",
        descripcion: "Registro de comparecencias para bienes",
        tasas: [
            { rango: "Hasta 100.000", expedicion: 10000, renovacion: null },
            { rango: "De 100.001 a 500.000", expedicion: 10000, renovacion: null },
            { rango: "De 500.001 a 1.000.000", expedicion: 10000, renovacion: null },
            { rango: "De 1.000.001 a 5.000.000", expedicion: 10000, renovacion: null },
            { rango: "Más de 5.000.000", expedicion: 10000, renovacion: null }
        ]
    },
    {
        id: 3,
        nombre: "Declaración de Obra Nueva",
        descripcion: "Registro de declaraciones de obra nueva",
        tasas: [
            { rango: "De 100.001 a 500.000", expedicion: 10000, renovacion: null },
            { rango: "De 500.001 a 1.000.000", expedicion: 10000, renovacion: null },
            { rango: "De 1.000.001 a 5.000.000", expedicion: 10000, renovacion: null },
            { rango: "Más de 5.000.000", expedicion: "1%", renovacion: null }
        ]
    }
];

export const otrosServicios = [
    "Protesto de letra de cambio y poderes",
    "Inscripciones de pensiones y rentas vitalicias",
    "Sociedades: Constitución",
    "Fianzas",
    "Hipotecas-constitución",
    "Pignoraciones cacao y café",
    "Inversión cacao y café",
    "Constitución de sociedades mercantiles",
    "Registro de propiedad",
    "Legalización de actas de reuniones",
    "Registro de empresas, sociedades"
];