let price1Node = document.querySelector(`#price1`);
let price2Node = document.querySelector(`#price2`);
let price3Node = document.querySelector(`#price3`);
let priceFinalNode = document.querySelector(`#priceFinal`);
let price1 = 50000;
let price2 = 100000;
let price3 = 8000;

price1Node.innerHTML = `${price1}₽`;
price2Node.innerHTML = `${price2}₽`;
price3Node.innerHTML = `${price3}₽`;

priceFinalNode.innerHTML = `${price1 + price2 + price3}₽`;

let promocodeContainerNode = document.querySelector(`#promocodeContainer`);
let promocodeNode = document.querySelector(`#promocode`);
let promocodeInputNode = document.querySelector(`#promocodeInput`);
let promocodeNameNode = document.querySelector(`#promocodeName`);
let invalidPromoNode = document.querySelector(`#invalidPromo`);
let promoBtnNode = document.querySelector(`#promoBtn`);

promoBtnNode.addEventListener(`click`, function () {
    if (promocodeInputNode.value.toUpperCase() == `ILOVEJS`) {
        promocodeContainerNode.classList.remove(`d-none`);
        promocodeNameNode.innerHTML = `ILOVEJS`;
        promocodeNode.innerHTML = `-100000₽`;
        priceFinalNode.innerHTML = `${price1 + price2 + price3 - 100000}₽`;
        invalidPromoNode.classList.add(`d-none`);
    } else if (promocodeInputNode.value.toUpperCase() == `IHATEJS`) {
        promocodeContainerNode.classList.remove(`d-none`);
        promocodeNameNode.innerHTML = `IHATEJS`;
        promocodeNode.innerHTML = `А что ты хотел`;
        priceFinalNode.innerHTML = `${price1 + price2 + price3}₽`;
        invalidPromoNode.classList.add(`d-none`);
    } else {
        invalidPromoNode.classList.remove(`d-none`);
    }
});

let firstNameNode = document.querySelector(`#firstName`);
let lastNameNode = document.querySelector(`#lastName`);
let emailNode = document.querySelector(`#email`);
let addressNode = document.querySelector(`#address`);
let countryNode = document.querySelector(`#country`);
let stateNode = document.querySelector(`#state`);
let zipNode = document.querySelector(`#zip`);
let saveInfoNode = document.querySelector(`#save-info`);
let sameAddressNode = document.querySelector(`#same-address`);
let arrangeBtnNode = document.querySelector(`#arrangeBtn`);
let modalTextNode = document.querySelector(`#modalText`);

