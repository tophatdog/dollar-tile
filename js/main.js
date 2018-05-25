// var greeting = 'whats good';
// var name = 'Joey';
// var message = ', plseae check your order:';
// var welcome = greeting + name + message;

var sign = '';
var tiles = sign.length;
var subtotal = tiles * 5;
var shipping = Math.random() + 3;
var grandtotal = subtotal + shipping;

function test()
        {
            var userInput = document.getElementById("userInput").value;
            elSign.textContent = (userInput);
            elTiles.textContent =(userInput.length);
            elsubtotal.textContent = '$'+ (userInput.length * 5) ;
            elGrandTotal.textContent = bobo(userInput)+shipping;
        }

        function bobo(string){
          if(string != undefined){
            return string.length *5 ;
          } else {
            return "this is not a string!"
          }
          }


// var el = document.getElementById('greeting');
// el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elsubtotal = document.getElementById('subTotal');
elsubtotal.textContent = '$' + subtotal;

var elShipping = document.getElementById('Shipping');
elShipping.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandtotal;
