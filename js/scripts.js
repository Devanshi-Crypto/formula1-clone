window.onload = function () {
    init();
};

function init() {
    updateCarousel();
    loadInfo();
    loadTracks();
    loadDrivers();
    loadTeams();
    initializeCardEvents();
}

function loadInfo() {
    let infos = document.querySelectorAll(".info-data");

    infos[0].innerHTML = pistas.length;
    infos[1].innerHTML = pilotos.length;
    infos[2].innerHTML = equipes.length;
}

function loadTracks() {
    let html = "";
    for ([index, item] of pistas.entries()) {
        const { local } = item;
        const { bandeira, pista } = item.images;
        const { name, first_gp, num_voltas, comp_circuito, dist_corrida, volta_record } = item.info;

        html += `
      <div class="card-container">
        <div class="card-content">
          <div class="card-front">
            <div class="card-front-content">
              <div class="card-front-header">
                <img loading="lazy" src="./assets/bandeiras/${bandeira}" alt="Flag ${local}">
                <div>
                  <label>${local}</label>
                </div>
              </div>

              <div class="card-front-body">
                <img loading="lazy" src="./assets/pistas/${pista}" alt="Track ${local}">
              </div>
            </div>
          </div>
          <div class="card-back">
            <div class="card-back-content">
              <div class="card-back-header">
                <h3>${name}</h3>
              </div>

              <div class="card-back-body">
                <div class="primeiro-gp">
                  <p>First Grand Prix</p>
                  <label>${first_gp}</label>
                </div>
                
                <div class="num-voltas">
                  <p>Number of Laps</p>
                  <label>${num_voltas}</label>
                </div>
              
                <div class="comp-circuito">
                  <p>Circuit Length</p>
                  <label>${comp_circuito}</label>
                </div>

                <div class="dist-corrida">
                  <p>Race Distance</p>
                  <label>${dist_corrida}</label>
                </div>

                <div class="volta-record">
                  <p>Fastest Lap</p>
                  <label>${volta_record}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    }
    document.querySelector("#lstPistas").innerHTML = html;
}

function loadDrivers() {
    let html = "";
    for (item of pilotos) {
        const { name, surname, numero } = item.piloto;
        const { foto } = item;
        const { equipe, pais, podiums, mundiais, nascimento } = item.info;

        html += `
      <div class="card-container">
        <div class="card-content">
          <div class="card-front">
            <div class="card-front-content">
              <div class="card-front-header">
                <img
                  loading="lazy"
                  src="./assets/pilotos/${foto}"
                  alt="Foto ${name} ${surname}"
                />
              </div>

              <div class="card-front-body">
                <h2>${name} <span>${surname}</span></h2>
                <h1>${numero}</h1>
              </div>
            </div>
          </div>
          <div class="card-back">
            <div class="card-back-content">
              <div class="card-back-header">
                <h3>${name} ${surname}</h3>
              </div>

              <div class="card-back-body">
                <div class="equipe">
                  <p>Team</p>
                  <label>${equipe}</label>
                </div>

                <div class="pais">
                  <p>Native</p>
                  <label>${pais}</label>
                </div>

                <div class="podiums">
                  <p>Podiums</p>
                  <label>${podiums}</label>
                </div>

                <div class="mundiais">
                  <p>World Championships</p>
                  <label>${mundiais}</label>
                </div>

                <div class="nascimento">
                  <p>Birth Day</p>
                  <label>${nascimento}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    }
    document.querySelector("#lstPilotos").innerHTML = html;
}

