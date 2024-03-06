const itemName = document.getElementById('item-Name');
const itemPrice = document.getElementById('item-Price');
const itemNumber = document.getElementById('item-Number');
const cartTotal = document.getElementById('cartTotal');

let tot = 0;
let total = 0;

additem.addEventListener('click', function () {
    const name = itemName.value;
    const price = parseFloat(itemPrice.value, 10);
    const number = parseInt(itemNumber.value, 10);
    
    if(price > 0 && number > 0 && itemName !=='')
    {
        tot = price * number;
        total = total + tot;
        cartTotal.textContent = "Total: $ "+total;
        
        alert("Addeditem: "+ name + "\n" + "Total: "+ total);
    }
    else
    {
        alert("invalid number");
    }
    
});