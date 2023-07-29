const pistas = [
    {
        local: "Bahrain",
        images: {
            bandeira: "bahrain.png",
            pista: "bahrain.png",
        },
        info: {
            name: "Bahrain International Circuit",
            first_gp: "2004",
            num_voltas: "57",
            comp_circuito: "5,412 km",
            dist_corrida: "308,238 km",
            volta_record: "1:31.447 Pedro de la Rosa (2005)"
        }
    },
    {
        local: "Saudi Arabia",
        images: {
            bandeira: "arabia_saudita.png",
            pista: "arabia_saudita.png",
        },
        info: {
            name: "Jeddah Urban Circuit",
            first_gp: "2021",
            num_voltas: "50",
            comp_circuito: "6,174 km",
            dist_corrida: "308,045 km",
            volta_record: "1:20.734 Lewis Hamilton (2021)"
        }
    },
    {
        local: "Australia",
        images: {
            bandeira: "australia.png",
            pista: "australia.png",
        },
        info: {
            name: "Melbourne Grand Prix Circuit",
            first_gp: "1996",
            num_voltas: "58",
            comp_circuito: "5,303 km",
            dist_corrida: "307,574 km",
            volta_record: "1:24.125 Michael Schumacher (2004)"
        }
    },
    {
        local: "Italia",
        images: {
            bandeira: "italia.png",
            pista: "italia.png",
        },
        info: {
            name: "Autódromo Enzo and Dino Ferrari",
            first_gp: "1980",
            num_voltas: "63",
            comp_circuito: "4,909 km",
            dist_corrida: "309,049 km",
            volta_record: "1:15.484 Lewis Hamilton (2020)"
        }
    },
    {
        local: "USA",
        images: {
            bandeira: "estados_unidos.png",
            pista: "estados_unidos2.png",
        },
        info: {
            name: "Miami International Speedway",
            first_gp: "2022",
            num_voltas: "57",
            comp_circuito: "5,041 km",
            dist_corrida: "308,037 km",
            volta_record: "Nenhuma"
        }
    },
    {
        local: "Spain",
        images: {
            bandeira: "espanha.png",
            pista: "espanha.png",
        },
        info: {
            name: "Circuit of Barcelona-Catalonia",
            first_gp: "1991",
            num_voltas: "66",
            comp_circuito: "4,675 km",
            dist_corrida: "308,424 km",
            volta_record: "1:18.149 Max Verstappen (2021)"
        }
    },
    {
        local: "Monaco",
        images: {
            bandeira: "monaco.png",
            pista: "monaco.png",
        },
        info: {
            name: "Circuit of Monaco",
            first_gp: "1950",
            num_voltas: "78",
            comp_circuito: "3,337 km",
            dist_corrida: "260,286 km",
            volta_record: "1:12.909 Lewis Hamilton (2021)"
        }
    },
    {
        local: "Azerbaijan",
        images: {
            bandeira: "azerbaijao.png",
            pista: "azerbaijao.png",
        },
        info: {
            name: "Baku City Circuit",
            first_gp: "2016",
            num_voltas: "51",
            comp_circuito: "6,003 km",
            dist_corrida: "306,049 km",
            volta_record: "1:43.009 Charles Leclerc (2019)"
        }
    },
    {
        local: "Canada",
        images: {
            bandeira: "canada.png",
            pista: "canada.png",
        },
        info: {
            name: "Circuit Gilles-Villeneuve",
            first_gp: "1978",
            num_voltas: "70",
            comp_circuito: "4,361 km",
            dist_corrida: "305,027 km",
            volta_record: "1:13.078 Valtteri Bottas (2019)"
        }
    },
    {
        local: "Great Britain",
        images: {
            bandeira: "gra_bretanha.png",
            pista: "gra_bretanha.png",
        },
        info: {
            name: "Silverstone Circuit",
            first_gp: "1950",
            num_voltas: "52",
            comp_circuito: "5,891 km",
            dist_corrida: "306,198 km",
            volta_record: "1:27.097 Max Verstappen (2020)"
        }
    },
    {
        local: "Austria",
        images: {
            bandeira: "austria.png",
            pista: "austria.png",
        },
        info: {
            name: "Red Bull Ring",
            first_gp: "1970",
            num_voltas: "71",
            comp_circuito: "4,318 km",
            dist_corrida: "306,452 km",
            volta_record: "1:05.619 Carlos Sainz (2020)"
        }
    },
    {
        local: "France",
        images: {
            bandeira: "franca.png",
            pista: "franca.png",
        },
        info: {
            name: "Circuit Paul Ricard",
            first_gp: "1971",
            num_voltas: "53",
            comp_circuito: "5,842 km",
            dist_corrida: "309,069 km",
            volta_record: "1:32.740 Sebastian Vettel (2019)"
        }
    },
    {
        local: "Hungary",
        images: {
            bandeira: "hungria.png",
            pista: "hungria.png",
        },
        info: {
            name: "Hungaroring",
            first_gp: "1986",
            num_voltas: "70",
            comp_circuito: "4,381 km",
            dist_corrida: "306,063 km",
            volta_record: "1:16.627 Lewis Hamilton (2020)"
        }
    },
    {
        local: "Belgium",
        images: {
            bandeira: "belgica.png",
            pista: "belgica.png",
        },
        info: {
            name: "Circuit of Spa-Francorchamps",
            first_gp: "1950",
            num_voltas: "44",
            comp_circuito: "7,004 km",
            dist_corrida: "308,052 km",
            volta_record: "1:46.286 Valtteri Bottas (2018)"
        }
    },
    {
        local: "Netherlands",
        images: {
            bandeira: "paises_baixos.png",
            pista: "paises_baixos.png",
        },
        info: {
            name: "Circuit Zandvoort",
            first_gp: "1952",
            num_voltas: "72",
            comp_circuito: "4,259 km",
            dist_corrida: "306,648 km",
            volta_record: "1:11.097 Lewis Hamilton (2021)"
        }
    },
    {
        local: "Italy",
        images: {
            bandeira: "italia.png",
            pista: "italia2.png",
        },
        info: {
            name: "National Autodrome of Monza",
            first_gp: "1950",
            num_voltas: "53",
            comp_circuito: "5,793 km",
            dist_corrida: "306,072 km",
            volta_record: "1:21.046 Rubens Barrichello (2004)"
        }
    },
    {
        local: "Singapore",
        images: {
            bandeira: "singapura.png",
            pista: "singapura.png",
        },
        info: {
            name: "Manina Bay Urban Circuit",
            first_gp: "2008",
            num_voltas: "61",
            comp_circuito: "5,063 km",
            dist_corrida: "308,706 km",
            volta_record: "1:41.905 Kevin Magnussen (2018)"
        }
    },
    {
        local: "Japan",
        images: {
            bandeira: "japao.png",
            pista: "japao.png",
        },
        info: {
            name: "Suzuka circuit",
            first_gp: "1987",
            num_voltas: "53",
            comp_circuito: "5,807 km",
            dist_corrida: "307,471 km",
            volta_record: "1:30.983 Lewis Hamilton (2019)"
        }
    },
    {
        local: "USA",
        images: {
            bandeira: "estados_unidos.png",
            pista: "estados_unidos.png",
        },
        info: {
            name: "Circuit of the Americas",
            first_gp: "2012",
            num_voltas: "56",
            comp_circuito: "5,513 km",
            dist_corrida: "308,405 km",
            volta_record: "1:36.169 Charles Leclerc (2019)"
        }
    },
    {
        local: "MexicoAutodromo Hermanos Rodríguez",
        images: {
            bandeira: "mexico.png",
            pista: "mexico.png",
        },
        info: {
            name: "Autodromo Hermanos Rodríguez",
            first_gp: "1963",
            num_voltas: "71",
            comp_circuito: "4,304 km",
            dist_corrida: "305,354 km",
            volta_record: "1:17.774 Valtteri Bottas (2021)"
        }
    },
    {
        local: "Brazil",
        images: {
            bandeira: "brasil.png",
            pista: "brasil.png",
        },
        info: {
            name: "Autodromo Jose Carlos Pace",
            first_gp: "1973",
            num_voltas: "71",
            comp_circuito: "4,309 km",
            dist_corrida: "305,909 km",
            volta_record: "1:10.540 Valtteri Bottas (2018)"
        }
    },
    {
        local: "Abu Dhabi",
        images: {
            bandeira: "abu_dhabi.png",
            pista: "abu_dhabi.png",
        },
        info: {
            name: "Yas Marina Circuit",
            first_gp: "2009",
            num_voltas: "55",
            comp_circuito: "5,554 km",
            dist_corrida: "305,355 km",
            volta_record: "1:26.103 Max Verstappen (2021)"
        }
    },
]

