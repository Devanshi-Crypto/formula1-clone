<!DOCTYPE html>
<html lang="en">

<head>
    <title>Formula 1</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="shortcut icon" href="./assets/f1_logo.svg" type="image/x-icon" />

    <script src="https://kit.fontawesome.com/2a358d9687.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="./js/data.js"></script>
</head>

<body>
    <header>
        <div>
            <a href="#">
                <img class="logo" src="assets/f1_logo.svg" alt="Formula 1" />
            </a>
        </div>

        <div class="btn-area">
            <i class="btn-menu fas fa-bars"></i>
        </div>

        <ul class="nav">
            <li><a href="#circuit">CIRCUITS</a></li>
            <li><a href="#driver">DRIVERS</a></li>
            <li><a href="#team">TEAMS</a></li>
            <?php
            // Check if the user is logged in (you may need to modify this based on your login session implementation)
            if (isset($_SESSION["user_id"])) {
                echo '<li><a href="profile.php">Profile</a></li>';
            } else {         
                echo '<li><a href="register.php">Register</a></li>';
            }
            ?>
        </ul>
    </header>

    <main>
        <div class="carousel">
            <div class="carousel-container">
                <div class="carousel-item animated visible">
                    <img src="./assets/carousel/img01-min.jpg" alt="Imagem Carrossel 01" />
                </div>

                <div class="carousel-item animated">
                    <img src="./assets/carousel/img02-min.jpg" alt="Imagem Carrossel 02" />
                </div>

                <div class="carousel-item animated">
                    <img src="./assets/carousel/img03-min.jpg" alt="Imagem Carrossel 03" />
                </div>

                <div class="carousel-item animated">
                    <img src="./assets/carousel/img04-min.jpg" alt="Imagem Carrossel 04" />
                </div>

                <div class="carousel-item animated">
                    <img src="./assets/carousel/img05-min.jpg" alt="Imagem Carrossel 05" />
                </div>

                <a class="btnInterior" onclick="trocaImagem(-1)">&#10094;</a>
                <a class="btnNext" onclick="trocaImagem(1)">&#10095;</a>
            </div>

            <div class="circles-container">
                <div>
                    <span class="circle ativo" data-circle="0"></span>
                </div>
                <div>
                    <span class="circle" data-circle="1"></span>
                </div>
                <div>
                    <span class="circle" data-circle="2"></span>
                </div>
                <div>
                    <span class="circle" data-circle="3"></span>
                </div>
                <div>
                    <span class="circle" data-circle="4"></span>
                </div>
            </div>
        </div>

        <div class="history">
            <h2>History</h2>
            <p>
                Formula 1 is a high-tech motorsport (car racing) discipline that promotes an annual world championship, which has
                been highly popular since 1950. This championship originated from a competition called the Grand Prix, which took
                place in Europe before the Second World War. Formula 1 (F1) is regulated by the International Automobile Federation
                (FIA), headquartered in Paris.
            </p>
            <p>
                Great racing drivers' names are part of the history of Formula 1. Among them are Ayrton Senna, Michael Schumacher,
                Alain Prost, Nelson Piquet, Juan Manuel Fangio, Niki Lauda, Rubens Barrichello, Lewis Hamilton, and many other
                renowned drivers who have been champions over the years.
            </p>
            <p>
                Currently, each race is called a Formula 1 Grand Prix, followed by the name of the country where the race takes
                place. The races happen in racetracks and some street circuits in Europe, Asia, Oceania, and the Americas. The most
                famous street circuit is the Monaco Grand Prix in Monte Carlo. The points system, which has been changed over the
                years, currently awards points to the top 10 finishers in each grand prix. The results of each race are converted
                into points, which, when added up, determine two champions each year: drivers and constructors.
            </p>
        </div>

        <div id="info">
            <div class="info-item">
                <div class="info-data">--</div>
                <label class="info-description">Total Circuits</label>
            </div>

            <div class="info-item">
                <div class="info-data">--</div>
                <label class="info-description">Total Drivers</label>
            </div>

            <div class="info-item">
                <div class="info-data">--</div>
                <label class="info-description">Total Teams</label>
            </div>
        </div>

        <div id="pistas">
            <h2 class="title">
                CIRCUITS <img class="img-icon" src="./assets/icones/pista.png" />
            </h2>
            <div class="content">
                <a class="btn-left">&#10094;</a>
                <div id="lstPistas" class="scroll-x"></div>
                <a class="btn-right">&#10095;</a>
            </div>
        </div>

        <div id="pilotos">
            <h2 class="title">
                DRIVERS <img class="img-icon" src="./assets/icones/capacete.png" />
            </h2>
            <div class="content">
                <a class="btn-left">&#10094;</a>
                <div id="lstPilotos" class="scroll-x"></div>
                <a class="btn-right">&#10095;</a>
            </div>
        </div>

        <div id="equipes" class="equipes">
            <h2 class="title">
                TEAMS <img class="img-icon" src="./assets/icones/equipe.png" />
            </h2>
            <div class="content">
                <a class="btn-left">&#10094;</a>
                <div id="lstEquipes" class="scroll-x"></div>
                <a class="btn-right">&#10095;</a>
            </div>
        </div>
    </main>

    <footer>
        <div id="register">
            <p>Sign up for our newsletter to be the first to discover all the news about Formula 1
            </p>

            <form id="formregister">
                <span class="formLine">
                    <label>Name</label>
                    <input type="text" required id="inpNome" placeholder="Enter your name" />
                </span>

                <span class="formLine">
                    <label>E-mail</label>
                    <input type="email" required id="inpEmail" placeholder="Enter your e-mail" />
                </span>

                <span class="formLine">
                    <button id="btnForm" onclick="validateForm()" type="submit">
                        SUBMIT
                    </button>
                </span>
            </form>
        </div>

        <div id="creditos">
            <span id="criador">
                
                <a href="https://github.com/gabrielcs04"><label>Inspiration &copy;</label></a>
            </span>

            <span id="contact">
                <label>
                    <a href="https://www.linkedin.com/in/devanshi-doshi-574ba21b9/" target="__blank" class="linkedin">
                        <i class="fab fa-linkedin"></i></a>
                </label>

                <label>
                    <a href="https://github.com/Devanshi-Crypto/" target="__blank" class="github">
                        <i class="fab fa-github"></i></a>
                </label>
            </span>
        </div>
    </footer>

    <script type="text/javascript" src="./js/scripts.js"></script>
</body>

</html>