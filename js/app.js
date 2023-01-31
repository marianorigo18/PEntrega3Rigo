document.addEventListener('DOMContentLoaded', () => {
    mostrarProducts()
})

let carrito = []

function mostrarProducts(){
    const containerCard = document.querySelector('#container__cards');
    
    let fragment = document.createDocumentFragment();
    
    lamparas.forEach(element => {
        
        const contenedorCard = document.createElement('div');
        contenedorCard.className = 'col-6 col-sm-6 col-md-4 col-lg-3'; 
        
        const card = document.createElement('div');
        card.classList.add('card__product');
        card.setAttribute('id', element.id)
        
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

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const inputContainer = document.createElement('div');
        inputContainer.className = 'inputContainer';
        
        const cardButtonAdd = document.createElement('button');
        cardButtonAdd.className = 'btn btn-primary btn-sm card__button btnPush buttonFunc';
        cardButtonAdd.disabled = true
        cardButtonAdd.textContent = 'Agregar';

        const cardInput = document.createElement('input');
        cardInput.className = 'input-card';
        cardInput.setAttribute('type', 'number')

        const cardButtonIncrease = document.createElement('button');
        cardButtonIncrease.className = 'btn btn-primary btn-sm card__button increase buttonFunc';
        cardButtonIncrease.textContent = '+';

        const cardButtonDecrease = document.createElement('button');
        cardButtonDecrease.className = 'btn btn-primary btn-sm card__button decrease buttonFunc';
        cardButtonDecrease.disabled = true;
        cardButtonDecrease.textContent = '-';

        
        cardLink.appendChild(card);
        card.appendChild(imgCard);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(inputContainer)
        cardBody.appendChild(buttonContainer);
        inputContainer.appendChild(cardInput)
        buttonContainer.appendChild(cardButtonDecrease);
        buttonContainer.appendChild(cardButtonIncrease);
        buttonContainer.appendChild(cardButtonAdd);
        card.appendChild(cardBody);
        contenedorCard.appendChild(cardLink);
        
        fragment.appendChild(contenedorCard);
    });
    containerCard.appendChild(fragment)
    eventToButtons()
}

function eventToButtons(){
    const btns = document.querySelectorAll('.buttonFunc');
    btns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const styles = e.currentTarget.classList;
            let input = e.target.parentElement.parentElement.children[1].children[0]
            let buttonPush = e.target.parentElement.children[2];
            let buttonDecrement = e.target.parentElement.children[0];

            if(styles.contains('btnPush')){
                setCart(e.target.parentElement.parentElement.parentElement)
            }
            if(styles.contains('increase')){
                input.value ++
            }
            if(styles.contains('decrease')){
                input.value --
            }
            if(input.value > '0'){
                buttonPush.disabled = false;
                buttonDecrement.disabled = false;
            }else{
                buttonPush.disabled = true;
                buttonDecrement.disabled = true;
            }
        })
    })
}

function setCart(reference){
    const product = {
        id: reference.id,
        img: reference.children[0].src,
        title: reference.children[1].children[0].textContent,
        quantity: reference.children[1].children[1].children[0].value,
    }
    carrito.push(product)
    console.log(carrito)
}