const pilotos = [
    {
        piloto: {
            name: "Lewis",
            surname: "Hamilton",
            numero: "44"
        },
        foto: "hamilton.png",
        info: {
            equipe: "Mercedes",
            pais: "Reino Unido",
            podiums: "182",
            mundiais: "7",
            nascimento: "07/01/1985"
        }
    },
    {
        piloto: {
            name: "Max",
            surname: "Verstappen",
            numero: "1"
        },
        foto: "verstappen.png",
        info: {
            equipe: "Red Bull Racing",
            pais: "Países Baixos",
            podiums: "60",
            mundiais: "1",
            nascimento: "30/09/1997"
        }
    },
    {
        piloto: {
            name: "Charles",
            surname: "Leclerc",
            numero: "16"
        },
        foto: "leclerc.png",
        info: {
            equipe: "Ferrari",
            pais: "Mônaco",
            podiums: "13",
            mundiais: "Nenhum",
            nascimento: "16/10/1997"
        }
    },
    {
        piloto: {
            name: "Daniel",
            surname: "Ricciardo",
            numero: "3"
        },
        foto: "riccardo.png",
        info: {
            equipe: "McLaren",
            pais: "Austrália",
            podiums: "32",
            mundiais: "Nenhum",
            nascimento: "01/07/1989"
        }
    },
    {
        piloto: {
            name: "Fernando",
            surname: "Alonso",
            numero: "14"
        },
        foto: "alonso.png",
        info: {
            equipe: "Alpine",
            pais: "Espanha",
            podiums: "98",
            mundiais: "2",
            nascimento: "29/07/1981"
        }
    },
    {
        piloto: {
            name: "Pierre",
            surname: "Gasly",
            numero: "10"
        },
        foto: "gasly.png",
        info: {
            equipe: "AlphaTauri",
            pais: "França",
            podiums: "3",
            mundiais: "Nenhum",
            nascimento: "07/02/1996"
        }
    },
    {
        piloto: {
            name: "Sebastian",
            surname: "Vettel",
            numero: "5"
        },
        foto: "vettel.png",
        info: {
            equipe: "Aston Martin",
            pais: "Alemanha",
            podiums: "122",
            mundiais: "4",
            nascimento: "03/07/1987"
        }
    },
    {
        piloto: {
            name: "Nicholas",
            surname: "Latifi",
            numero: "6"
        },
        foto: "latifi.png",
        info: {
            equipe: "Williams",
            pais: "Canadá",
            podiums: "Nenhum",
            mundiais: "Nenhum",
            nascimento: "29/06/1995"
        }
    },
    {
        piloto: {
            name: "Valtteri",
            surname: "Bottas",
            numero: "77"
        },
        foto: "bottas.png",
        info: {
            equipe: "Alfa Romeo",
            pais: "Finlândia",
            podiums: "67",
            mundiais: "Nenhum",
            nascimento: "28/08/1989"
        }
    },
    {
        piloto: {
            name: "Mick",
            surname: "Schumacher",
            numero: "47"
        },
        foto: "schumacher.png",
        info: {
            equipe: "Haas F1 equipe",
            pais: "Alemanha",
            podiums: "Nenhum",
            mundiais: "Nenhum",
            nascimento: "22/03/1999"
        }
    },
    {
        piloto: {
            name: "George",
            surname: "Russell",
            numero: "63"
        },
        foto: "russell.png",
        info: {
            equipe: "Mercedes",
            pais: "Reino Unido",
            podiums: "1",
            mundiais: "Nenhum",
            nascimento: "15/02/1998"
        }
    },
    {
        piloto: {
            name: "Sergio",
            surname: "Perez",
            numero: "11"
        },
        foto: "perez.png",
        info: {
            equipe: "Red Bull Racing",
            pais: "México",
            podiums: "15",
            mundiais: "Nenhum",
            nascimento: "26/01/1990"
        }
    },
    {
        piloto: {
            name: "Carlos",
            surname: "Sainz",
            numero: "55"
        },
        foto: "sainz.png",
        info: {
            equipe: "Ferrari",
            pais: "Espanha",
            podiums: "6",
            mundiais: "Nenhum",
            nascimento: "01/09/1994"
        }
    },
    {
        piloto: {
            name: "Lando",
            surname: "Norris",
            numero: "4"
        },
        foto: "norris.png",
        info: {
            equipe: "McLaren",
            pais: "Reino Unido",
            podiums: "5",
            mundiais: "Nenhum",
            nascimento: "13/11/1999"
        }
    },
    {
        piloto: {
            name: "Esteban",
            surname: "Ocon",
            numero: "31"
        },
        foto: "ocon.png",
        info: {
            equipe: "Alpine",
            pais: "França",
            podiums: "2",
            mundiais: "Nenhum",
            nascimento: "17/09/1996"
        }
    },
    {
        piloto: {
            name: "Yuki",
            surname: "Tsunoda",
            numero: "22"
        },
        foto: "tsunoda.png",
        info: {
            equipe: "AlphaTauri",
            pais: "Japão",
            podiums: "Nenhum",
            mundiais: "Nenhum",
            nascimento: "11/05/2000"
        }
    },
    {
        piloto: {
            name: "Lance",
            surname: "Stroll",
            numero: "18"
        },
        foto: "stroll.png",
        info: {
            equipe: "Aston Martin",
            pais: "Canadá",
            podiums: "3",
            mundiais: "Nenhum",
            nascimento: "29/10/1998"
        }
    },
    {
        piloto: {
            name: "Alexander",
            surname: "Albon",
            numero: "23"
        },
        foto: "albon.png",
        info: {
            equipe: "Willians",
            pais: "Tailândia",
            podiums: "2",
            mundiais: "Nenhum",
            nascimento: "23/03/1996"
        }
    },
    {
        piloto: {
            name: "Guanyu",
            surname: "Zhou",
            numero: "24"
        },
        foto: "zhou.png",
        info: {
            equipe: "Alfa Romeo",
            pais: "China",
            podiums: "Nenhum",
            mundiais: "Nenhum",
            nascimento: "30/05/1999"
        }
    },
    {
        piloto: {
            name: "Kevin",
            surname: "Magnussen",
            numero: "20"
        },
        foto: "magnussen.png",
        info: {
            equipe: "Haas F1 equipe",
            pais: "Dinamarca",
            podiums: "1",
            mundiais: "Nenhum",
            nascimento: "05/10/1992"
        }
    },
]

