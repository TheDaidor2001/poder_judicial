// data/terminos.ts

// Tipos para el diccionario
export type DiccionarioTerminos = Record<string, string>;
export type TerminoEntry = [string, string];
export type LetraDisponible = string;

// Interface para resultados de búsqueda
export interface ResultadoBusqueda {
    terminos: TerminoEntry[];
    total: number;
    query: string;
}

// Interface para términos por letra
export interface TerminosPorLetra {
    letra: LetraDisponible;
    terminos: TerminoEntry[];
    total: number;
}

// Diccionario de términos jurídicos
export const diccionarioTerminos: DiccionarioTerminos = {
    // A
    "Absolución": "Decisión judicial que declara la inocencia del acusado o la falta de pruebas suficientes para condenar.",
    "Acción": "Derecho que tiene toda persona a dirigirse a los órganos jurisdiccionales para reclamar la satisfacción de un interés.",
    "Acusado": "Persona contra la que se dirige la acción penal y a quien se atribuye la comisión de un delito.",
    "Alegaciones": "Exposición de hechos, razones y argumentos que las partes presentan ante el tribunal.",
    "Amparo": "Recurso constitucional que protege los derechos fundamentales frente a su vulneración por poderes públicos.",
    "Apelación": "Recurso que se interpone ante un tribunal superior contra una resolución judicial.",
    "Auto": "Resolución judicial motivada que decide sobre cuestiones incidentales o de trámite.",
    "Audiencia": "Acto procesal en el que las partes exponen sus alegaciones ante el juez o tribunal.",

    // B
    "Beneficio de pobreza": "Exención de gastos procesales concedida a quien carece de recursos económicos suficientes.",
    "Buena fe": "Principio jurídico que exige actuar con honestidad, lealtad y rectitud en las relaciones.",
    "Bilateral": "Contrato o acuerdo que genera obligaciones recíprocas para ambas partes.",

    // C
    "Cadena de custodia": "Procedimiento controlado que garantiza la autenticidad de las pruebas desde su obtención hasta su presentación en juicio.",
    "Casación": "Recurso extraordinario ante el tribunal supremo contra sentencias que infringen la ley.",
    "Citación": "Acto procesal por el que se convoca a una persona para que comparezca ante el tribunal.",
    "Conciliación": "Procedimiento de solución pacífica de conflictos mediante acuerdo entre las partes.",
    "Condena": "Resolución judicial que impone una pena al culpable de un delito.",
    "Confesión": "Declaración por la que una parte reconoce la veracidad de hechos que le perjudican.",
    "Constitución": "Norma fundamental que establece la organización del Estado y los derechos de los ciudadanos.",
    "Competencia": "Aptitud legal de un juez o tribunal para conocer y decidir sobre determinado asunto.",

    // D
    "Declaración": "Manifestación que hace una persona ante la autoridad judicial sobre hechos de su conocimiento.",
    "Demanda": "Escrito inicial que da comienzo al proceso civil conteniendo las pretensiones del actor.",
    "Demandado": "Persona contra quien se dirige la demanda en un proceso civil.",
    "Derecho": "Conjunto de normas que regulan la convivencia social y son de cumplimiento obligatorio.",
    "Desistimiento": "Renuncia del actor a continuar con el proceso judicial iniciado.",
    "Dictamen": "Opinión técnica emitida por un perito sobre materias de su especialidad.",
    "Debido proceso": "Garantía constitucional que asegura un proceso justo y equitativo.",

    // E
    "Ejecución": "Fase procesal en la que se cumple forzosamente lo establecido en una sentencia.",
    "Embargo": "Medida cautelar que afecta bienes del deudor para garantizar el cumplimiento de una obligación.",
    "Emplazamiento": "Acto por el que se concede un plazo para comparecer o realizar determinada actuación procesal.",
    "Excepción": "Medio de defensa que paraliza o destruye la acción ejercitada por el demandante.",
    "Expediente": "Conjunto ordenado de documentos y actuaciones de un proceso judicial.",

    // F
    "Fianza": "Garantía personal o real que se presta para asegurar el cumplimiento de una obligación.",
    "Fuerza mayor": "Circunstancia excepcional, imprevisible e inevitable que impide el cumplimiento de una obligación.",
    "Firma": "Trazo gráfico que identifica a una persona y expresa su voluntad en documentos.",

    // G
    "Garantía": "Medio establecido para asegurar el cumplimiento de una obligación o el ejercicio de un derecho.",
    "Gracia": "Favor o beneficio concedido por la autoridad competente sin que exista obligación legal.",
    "Gravamen": "Carga que pesa sobre un bien inmueble.",

    // H
    "Habeas corpus": "Garantía constitucional que protege la libertad personal frente a detenciones ilegales.",
    "Hecho probado": "Circunstancia que ha quedado acreditada mediante las pruebas practicadas en el proceso.",
    "Herencia": "Conjunto de bienes, derechos y obligaciones que se transmiten por causa de muerte.",
    "Hipoteca": "Derecho real de garantía que recae sobre bienes inmuebles.",

    // I
    "Imputado": "Persona a quien se atribuye participación en un hecho punible dentro de un proceso penal.",
    "Incidente": "Cuestión distinta del asunto principal que surge durante el proceso.",
    "Indemnización": "Compensación económica por un daño o perjuicio causado.",
    "Inhibición": "Abstención del juez de conocer un asunto por existir causa legal que se lo impida.",
    "Instancia": "Grado jurisdiccional en que se tramita un proceso judicial.",
    "Interdicto": "Procedimiento judicial sumario para la protección de la posesión.",

    // J
    "Juez": "Funcionario público investido de autoridad para administrar justicia.",
    "Juicio": "Procedimiento judicial en el que se ventila y decide una controversia.",
    "Jurisdicción": "Poder que tienen los jueces y tribunales para administrar justicia.",
    "Jurisprudencia": "Conjunto de sentencias que establecen criterios interpretativos del derecho.",
    "Justicia": "Virtud que da a cada uno lo que le corresponde según derecho.",
    "Juramento": "Afirmación solemne de decir verdad o cumplir fielmente una obligación.",

    // L
    "Laudo": "Resolución dictada por árbitros en un procedimiento arbitral.",
    "Ley": "Norma jurídica dictada por el poder legislativo que regula conductas o situaciones.",
    "Litigio": "Controversia judicial entre partes que sostienen intereses contrapuestos.",
    "Legítima defensa": "Causa de justificación que excluye la responsabilidad penal.",

    // M
    "Magistrado": "Juez que forma parte de un tribunal colegiado.",
    "Mandamiento": "Orden escrita emanada de autoridad competente para ejecutar algo.",
    "Medida cautelar": "Providencia judicial preventiva para asegurar los resultados del proceso.",
    "Ministerio Fiscal": "Institución que representa el interés público en los procesos judiciales.",
    "Mora": "Retraso culpable en el cumplimiento de una obligación.",

    // N
    "Nulidad": "Invalidez de un acto jurídico por no cumplir los requisitos exigidos por la ley.",
    "Notificación": "Acto por el que se comunica oficialmente una resolución judicial a los interesados.",
    "Negligencia": "Falta de cuidado o aplicación en la ejecución de algo.",

    // O
    "Oposición": "Alegación contraria a una pretensión o solicitud.",
    "Oralidad": "Principio procesal que exige que las actuaciones se realicen de forma hablada.",
    "Orden judicial": "Mandato emanado de autoridad judicial competente.",

    // P
    "Parte": "Sujeto que interviene en un proceso judicial defendiendo sus intereses.",
    "Perito": "Experto en una materia que asiste al tribunal con sus conocimientos técnicos.",
    "Prescripción": "Extinción de derechos o acciones por el transcurso del tiempo.",
    "Prueba": "Medio utilizado para demostrar la veracidad de los hechos alegados.",
    "Providencia": "Resolución judicial de mero trámite.",
    "Precedente": "Decisión judicial anterior que sirve de referencia para casos similares.",

    // Q
    "Querella": "Acción penal ejercitada por el ofendido o sus representantes legales.",
    "Quiebra": "Situación jurídica de un comerciante que cesa en el pago de sus obligaciones.",
    "Quórum": "Número mínimo de miembros necesarios para que un órgano colegiado pueda sesionar.",

    // R
    "Rebeldía": "Situación procesal del demandado que no comparece en el proceso.",
    "Recurso": "Medio de impugnación de las resoluciones judiciales.",
    "Reparación": "Obligación de indemnizar los daños causados por un acto ilícito.",
    "Representación": "Facultad de actuar en nombre y por cuenta de otra persona.",
    "Reincidencia": "Circunstancia agravante que consiste en haber sido condenado anteriormente.",

    // S
    "Sentencia": "Resolución judicial que pone fin al proceso decidiendo sobre el fondo del asunto.",
    "Sobreseimiento": "Resolución que paraliza o pone fin a un proceso penal sin pronunciarse sobre el fondo.",
    "Supletorio": "Que suple o completa lo principal cuando este falta.",
    "Suspensión": "Interrupción temporal de un acto o procedimiento.",

    // T
    "Testigo": "Persona que declara ante el tribunal sobre hechos de los que tiene conocimiento.",
    "Tribunal": "Órgano jurisdiccional compuesto por uno o varios jueces.",
    "Tutela judicial": "Derecho fundamental a obtener protección efectiva de los tribunales.",
    "Título ejecutivo": "Documento que permite iniciar un proceso de ejecución forzosa.",

    // U
    "Usucapión": "Modo de adquirir la propiedad por el transcurso del tiempo y bajo ciertas condiciones.",
    "Urgencia": "Carácter de lo que requiere pronta ejecución o remedio.",

    // V
    "Veredicto": "Decisión del jurado sobre la culpabilidad o inocencia del acusado.",
    "Vista": "Audiencia pública en la que se practican las pruebas y se formulan alegaciones.",
    "Vicio": "Defecto que afecta la validez de un acto jurídico.",

    // W
    "Writ": "Orden judicial escrita, término del derecho anglosajón.",

    // Y
    "Yacente": "Herencia que no ha sido aceptada ni repudiada por los herederos.",

    // Z
    "Zanja": "En derecho administrativo, límite o demarcación territorial."
} as const;

