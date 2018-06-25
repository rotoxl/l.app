var data={
    secciones:[
        {   //sección
            cd:1,                               //cd -> código
            ds:'El laboratorio de hemostasia',  //ds -> descripción
            capitulos:[1,2,3,4],
        },{//sección
            cd:2, 
            ds:'Patología de la hemostasia',
            capitulos:[5,6,7]
        }
    ],
    capitulos:[
        {   //capítulo
            cd: 1,
            etiquetaNumCapitulo:'1. ',

            ds: 'Principios básicos de la hemostasia',
            pdf: 'data/cap01/capitulo.pdf',
            bibliografia: 'data/cap01/bibliografia.html',

            autores:[1,2,3],

            apartados: [
                    {cd:1, ds:'Puntos clave',                   archivo:'data/cap01/apartado01.html'},
                    {cd:2, ds:'Endotelio vascular',             archivo:'data/cap01/apartado02.html'},
                    {cd:3, ds:'Coagulación ',                   archivo:'data/cap01/apartado03.html'},
                    {cd:4, ds:'Inhibidores de la coagulación',  archivo:'data/cap01/apartado04.html'},
                    {cd:5, ds:'Fibrinolisis ',                  archivo:'data/cap01/apartado05.html'},
                    {cd:6, ds:'Inhibidores de la  brinolisis',  archivo:'data/cap01/apartado06.html'},

                    //-> el último apartado siempre es la bibliografía
            ]
        },{ //capítulo
            cd: 2,
            etiquetaNumCapitulo:'2. ',

            ds: 'Pruebas de laboratorio de hemostasia',
            pdf: 'data/cap02/capitulo.pdf',
            bibliografia: 'data/cap02/bibliografia.html',
            autores:[2,3], 
            apartados: [
                    {cd:1, ds:'Puntos clave',                                                                        archivo:'data/cap02/apartado01.html'},
                    {cd:2, ds:'Recogida, procesado y almacenamiento de muestras antes de las pruebas diagnósticas ', archivo:'data/cap02/apartado02.html'},
                    {cd:3, ds:'Pruebas de laboratorio de la coagulación',                                            archivo:'data/cap02/apartado03.html'},
                    {cd:4, ds:'Estudio de trombo lia ',                                                              archivo:'data/cap02/apartado04.html'},
                    {cd:5, ds:'Pruebas de laboratorio de la  brinolisis',                                            archivo:'data/cap02/apartado05.html'},
            ]
        },{ //capítulo
            cd:3,
            etiquetaNumCapitulo:'3. ',
            
            ds: 'Diagnóstico molecular en la hemostasia',
            pdf: 'data/cap03/capitulo.pdf',
            bibliografia: 'data/cap03/bibliografia.html',
            autores:[4],
            apartados:[
                    {cd:1, ds:'Puntos clave',                archivo:'data/cap03/apartado01.html'},
                    {cd:2, ds:'Introducción',                archivo:'data/cap03/apartado02.html'},
                    {cd:3, ds:'Diagnóstico molecular',       archivo:'data/cap03/apartado03.html'},
                    {cd:4, ds:'Control de calidad',          archivo:'data/cap03/apartado04.html'},
                    {cd:5, ds:'Enfermedades monogénicas',    archivo:'data/cap03/apartado05.html'},
                    {cd:6, ds:'Enfermedades complejas',      archivo:'data/cap03/apartado06.html'},
                    {cd:7, ds:'Conclusiones y perspectivas', archivo:'data/cap03/apartado07.html'},
            ]
        },{ //capítulo
            cd:4,
            etiquetaNumCapitulo:'4. ',
            
            ds:'Evaluación del paciente con diátesis hemorrágica',
            pdf:'data/cap04/capitulo.pdf',
            bibliografia: 'data/cap04/bibliografia.html',
            autores:[8],
            apartados:[
                    {cd:1, ds:'Puntos clave',                                   archivo:'data/cap04/apartado01.html'},
                    {cd:2, ds:'Historia hemorrágica',                           archivo:'data/cap04/apartado02.html'},
                    {cd:3, ds:'Índices de riesgo hemorrágico',                  archivo:'data/cap04/apartado03.html'},
                    {cd:4, ds:'Exploración física',                             archivo:'data/cap04/apartado04.html'},
                    {cd:5, ds:'Pruebas de laboratorio',                         archivo:'data/cap04/apartado05.html'},
                    {cd:6, ds:'Integración de datos clínicos y de laboratorio', archivo:'data/cap04/apartado06.html'},
                    {cd:7, ds:'Conclusiones ',                                  archivo:'data/cap04/apartado07.html'},
            ]
        },{ //capítulo
            cd:5,
            etiquetaNumCapitulo:'1. ',
            
            ds:'Hemofilia A y B',
            pdf:'data/cap05/capitulo.pdf',
            bibliografia: 'data/cap05/bibliografia.html',
            autores:[3],
            apartados:[
                    {cd:1, ds:'Puntos clave',                  archivo:'data/cap05/apartado01.html'},
                    {cd:2, ds:'Introducción',                  archivo:'data/cap05/apartado02.html'},
                    {cd:3, ds:'Bases moleculares',             archivo:'data/cap05/apartado03.html'},
                    {cd:4, ds:'Hemofilia B: genética del FIX', archivo:'data/cap05/apartado04.html'},
                    {cd:5, ds:'Diagnóstico',                   archivo:'data/cap05/apartado05.html'},
                    {cd:6, ds:'Manifestaciones clínicas',      archivo:'data/cap05/apartado06.html'},
                    {cd:7, ds:'Tratamiento',                   archivo:'data/cap05/apartado07.html'},
                    {cd:8, ds:'Inhibidores en hemofilia',      archivo:'data/cap05/apartado08.html'},
                    {cd:9, ds:'Perspectivas',                  archivo:'data/cap05/apartado09.html'},
            ]
        },{ //capítulo
            cd:6,
            etiquetaNumCapitulo:'2. ',
            
            ds:'Enfermedad de von Willebrand',
            pdf:'data/cap06/capitulo.pdf',
            bibliografia: 'data/cap06/bibliografia.html',
            autores:[5, 9],
            apartados:[
                    {cd:1, ds:'Puntos clave',                                                                       archivo:'data/cap06/apartado01.html'},
                    {cd:2, ds:'Recogida, procesado y almacenamiento de muestras antes de las pruebas diagnósticas', archivo:'data/cap06/apartado02.html'},
                    {cd:3, ds:'Pruebas de laboratorio de la coagulación',                                           archivo:'data/cap06/apartado03.html'},
                    {cd:4, ds:'Estudio de trombo lia',                                                              archivo:'data/cap06/apartado04.html'},
                    {cd:5, ds:'Pruebas de laboratorio de la  brinolisis',                                           archivo:'data/cap06/apartado05.html'},
            ]
        },{ //capítulo
            cd:7,
            etiquetaNumCapitulo:'3. ',
            
            ds:'Otras enfermedades hereditarias de la hemostasia',
            pdf:'data/cap07/capitulo.pdf',
            bibliografia: 'data/cap07/bibliografia.html',
            autores:[6, 7],
            apartados:[
                    {cd:1, ds:'Puntos clave',              archivo:'data/cap07/apartado01.html'},
                    {cd:2, ds:'Introducción ',             archivo:'data/cap07/apartado02.html'},
                    {cd:3, ds:'Manifestaciones clínicas',  archivo:'data/cap07/apartado03.html'},
                    {cd:4, ds:'Diagnóstico',               archivo:'data/cap07/apartado04.html'},
                    {cd:5, ds:'Tratamiento',               archivo:'data/cap07/apartado05.html'},
                    {cd:6, ds:'De ciencia de brinógeno',   archivo:'data/cap07/apartado06.html'},
                    {cd:7, ds:'De ciencia de protrombina', archivo:'data/cap07/apartado07.html'},
                    {cd:8, ds:'De ciencia de FV',          archivo:'data/cap07/apartado08.html'},
                    {cd:9, ds:'De ciencia de FVII',        archivo:'data/cap07/apartado09.html'},
                    {cd:10, ds:'De ciencia de FX',         archivo:'data/cap07/apartado10.html'},
                    {cd:11, ds:'De ciencia de FXI',        archivo:'data/cap07/apartado11.html'},
                    {cd:12, ds:'De ciencia de FXIII',      archivo:'data/cap07/apartado12.html'},
                    {cd:13, ds:'De ciencias combinadas',   archivo:'data/cap07/apartado13.html'},
                    {cd:14, ds:'Conclusiones',             archivo:'data/cap07/apartado14.html'},
            ]
        },
    ], 
    autores:[
        {
            cd:1,
            dsApeNombre:'Álvarez Román, María Teresa',//ds
            dsIniciales:'M.T. Alvarez',
            dsNombreApe:'María Teresa Alvarez Roman', //dsBreve

            centros:['Servicio de Hematología y Hemoterapia. Hospital Universitario La Paz.'],
            ciudad:'Madrid', 
            capitulos:[1, 2]
        },{
            cd:2,
            dsApeNombre:'Bastida Bermejo, José María',
            dsIniciales:'J. M. Bastida',
            dsNombreApe:'José María Bastida Bermejo',

            centros:['Unidad de Trombosis y Hemostasia. Servicio de Hematología. Hospital Universitario de Salamanca.', 'Instituto Biosanitario de Salamanca (IBSAL). Universidad de Salamanca (USAL). ',],
            ciudad:'Salamanca',
            capitulos:[3, 4]
        },{
            cd:3,
            dsApeNombre:'Batlle Fonrodona, Javier',
            dsIniciales:'J. Batlle',
            dsNombreApe:'Javier Batlle Fonrodona',

            centros:['Servicio de Hematología y Hemoterapia. Complexo Hospitalario Universitario de A Coruña.', 'Instituto de Investigación Biomédica de A Coruña (INIBIC). ',],
            ciudad:'A Coruña',
            capitulos:[1, 3]
        },{
            cd:4,
            dsApeNombre:'Berrueco Moreno, Rubén',
            dsIniciales:'R. Berrueco',
            dsNombreApe:'Rubén Berrueco Moreno',

            centros:['Servicio de Hematología y Oncología Pediátricas. Hospital Sant Joan de Déu.',],
            ciudad:' Esplugues de Llobregat, Barcelona',
            capitulos:[2, 4]
        },{
            cd:5,
            dsApeNombre:'Buixeda Pérez, Montserrat',
            dsIniciales:'M. Buixeda',
            dsNombreApe:'Montserrat Buixeda Pérez',

            centros:['Servicio de Obstetricia. Hospital Universitario Virgen del Rocío. ',],
            ciudad:'Sevilla',
            capitulos:[1, 4]
        },{
            cd:6,
            dsApeNombre:'Carrasco Expósito, Marina',
            dsIniciales:'M. Carrasco',
            dsNombreApe:'Marina Carrasco Expósito',

            centros:['Unidad de Hemostasia. Servicio de Hematología. Hospital de Sant Pau. ',],
            ciudad:'Barcelona',
            capitulos:[2]
        },{
            cd:7,
            dsApeNombre:'Corral de la Calle, Javier',
            dsIniciales:'J. Corral',
            dsNombreApe:'Javier Corral de la Calle',

            centros:['Servicio de Hematología y Oncología Médica. Hospital Universitario Morales Meseguer.', 'Centro Regional de Hemodonación. IMIB-Universidad de Murcia. ',],
            ciudad:'Murcia. CIBERER',
            capitulos:[3]
        },{
            cd:8,
            dsApeNombre:'Domènech Santasusana, Pere',
            dsIniciales:'P. Domènech',
            dsNombreApe:'Pere Domènech Santasusana',

            centros:['Unidad deTrombosis y Hemostasia Hospital Universitari de Bellvitge. L’Hospitalet de Llobregat.',],
            ciudad:'Barcelona',
            capitulos:[3,4]
        },{
            cd:8,
            dsApeNombre:'Ferrer Marín, Francisca',
            dsIniciales:'F. Ferrer',
            dsNombreApe:'Francisca Ferrer Marín',

            centros:['Hospital Universitario Morales-Meseguer.', 'Centro Regional de Hemodonación IMIB-Arrixaca.', 'Centro de Investigación Biomédica en Red de Enfermedades Raras (CIBERER).', 'Universidad Católica San Antonio.',],
            ciudad:'Murcia',
            capitulos:[1]
        },{
            cd:9,
            dsApeNombre:'García Frade, Luis Javier',
            dsIniciales:'L. J. García',
            dsNombreApe:'Luis Javier García Frade',

            centros:['Servicio de Hematología. Hospital Universitario Río Hortega.',],
            ciudad:'Valladolid',
            capitulos:[1,4],
        }
    ],
    promueven:[{
        cd:1,
        ds:'Auspiciado por',
        img:'img/promueven-logo1.png',
        url:'https://www.seth.es/',
    }, {
        cd:2,
        ds:'Con la colaboración de',
        img:'img/promueven-logo2.png',
        url:'https://www.shire.es/',
    }, {
        cd:3,
        ds:'Editado y publicado por',
        img:'img/promueven-logo3.png',
        url:'http://portal.grupoaran.com/',
    }, {
        cd:4,
        ds:'Desarrollado por',
        img:'img/promueven-logo4.png',
        url:'http://www.imaidea.com/'
    }]

}