function loadTeams() {
    let html = "";
    for (item of equipes) {
        const { logo, carro } = item.images;
        const { nameCompleto, chefe, estreia, mundiais, motor, base } = item.info;
        const { primeiro, segundo } = item.pilotos;

        html += `
      <div class="card-container">
        <div class="card-content">
          <div class="card-front">
            <div class="card-front-content">
              <div class="card-front-header">
                <img
                  loading="lazy"
                  src="./assets/equipes/${logo}"
                  alt="Logo ${item.name}"
                />
                <div>
                  <label>${item.name}</label>
                </div>
              </div>

              <div class="card-front-body">
                <img
                  loading="lazy"
                  src="./assets/carros/${carro}"
                  alt="Carro ${item.name}"
                />
              </div>
            </div>
          </div>
          <div class="card-back">
            <div class="card-back-content">
              <div class="card-back-header">
                <h3>${nameCompleto}</h3>
              </div>

              <div class="card-back-body">
                <div class="chefe-equipe">
                  <p>Team Leader</p>
                  <label>${chefe}</label>
                </div>

                <div class="ano-entrada">
                  <p>Debut year</p>
                  <label>${estreia}</label>
                </div>

                <div class="mundiais-equipe">
                  <p>World Championships</p>
                  <label>${mundiais}</label>
                </div>

                <div class="motor">
                  <p>Motor</p>
                  <label>${motor}</label>
                </div>

                <div class="piloto prim-piloto">
                  <p>First Pilot</p>
                  <label>${primeiro}</label>
                </div>

                <div class="piloto seg-piloto">
                  <p>Second Pilot</p>
                  <label>${segundo}</label>
                </div>

                <div class="base">
                  <p>Native</p>
                  <label>${base}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    }
    document.querySelector("#lstEquipes").innerHTML = html;
}

function initializeCardEvents() {
    // Evento de efeito flip durante click ou hover
    document.querySelectorAll(".card-container").forEach((card) => {
        card.addEventListener("mouseenter", (event) => {
            let item = event.currentTarget;
            item.classList.add("flip");
        });

        card.addEventListener("mouseleave", (event) => {
            let item = event.currentTarget;
            item.classList.remove("flip");
        });
        card.addEventListener("click", (event) => {
            let item = event.currentTarget;
            item.classList.add("flip");
        });
    });

    // Evento de scroll horizontal nos botões laterais
    document.querySelectorAll(".content > a").forEach((botao) => {
        botao.addEventListener("mouseup", (event) => {
            let botao = event.target;
            let parent = botao.parentNode;
            let lista = parent.querySelector('.scroll-x');
            let screenWidth = lista.clientWidth;

            let aux = 310;

            if (botao.classList.contains("btn-right")) {
                let scroll = lista.scrollLeft + screenWidth - aux;
                lista.scrollTo({
                    left: scroll,
                    behavior: 'smooth'
                })
            } else if (botao.classList.contains("btn-left")) {
                let scroll = lista.scrollLeft - screenWidth - aux;
                lista.scrollTo({
                    left: scroll,
                    behavior: 'smooth'
                })
            }
        });
    });
}

function validateForm() {
    document.querySelectorAll("#formregister input").forEach((input) => {
        inputCheck(input);
    });
}

function inputCheck(input) {
    let stylePadrao = "1px solid #15151e";
    let styleErro = "2px solid #e10600";

    if (!input.checkValidity()) {
        input.style.border = styleErro;
        return input.style.border;
    }

    if (input.checkValidity()) {
        input.style.border = stylePadrao;
        return input.style.border;
    }
}

let imgIndex = 0;
const time = 5000;
const totalimages = document.querySelectorAll(".carousel-item").length;

document.querySelectorAll("span[data-circle]").forEach((item) => {
    item.addEventListener("click", (event) => {
        let indice = event.target.getAttribute("data-circle");
        imgIndex = parseInt(indice);
        updateCarousel();
        resetCarousel();
    });
});

let carouselContinuo = setInterval(() => {
    imgIndex++;
    if (imgIndex > totalimages - 1) imgIndex = 0;
    updateCarousel();
}, time);

function resetCarousel() {
    clearInterval(carouselContinuo);
    carouselContinuo = setInterval(() => {
        imgIndex++;
        if (imgIndex > totalimages - 1) imgIndex = 0;
        updateCarousel();
    }, time);
}

function trocaImagem(n) {
    imgIndex += parseInt(n);
    if (imgIndex > totalimages - 1) imgIndex = 0;
    if (imgIndex < 0) imgIndex = totalimages - 1;
    updateCarousel();
    resetCarousel();
}

function updateCarousel() {
    let imagemAtiva = document.querySelector(".carousel-item.visible");
    let circleAtivo = document.querySelector(".circle.ativo");

    imagemAtiva.classList.remove("visible");
    circleAtivo.classList.remove("ativo");

    document.querySelectorAll(".carousel-item")[imgIndex].classList.add("visible");
    document.querySelectorAll(".circle")[imgIndex].classList.add("ativo");
}

document.querySelector(".btn-menu").addEventListener("click", (event) => {
    let iconeAberto = "fa-bars";
    let iconeFechado = "fa-times";

    event.target.parentNode.classList.toggle("menu-aberto");

    if (event.target.classList.contains(iconeAberto)) {
        event.target.classList.remove(iconeAberto);
        event.target.classList.add(iconeFechado);
    } else {
        event.target.classList.remove(iconeFechado);
        event.target.classList.add(iconeAberto);
    }
});

// function ehMobile() {
//   let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//   return isMobile;
// }