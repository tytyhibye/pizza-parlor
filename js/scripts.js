//Business Logic:

function Pizza(size, topping, base, coupon, total) {
  this.size = size;
  this.topping = topping;
  this.coupon = coupon;
  // this.topPrice = topPrice; //might not need
}

//prototype method that uses the properties of the object to determine the price and adds price as a new property to the object
Pizza.prototype.sizePrice = function() {
  
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
}
Pizza.prototype.toppingPrice = function() {
  $("input[type=radio]").click(function(inputTopping) {
    this.topPrice = 0;
    $("input[type=radio]:checked").each(function() {
        this.topPrice += parseInt($(this).val());
    });
    return this.topPrice;
  });
  }
  
  // $("#outputnamehere").val(pizza.topPrice);

  Pizza.prorotype.totalPrice = function() {
    this.priceTotal = this.price += this.topPrice;
    return this.priceTotal;
  }

//User Interface Logic:

$(document).ready(function() {
  $('#button1').on('click', '#start', function(event) {
    event.preventDefault();
    $("#start").fadeOut(300);
    $(".menu").fadeIn(1700);
  })
  
  $("form#pizzaSpecs").submit(function(event) {
    event.preventDefault();
    
    
    var inputSize = $("#size").val();
    var inputTopping = $("input[type=radio]:checked").val();
    
    var pizza = new Pizza(inputSize, inputTopping);
    pizza.sizePrice();
    pizza.toppingPrice();
    pizza.totalPrice();
    $("#priceOutput").html(pizza.priceTotal);
    $(".menu").fadeOut(300);
    $(".results").fadeIn(1700);

    $('#button3').on('click', '#reset', function(event) {
      event.preventDefault();
      $(".results").fadeOut(500);
      $(".menu").fadeIn(1700);
      document.getElementById('pizzaSpecs').reset();
      pizza.priceTotal = 0;
    })
  
    console.log(pizza.priceTotal);
    
    // console.log(inputSize, inputTopping, pizza.base)
  })
});