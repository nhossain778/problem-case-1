"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: 
   Date:   
   
   Filename: tc_cart.js
	
*/
var item = [10582, 23015, 41807, 10041];
var itemDescription = [
  "1975 Green Bay Packers Football (signed), Item 10582",
  "Tom Landry 1955 Football Card (unsigned), Item 23015",
  "1916 Army-Navy Game, Framed Photo (signed), Item 41807",
  "Protective Card Sheets, Item 10041"
];
var itemPrice = [149.93, 89.98, 334.93, 22.67];
var itemQty = [1, 1, 1, 4];

// Variable to hold the total cost of the order
var orderTotal = 0;

// Function to calculate the total and build the HTML for the cart
function calculateCart() {
  var cartHTML = "<table>";
  cartHTML += "<tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

  for (var i = 0; i < item.length; i++) {
    var itemTotal = itemPrice[i] * itemQty[i];
    orderTotal += itemTotal;

    cartHTML += "<tr>";
    cartHTML += "<td><img src='tc_item.png' alt='Item' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td>";
    cartHTML += "<td>$" + itemPrice[i].toFixed(2) + "</td>";
    cartHTML += "<td>" + itemQty[i] + "</td>";
    cartHTML += "<td>$" + itemTotal.toFixed(2) + "</td>";
    cartHTML += "</tr>";
  }

  cartHTML += "<tr><td colspan='4'>Subtotal</td>";
  cartHTML += "<td>$" + orderTotal.toFixed(2) + "</td></tr>";
  cartHTML += "</table>";

  document.getElementById("cart").innerHTML = cartHTML;
}

// Call the function to calculate the cart and display it
calculateCart();
