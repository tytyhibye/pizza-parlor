//Business Logic:

function Pizza(size, topping, base, coupon, total) {
  this.size = size;
  this.topping = topping;
  // this.base = base; //might not need
  this.coupon = coupon;
  // this.total = total;
}

//prototype method that uses the properties of the object to determine the price and adds price as a new property to the object
Pizza.prototype.getPrice = function() {
  this.price = 8;

  if (this.size === 'Small') {
    this.price -= 2;
  } else if (this.size === 'Large') {
    this.price += 2; 
  } else if (this.size === '"tilt to fit through my door" Large') {
    this.price += 5;
  } else {
    return this.price;
  }
  
  // $("input[type=radio]").click(function(this.base) {
  //   this.base = 0;
  //   $("input[type=radio]:checked").each(function() {
  //       this.base += parseInt($(this).val());
  //   });
  //   return this.base;
  
  // $("#outputnamehere").val(total);
// });
}

//User Interface Logic:

$(document).ready(function() {
  $("form#pizzaSpecs").submit(function(event) {
    event.preventDefault();
    var inputSize = $("#size").val();
    var inputTopping = $("input[type=radio]:checked").val();
    
    var pizza = new Pizza(inputSize, inputTopping);
    pizza.getPrice(this.price);
    $("#priceOutput").html(pizza.price);
    $(".menu").fadeOut(200);
    $(".results").fadeIn(1700);
  
    
    
    // console.log(inputSize, inputTopping, pizza.base)
  })
});