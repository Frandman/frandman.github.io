var myDataRef = new Firebase('https://intense-inferno-3375.firebaseio.com/');
var fechasRef = myDataRef.child('fechas');
var eventosRef = myDataRef.child('eventos');
var agrupacionesRef = myDataRef.child('agrupaciones');


	agrupaciones = [

	{
	    name: 'Los explotadores',
	    musica: 'Juan Mancilla',
	    letra: 'Juan Mancilla',
	    anterior:'Borreguito como tú',
	    imagen: 'http://2.bp.blogspot.com/-skMFnbOrh2Q/VQnwK6xwUwI/AAAAAAAAA-U/gg-Ohq6LatQ/s1600/P2134890.JPG',
	    description:'La tortillá es la celebración que da el pistoletazo de salida al carnaval ubriqueño. Las agrupaciones cantan en la AAVV Bda. Antonio Vega, que celebra desde hace años la jamoná, para a continuación dejarse caer por el algarrobal para ofrecer de nuevo sus primeros cuplés y pasodobles.'
        },

    {
	    name: 'Las niñas de la Beli',
	    musica: 'Daniel Menacho',
	    letra: 'Daniel Menacho',
	    anterior:'no participó',
	    imagen: 'http://2.bp.blogspot.com/-dz7AnKHoP4o/VolU4e-dCiI/AAAAAAAAACo/-4u1U2qgsHg/s1600/IMG-20160102-WA0004.jpg',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },

	{
	    name: 'A guan pavalube lianchampú',
	    musica: 'Ismael García',
	    letra: 'Ismael García',
	    anterior:'Los más malos del carnaval',
	    imagen: 'http://1.bp.blogspot.com/-XvtqezVLHN8/VpagDiicGyI/AAAAAAAABwY/DzBF8laqc5o/s320/ChiriIsma.png',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },

    {
	    name: 'Juego de tronos',
	    musica: 'Daniel Menacho',
	    letra: 'Daniel Menacho',
	    anterior:'no participó',
	    imagen: 'https://pbs.twimg.com/profile_images/685873046851289088/pFOrxkKy.jpg',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },
    {
	    name: 'Y comieron perdices',
	    musica: 'Mario García',
	    letra: 'Mario García',
	    anterior:'Las que tiran por arribita',
	    imagen: 'https://pbs.twimg.com/profile_images/678651809754386433/biw_g7GB.jpg',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },
    {
	    name: 'Frecuencia Modulada',
	    musica: 'Juan Flores',
	    letra: 'Juan Flores',
	    anterior:'Las arrempujás',
	    imagen: 'http://2.bp.blogspot.com/-xCvN02eRxlA/Vk2TS0bFUZI/AAAAAAAAFAk/hcQzuuxyKaY/s400/la%2Bfoto.JPG',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },
    {
	    name: 'Los senderistas se la dan de artistas',
	    musica: 'Juan Pan',
	    letra: 'Juan Pan',
	    anterior:'Los frailes',
	    imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT7R9M4NO6zrfxJTFZGMXAhlOo-FLNrQuwp26FsMqRelIgPefzbzQ',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },

      {
	    name: 'Del hotel también se sale',
	    musica: 'David Menacho',
	    letra: 'David Menacho',
	    anterior:'no participó',
	    imagen: 'http://www.ubrique.tv/wp-content/uploads/cuples-del-deporte-tambien-se-sa.jpg',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },

      {
	    name: 'Las pupilas del San Antonio',
	    musica: 'Critobal Ríos',
	    letra: 'Critobal Ríos',
	    anterior:'no participó',
	    imagen: 'https://scontent-mad1-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/12348069_550208345128819_7478713140698237958_n.jpg?oh=6843cff1a1358ce46afb2f5cc42ffe9c&oe=56FF806D',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },

      {
	    name: 'Los últimos de la peña',
	    musica: 'Critobal Ríos',
	    letra: 'Critobal Ríos',
	    anterior:'no participó',
	    imagen: 'https://pbs.twimg.com/media/CUWMRiXWcAEUpPG.jpg',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },
      {
	    name: 'La alegría de vivir',
	    musica: 'Diego el sillero',
	    letra: 'Diego el sillero',
	    anterior:'no participó',
	    imagen: 'http://doctor-phone.es/img/la_alegria_de_vivir.jpg',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },
    ];

agrupacionesRef.set(agrupaciones);

	eventos = [

	    {
	    grupo: 'Los explotadores',
	    fecha: '6 de Febrero',
	    hora:"10:00",
	    lugar: 'AAVV Bda. Antonio Vega',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
         },

	    {
	    grupo: 'Los niños de la Beli',
	    fecha: '6 de Febrero',
	    hora:"10:00",
	    lugar: 'AAVV Bda. Antonio Vega',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
            },
             {
	    grupo: 'A guan pavalube lianchampú',
	    fecha: '6 de Febrero',
	    hora:"10:00",
	    lugar: 'AAVV Bda. Antonio Vega',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
         },

	    {
	    grupo: 'Juego de tronos',
	    fecha: '6 de Febrero',
	    hora:"10:00",
	    lugar: 'AAVV Bda. Antonio Vega',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
            },
             {
	    grupo: 'Y comieron perdices',
	    fecha: '6 de Febrero',
	    hora:"10:00",
	    lugar: 'AAVV Bda. Antonio Vega',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
         },

	    {
	    grupo: 'Frecuencia modulada',
	    fecha: '6 de Febrero',
	    hora:"10:00",
	    lugar: 'AAVV Bda. Antonio Vega',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
            },
        {
	    grupo: 'Los senderistas se la dan de artistas',
	    fecha: '6 de Febrero',
	    hora:"10:00",
	    lugar: 'AAVV Bda. Antonio Vega',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
            },
        {
	    grupo: 'Del hotel también se sale',
	    fecha: '6 de Febrero',
	    hora:"10:00",
	    lugar: 'AAVV Bda. Antonio Vega',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
            },
        {
	    grupo: 'Las pupilas del San Antonio',
	    fecha: '6 de Febrero',
	    hora:"10:00",
	    lugar: 'AAVV Bda. Antonio Vega',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
            },
        {
	    grupo: 'Los últimos de la peña',
	    fecha: '6 de Febrero',
	    hora:"10:00",
	    lugar: 'AAVV Bda. Antonio Vega',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
            },
        {
	    grupo: 'La alegría de vivir',
	    fecha: '6 de Febrero',
	    hora:"10:00",
	    lugar: 'AAVV Bda. Antonio Vega',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
            }
    ];

    eventosRef.set(eventos);

	fechas = [

    {
        name: 'Tortillá',
        fecha: "6 de febrero",
        lugar: 'Algarrobal',
        imagen: 'http://www.ubrique.tv/wp-content/uploads/ojiplaticos-en-la-tortilla-2014.jpg',
        description:'La tortillá es la celebración que da el pistoletazo de salida al carnaval ubriqueño. Las agrupaciones cantan en la AAVV Bda. Antonio Vega, que celebra desde hace años la jamoná, para a continuación dejarse caer por el algarrobal para ofrecer de nuevo sus primeros cuplés y pasodobles.'
        },
    {
	    name: 'Presentación oficial agrupaciones',
	    fecha: "13 de febrero",
	    lugar: 'IES Francisco Fatou',
	    imagen: 'http://www.ubrique.tv/wp-content/uploads/presentacion-de-la-chirigota-la.jpg',
	    description:'La sala multiusos del IES Francisco Fatou sirve de escenario para la presentación ofical de las agrupaciones del carnaval de Ubrique. Una gala que todo los años agota rápidamente todas las localidades y que se retransmite a través de Radio Ubrique.'
         },
    {
	    name: 'Chicharroná',
	    fecha: "13 de febrero",
	    lugar: 'Barriada Andalucía',
	    imagen: '',
	    description:''
         },
    {
	    name: 'Costillá',
	    fecha: "14 de febrero",
	    lugar: '',
	    imagen: '',
	    description:''
         },
    {
	    name: 'Pase Benéfico',
	    fecha: "19 de febrero",
	    lugar: 'IES Francisco Fatou',
	    imagen: '',
	    description:''
         },
    {
	    name: 'Chorizá',
	    fecha: "20 de febrero",
	    lugar: 'Casco Antiguo',
	    imagen: 'http://2.bp.blogspot.com/-7uza0MPRW54/UxNDzMQgWuI/AAAAAAAARuE/Rnbnjn_S7MQ/s1600/2014-03-02_154157.png',
	    description:'El día GRANDE con mayúsculas del carnaval ubriqueño. La Chorizá se abre con el pregón en la plaza del ayuntamiento, momento a partir del cual podremos disfrutar del chorizo al vino y el cante de las agrupaciones, legales o "ilegales", por los lugares más emblemáticos del carnaval.'
         },
    {
	    name: 'Concurso Peña Sevillista',
	    fecha: "26 de febrero",
	    lugar: 'Peña Sevillista de Ubrique',
	    imagen: '',
	    description:''
         },
    {
	    name: 'Actuación Fernando Gavilán',
	    fecha: "26 de febrero",
	    lugar: 'Peña Sevillista de Ubrique',
	    imagen: '',
	    description:''
         },
	{
	    name: 'Pasacalles',
	    fecha: "27 de febrero",
	    lugar: 'Plaza de la estrella',
	    imagen: 'http://i.ytimg.com/vi/q0tnArqU1LM/maxresdefault.jpg',
	    description:'La gran fiesta del carnaval. Durante el pasacalles, todos los caravaleros hace un recorrido desde la plaza de la estrella hasta la plaza del ayuntamiento en una fiesta de disfraces y música.'
         },

    {
        name: 'Entierro de la patacabra',
        fecha: "28 de febrero",
        lugar: 'Plaza de las palmeras',
        imagen: 'http://www.elperiodicodeubrique.com/wp-content/uploads/2014/03/20140309-patacabra01.jpg',
        description:'El día de la despedida, donde enterramos nuestra particular sardina en forma de patacabra.'
        }
	];

	fechasRef.set(fechas);

