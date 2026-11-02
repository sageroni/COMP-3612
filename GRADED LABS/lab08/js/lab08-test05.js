// array of items that were ordered
const orderItems = [
    { dishName: "Grilled Salmon with Herbs", dishAmount: 28.50 },
    { dishName: "Caesar Salad", dishAmount: 14.75 },
    { dishName: "Mushroom Risotto", dishAmount: 22.00 },
    { dishName: "Beef Tenderloin", dishAmount: 35.00 },
    { dishName: "Garlic Bread", dishAmount: 8.50 },
    { dishName: "Chocolate Lava Cake", dishAmount: 12.25 },
    { dishName: "House Red Wine", dishAmount: 18.00 },
    { dishName: "Sparkling Water", dishAmount: 4.50 }
];

const taxRate = prompt("Enter a tax percentage number");
let iTax = Number(taxRate);
if (!iTax) iTax = 0;
const tipRate = prompt("Enter a tip percentage number");
let iTip = Number(tipRate);
if (!iTip) iTip = 0;

console.log(iTax, iTip);

/* add code below this */

/* create function that calculates the subtotal, tax amount, tip amount, and total 
and returns an object with the four calculated values */
function billCalculations(orderItems, iTax, iTip) {
    let subtotal = 0;
    for (let i = 0; i < orderItems.length; i++) {
        subtotal += orderItems[i].dishAmount;
    }
    let taxAmount = subtotal * (iTax / 100);
    let tipAmount = subtotal * (iTip / 100);
    let total = subtotal + taxAmount + tipAmount;
    return { subtotal, taxAmount, tipAmount, total };
};

let amounts = billCalculations(orderItems, iTax, iTip);
console.log(amounts);
/* create function that outputs a single order item */

function outputOrderItem(item) {
    document.write("<div class='order-item'>");
    document.write("<span class='dish-name'>" + item.dishName + "</span>");
    document.write("<span class='dish-price'>$" + item.dishAmount.toFixed(2) + "</span>");
    document.write("</div>");
}

/* create function that outputs all the order items */
function outputOrders(orderItems) {
    for (let i = 0; i < orderItems.length; i++) {
        outputOrderItem(orderItems[i]);
    }
}

/* create function that outputs a bill row */
function outputBillRow(label, value, isCurrency = true) {
    document.write("<div class='bill-row'>");
    document.write("<span class='bill-label'>" + label + "</span>");
    if (isCurrency) {
        document.write("<span class='bill-value'>$" + value.toFixed(2) + "</span>"); // Fixed CSS class
    } else {
        document.write("<span class='bill-value'>" + value + "</span>");
    }
    document.write("</div>");
}

/* create function that outputs all the bill rows */
function outputAllBillRows(amounts, itemCount) {
    outputBillRow("Items Ordered:", itemCount + " dishes", false);
    outputBillRow("Subtotal:", amounts.subtotal);
    outputBillRow("Tax (" + iTax + "%):", amounts.taxAmount);
    outputBillRow("Tip (" + iTip + "%):", amounts.tipAmount);
    outputBillRow("Total:", amounts.total);
}