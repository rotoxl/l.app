var data={
    secciones:[
        {   //sección	
            cd:1,                               //cd -> código
            ds:'El laboratorio de hemostasia',  //ds -> descripción
            capitulos:[101,102,103,104],
        },{//sección
            cd:2, 
            ds:'Patología de la hemostasia',
            capitulos:[201,202,203,204,205,206,207,208,209,210,211,212,213]
        },{//sección
            cd:3, 
            ds:'Hemostasia en la práctica clínica',
            capitulos:[301,302,303,304,305,306,307,308,309,310,311]
        }
    ],
    capitulos:[
        {   //capítulo	
            cd: 101,
            etiquetaNumCapitulo:'1',
            ds: 'Principios básicos de la hemostasia',
            pdf: 'data/cap101/capitulo101.pdf',
            bibliografia: 'data/cap101/bibliografia.html',

            autores:[21,24,27],

            apartados: [
                    {cd:1, ds:'Puntos clave',                   archivo:'data/cap101/apartado01.html'},
                    {cd:2, ds:'Endotelio vascular',             archivo:'data/cap101/apartado02.html'},
                    {cd:3, ds:'Coagulación ',                   archivo:'data/cap101/apartado03.html'},
                    {cd:4, ds:'Inhibidores de la coagulación',  archivo:'data/cap101/apartado04.html'},
                    {cd:5, ds:'Fibrinolisis ',                  archivo:'data/cap101/apartado05.html'},
                    {cd:6, ds:'Inhibidores de la  brinolisis',  archivo:'data/cap101/apartado06.html'},
					{cd:7, ds:'Bibliografía',					archivo:'data/cap101/bibliografia.html'}
                    //-> el último apartado siempre es la bibliografía
            ]
        },{	 //capítulo	
            cd: 102,
            etiquetaNumCapitulo:'2',
            ds: 'Pruebas de laboratorio de hemostasia',
            pdf: 'data/cap102/capitulo102.pdf',
            bibliografia: 'data/cap102/bibliografia.html',
            autores:[21,24,27],
            apartados: [
                    {cd:1, ds:'Puntos clave',                                                                        archivo:'data/cap102/apartado01.html'},
                    {cd:2, ds:'Recogida, procesado y almacenamiento de muestras antes de las pruebas diagnósticas',  archivo:'data/cap102/apartado02.html'},
                    {cd:3, ds:'Pruebas de laboratorio de la coagulación',                                            archivo:'data/cap102/apartado03.html'},
                    {cd:4, ds:'Estudio de trombofilia',                                                              archivo:'data/cap102/apartado04.html'},
                    {cd:5, ds:'Pruebas de laboratorio de la brinolisis',                                             archivo:'data/cap102/apartado05.html'},
					{cd:6, ds:'Bibliografía',																		 archivo:'data/cap102/bibliografia.html'}
            ]
        },{ //capítulo	
            cd: 103,
            etiquetaNumCapitulo:'3',
            ds: 'Diagnóstico molecular en la hemostasia',
            pdf: 'data/cap103/capitulo103.pdf',
            bibliografia: 'data/cap103/bibliografia.html',
            autores:[7],
            apartados:[
                    {cd:1, ds:'Puntos clave',                archivo:'data/cap103/apartado01.html'},
                    {cd:2, ds:'Introducción',                archivo:'data/cap103/apartado02.html'},
                    {cd:3, ds:'Diagnóstico molecular',       archivo:'data/cap103/apartado03.html'},
                    {cd:4, ds:'Control de calidad',          archivo:'data/cap103/apartado04.html'},
                    {cd:5, ds:'Enfermedades monogénicas',    archivo:'data/cap103/apartado05.html'},
                    {cd:6, ds:'Enfermedades complejas',      archivo:'data/cap103/apartado06.html'},
                    {cd:7, ds:'Conclusiones y perspectivas', archivo:'data/cap103/apartado07.html'},
					{cd:8, ds:'Bibliografía',				 archivo:'data/cap103/bibliografia.html'}
            ]
        },{ //capítulo	
            cd: 104,
            etiquetaNumCapitulo:'4',
            ds:'Evaluación del paciente con diátesis hemorrágica',
            pdf:'data/cap04/capitulo104.pdf',
            bibliografia: 'data/cap104/bibliografia.html',
            autores:[28],
            apartados:[
                    {cd:1, ds:'Puntos clave',                                   archivo:'data/cap104/apartado01.html'},
                    {cd:2, ds:'Historia hemorrágica',                           archivo:'data/cap104/apartado02.html'},
                    {cd:3, ds:'Índices de riesgo hemorrágico',                  archivo:'data/cap104/apartado03.html'},
                    {cd:4, ds:'Exploración física',                             archivo:'data/cap104/apartado04.html'},
                    {cd:5, ds:'Pruebas de laboratorio',                         archivo:'data/cap104/apartado05.html'},
                    {cd:6, ds:'Integración de datos clínicos y de laboratorio', archivo:'data/cap104/apartado06.html'},
                    {cd:7, ds:'Conclusiones',                                   archivo:'data/cap104/apartado07.html'},
					{cd:8, ds:'Bibliografía',									archivo:'data/cap104/bibliografia.html'}
            ]
        },{ //capítulo		
			cd: 201,		
			etiquetaNumCapitulo:'1',		
			ds:'Hemofilia A y B',
			pdf:'data/cap201/capitulo201.pdf',		
			bibliografia: 'data/cap201/bibliografia.html',		
			autores:[13,1,19,33],		
			apartados:[		
								{cd:1, ds:'Puntos clave',					archivo:'data/cap201/apartado01.html'},
								{cd:2, ds:'Introducción',					archivo:'data/cap201/apartado02.html'},
								{cd:3, ds:'Bases moleculares',				archivo:'data/cap201/apartado03.html'},
								{cd:4, ds:'Hemofilia B: genética del FIX',	archivo:'data/cap201/apartado04.html'},
								{cd:5, ds:'Diagnóstico',					archivo:'data/cap201/apartado05.html'},
								{cd:6, ds:'Manifestaciones clínicas',		archivo:'data/cap201/apartado06.html'},
								{cd:7, ds:'Tratamiento',					archivo:'data/cap201/apartado07.html'},
								{cd:8, ds:'Inhibidores en hemofilia',		archivo:'data/cap201/apartado08.html'},
								{cd:9, ds:'Perspectivas',					archivo:'data/cap201/apartado09.html'},
								{cd:10, ds:'Bibliografía',					archivo:'data/cap201/bibliografia.html'}
			]		
			},{ //capítulo			
			cd: 202,		
			etiquetaNumCapitulo:'2',		
			ds:'Enfermedad de von Willebrand',
			pdf:'data/cap202/capitulo202.pdf',		
			bibliografia: 'data/cap202/bibliografia.html',		
			autores:[3,16],		
			apartados:[		
								{cd:1, ds:'Puntos clave',														archivo:'data/cap202/apartado01.html'},
								{cd:2, ds:'Introducción',														archivo:'data/cap202/apartado02.html'},
								{cd:3, ds:'Clasificación de la EvW',											archivo:'data/cap202/apartado03.html'},
								{cd:4, ds:'Manifestaciones clínicas. Evaluación de la historia hemorrágica',	archivo:'data/cap202/apartado04.html'},
								{cd:5, ds:'Evaluación de laboratorio',											archivo:'data/cap202/apartado05.html'},
								{cd:6, ds:'Acercamiento práctico simplificado en el diagnóstico de la EvW',		archivo:'data/cap202/apartado06.html'},
								{cd:7, ds:'Tratamiento de la EvW',												archivo:'data/cap202/apartado07.html'},
								{cd:8, ds:'Recursos terapeúticos disponibles',									archivo:'data/cap202/apartado08.html'},
								{cd:9, ds:'Recomendaciones prácticas en el tratamiento de la EvW',				archivo:'data/cap202/apartado09.html'},
								{cd:10, ds:'Bibliografía',														archivo:'data/cap202/bibliografia.html'}
			]		
			},{ //capítulo			
			cd: 203,		
			etiquetaNumCapitulo:'3',		
			ds:'Otras enfermedades hereditarias de la hemostasia',
			pdf:'data/cap203/capitulo203.pdf',		
			bibliografia: 'data/cap203/bibliografia.html',		
			autores:[25],		
			apartados:[		
								{cd:1, ds:'Puntos clave',					archivo:'data/cap203/apartado01.html'},
								{cd:2, ds:'Introducción',					archivo:'data/cap203/apartado02.html'},
								{cd:3, ds:'Manifestaciones clínicas',		archivo:'data/cap203/apartado03.html'},
								{cd:4, ds:'Diagnóstico',					archivo:'data/cap203/apartado04.html'},
								{cd:5, ds:'Tratamiento',					archivo:'data/cap203/apartado05.html'},
								{cd:6, ds:'Deficiencia de fibrinógeno',		archivo:'data/cap203/apartado06.html'},
								{cd:7, ds:'Deficiencia de protrombina',		archivo:'data/cap203/apartado07.html'},
								{cd:8, ds:'Deficiencia de FV',				archivo:'data/cap203/apartado08.html'},
								{cd:9, ds:'Deficiencia de FVII',			archivo:'data/cap203/apartado09.html'},
								{cd:10, ds:'Deficiencia de FX',				archivo:'data/cap203/apartado10.html'},
								{cd:11, ds:'Deficiencia de FXI',			archivo:'data/cap203/apartado11.html'},
								{cd:12, ds:'Deficiencia de FXIII',			archivo:'data/cap203/apartado12.html'},
								{cd:13, ds:'Deficiencias combinadas',		archivo:'data/cap203/apartado13.html'},
								{cd:14, ds:'Conclusiones',					archivo:'data/cap203/apartado14.html'},
								{cd:15, ds:'Bibliografía',					archivo:'data/cap203/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 204,		
			etiquetaNumCapitulo:'4',		
			ds:'Inhibidores adquiridos de la coagulación',
			pdf:'data/cap204/capitulo204.pdf',		
			bibliografia: 'data/cap204/bibliografia.html',		
			autores:[22],		
			apartados:[		
								{cd:1, ds:'Puntos clave',											archivo:'data/cap204/apartado01.html'},
								{cd:2, ds:'Introducción',											archivo:'data/cap204/apartado02.html'},
								{cd:3, ds:'Definición y epidemiología',								archivo:'data/cap204/apartado03.html'},
								{cd:4, ds:'Etiopatogenia y características del inhibidor',			archivo:'data/cap204/apartado04.html'},
								{cd:5, ds:'Características clínicas y confirmación de laboratorio',	archivo:'data/cap204/apartado05.html'},
								{cd:6, ds:'Tratamiento',											archivo:'data/cap204/apartado06.html'},
								{cd:7, ds:'Factores pronóstico, mortalidad y recaídas',				archivo:'data/cap204/apartado07.html'},
								{cd:8, ds:'Conclusiones',											archivo:'data/cap204/apartado08.html'},
								{cd:9, ds:'Bibliografía',											archivo:'data/cap204/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 205,		
			etiquetaNumCapitulo:'5',		
			ds:'Trastornos cuantitativos de las plaquetas',
			pdf:'data/cap205/capitulo205.pdf',		
			bibliografia: 'data/cap205/bibliografia.html',		
			autores:[11,12,2],		
			apartados:[		
								{cd:1, ds:'Puntos clave',															archivo:'data/cap205/apartado01.html'},
								{cd:2, ds:'Introducción',															archivo:'data/cap205/apartado02.html'},
								{cd:3, ds:'Producción de plaquetas y su aclaramiento',								archivo:'data/cap205/apartado03.html'},
								{cd:4, ds:'Causas de trombocitopenia',												archivo:'data/cap205/apartado04.html'},
								{cd:5, ds:'Anamnesis y examen físico en el paciente con trombocitopenia',			archivo:'data/cap205/apartado05.html'},
								{cd:6, ds:'Hemograma y frotis en la evaluación de la trombocitopenia',				archivo:'data/cap205/apartado06.html'},
								{cd:7, ds:'Plaquetas reticuladas',													archivo:'data/cap205/apartado07.html'},
								{cd:8, ds:'Examen morfológico de la médula ósea en la trombocitopenia',				archivo:'data/cap205/apartado08.html'},
								{cd:9, ds:'Trombocitopenia inducida por fármacos',									archivo:'data/cap205/apartado09.html'},
								{cd:10, ds:'Trombocitopenia en el embarazo',										archivo:'data/cap205/apartado10.html'},
								{cd:11, ds:'Trombocitopenias asociadas a la transfusión de componentes sanguíneos',	archivo:'data/cap205/apartado11.html'},
								{cd:12, ds:'Trombocitopenia neonatal',												archivo:'data/cap205/apartado12.html'},
								{cd:13, ds:'Trastornos plaquetarios congénitos',									archivo:'data/cap205/apartado13.html'},
								{cd:14, ds:'Bibliografía',															archivo:'data/cap205/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 206,		
			etiquetaNumCapitulo:'6',		
			ds:'Trastornos cualitativos de las plaquetas',
			pdf:'data/cap206/capitulo206.pdf',		
			bibliografia: 'data/cap206/bibliografia.html',		
			autores:[23],		
			apartados:[		
								{cd:1, ds:'Puntos clave',															archivo:'data/cap206/apartado01.html'},
								{cd:2, ds:'Introducción',															archivo:'data/cap206/apartado02.html'},
								{cd:3, ds:'Identificación de los pacientes candidatos a estudio de laboratorio',	archivo:'data/cap206/apartado03.html'},
								{cd:4, ds:'Estudio preliminar',														archivo:'data/cap206/apartado04.html'},
								{cd:5, ds:'Estudios específicos de la función plaquetaria',							archivo:'data/cap206/apartado05.html'},
								{cd:6, ds:'Estudios genéticos',														archivo:'data/cap206/apartado06.html'},
								{cd:7, ds:'Bibliografía',															archivo:'data/cap206/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 207,		
			etiquetaNumCapitulo:'7',		
			ds:'Coagulación intravascular diseminada',
			pdf:'data/cap207/capitulo207.pdf',		
			bibliografia: 'data/cap207/bibliografia.html',		
			autores:[10],		
			apartados:[		
								{cd:1, ds:'Puntos clave',				archivo:'data/cap207/apartado01.html'},
								{cd:2, ds:'Introducción',				archivo:'data/cap207/apartado02.html'},
								{cd:3, ds:'Patogenia',					archivo:'data/cap207/apartado03.html'},
								{cd:4, ds:'Etiología',					archivo:'data/cap207/apartado04.html'},
								{cd:5, ds:'Manifestaciones clínicas',	archivo:'data/cap207/apartado05.html'},
								{cd:6, ds:'Diagnóstico',				archivo:'data/cap207/apartado06.html'},
								{cd:7, ds:'Tratamiento',				archivo:'data/cap207/apartado07.html'},
								{cd:8, ds:'Pronóstico',					archivo:'data/cap207/apartado08.html'},
								{cd:9, ds:'Bibliografía',				archivo:'data/cap207/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 208,		
			etiquetaNumCapitulo:'8',		
			ds:'Microangiopatías trombóticas',
			pdf:'data/cap208/capitulo208.pdf',		
			bibliografia: 'data/cap208/bibliografia.html',		
			autores:[32],		
			apartados:[		
								{cd:1, ds:'Puntos clave',					archivo:'data/cap208/apartado01.html'},
								{cd:2, ds:'Introducción',					archivo:'data/cap208/apartado02.html'},
								{cd:3, ds:'Fisiopatología de las MAT',		archivo:'data/cap208/apartado03.html'},
								{cd:4, ds:'Clínica de las MAT',				archivo:'data/cap208/apartado04.html'},
								{cd:5, ds:'Diagnóstico de las MAT',			archivo:'data/cap208/apartado05.html'},
								{cd:6, ds:'Tratamiento de las MAT',			archivo:'data/cap208/apartado06.html'},
								{cd:7, ds:'Bibliografía',					archivo:'data/cap208/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 209,		
			etiquetaNumCapitulo:'9',		
			ds:'Neoplasias mieloproliferativas crónicas y sistema hemostático',
			pdf:'data/cap209/capitulo209.pdf',		
			bibliografia: 'data/cap209/bibliografia.html',		
			autores:[9,38],		
			apartados:[		
								{cd:1, ds:'Puntos clave',													archivo:'data/cap209/apartado01.html'},
								{cd:2, ds:'Introducción',													archivo:'data/cap209/apartado02.html'},
								{cd:3, ds:'Complicaciones vasculares en NMP: epidemiología',				archivo:'data/cap209/apartado03.html'},
								{cd:4, ds:'Patogenia de la trombosis',										archivo:'data/cap209/apartado04.html'},
								{cd:5, ds:'Patogenia del sangrado',											archivo:'data/cap209/apartado05.html'},
								{cd:6, ds:'Consecuencias prácticas: clasificación del riesgo trombótico',	archivo:'data/cap209/apartado06.html'},
								{cd:7, ds:'Terapia adaptada al riesgo',										archivo:'data/cap209/apartado07.html'},
								{cd:8, ds:'Conclusiones y perspectivas',									archivo:'data/cap209/apartado08.html'},
								{cd:9, ds:'Bibliografía',													archivo:'data/cap209/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 210,		
			etiquetaNumCapitulo:'10',		
			ds:'Tromboembolismo venoso',
			pdf:'data/cap210/capitulo210.pdf',		
			bibliografia: 'data/cap210/bibliografia.html',		
			autores:[15],		
			apartados:[		
								{cd:1, ds:'Puntos clave',		archivo:'data/cap210/apartado01.html'},
								{cd:2, ds:'Introducción',		archivo:'data/cap210/apartado02.html'},
								{cd:3, ds:'Patogenia',			archivo:'data/cap210/apartado03.html'},
								{cd:4, ds:'Diagnóstico',		archivo:'data/cap210/apartado04.html'},
								{cd:5, ds:'Tratamiento',		archivo:'data/cap210/apartado05.html'},
								{cd:6, ds:'Conclusiones',		archivo:'data/cap210/apartado06.html'},
								{cd:7, ds:'Bibliografía',		archivo:'data/cap210/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 211,		
			etiquetaNumCapitulo:'11',		
			ds:'Trombosis arterial	',
			pdf:'data/cap211/capitulo211.pdf',		
			bibliografia: 'data/cap211/bibliografia.html',		
			autores:[36],		
			apartados:[		
								{cd:1, ds:'Puntos clave',										archivo:'data/cap211/apartado01.html'},
								{cd:2, ds:'Introducción',										archivo:'data/cap211/apartado02.html'},
								{cd:3, ds:'Trombosis arterial y trombofilia',					archivo:'data/cap211/apartado03.html'},
								{cd:4, ds:'Tratamiento y profilaxis de la trombosis arterial',	archivo:'data/cap211/apartado04.html'},
								{cd:5, ds:'Conclusiones y perspectivas',						archivo:'data/cap211/apartado05.html'},
								{cd:6, ds:'Bibliografía',										archivo:'data/cap211/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 212,		
			etiquetaNumCapitulo:'12',		
			ds:'Tratamiento anticoagulante',
			pdf:'data/cap212/capitulo212.pdf',		
			bibliografia: 'data/cap212/bibliografia.html',		
			autores:[8],		
			apartados:[		
								{cd:1, ds:'Puntos clave',									archivo:'data/cap212/apartado01.html'},
								{cd:2, ds:'Introducción',									archivo:'data/cap212/apartado02.html'},
								{cd:3, ds:'Fármacos anticoagulantes',						archivo:'data/cap212/apartado03.html'},
								{cd:4, ds:'Fármacos antivitamina K',						archivo:'data/cap212/apartado04.html'},
								{cd:5, ds:'Fármacos anticoagulantes de acción indirecta',	archivo:'data/cap212/apartado05.html'},
								{cd:6, ds:'Inhibidores directos parenterales',				archivo:'data/cap212/apartado06.html'},
								{cd:7, ds:'Anticoagulantes orales de acción directa',		archivo:'data/cap212/apartado07.html'},
								{cd:8, ds:'Bibliografía',									archivo:'data/cap212/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 213,		
			etiquetaNumCapitulo:'13',		
			ds:'Síndrome antifosfolipídico',
			pdf:'data/cap213/capitulo213.pdf',		
			bibliografia: 'data/cap213/bibliografia.html',		
			autores:[31],		
			apartados:[		
								{cd:1, ds:'Puntos clave',												archivo:'data/cap213/apartado01.html'},
								{cd:2, ds:'Introducción',												archivo:'data/cap213/apartado02.html'},
								{cd:3, ds:'Definición y diagnóstico del síndrome antifosfolipídico',	archivo:'data/cap213/apartado03.html'},
								{cd:4, ds:'Manifestaciones clínicas',									archivo:'data/cap213/apartado04.html'},
								{cd:5, ds:'Anticuerpos antifosfolipídicos',								archivo:'data/cap213/apartado05.html'},
								{cd:6, ds:'Tratamiento del síndrome antifosfolipídico',					archivo:'data/cap213/apartado06.html'},
								{cd:7, ds:'Conclusiones y perspectivas',								archivo:'data/cap213/apartado07.html'},
								{cd:8, ds:'Bibliografía',												archivo:'data/cap213/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 301,		
			etiquetaNumCapitulo:'1',		
			ds:'Medicina cardiovascular',
			pdf:'data/cap301/capitulo301.pdf',		
			bibliografia: 'data/cap301/bibliografia.html',		
			autores:[35,18],		
			apartados:[		
								{cd:1, ds:'Puntos clave',										archivo:'data/cap301/apartado01.html'},
								{cd:2, ds:'Introducción',										archivo:'data/cap301/apartado02.html'},
								{cd:3, ds:'Fisiopatología de la enfermedad cardiovascular',		archivo:'data/cap301/apartado03.html'},
								{cd:4, ds:'Cardiopatía isquémica',								archivo:'data/cap301/apartado04.html'},
								{cd:5, ds:'Enfermedad cerebrovascular',							archivo:'data/cap301/apartado05.html'},
								{cd:6, ds:'Prevención del ictus cardioembólico',				archivo:'data/cap301/apartado06.html'},
								{cd:7, ds:'Arteriopatía periférica',							archivo:'data/cap301/apartado07.html'},
								{cd:8, ds:'Bibliografía',										archivo:'data/cap301/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 302,		
			etiquetaNumCapitulo:'2',		
			ds:'Cirugía cardiaca',
			pdf:'data/cap302/capitulo302.pdf',		
			bibliografia: 'data/cap302/bibliografia.html',		
			autores:[20],		
			apartados:[		
								{cd:1, ds:'Puntos clave',												archivo:'data/cap302/apartado01.html'},
								{cd:2, ds:'Introducción',												archivo:'data/cap302/apartado02.html'},
								{cd:3, ds:'Anticoagulación durante el bypass cardiopulmonar',			archivo:'data/cap302/apartado03.html'},
								{cd:4, ds:'Circulación extracorpórea',									archivo:'data/cap302/apartado04.html'},
								{cd:5, ds:'Complicaciones hemorrágicas durante la cirugía cardiaca',	archivo:'data/cap302/apartado05.html'},
								{cd:6, ds:'Coagulopatía tras bypass cardiopulmonar',					archivo:'data/cap302/apartado06.html'},
								{cd:7, ds:'Manejo hemostático y de componentes sanguíneos',				archivo:'data/cap302/apartado07.html'},
								{cd:8, ds:'Evaluación prequirúrgica del paciente',						archivo:'data/cap302/apartado08.html'},
								{cd:9, ds:'Cirugía urgente',											archivo:'data/cap302/apartado09.html'},
								{cd:10, ds:'Conclusiones',												archivo:'data/cap302/apartado10.html'},
								{cd:11, ds:'Bibliografía',												archivo:'data/cap302/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 303,		
			etiquetaNumCapitulo:'3',		
			ds:'Neurología',
			pdf:'data/cap303/capitulo303.pdf',		
			bibliografia: 'data/cap303/bibliografia.html',		
			autores:[17,39,37],		
			apartados:[		
								{cd:1, ds:'Puntos clave',																	archivo:'data/cap303/apartado01.html'},
								{cd:2, ds:'Introducción',																	archivo:'data/cap303/apartado02.html'},
								{cd:3, ds:'Enfermedad cerebrovascular: clasificación y factores de riesgo hematológicos',	archivo:'data/cap303/apartado03.html'},
								{cd:4, ds:'Enfermedad cerebrovascular isquémica: tratamiento hemostático en la fase aguda',	archivo:'data/cap303/apartado04.html'},
								{cd:5, ds:'Enfermedad cerebrovascular isquémica y alteraciones hematológicas',				archivo:'data/cap303/apartado05.html'},
								{cd:6, ds:'Hemorragia cerebral',															archivo:'data/cap303/apartado06.html'},
								{cd:7, ds:'Hemorragia subaracnoidea',														archivo:'data/cap303/apartado07.html'},
								{cd:8, ds:'Trombosis de senos venosos cerebrales',											archivo:'data/cap303/apartado08.html'},
								{cd:9, ds:'Bibliografía',																	archivo:'data/cap303/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 304,		
			etiquetaNumCapitulo:'4',		
			ds:'Hepatología',
			pdf:'data/cap304/capitulo304.pdf',		
			bibliografia: 'data/cap304/bibliografia.html',		
			autores:[20],		
			apartados:[		
								{cd:1, ds:'Puntos clave',															archivo:'data/cap304/apartado01.html'},
								{cd:2, ds:'Introducción',															archivo:'data/cap304/apartado02.html'},
								{cd:3, ds:'Fisiopatología de la coagulopatía en la insuficiencia hepática',			archivo:'data/cap304/apartado03.html'},
								{cd:4, ds:'Manifestaciones clínicas de la coagulopatía en la enfermedad hepática',	archivo:'data/cap304/apartado04.html'},
								{cd:5, ds:'Evaluación de la hemostasia en la hepatopatía',							archivo:'data/cap304/apartado05.html'},
								{cd:6, ds:'Procedimientos invasivos y cirugía',										archivo:'data/cap304/apartado06.html'},
								{cd:7, ds:'Tratamiento de la coagulopatía en la hepatopatía',						archivo:'data/cap304/apartado07.html'},
								{cd:8, ds:'Bibliografía',															archivo:'data/cap304/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 305,		
			etiquetaNumCapitulo:'5',		
			ds:'Nefrología',
			pdf:'data/cap305/capitulo305.pdf',		
			bibliografia: 'data/cap305/bibliografia.html',		
			autores:[26],		
			apartados:[		
								{cd:1, ds:'Puntos clave',															archivo:'data/cap305/apartado01.html'},
								{cd:2, ds:'Introducción',															archivo:'data/cap305/apartado02.html'},
								{cd:3, ds:'Definición de enfermedad renal',											archivo:'data/cap305/apartado03.html'},
								{cd:4, ds:'Alteraciones de la hemostasia en el paciente renal',						archivo:'data/cap305/apartado04.html'},
								{cd:5, ds:'Aumento del riesgo hemorrágico',											archivo:'data/cap305/apartado05.html'},
								{cd:6, ds:'Trombosis venosa y enfermedad renal',									archivo:'data/cap305/apartado06.html'},
								{cd:7, ds:'Estado hipercoagulable en la ERC',										archivo:'data/cap305/apartado07.html'},
								{cd:8, ds:'Síndrome nefrótico',														archivo:'data/cap305/apartado08.html'},
								{cd:9, ds:'Vasculitis por anticuerpos antineutrófilo',								archivo:'data/cap305/apartado09.html'},
								{cd:10, ds:'Fibrilación auricular y riesgo tromboembólico en el paciente renal',	archivo:'data/cap305/apartado10.html'},
								{cd:11, ds:'Tromboembolismo en el trasplante renal',								archivo:'data/cap305/apartado11.html'},
								{cd:12, ds:'Trombosis de los accesos vasculares',									archivo:'data/cap305/apartado12.html'},
								{cd:13, ds:'Tratamiento antitrombótico en el paciente renal',						archivo:'data/cap305/apartado13.html'},
								{cd:14, ds:'Complicaciones del tratamiento anticoagulante en el paciente renal',	archivo:'data/cap305/apartado14.html'},
								{cd:15, ds:'Bibliografía',															archivo:'data/cap305/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 306,		
			etiquetaNumCapitulo:'6',		
			ds:'Oncología',
			pdf:'data/cap306/capitulo306.pdf',		
			bibliografia: 'data/cap306/bibliografia.html',		
			autores:[29],		
			apartados:[		
								{cd:1, ds:'Puntos clave',					archivo:'data/cap306/apartado01.html'},
								{cd:2, ds:'Introducción',					archivo:'data/cap306/apartado02.html'},
								{cd:3, ds:'Fisiopatología',					archivo:'data/cap306/apartado03.html'},
								{cd:4, ds:'Cáncer y riesgo trombótico',		archivo:'data/cap306/apartado04.html'},
								{cd:5, ds:'Cáncer y riesgo hemorrágico',	archivo:'data/cap306/apartado05.html'},
								{cd:6, ds:'Bibliografía',					archivo:'data/cap306/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 307,		
			etiquetaNumCapitulo:'7',		
			ds:'Obstetricia, anticoncepción y tratamiento hormonal sustitutivo',
			pdf:'data/cap307/capitulo307.pdf',		
			bibliografia: 'data/cap307/bibliografia.html',		
			autores:[34,5,30],		
			apartados:[		
								{cd:1, ds:'Puntos clave',													archivo:'data/cap307/apartado01.html'},
								{cd:2, ds:'Hemostasia y mujer: peculiaridades',								archivo:'data/cap307/apartado02.html'},
								{cd:3, ds:'La gestación como estado de hipercoagulabilidad',				archivo:'data/cap307/apartado03.html'},
								{cd:4, ds:'ETEV gestacional: profilaxis, diagnóstico y tratamiento',		archivo:'data/cap307/apartado04.html'},
								{cd:5, ds:'Coagulación intravascular diseminada de causa obstétrica',		archivo:'data/cap307/apartado05.html'},
								{cd:6, ds:'Hemorragia crítica posparto',									archivo:'data/cap307/apartado06.html'},
								{cd:7, ds:'Anticoncepción hormonal y hemostasia',							archivo:'data/cap307/apartado07.html'},
								{cd:8, ds:'Terapia hormonal sustitutiva y hemostasia',						archivo:'data/cap307/apartado08.html'},
								{cd:9, ds:'Bibliografía',													archivo:'data/cap307/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 308,		
			etiquetaNumCapitulo:'8',		
			ds:'Pediatría',
			pdf:'data/cap308/capitulo308.pdf',		
			bibliografia: 'data/cap308/bibliografia.html',		
			autores:[4],		
			apartados:[		
								{cd:1, ds:'Puntos clave',											archivo:'data/cap308/apartado01.html'},
								{cd:2, ds:'Introducción',											archivo:'data/cap308/apartado02.html'},
								{cd:3, ds:'Proceso madurativo de la hemostasia',					archivo:'data/cap308/apartado03.html'},
								{cd:4, ds:'Patología hemorrágica en el recién nacido y el niño',	archivo:'data/cap308/apartado04.html'},
								{cd:5, ds:'Patología trombótica en la edad pediátrica',				archivo:'data/cap308/apartado05.html'},
								{cd:6, ds:'Conclusiones y perspectivas',							archivo:'data/cap308/apartado06.html'},
								{cd:7, ds:'Bibliografía',											archivo:'data/cap308/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 309,		
			etiquetaNumCapitulo:'9',		
			ds:'Medicina intensiva',
			pdf:'data/cap309/capitulo309.pdf',		
			bibliografia: 'data/cap309/bibliografia.html',		
			autores:[20],		
			apartados:[		
								{cd:1, ds:'Puntos clave',											archivo:'data/cap309/apartado01.html'},
								{cd:2, ds:'Introducción',											archivo:'data/cap309/apartado02.html'},
								{cd:3, ds:'Manejo de las coagulopatías en pacientes críticos',		archivo:'data/cap309/apartado03.html'},
								{cd:4, ds:'Trombocitopenia',										archivo:'data/cap309/apartado04.html'},
								{cd:5, ds:'Sepsis y síndrome de respuesta inflamatoria sistémica',	archivo:'data/cap309/apartado05.html'},
								{cd:6, ds:'Tratamiento del SIRS',									archivo:'data/cap309/apartado06.html'},
								{cd:7, ds:'Trombocitopenia inducida por heparina',					archivo:'data/cap309/apartado07.html'},
								{cd:8, ds:'Manejo del tromboembolismo en cuidados intensivos',		archivo:'data/cap309/apartado08.html'},
								{cd:9, ds:'Bibliografía',											archivo:'data/cap309/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 310,		
			etiquetaNumCapitulo:'10',		
			ds:'Transfusión',
			pdf:'data/cap310/capitulo310.pdf',		
			bibliografia: 'data/cap310/bibliografia.html',		
			autores:[6],		
			apartados:[		
								{cd:1, ds:'Puntos clave',									archivo:'data/cap310/apartado01.html'},
								{cd:2, ds:'Introducción',									archivo:'data/cap310/apartado02.html'},
								{cd:3, ds:'Componentes sanguíneos',							archivo:'data/cap310/apartado03.html'},
								{cd:4, ds:'Riesgos de la transfusión',						archivo:'data/cap310/apartado04.html'},
								{cd:5, ds:'Alternativas farmacológicas a la transfusión',	archivo:'data/cap310/apartado05.html'},
								{cd:6, ds:'Bibliografía',									archivo:'data/cap310/bibliografia.html'}
			]		
			},{ //capítulo		
			cd: 311,		
			etiquetaNumCapitulo:'11',		
			ds:'Anestesiología',
			pdf:'data/cap311/capitulo311.pdf',		
			bibliografia: 'data/cap311/bibliografia.html',		
			autores:[8],		
			apartados:[		
								{cd:1, ds:'Puntos clave',																	archivo:'data/cap311/apartado01.html'},
								{cd:2, ds:'Evaluación de la tendencia hemorrágica',											archivo:'data/cap311/apartado02.html'},
								{cd:3, ds:'Evaluación hemostática intraoperatoria',											archivo:'data/cap311/apartado03.html'},
								{cd:4, ds:'Fármacos y derivados plasmáticos para reducir el sangrado perioperatorio',		archivo:'data/cap311/apartado04.html'},
								{cd:5, ds:'Sangrado periquirúrgico por tratamiento antitrombótico',							archivo:'data/cap311/apartado05.html'},
								{cd:6, ds:'Bibliografía',																	archivo:'data/cap311/bibliografia.html'}
			]		
			}
	], 
    autores:[
        {
		cd:1,
		dsApeNombre:'Álvarez Román, María Teresa',
		dsIniciales:'M.T. Álvarez',
		dsNombreApe:'María Teresa Álvarez Román',
		centros:['Servicio de Hematología y Hemoterapia. Hospital Universitario La Paz.'],
		ciudad:'Madrid',
		capitulos:[201]
		},{ // autor

		cd:2,
		dsApeNombre:'Bastida Bermejo, José María',
		dsIniciales:'J.M. Bastida',
		dsNombreApe:'José María Bastida Bermejo',
		centros:['Unidad de Trombosis y Hemostasia. Servicio de Hematología. Hospital Universitario de Salamanca.',
		'Instituto Biosanitario de Salamanca (IBSAL).',
		'Universidad de Salamanca (USAL).'],
		ciudad:'Salamanca',
		capitulos:[205]
		},{ // autor

		cd:3,
		dsApeNombre:'Batlle Fonrodona, Javier',
		dsIniciales:'J. Batlle',
		dsNombreApe:'Javier Batlle Fonrodona',
		centros:['Servicio de Hematología y Hemoterapia.',
		'Complexo Hospitalario Universitario de A Coruña.',
		'Instituto de Investigación Biomédica de A Coruña (INIBIC).'],
		ciudad:'A Coruña',
		capitulos:[202]
		},{ // autor

		cd:4,
		dsApeNombre:'Berrueco Moreno, Rubén',
		dsIniciales:'R. Berrueco',
		dsNombreApe:'Rubén Berrueco Moreno',
		centros:['Servicio de Hematología y Oncología Pediátricas.',
		'Hospital Sant Joan de Déu.'],
		ciudad:'Esplugues de Llobregat, Barcelona',
		capitulos:[308]
		},{ // autor

		cd:5,
		dsApeNombre:'Buixeda Pérez, Montserrat',
		dsIniciales:'M. Buixeda',
		dsNombreApe:'Montserrat Buixeda Pérez',
		centros:['Servicio de Obstetricia.',
		'Hospital Universitario Virgen del Rocío.'],
		ciudad:'Sevilla',
		capitulos:[307]
		},{ // autor

		cd:6,
		dsApeNombre:'Carrasco Expósito, Marina',
		dsIniciales:'M. Carrasco',
		dsNombreApe:'Marina Carrasco Expósito',
		centros:['Unidad de Hemostasia. Servicio de Hematología.',
		'Hospital de Sant Pau.'],
		ciudad:'Barcelona',
		capitulos:[310]
		},{ // autor

		cd:7,
		dsApeNombre:'Corral de la Calle, Javier',
		dsIniciales:'J. Corral',
		dsNombreApe:'Javier Corral de la Calle',
		centros:['Servicio de Hematología y Oncología Médica.',
		'Hospital Universitario Morales Meseguer.',
		'Centro Regional de Hemodonación. IMIB-Universidad de Murcia.',
		'Centro de Investigación Biomédica en Red de Enfermedades Raras (CIBERER).'],
		ciudad:'Murcia',
		capitulos:[103]
		},{ // autor

		cd:8,
		dsApeNombre:'Domènech Santasusana, Pere',
		dsIniciales:'P. Domènech',
		dsNombreApe:'Pere Domènech Santasusana',
		centros:['Unidad de Trombosis y Hemostasia Hospital Universitari de Bellvitge.'],
		ciudad:'L’Hospitalet de Llobregat. Barcelona',
		capitulos:[212,311]
		},{ // autor

		cd:9,
		dsApeNombre:'Ferrer Marín, Francisca',
		dsIniciales:'F. Ferrer',
		dsNombreApe:'Francisca Ferrer Marín',
		centros:['Hospital Universitario Morales-Meseguer.',
		'Centro Regional de Hemodonación IMIB-Arrixaca.',
		'Centro de Investigación Biomédica en Red de Enfermedades Raras (CIBERER).',
		'Universidad Católica San Antonio.'],
		ciudad:'Murcia',
		capitulos:[209]
		},{ // autor

		cd:10,
		dsApeNombre:'García Frade, Luis Javier',
		dsIniciales:'L.J. García',
		dsNombreApe:'Luis Javier García Frade',
		centros:['Servicio de Hematología.',
		'Hospital Universitario Río Hortega.'],
		ciudad:'Valladolid',
		capitulos:[207]
		},{ // autor

		cd:11,
		dsApeNombre:'González-Porras, José Ramón',
		dsIniciales:'J.R. González-Porras',
		dsNombreApe:'José Ramón González-Porras',
		centros:['Unidad de Trombosis y Hemostasia.',
		'Servicio de Hematología. Hospital Universitario de Salamanca.',
		'Instituto Biosanitario de Salamanca (IBSAL).',
		'Universidad de Salamanca (USAL).'],
		ciudad:'Salamanca',
		capitulos:[205]
		},{ // autor

		cd:12,
		dsApeNombre:'Gutiérrez Gutiérrez, Laura',
		dsIniciales:'L. Gutiérrez',
		dsNombreApe:'Laura Gutiérrez Gutiérrez',
		centros:['Servicio de Hematología. Hospital Clínico San Carlos.'],
		ciudad:'Madrid',
		capitulos:[205]
		},{ // autor

		cd:13,
		dsApeNombre:'Jiménez Yuste, Víctor',
		dsIniciales:'V. Jiménez',
		dsNombreApe:'Víctor Jiménez Yuste',
		centros:['Servicio de Hematología y Hemoterapia.',
		'Hospital Universitario La Paz.'],
		ciudad:'Madrid',
		capitulos:[201]
		},{ // autor

		cd:14,
		dsApeNombre:'Latorre Campos, Ana María',
		dsIniciales:'A.M. Latorre',
		dsNombreApe:'Ana María Latorre Campos',
		centros:['Unidad de Hemostasia, Trombosis, Arteriosclerosis y Biología',
		'Vascular y Plataforma de Estudios Avanzados en Plaquetas.',
		'Instituto de Investigaciones Sanitarias La Fe.',
		'Hospital Universitario y Politécnico La Fe.'],
		ciudad:'Valencia',
		capitulos:[206]
		},{ // autor

		cd:15,
		dsApeNombre:'Lecumberri Villamediana, Ramón',
		dsIniciales:'R. Lecumberri',
		dsNombreApe:'Ramón Lecumberri Villamediana',
		centros:['Servicio de Hematología.',
		'Clínica Universidad de Navarra.'],
		ciudad:'Pamplona, Navarra',
		capitulos:[210]
		},{ // autor

		cd:16,
		dsApeNombre:'López Fernández, María Fernanda',
		dsIniciales:'M.F. López',
		dsNombreApe:'María Fernanda López Fernández',
		centros:['Servicio de Hematología y Hemoterapia.',
		'Complexo Hospitalario Universitario de A Coruña.',
		'Instituto de Investigación Biomédica de A Coruña (INIBIC).'],
		ciudad:'A Coruña',
		capitulos:[202]
		},{ // autor

		cd:17,
		dsApeNombre:'Llamas Sillero, Pilar',
		dsIniciales:'P. Llamas',
		dsNombreApe:'Pilar Llamas Sillero',
		centros:['Servicio de Hematología y Hemoterapia.',
		'Quirónsalud Hospitales Públicos.',
		'Instituto de Investigación Sanitaria de la Fundación Jiménez Díaz.',
		'Universidad Autónoma de Madrid.'],
		ciudad:'Madrid',
		capitulos:[303]
		},{ // autor

		cd:18,
		dsApeNombre:'Marín Ortuño, Francisco',
		dsIniciales:'F. Marín',
		dsNombreApe:'Francisco Marín Ortuño',
		centros:['Servicio de Cardiología.',
		'Hospital Universitario Virgen de la Arrixaca.',
		'Universidad de Murcia.'],
		ciudad:'Murcia',
		capitulos:[301]
		},{ // autor

		cd:19,
		dsApeNombre:'Martín Salces, Mónica',
		dsIniciales:'M. Martín',
		dsNombreApe:'Mónica Martín Salces',
		centros:['Servicio de Hematología y Hemoterapia.',
		'Hospital Universitario La Paz.'],
		ciudad:'Madrid',
		capitulos:[201]
		},{ // autor

		cd:20,
		dsApeNombre:'Mateo Arranz, José',
		dsIniciales:'J. Mateo',
		dsNombreApe:'José Mateo Arranz',
		centros:['Unidad de Hemostasia y Trombosis. Servicio de Hematología.',
		'Hospital de la Santa Creu i Sant Pau.'],
		ciudad:'Barcelona',
		capitulos:[302,304,309]
		},{ // autor

		cd:21,
		dsApeNombre:'Medina Badenes, Pilar',
		dsIniciales:'P. Medina',
		dsNombreApe:'Pilar Medina Badenes',
		centros:['Grupo de Investigación en Hemostasia, Trombosis,',
		'Arteriosclerosis y Biología Vascular. Instituto de Investigación',
		'Sanitaria. Hospital Universitario y Politécnico de La Fe.'],
		ciudad:'Valencia',
		capitulos:[101,102]
		},{ // autor

		cd:22,
		dsApeNombre:'Mingot Castellano, María Eva',
		dsIniciales:'M.E. Mingot',
		dsNombreApe:'María Eva Mingot Castellano',
		centros:['Unidad de Gestión Clínica de Hematología.',
		'Hospital Regional Universitario de Málaga.'],
		ciudad:'Málaga',
		capitulos:[204]
		},{ // autor

		cd:23,
		dsApeNombre:'Moscardó Martínez, Antonio',
		dsIniciales:'A. Moscardó',
		dsNombreApe:'Antonio Moscardó Martínez',
		centros:['Unidad de Hemostasia, Trombosis, Arteriosclerosis y Biología',
		'Vascular y Plataforma de Estudios Avanzados en Plaquetas.',
		'Instituto de Investigaciones Sanitarias La Fe.',
		'Hospital Universitario y Politécnico La Fe.'],
		ciudad:'Valencia',
		capitulos:[206]
		},{ // autor

		cd:24,
		dsApeNombre:'Navarro Rosales, Silvia',
		dsIniciales:'S. Navarro',
		dsNombreApe:'Silvia Navarro Rosales',
		centros:['Grupo de Investigación en Hemostasia, Trombosis,',
		'Arteriosclerosis y Biología Vascular.',
		'Instituto de Investigación Sanitaria.',
		'Hospital Universitario y Politécnico La Fe.'],
		ciudad:'Valencia',
		capitulos:[101,102]
		},{ // autor

		cd:25,
		dsApeNombre:'Núñez Vázquez, Ramiro',
		dsIniciales:'R. Núñez',
		dsNombreApe:'Ramiro Núñez Vázquez',
		centros:['Unidad de Coagulopatías Congénitas Hemorrágicas.',
		'Hospital Universitario Virgen del Rocío.'],
		ciudad:'Sevilla',
		capitulos:[203]
		},{ // autor

		cd:26,
		dsApeNombre:'Artur Oliver i Samper',
		dsIniciales:'A. Oliver',
		dsNombreApe:'Artur Oliver i Samper',
		centros:['Servicio de Hematología. Fundació Puigvert.'],
		ciudad:'Barcelona',
		capitulos:[305]
		},{ // autor

		cd:27,
		dsApeNombre:'Orbe Lopategui, Josune',
		dsIniciales:'J. Orbe',
		dsNombreApe:'Josune Orbe Lopategui',
		centros:['Programa de Enfermedades Cardiovasculares.',
		'Centro de Investigación Médica (CIMA).',
		'Universidad de Navarra.',
		'CIBERCV, Instituto de Salud Carlos III (ISCIII).'],
		ciudad:'Navarra. Pamplona',
		capitulos:[101,102]
		},{ // autor

		cd:28,
		dsApeNombre:'Páramo Fernández, José Antonio',
		dsIniciales:'J.A. Páramo',
		dsNombreApe:'José Antonio Páramo Fernández',
		centros:['Servicio de Hematología. Clínica Universidad de Navarra.',
		'Instituto de la Salud Carlos III (ISCIII), CIBERCV'],
		ciudad:'Navarra. Pamplona',
		capitulos:[104]
		},{ // autor

		cd:29,
		dsApeNombre:'Pina Pascual, Elena',
		dsIniciales:'E. Pina',
		dsNombreApe:'Elena Pina Pascual',
		centros:['Unidad de Trombosis y Hemostasia.',
		'Hospital Universitario de Bellvitge.'],
		ciudad:'L’Hospitalet de Llobregat. Barcelona',
		capitulos:[306]
		},{ // autor

		cd:30,
		dsApeNombre:'Ramírez Polo, Isabel',
		dsIniciales:'I. Ramírez',
		dsNombreApe:'Isabel Ramírez Polo',
		centros:['Unidad de Salud Sexual y Reproductiva.',
		'Unidad de Gestión Clínica Cayetano Roldán.'],
		ciudad:'San Fernando, Cádiz',
		capitulos:[307]
		},{ // autor

		cd:31,
		dsApeNombre:'Reverter Calatayud, Joan Carles',
		dsIniciales:'J.C. Reverter',
		dsNombreApe:'Joan Carles Reverter Calatayud',
		centros:['Servicio de Hemoterapia y Hemostasia.',
		'Hospital Clínic Barcelona.'],
		ciudad:'Barcelona',
		capitulos:[213]
		},{ // autor

		cd:32,
		dsApeNombre:'Del Río Garma, Julio',
		dsIniciales:'J. Del Río',
		dsNombreApe:'Julio Del Río Garma',
		centros:['Servicio de Hematología.',
		'Complejo Hospitalario Universitario de Orense.'],
		ciudad:'Orense',
		capitulos:[208]
		},{ // autor

		cd:33,
		dsApeNombre:'Rivas Pollmar, Isabel',
		dsIniciales:'I. Rivas',
		dsNombreApe:'Isabel Rivas Pollmar',
		centros:['Servicio de Hematología y Hemoterapia.',
		'Hospital Universitario La Paz.'],
		ciudad:'Madrid',
		capitulos:[201]
		},{ // autor

		cd:34,
		dsApeNombre:'Rodríguez Martorell, Francisco Javier',
		dsIniciales:'F.J. Rodríguez',
		dsNombreApe:'Francisco Javier Rodríguez Martorell',
		centros:['Unidad de Gestión Clínica de Hematología y Hemoterapia.',
		'Hospital Universitario Virgen del Rocío.'],
		ciudad:'Sevilla',
		capitulos:[307]
		},{ // autor

		cd:35,
		dsApeNombre:'Roldán Schilling, Vanessa',
		dsIniciales:'V. Roldán',
		dsNombreApe:'Vanessa Roldán Schilling',
		centros:['Servicio de Hematología y Oncología Médica.',
		'Hospital Universitario Morales Meseguer.',
		'Universidad de Murcia.'],
		ciudad:'Murcia',
		capitulos:[301]
		},{ // autor

		cd:36,
		dsApeNombre:'Tàssies Penella, María Dolores',
		dsIniciales:'M.D. Tàssies',
		dsNombreApe:'María Dolores Tàssies Penella',
		centros:['Servicio de Hemoterapia y Hemostasia.',
		'Hospital Clínic de Barcelona.'],
		ciudad:'Barcelona',
		capitulos:[211]
		},{ // autor

		cd:37,
		dsApeNombre:'Velasco Rodríguez, Diego',
		dsIniciales:'D. Velasco-Rodríguez',
		dsNombreApe:'Diego Velasco Rodríguez',
		centros:['Servicio de Hematología y Hemoterapia.',
		'Hospital Universitario Fundación Jiménez Díaz.',
		'Instituto de Investigación Sanitaria de la Fundación Jiménez Díaz.',
		'Universidad Autónoma de Madrid.'],
		ciudad:'Madrid',
		capitulos:[303]
		},{ // autor

		cd:38,
		dsApeNombre:'Vicente García, Vicente',
		dsIniciales:'V. Vicente',
		dsNombreApe:'Vicente Vicente García',
		centros:['Hospital Universitario Morales Meseguer.',
		'Centro Regional de Hemodonación IMIB-Arrixaca.',
		'Centro de Investigación Biomédica en Red de Enfermedades Raras (CIBERER).',
		'Universidad Católica San Antonio.'],
		ciudad:'Murcia',
		capitulos:[209]
		},{ // autor

		cd:39,
		dsApeNombre:'Vidal Laso, Rosa',
		dsIniciales:'R. Vidal',
		dsNombreApe:'Rosa Vidal Laso',
		centros:['Servicio de Hematología y Hemoterapia.',
		'Hospital Universitario Fundación Jiménez Díaz.',
		'Instituto de Investigación Sanitaria de la Fundación Jiménez Díaz.',
		'Universidad Autónoma de Madrid.'],
		ciudad:'Madrid',
		capitulos:[303]
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