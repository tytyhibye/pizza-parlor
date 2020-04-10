//Business Logic:

function Pizza(size, topping, base, coupon) {
  this.size = size;
  this.topping = topping;
  this.base = base; //might not need
  this.coupon = coupon;
}

//prototype method that uses the properties of the object to determine the price and adds price as a new property to the object
Pizza.prototype.getPrice = function() {
  this.base = 8;




}

//User Interface Logic:

$(document).ready(function() {
  $("form#pizzaSpecs").submit(function(event) {
    event.preventDefault();
    var inputSize = $("#size").val();
    var inputTopping = $("input:radio:checked").val();
  })
})