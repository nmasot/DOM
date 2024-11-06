import { autosAlquiler } from './data/autosAlquiler.js';

// Fijar el container donde se insertarán las cards
let contenedorCard = document.querySelector('#contenedorCardAlquiler');

// Loop al array alquiler
autosAlquiler.forEach((autosAlquiler) => {
    let divTarjeta = document.createElement("div"); //Crea el elemento 'div'
    divTarjeta.className = "col-lg-4 col-md-6 col-sm-12";
    // Crea elemento Card
    let cardAlquiler = `
        <div class="card">
            <img src="${autosAlquiler.src}" class="card-img-top" alt="${autosAlquiler.nombre}" />
            <div class="card-body">
                <h5 class="card-title">${autosAlquiler.nombre}</h5>
                <p class="card-text">${autosAlquiler.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${autosAlquiler.ubicacion}</p>
                <p class="card-text">${autosAlquiler.kilometraje_maximo}</p>
                <p>
                    <i class="fas fa-dollar-sign"></i> ${autosAlquiler.costo}
                </p>
                <p class="${autosAlquiler.automatico ? 'text-success' : 'text-danger'}">
                    <i class="fas fa-gears"></i> ${autosAlquiler.automatico ? "Automático" : "Manual"}
                </p>
                <p class="${autosAlquiler.aire_acondicionado ? 'text-success' : 'text-danger'}">
                    <i class="fas fa-fan"></i>${autosAlquiler.aire_acondicionado ? "Sí" : "No"}
                </p>
            </div>
        </div>`;

    // Agrega la card al container
    divTarjeta.innerHTML = cardAlquiler;
    contenedorCardAlquiler.append(divTarjeta);
});