// Función auxiliar para obtener términos por letra con tipado completo
export function getTerminosPorLetra(letra: LetraDisponible): TerminosPorLetra {
    const terminos: TerminoEntry[] = Object.entries(diccionarioTerminos)
        .filter(([termino]) => termino.charAt(0).toUpperCase() === letra.toUpperCase())
        .sort(([a], [b]) => a.localeCompare(b));

    return {
        letra: letra.toUpperCase(),
        terminos,
        total: terminos.length
    };
}

// Función auxiliar para buscar términos con tipado completo
export function buscarTerminos(query: string): ResultadoBusqueda {
    if (!query.trim()) {
        return {
            terminos: [],
            total: 0,
            query: query.trim()
        };
    }

    const queryLower: string = query.toLowerCase();
    const terminos: TerminoEntry[] = Object.entries(diccionarioTerminos)
        .filter(([termino, definicion]) =>
            termino.toLowerCase().includes(queryLower) ||
            definicion.toLowerCase().includes(queryLower)
        )
        .sort(([a], [b]) => a.localeCompare(b));

    return {
        terminos,
        total: terminos.length,
        query: query.trim()
    };
}

// Función para obtener todas las letras disponibles con tipado
export function getLetrasDisponibles(): LetraDisponible[] {
    return [...new Set(
        Object.keys(diccionarioTerminos).map((termino: string) => termino.charAt(0).toUpperCase())
    )].sort();
}

// Función para validar si una letra tiene términos
export function tieneTerminos(letra: LetraDisponible): boolean {
    return Object.keys(diccionarioTerminos).some(
        (termino: string) => termino.charAt(0).toUpperCase() === letra.toUpperCase()
    );
}

// Función para obtener estadísticas del diccionario
export function getEstadisticas(): {
    totalTerminos: number;
    letrasDisponibles: number;
    terminosPorLetra: Record<LetraDisponible, number>;
} {
    const letras = getLetrasDisponibles();
    const terminosPorLetra: Record<string, number> = {};

    letras.forEach((letra: LetraDisponible) => {
        terminosPorLetra[letra] = getTerminosPorLetra(letra).total;
    });

    return {
        totalTerminos: Object.keys(diccionarioTerminos).length,
        letrasDisponibles: letras.length,
        terminosPorLetra
    };
}