const slider = document.getElementById('slider');
const pageviews = document.getElementById('pageviews');
const price = document.getElementById('price');
const yearlyBilling = document.getElementById('billing-type')


let value;
let initialCost;
slider.addEventListener('input', () => {

    if(slider.value.length == 5) {
        value = `${slider.value.slice(0,2)}K`;
    }else if(slider.value.length > 5 && slider.value.length < 7) {
        value = `${slider.value.slice(0,3)}K`;
    }else if(slider.value.length == 7) {
        value = `${slider.value.slice(0,1)}M`;
    }
    if(slider.value >= 10000 && slider.value < 50000) {
        initialCost = 8;
    }else if(slider.value >= 50000 && slider.value < 100000) {
        initialCost = 12;
    }else if(slider.value >= 100000 && slider.value < 500000) {
        initialCost = 16;
    }else if(slider.value >= 500000 && slider.value < 1000000) {
        initialCost = 24;
    }else if(slider.value == 1000000) {
        initialCost = 36;
    }
    
    yearlyBilling.addEventListener('input', () => {
        if(yearlyBilling.checked) {
            cost = initialCost * 0.75;
            price.innerText = cost;
            pageviews.innerText = value;
        }
        else {
            price.innerText = initialCost;
            pageviews.innerText = value;
        }
    })
    if(yearlyBilling.checked) {
        cost = initialCost * 0.75;
        price.innerText = cost;
        pageviews.innerText = value;
    }
    else {
        price.innerText = initialCost;
        pageviews.innerText = value;
    }

})
 