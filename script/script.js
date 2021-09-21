import { burger } from './data.js'

const card = document.querySelector('#cards')

document.addEventListener('DOMContentLoaded', () => {
    loadBurger(burger)
})

function loadBurger(burger) {
    card.innerHTML = ''
   console.log(burger)
    burger.forEach((data) => {
        const items = document.createElement('div')
        const { name, image } = data
        items.innerHTML = `
            <div class="col d-flex justify-content-center mb-4">
                <div class="card shadow mb-1 bg-dark rounded text-white " style="width: 16rem;">
                    <h5 class="card-title text-center pt-2">${burger.name}</h5>
                    <img src=${burger.image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text text-white-50 description">Some quick example text to build on the card
                            title and make up the bulk of the card's content.</p>
                        <h5 class="text-primary">Precio: <span class="precio">20.000</span></h5>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary button" id="btnClick">Añadir a Carrito</button>
                        </div>
                    </div>
                </div>
            </div> 
        `
        card.appendChild(items)
    });
}