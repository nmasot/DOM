import { autosVenta } from './data/autosVenta.js';
import { autosAlquiler } from './data/autosAlquiler.js';

// Fijar el container donde se insertarán las cards
let contenedorCard = document.querySelector('#padreCardsVenta');

// Loop al array venta
autosVenta.slice(0, 3).forEach((autosVenta) => {
    let divTarjeta = document.createElement("div"); // Se crea el elemento 'div'
    divTarjeta.className = "col-lg-4 col-md-6 col-sm-12";
    // Uso de template strings
    let cardVenta = `
        <div class="card">
            <img src="${autosVenta.src}" class="card-img-top" alt="${autosVenta.nombre}" />
            <div class="card-body">
                <h5 class="card-title">${autosVenta.nombre}</h5>
                <p class="card-text">${autosVenta.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${autosVenta.ubicacion}</p>
                <p>
                    <i class="fas fa-dollar-sign"></i> ${autosVenta.costo}
                </p>
                <p class="${autosVenta.automatico ? 'text-success' : 'text-danger'}">
                    <i class="fa-solid fa-gauge-high"></i> ${autosVenta.automatico ? "Automático" : "Manual"}
                </p>
                <p class="${autosVenta.traccion ? 'text-success' : 'text-danger'}">
                    <i class="fa-solid fa-truck-monster"></i> ${autosVenta.traccion ? "4 x 4" : "2 x 4"}
                </p>
            </div>
        </div>`;

    // Agrega la card al container
    divTarjeta.innerHTML = cardVenta;
    contenedorCard.append(divTarjeta);
});

// Fijar el container donde se insertarán las cards
let contenedorAlquiler = document.querySelector('#padreCardsAlquiler');

// Loop al array alquiler
autosAlquiler.slice(0, 3).forEach((autosAlquiler) => {
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
                <p>
                    <i class="fas fa-dollar-sign"></i> ${autosAlquiler.costo}
                </p>
                <p class="${autosAlquiler.automatico ? 'text-success' : 'text-danger'}">
                    <i class="fas fa-gears"></i> ${autosAlquiler.automatico ? "Automático" : "Manual"}
                </p>
                <p class="${autosAlquiler.traccion ? 'text-success' : 'text-danger'}">
                    <i class="fas fa-fan"></i> ${autosAlquiler.aire_acondicionado ? "Sí" : "No"}
                </p>
            </div>
        </div>`;

    // Agrega la card al container
    divTarjeta.innerHTML = cardAlquiler;
    contenedorAlquiler.append(divTarjeta);
});

