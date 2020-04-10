//Business Logic:


function Pizza(size, topping, coupon,) {
  this.size = size;
  this.topping = topping;
  this.coupon = coupon; //might incorperate this later
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

// ** NEED TO FIX THIS **

Pizza.prototype.toppingPrice = function() {

 
}
  

  // Pizza.prototype.totalPrice = function() {

  //   this.priceTotal = this.price += this.topPrice;
  //}

//User Interface Logic:

$(document).ready(function() {
  let topHolder = []
  $("input:checkbox").click(function() {
    
    topHolder.push(parseInt($(this).val()))
    //Loops through topHolder Array and adds all the values up
    let topPrice = topHolder.reduce(function(accumulator, currentValue){
      return accumulator + currentValue
    })
    console.log(topPrice)
  });

  $('#button1').on('click', '#start', function(event) {
    event.preventDefault();
    $("#start").fadeOut(300);
    $(".menu").fadeIn(1700);
  })
  
  $("form#pizzaSpecs").submit(function(event) {
    event.preventDefault();
    
    
    var inputSize = $("#size").val();
    //var inputTopping = $("input:checkbox").val();
    
    var pizza = new Pizza(inputSize, inputTopping);
    pizza.sizePrice();
    pizza.toppingPrice();
    // pizza.totalPrice();
    $("#priceOutput").html(pizza.price);
    $(".menu").fadeOut(300);
    $(".results").fadeIn(1700);

    $('#button3').on('click', '#reset', function(event) {
      event.preventDefault();
      $(".results").fadeOut(500);
      $(".menu").fadeIn(1700);
      document.getElementById('pizzaSpecs').reset();
      // pizza.priceTotal = 0;
    })
  })
});