arrangeBtnNode.addEventListener(`click`, function () {
    if (saveInfoNode.checked && sameAddressNode.checked) {
        modalTextNode.innerHTML = `<div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Оформление заказа</h4>
        <form class="needs-validation" novalidate="">
        <div class="row g-3">
        <div class="col-sm-6">
        <label for="firstName" class="form-label fw-bold">Имя</label>
        <div>${firstNameNode.value}</div>
        </div>
        
        <div class="col-sm-6">
        <label for="lastName" class="form-label fw-bold">Фамилия</label>
        <div>${lastNameNode.value}</div>
        </div>
        
        <hr class="my-3">
        
        <div class="col-12">
        <label for="email" class="form-label fw-bold">Email</label>
        <div>${emailNode.value}</div>
        </div>
        
        <hr class="my-3">
        
        <div class="col-12">
        <label for="address" class="form-label fw-bold">Адрес</label>
        <div>${addressNode.value}</div>
        </div>
        
        <hr class="my-3">
        
        <div class="col-md-5">
        <label for="country" class="form-label fw-bold">Страна</label>
        <div>${countryNode.value}</div>
        </div>
        
        <div class="col-md-4">
        <label for="state" class="form-label fw-bold">Регион</label>
        <div>${stateNode.value}</div>
        </div>
        
        <div class="col-md-3">
            <label for="zip" class="form-label fw-bold">Индекс</label>
        <div>${zipNode.value}</div>
        </div>
        </div>
        
        <hr class="my-3">

        <div class="form-check">
            <label class="form-check-label fw-bold" for="save-info">Сохранить данные для следующего
            заказа</label>
        </div>
                
        <div class="form-check">
            <label class="form-check-label fw-bold" for="same-address">Положить печеньки в заказ</label>
        </div>
        `
    } else if (sameAddressNode.checked) {
        modalTextNode.innerHTML = `<div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Оформление заказа</h4>
        <form class="needs-validation" novalidate="">
        <div class="row g-3">
        <div class="col-sm-6">
        <label for="firstName" class="form-label fw-bold">Имя</label>
        <div>${firstNameNode.value}</div>
        </div>
        
        <div class="col-sm-6">
        <label for="lastName" class="form-label fw-bold">Фамилия</label>
        <div>${lastNameNode.value}</div>
        </div>
        
        <hr class="my-3">
        
        <div class="col-12">
        <label for="email" class="form-label fw-bold">Email</label>
        <div>${emailNode.value}</div>
        </div>
        
        <hr class="my-3">
        
        <div class="col-12">
        <label for="address" class="form-label fw-bold">Адрес</label>
        <div>${addressNode.value}</div>
        </div>
        
        <hr class="my-3">
        
        <div class="col-md-5">
        <label for="country" class="form-label fw-bold">Страна</label>
        <div>${countryNode.value}</div>
        </div>
        
        <div class="col-md-4">
        <label for="state" class="form-label fw-bold">Регион</label>
        <div>${stateNode.value}</div>
        </div>
        
        <div class="col-md-3">
            <label for="zip" class="form-label fw-bold">Индекс</label>
        <div>${zipNode.value}</div>
        </div>
        </div>
        
        <hr class="my-3">
        
        <div class="form-check">
            <label class="form-check-label fw-bold" for="same-address">Положить печеньки в заказ</label>
        </div>
        `
    } else if (saveInfoNode.checked) {
        modalTextNode.innerHTML = `<div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Оформление заказа</h4>
        <form class="needs-validation" novalidate="">
        <div class="row g-3">
        <div class="col-sm-6">
        <label for="firstName" class="form-label fw-bold">Имя</label>
        <div>${firstNameNode.value}</div>
        </div>
        
        <div class="col-sm-6">
        <label for="lastName" class="form-label fw-bold">Фамилия</label>
        <div>${lastNameNode.value}</div>
        </div>
        
        <hr class="my-3">
        
        <div class="col-12">
        <label for="email" class="form-label fw-bold">Email</label>
        <div>${emailNode.value}</div>
        </div>
        
        <hr class="my-3">
        
        <div class="col-12">
        <label for="address" class="form-label fw-bold">Адрес</label>
        <div>${addressNode.value}</div>
        </div>
        
        <hr class="my-3">
        
        <div class="col-md-5">
        <label for="country" class="form-label fw-bold">Страна</label>
        <div>${countryNode.value}</div>
        </div>
        
        <div class="col-md-4">
        <label for="state" class="form-label fw-bold">Регион</label>
        <div>${stateNode.value}</div>
        </div>
        
        <div class="col-md-3">
            <label for="zip" class="form-label fw-bold">Индекс</label>
        <div>${zipNode.value}</div>
        </div>
        </div>
        
        <hr class="my-3">
        
        <div class="form-check">
            <label class="form-check-label fw-bold" for="save-info">Сохранить данные для следующего
            заказа</label>
        </div>
        `
    } else {
        modalTextNode.innerHTML = `<div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Оформление заказа</h4>
        <form class="needs-validation" novalidate="">
        <div class="row g-3">
        <div class="col-sm-6">
        <label for="firstName" class="form-label fw-bold">Имя</label>
        <div>${firstNameNode.value}</div>
        </div>
        
        <div class="col-sm-6">
        <label for="lastName" class="form-label fw-bold">Фамилия</label>
        <div>${lastNameNode.value}</div>
        </div>
        
        <hr class="my-3">
        
        <div class="col-12">
        <label for="email" class="form-label fw-bold">Email</label>
        <div>${emailNode.value}</div>
        </div>
        
        <hr class="my-3">
        
        <div class="col-12">
        <label for="address" class="form-label fw-bold">Адрес</label>
        <div>${addressNode.value}</div>
        </div>
        
        <hr class="my-3">
        
        <div class="col-md-5">
        <label for="country" class="form-label fw-bold">Страна</label>
        <div>${countryNode.value}</div>
        </div>
        
        <div class="col-md-4">
        <label for="state" class="form-label fw-bold">Регион</label>
        <div>${stateNode.value}</div>
        </div>
        
        <div class="col-md-3">
            <label for="zip" class="form-label fw-bold">Индекс</label>
        <div>${zipNode.value}</div>
        </div>`
    }
});
