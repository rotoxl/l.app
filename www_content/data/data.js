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
            pdf: 'data/cap101/capitulo.pdf',
            autores:[1,2,3],
            apartados: [
                    {cd:1, ds:'Puntos clave',                   archivo:'data/cap101/apartado01.html'},
                    {cd:2, ds:'Endotelio vascular',             archivo:'data/cap101/apartado02.html'},
                    {cd:3, ds:'Coagulación ',                   archivo:'data/cap101/apartado03.html'},
                    {cd:4, ds:'Inhibidores de la coagulación',  archivo:'data/cap101/apartado04.html'},
                    {cd:5, ds:'Fibrinolisis ',                  archivo:'data/cap101/apartado05.html'},
                    {cd:6, ds:'Inhibidores de la  brinolisis',  archivo:'data/cap101/apartado06.html'},
                    {cd:7, ds:'Bibliografía',                   archivo:'data/cap101/bibliografia.html'},
            ]
        },{ //capítulo
            cd: 2,
            etiquetaNumCapitulo:'2. ',

            ds: 'Pruebas de laboratorio de hemostasia',
            pdf: 'data/cap102/capitulo.pdf',
            autores:[2,3], 
            apartados: [
                    {cd:1, ds:'Puntos clave',                                                                        archivo:'data/cap102/apartado01.html'},
                    {cd:2, ds:'Recogida, procesado y almacenamiento de muestras antes de las pruebas diagnósticas', archivo:'data/cap102/apartado02.html'},
                    {cd:3, ds:'Pruebas de laboratorio de la coagulación',                                            archivo:'data/cap102/apartado03.html'},
                    {cd:4, ds:'Estudio de trombofilia',                                                              archivo:'data/cap102/apartado04.html'},
                    {cd:5, ds:'Pruebas de laboratorio de la  brinolisis',                                            archivo:'data/cap102/apartado05.html'},
                    {cd:6, ds:'Bibliografía',                                                                        archivo:'data/cap102/bibliografia.html'},
            ]
        },{ //capítulo
            cd:3,
            etiquetaNumCapitulo:'3. ',
            
            ds: 'Diagnóstico molecular en la hemostasia',
            pdf: 'data/cap103/capitulo.pdf',
            autores:[4],
            apartados:[
                    {cd:1, ds:'Puntos clave',                archivo:'data/cap103/apartado01.html'},
                    {cd:2, ds:'Introducción',                archivo:'data/cap103/apartado02.html'},
                    {cd:3, ds:'Diagnóstico molecular',       archivo:'data/cap103/apartado03.html'},
                    {cd:4, ds:'Control de calidad',          archivo:'data/cap103/apartado04.html'},
                    {cd:5, ds:'Enfermedades monogénicas',    archivo:'data/cap103/apartado05.html'},
                    {cd:6, ds:'Enfermedades complejas',      archivo:'data/cap103/apartado06.html'},
                    {cd:7, ds:'Conclusiones y perspectivas', archivo:'data/cap103/apartado07.html'},
                    {cd:8, ds:'Bibliografía',                archivo:'data/cap103/bibliografia.html'},
            ]
        },{ //capítulo
            cd:4,
            etiquetaNumCapitulo:'4. ',
            
            ds:'Evaluación del paciente con diátesis hemorrágica',
            pdf:'data/cap104/capitulo.pdf',
            autores:[8],
            apartados:[
                    {cd:1, ds:'Puntos clave',                                   archivo:'data/cap104/apartado01.html'},
                    {cd:2, ds:'Historia hemorrágica',                           archivo:'data/cap104/apartado02.html'},
                    {cd:3, ds:'Índices de riesgo hemorrágico',                  archivo:'data/cap104/apartado03.html'},
                    {cd:4, ds:'Exploración física',                             archivo:'data/cap104/apartado04.html'},
                    {cd:5, ds:'Pruebas de laboratorio',                         archivo:'data/cap104/apartado05.html'},
                    {cd:6, ds:'Integración de datos clínicos y de laboratorio', archivo:'data/cap104/apartado06.html'},
                    {cd:7, ds:'Conclusiones ',                                  archivo:'data/cap104/apartado07.html'},
                    {cd:8, ds:'Bibliografía ',                                  archivo:'data/cap104/bibliografia.html'},
            ]
        },{ //capítulo
            cd:5,
            etiquetaNumCapitulo:'1. ',
            
            ds:'Hemofilia A y B',
            pdf:'data/cap05/capitulo.pdf',
            autores:[3],
            apartados:[
                    {cd:1, ds:'Puntos clave',                  archivo:'data/cap105/apartado01.html'},
                    {cd:2, ds:'Introducción',                  archivo:'data/cap105/apartado02.html'},
                    {cd:3, ds:'Bases moleculares',             archivo:'data/cap105/apartado03.html'},
                    {cd:4, ds:'Hemofilia B: genética del FIX', archivo:'data/cap105/apartado04.html'},
                    {cd:5, ds:'Diagnóstico',                   archivo:'data/cap105/apartado05.html'},
                    {cd:6, ds:'Manifestaciones clínicas',      archivo:'data/cap105/apartado06.html'},
                    {cd:7, ds:'Tratamiento',                   archivo:'data/cap105/apartado07.html'},
                    {cd:8, ds:'Inhibidores en hemofilia',      archivo:'data/cap105/apartado08.html'},
                    {cd:9, ds:'Perspectivas',                  archivo:'data/cap105/apartado09.html'},
                    {cd:10,ds:'Bibliografía',                  archivo:'data/cap105/bibliografia.html'},
            ]
        },{ //capítulo
            cd:6,
            etiquetaNumCapitulo:'2. ',
            
            ds:'Enfermedad de von Willebrand',
            pdf:'data/cap106/capitulo.pdf',
            autores:[5, 9],
            apartados:[
                    {cd:1, ds:'Puntos clave',                                                                       archivo:'data/cap106/apartado01.html'},
                    {cd:2, ds:'Recogida, procesado y almacenamiento de muestras antes de las pruebas diagnósticas', archivo:'data/cap106/apartado02.html'},
                    {cd:3, ds:'Pruebas de laboratorio de la coagulación',                                           archivo:'data/cap106/apartado03.html'},
                    {cd:4, ds:'Estudio de trombo lia',                                                              archivo:'data/cap106/apartado04.html'},
                    {cd:5, ds:'Pruebas de laboratorio de la  brinolisis',                                           archivo:'data/cap106/apartado05.html'},
                    {cd:6, ds:'Bibliografía',                                                                       archivo:'data/cap106/bibliografia.html'},
            ]
        },{ //capítulo
            cd:7,
            etiquetaNumCapitulo:'3. ',
            
            ds:'Otras enfermedades hereditarias de la hemostasia',
            pdf:'data/cap107/capitulo.pdf',
            autores:[6, 7],
            apartados:[
                    {cd:1, ds:'Puntos clave',              archivo:'data/cap107/apartado01.html'},
                    {cd:2, ds:'Introducción ',             archivo:'data/cap107/apartado02.html'},
                    {cd:3, ds:'Manifestaciones clínicas',  archivo:'data/cap107/apartado03.html'},
                    {cd:4, ds:'Diagnóstico',               archivo:'data/cap107/apartado04.html'},
                    {cd:5, ds:'Tratamiento',               archivo:'data/cap107/apartado05.html'},
                    {cd:6, ds:'De ciencia de brinógeno',   archivo:'data/cap107/apartado06.html'},
                    {cd:7, ds:'De ciencia de protrombina', archivo:'data/cap107/apartado07.html'},
                    {cd:8, ds:'De ciencia de FV',          archivo:'data/cap107/apartado08.html'},
                    {cd:9, ds:'De ciencia de FVII',        archivo:'data/cap107/apartado09.html'},
                    {cd:10, ds:'De ciencia de FX',         archivo:'data/cap107/apartado10.html'},
                    {cd:11, ds:'De ciencia de FXI',        archivo:'data/cap107/apartado11.html'},
                    {cd:12, ds:'De ciencia de FXIII',      archivo:'data/cap107/apartado12.html'},
                    {cd:13, ds:'De ciencias combinadas',   archivo:'data/cap107/apartado13.html'},
                    {cd:14, ds:'Conclusiones',             archivo:'data/cap107/apartado14.html'},
                    {cd:15, ds:'Bibliografía',             archivo:'data/cap107/bibliografia.html'},
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


