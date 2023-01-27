mostrarProducts()

function mostrarProducts(){
    const containerCard = document.querySelector('#container__cards');
    
    let fragment = document.createDocumentFragment();

    lamparas.forEach(element => {

        const contenedorCard = document.createElement('div');
        contenedorCard.className = 'col-6 col-sm-6 col-md-4 col-lg-3'; 

        const card = document.createElement('div');
        card.classList.add('card__product');

        const cardLink = document.createElement('div');
        cardLink.classList.add('card__link')

        const imgCard = document.createElement('img');
        imgCard.classList.add('card-img-top');
        imgCard.src = element.img;
        imgCard.alt = element.title

        const cardBody = document.createElement('div');
        card.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title text-center mt-3 text-black-50 text-uppercase fs-6 fw-normal py-3';
        cardTitle.textContent = element.title

        const cardButton = document.createElement('button');
        cardButton.className = 'btn btn-primary btn-sm card__button';
        cardButton.textContent = 'Agregar';

        cardLink.appendChild(card)
        card.appendChild(imgCard);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardButton)
        card.appendChild(cardBody);
        contenedorCard.appendChild(cardLink);

        fragment.appendChild(contenedorCard);
    });
    containerCard.appendChild(fragment)
}
