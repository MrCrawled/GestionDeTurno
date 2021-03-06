exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('pacientes').del()
    .then(() => {
        // Inserts seed entries
        return knex('pacientes').insert([
            {
                documento: {
                    doc_numero: "Q386B12M",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "blake",
                apellido: "brar",
                fecha_nacimiento: "1954-8-26",
                telefono: '342-4462',
                direccion: { 
                    calle: "",
                    numero: "9569",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 17
            },{
                documento: {
                    doc_numero: "60239499-Y",
                    doc_tipo: "DNI"
                },
                nombre: "adrian",
                apellido: "sanz",
                fecha_nacimiento: "1956-7-26",
                telefono: '342-44463',
                direccion: { 
                    calle: "calle mota",
                    numero: "6094",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 18
            },{
                documento: {
                    doc_numero: "522008626",
                    doc_tipo: "TFN"
                },
                nombre: "willard",
                apellido: "kelley",
                fecha_nacimiento: "1981-3-3",
                telefono: '342-74463',
                direccion: { 
                    calle: "homestead rd",
                    numero: "1686",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 19
            },{
                documento: {
                    doc_numero: "G221U627",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "maxime",
                apellido: "grewal",
                fecha_nacimiento: "1987-4-17",
                telefono: '342-64423',
                direccion: { 
                    calle: "elgin st",
                    numero: "520",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 20
            },{
                documento: {
                    doc_numero: "418152782",
                    doc_tipo: "TFN"
                },
                nombre: "olivia",
                apellido: "morales",
                fecha_nacimiento: "1973-11-1",
                telefono: '342-677221',
                direccion: { 
                    calle: "miller ave",
                    numero: "1357",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 21
            },{
                documento: {
                    doc_numero: "2NNaN79738081 33",
                    doc_tipo: "INSEE"
                },
                nombre: "lucy",
                apellido: "perrin",
                fecha_nacimiento: "1957-5-18",
                telefono: '342-646893',
                direccion: { 
                    calle: "rue des abbesses",
                    numero: "9849",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 22
            },{
                documento: {
                    doc_numero: "M5DRP942",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "birgit",
                apellido: "raith",
                fecha_nacimiento: "1951-1-3",
                telefono: '342-678779',
                direccion: { 
                    calle: "talstraße",
                    numero: "",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 23
            },{
                documento: {
                    doc_numero: "E4477839",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "annabelle",
                apellido: "mitchell",
                fecha_nacimiento: "1967-7-22",
                telefono: '342-677891',
                direccion: { 
                    calle: "queen st",
                    numero: "7687",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 24
            },{
                documento: {
                    doc_numero: "GW 08 92 69 A",
                    doc_tipo: "NINO"
                },
                nombre: "ellie",
                apellido: "fuller",
                fecha_nacimiento: "1986-5-26",
                telefono: '342-466797',
                direccion: { 
                    calle: "grange road",
                    numero: "2726",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 25
            },{
                documento: {
                    doc_numero: "882-72-2850",
                    doc_tipo: "SSN"
                },
                nombre: "alfredo",
                apellido: "bailey",
                fecha_nacimiento: "1953-3-1",
                telefono: '342-424164',
                direccion: { 
                    calle: "lakeview st",
                    numero: "5470",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 26
            },{
                documento: {
                    doc_numero: "2NNaN11252102 34",
                    doc_tipo: "INSEE"
                },
                nombre: "stella",
                apellido: "renaud",
                fecha_nacimiento: "1957-7-14",
                telefono: '342-677897',
                direccion: { 
                    calle: "rue de l'abbé-de-l'épée",
                    numero: "3698",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 27
            },{
                documento: {
                    doc_numero: "7WNT47F7",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "adele",
                apellido: "küster",
                fecha_nacimiento: "1950-10-23",
                telefono: '342-6777791',
                direccion: { 
                    calle: "kirchplatz",
                    numero: "",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 28
            },{
                documento: {
                    doc_numero: "018R4KL5",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "walli",
                apellido: "schuch",
                fecha_nacimiento: "1965-9-18",
                telefono: '342-64799721',
                direccion: { 
                    calle: "schulstraße",
                    numero: "",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 29
            },{
                documento: {
                    doc_numero: "5JJD2999",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "gesche",
                apellido: "hof",
                fecha_nacimiento: "1945-10-4",
                telefono: '343-6879312',
                direccion: { 
                    calle: "tulpenweg",
                    numero: "",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 30
            },{
                documento: {
                    doc_numero: "25Y0B5ZN",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "hermínio",
                apellido: "jesus",
                fecha_nacimiento: "1975-5-11",
                telefono: '342-4313237',
                direccion: { 
                    calle: "rua sete de setembro",
                    numero: "6645",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 31
            },{
                documento: {
                    doc_numero: "1NNaN44156622 71",
                    doc_tipo: "INSEE"
                },
                nombre: "luis",
                apellido: "andre",
                fecha_nacimiento: "1952-11-22",
                telefono: '343-4717664',
                direccion: { 
                    calle: "rue des chartreux",
                    numero: "672",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 32
            },{
                documento: {
                    doc_numero: "07140035-Q",
                    doc_tipo: "DNI"
                },
                nombre: "andres",
                apellido: "lozano",
                fecha_nacimiento: "1962-4-12",
                telefono: '342-4677693',
                direccion: { 
                    calle: "calle mota",
                    numero: "6329",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 33
            },{
                documento: {
                    doc_numero: "968-81-7144",
                    doc_tipo: "SSN"
                },
                nombre: "joseph",
                apellido: "ryan",
                fecha_nacimiento: "1947-5-15",
                telefono: '342-4212973',
                direccion: { 
                    calle: "e pecan st",
                    numero: "124",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 34
            },{
                documento: {
                    doc_numero: "1NNaN27483534 74",
                    doc_tipo: "INSEE"
                },
                nombre: "louison",
                apellido: "muller",
                fecha_nacimiento: "1993-9-8",
                telefono: '342-4311231',
                direccion: { 
                    calle: "esplanade du",
                    numero: "9888",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 35
            },{
                documento: {
                    doc_numero: "GS 67 83 39 A",
                    doc_tipo: "NINO"
                },
                nombre: "cory",
                apellido: "mitchelle",
                fecha_nacimiento: "1995-3-25",
                telefono: '342-6799443',
                direccion: { 
                    calle: "queen street",
                    numero: "5882",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 36
            },{
                documento: {
                    doc_numero: "MY 36 07 07 J",
                    doc_tipo: "NINO"
                },
                nombre: "abbie",
                apellido: "powell",
                fecha_nacimiento: "1960-8-23",
                telefono: '342-6977883',
                direccion: { 
                    calle: "the avenue",
                    numero: "9732",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 37
            },{
                documento: {
                    doc_numero: "110983187",
                    doc_tipo: "TFN"
                },
                nombre: "bobby",
                apellido: "thompson",
                fecha_nacimiento: "1978-10-31",
                telefono: '342-877673',
                direccion: { 
                    calle: "oak lawn ave",
                    numero: "2080",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 38
            },{
                documento: {
                    doc_numero: "250032944",
                    doc_tipo: "TFN"
                },
                nombre: "eddie",
                apellido: "hill",
                fecha_nacimiento: "1980-9-14",
                telefono: '343-4311474',
                direccion: { 
                    calle: "preston rd",
                    numero: "9350",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 39
            },{
                documento: {
                    doc_numero: "983226JW",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "angela",
                apellido: "carstens",
                fecha_nacimiento: "1951-3-19",
                telefono: '342-6977993',
                direccion: { 
                    calle: "waldweg",
                    numero: "",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 40
            },{
                documento: {
                    doc_numero: "8Q62JPX2",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "jeanne",
                apellido: "knight",
                fecha_nacimiento: "1985-3-26",
                telefono: '342-6977237',
                direccion: { 
                    calle: "grand ave",
                    numero: "7953",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 41
            },{
                documento: {
                    doc_numero: "075-02-8674",
                    doc_tipo: "SSN"
                },
                nombre: "lester",
                apellido: "sims",
                fecha_nacimiento: "1951-4-15",
                telefono: '342-4723212',
                direccion: { 
                    calle: "shady ln dr",
                    numero: "5054",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 42
            },{
                documento: {
                    doc_numero: "02511065-T",
                    doc_tipo: "DNI"
                },
                nombre: "blanca",
                apellido: "delgado",
                fecha_nacimiento: "1960-7-15",
                telefono: '342-4877891',
                direccion: { 
                    calle: "calle de arturo soria",
                    numero: "1149",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 43
            },{
                documento: {
                    doc_numero: "886-58-0328",
                    doc_tipo: "SSN"
                },
                nombre: "reginald",
                apellido: "berry",
                fecha_nacimiento: "1965-1-7",
                telefono: '343-6677991',
                direccion: { 
                    calle: "oak ridge ln",
                    numero: "4330",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 44
            },{
                documento: {
                    doc_numero: "74IVZY80",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "juliette",
                apellido: "taylor",
                fecha_nacimiento: "1968-10-22",
                telefono: '343-6766771',
                direccion: { 
                    calle: "peel st",
                    numero: "5320",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 45
            },{
                documento: {
                    doc_numero: "41MGI422",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "sifredo",
                apellido: "carvalho",
                fecha_nacimiento: "1974-11-26",
                telefono: '343-4677992',
                direccion: { 
                    calle: "rua treze de maio",
                    numero: "1542",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 46
            },{
                documento: {
                    doc_numero: "94162682-L",
                    doc_tipo: "DNI"
                },
                nombre: "jesus",
                apellido: "esteban",
                fecha_nacimiento: "1959-7-13",
                telefono: '343-4677991',
                direccion: { 
                    calle: "calle covadonga",
                    numero: "9725",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 47
            },{
                documento: {
                    doc_numero: "46X22F8M",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "sophia",
                apellido: "chan",
                fecha_nacimiento: "1975-2-7",
                telefono: '343-4722113',
                direccion: { 
                    calle: "disputed rd",
                    numero: "8213",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 48
            },{
                documento: {
                    doc_numero: "637-62-4481",
                    doc_tipo: "SSN"
                },
                nombre: "alexis",
                apellido: "carr",
                fecha_nacimiento: "1957-1-29",
                direccion: { 
                    calle: "adams st",
                    numero: "4781",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 49
            },{
                documento: {
                    doc_numero: "57307402-K",
                    doc_tipo: "DNI"
                },
                nombre: "angeles",
                apellido: "diaz",
                fecha_nacimiento: "1952-11-5",
                telefono: '342-4877271',
                direccion: { 
                    calle: "calle del prado",
                    numero: "2198",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 50
            },{
                documento: {
                    doc_numero: "864264569",
                    doc_tipo: "TFN"
                },
                nombre: "mildred",
                apellido: "sanders",
                fecha_nacimiento: "1949-10-7",
                telefono: '342-4977114',
                direccion: { 
                    calle: "lovers ln",
                    numero: "7842",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 51
            },{
                documento: {
                    doc_numero: "S63WQ6U8",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "clemêncio",
                apellido: "pinto",
                fecha_nacimiento: "1978-4-10",
                telefono: '342-6977973',
                direccion: { 
                    calle: "rua são sebastiao",
                    numero: "5765",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 52
            },{
                documento: {
                    doc_numero: "66133952",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "terezinha",
                apellido: "moura",
                fecha_nacimiento: "1971-4-17",
                telefono: '342-4977661',
                direccion: { 
                    calle: "rua são francisco",
                    numero: "3201",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 53
            },{
                documento: {
                    doc_numero: "9W40185W",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "artur",
                apellido: "erhardt",
                fecha_nacimiento: "1948-4-27",
                telefono: '343-4313772',
                direccion: { 
                    calle: "tulpenweg",
                    numero: "",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 54
            },{
                documento: {
                    doc_numero: "619164342",
                    doc_tipo: "TFN"
                },
                nombre: "rose",
                apellido: "soto",
                fecha_nacimiento: "1946-12-25",
                telefono: '342-4977671',
                direccion: { 
                    calle: "cackson st",
                    numero: "4900",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 55
            },{
                documento: {
                    doc_numero: "YO588U70",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "mathis",
                apellido: "gill",
                fecha_nacimiento: "1983-2-8",
                telefono: '343-6211443',
                direccion: { 
                    calle: "wellington st",
                    numero: "2320",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 56
            },{
                documento: {
                    doc_numero: "2NNaN83673036 25",
                    doc_tipo: "INSEE"
                },
                nombre: "lison",
                apellido: "mathieu",
                fecha_nacimiento: "1947-1-16",
                telefono: '342-4977993',
                direccion: { 
                    calle: "place de l'abbé-jean-lebeuf",
                    numero: "6282",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 57
            },{
                documento: {
                    doc_numero: "85E2538I",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "hans-günther",
                apellido: "heinicke",
                fecha_nacimiento: "1964-12-21",
                telefono: '343-677661',
                direccion: { 
                    calle: "schillerstraße",
                    numero: "",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 58
            },{
                documento: {
                    doc_numero: "908Z576M",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "bernardino",
                apellido: "cavalcanti",
                fecha_nacimiento: "1969-3-20",
                telefono: '343-797981',
                direccion: { 
                    calle: "rua piauí",
                    numero: "3259",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 59
            },{
                documento: {
                    doc_numero: "3A984517",
                    doc_tipo: "PASAPORTE"
                },
                nombre: "tatiana",
                apellido: "dias",
                fecha_nacimiento: "1989-1-2",
                telefono: '342-4313731',
                direccion: { 
                    calle: "rua onze",
                    numero: "2143",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 60
            }
        ])
    })
}