const equipes = [
    {
        name: "Mercedes",
        images: {
            logo: "mercedes.png",
            carro: "mercedes.png"
        },
        info: {
            nameCompleto: "Mercedes-AMG Petronas Formula One equipe",
            chefe: "Toto Wolff",
            estreia: "1970",
            mundiais: "8",
            motor: "Mercedes",
            base: "Brackley, Reino Unido"
        },
        pilotos: {
            primeiro: "Lewis Hamilton",
            segundo: "George Russell"
        }
    },
    {
        name: "Red Bull",
        images: {
            logo: "redbull.png",
            carro: "redbull.png"
        },
        info: {
            nameCompleto: "Red Bull Racing",
            chefe: "Christian Horner",
            estreia: "1997",
            mundiais: "4",
            motor: "Red Bull Motores",
            base: "Milton Keynes, Reino Unido"
        },
        pilotos: {
            primeiro: "Max Verstappen",
            segundo: "Sergio Perez"
        }
    },
    {
        name: "Ferrari",
        images: {
            logo: "ferrari.png",
            carro: "ferrari.png"
        },
        info: {
            nameCompleto: "Scuderia Ferrari",
            chefe: "Mattia Binotto",
            estreia: "1950",
            mundiais: "16",
            motor: "Ferrari",
            base: "Maranello, Itália"
        },
        pilotos: {
            primeiro: "Charles Leclerc",
            segundo: "Carlos Sainz"
        }
    },
    {
        name: "McLaren",
        images: {
            logo: "mclaren.png",
            carro: "mclaren.png"
        },
        info: {
            nameCompleto: "McLaren F1 equipe",
            chefe: "Andreas Seidl",
            estreia: "1966",
            mundiais: "8",
            motor: "Mercedes",
            base: "Woking, Reino Unido"
        },
        pilotos: {
            primeiro: "Daniel Riccardo",
            segundo: "Lando Norris"
        }
    },
    {
        name: "Alpine",
        images: {
            logo: "alpine.png",
            carro: "alpine.png"
        },
        info: {
            nameCompleto: "Alpine F1 equipe",
            chefe: "Otmar Szafnauer",
            estreia: "1986",
            mundiais: "2",
            motor: "Renault",
            base: "Enstone, Reino Unido"
        },
        pilotos: {
            primeiro: "Fernando Alonso",
            segundo: "Esteban Ocon"
        }
    },
    {
        name: "AlphaTauri",
        images: {
            logo: "alphatauri.png",
            carro: "alphatauri.png"
        },
        info: {
            nameCompleto: "Scuderia AlphaTauri",
            chefe: "Franz Tost",
            estreia: "1985",
            mundiais: "Nenhum",
            motor: "Red Bull Motores",
            base: "Faenza, Itália"
        },
        pilotos: {
            primeiro: "Pierre Gasly",
            segundo: "Yuki Tsunoda"
        }
    },
    {
        name: "Aston Martin",
        images: {
            logo: "astonmartin.png",
            carro: "astonmartin.png"
        },
        info: {
            nameCompleto: "Aston Martin Cognizant Formula One equipe",
            chefe: "Mike Krack",
            estreia: "2018",
            mundiais: "Nenhum",
            motor: "Mercedes",
            base: "Silverstone, Reino Unido"
        },
        pilotos: {
            primeiro: "Sebastian Vettel",
            segundo: "Lance Stroll"
        }
    },
    {
        name: "Williams",
        images: {
            logo: "williams.png",
            carro: "williams.png"
        },
        info: {
            nameCompleto: "Williams Racing",
            chefe: "Jost Capito",
            estreia: "1978",
            mundiais: "9",
            motor: "Mercedes",
            base: "Grove, Reino Unido"
        },
        pilotos: {
            primeiro: "Nicholas Latifi",
            segundo: "Alexander Albon"
        }
    },
    {
        name: "Alfa Romeo",
        images: {
            logo: "alfaromeo.png",
            carro: "alfaromeo.png"
        },
        info: {
            nameCompleto: "Alfa Romeo F1 equipe ORLEN",
            chefe: "Frédéric Vasseur",
            estreia: "1993",
            mundiais: "Nenhum",
            motor: "Ferrari",
            base: "Hinwil, Suíça"
        },
        pilotos: {
            primeiro: "Valtteri Bottas",
            segundo: "Guanyu Zhou"
        }
    },
    {
        name: "Haas",
        images: {
            logo: "haas.png",
            carro: "haas.png"
        },
        info: {
            nameCompleto: "Uralkali Haas F1 equipe",
            chefe: "Guenther Steiner",
            estreia: "2016",
            mundiais: "Nenhum",
            motor: "Ferrari",
            base: "Kannapolis, Estados Unidos"
        },
        pilotos: {
            primeiro: "Mick Schumacher",
            segundo: "Kevin Magnussen"
        }
    },
]