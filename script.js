const slider = document.getElementById('slider');
const pageviews = document.getElementById('pageviews');
const price = document.getElementById('price');
const yearlyBilling = document.getElementById('billing-type')


let value;
let initialCost;
slider.addEventListener('input', () => {
    value = Intl.NumberFormat('en', {notation: 'compact'}).format(slider.value);
    
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
 