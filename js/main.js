const pagedown = document.querySelector(".select__input")
const drop = document.querySelector(".select__dropdown")
const dropelement = document.querySelectorAll(".dropdown_element")
const package = document.querySelectorAll(".list__item");
const packageinnertext = document.querySelectorAll(".item__calc")
const packageprice = document.querySelectorAll(".item__price")
const checkbox1 = document.getElementById("accounting")
const checkbox2 = document.getElementById("terminal")
const total = document.getElementById("total-price")
const totalprice = document.querySelector(".total__price")
const number = document.getElementById("products")
const number2 = document.getElementById("orders")

let prices = {
        firstprice: 0,
        secoundprice:  0,
        thirdprice: 0,
        fourprice: 0,
        fiveprice: 0,
}


pagedown.addEventListener("click", function () {
    drop.style.display = "block"
    pagedown.style.border = "2px solid rgb(85,223,180)"
})

drop.addEventListener("click", function () {
    drop.style.display = "none"
    pagedown.style.border = ""
})

dropelement[0].addEventListener("click", function () {
    let price = 0
    pagedown.innerText = dropelement[0].innerText
    package[2].style.display = "flex"
    packageinnertext[2].innerText = "Basic"
    packageprice[2].innerText = "$" + price
    prices.thirdprice = price
    totalprice.innerHTML = prices.firstprice + prices.secoundprice + prices.thirdprice + prices.fourprice + prices.fiveprice + " $"
})
dropelement[1].addEventListener("click", function () {
    let price = 25
    pagedown.innerText = dropelement[1].innerText
    package[2].style.display = "flex"
    packageinnertext[2].innerText = "Professional"
    packageprice[2].innerText = "$" + price
    prices.thirdprice = price
    totalprice.innerHTML = prices.firstprice + prices.secoundprice + prices.thirdprice + prices.fourprice + prices.fiveprice + " $"
})
dropelement[2].addEventListener("click", function () {
    let price = 60
    pagedown.innerText = dropelement[2].innerText
    package[2].style.display = "flex"
    packageinnertext[2].innerText = "Premium"
    packageprice[2].innerText = "$" + price
    prices.thirdprice = price
    totalprice.innerHTML = prices.firstprice + prices.secoundprice + prices.thirdprice + prices.fourprice + prices.fiveprice + " $"
})

checkbox1.addEventListener("change", function () {
    if (checkbox1.checked) {
        package[3].style.display = "flex"
            prices.fourprice = 5
    } else {
        package[3].style.display = "none"
        prices.fourprice = 0
    }
    totalprice.innerHTML = prices.firstprice + prices.secoundprice + prices.thirdprice + prices.fourprice + prices.fiveprice + " $"
})
checkbox2.addEventListener("change", function () {
    if (checkbox2.checked) {
        package[4].style.display = "flex"
        prices.fiveprice = 10
    } else {
        package[4].style.display = "none"
            prices.fiveprice = 0
    }
    totalprice.innerHTML = prices.firstprice + prices.secoundprice + prices.thirdprice + prices.fourprice + prices.fiveprice + " $"
})

total.style.display = "flex";

number.addEventListener("input", function () {
    package[0].style.display = "flex"
    let nr = number.value;
    let sum = number.value * 0.5;
    let change = document.querySelector(".item__calc");
    let price = document.querySelector(".item__price")
    change.innerText = nr + " *" + "$0.5";
    price.innerHTML = "$" + sum
    if (number.value > 0) {
        change.innerText = nr + " *" + "$0.5";
        price.innerHTML = "$" + sum
    } else {
        change.innerText = 0 + " *" + "$0.5";
        price.innerHTML = "$" + 0
    }
    prices.firstprice = sum
    totalprice.innerHTML = prices.firstprice + prices.secoundprice + prices.thirdprice + prices.fourprice + prices.fiveprice + " $"
})
number2.addEventListener("input", function () {
    package[1].style.display = "flex"
    let nr = number2.value;
    let sum = number2.value * 5;
    let change = document.querySelectorAll(".item__calc");
    let price = document.querySelectorAll(".item__price")
    change[1].innerText = nr + " *" + "$5";
    price[1].innerHTML = "$" + sum
    if (number2.value > 0) {
        change[1].innerText = nr + " *" + "$5";
        price[1].innerHTML = "$" + sum
    } else {
        change[1].innerText = 0 + " *" + "$5";
        price[1].innerHTML = "$" + 0
    }
    prices.secoundprice = sum
    totalprice.innerHTML = prices.firstprice + prices.secoundprice + prices.thirdprice + prices.fourprice + prices.fiveprice + " $"
})
