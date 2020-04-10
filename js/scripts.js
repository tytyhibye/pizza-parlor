//Business Logic:


function Pizza(size, topping, coupon,) {
  this.size = size;
  this.topping = topping;
  this.coupon = coupon; //might incorperate this later
}



//User Interface Logic:

$(document).ready(function() {
  let topPrice = 0;
  let topHolder = [];
  let topping = '';
  // let topPrice
  
  Pizza.prototype.sizePrice = function() {
    
    this.price = 8;
    if (this.size === 'Small') {
       this.price -= 2;
    } else if (this.size === 'Large') {
       this.price += 2; 
    } else if (this.size === '"tilt to fit through my door" Large') {
       this.price += 5;
    } else {
       this.price;
    }
    return topPrice + this.price;
  }
   
  $("input:checkbox").click(function() {
    
    topHolder.push(parseInt($(this).val()))
    topping = $(this).attr('id')
    console.log(topping)
    //Loops through topHolder Array and adds all the values up
    topPrice = topHolder.reduce(function(accumulator, currentValue){
      return accumulator + currentValue
    })
  });

  $('#button1').on('click', '#start', function(event) {
    event.preventDefault();
    $("#start").fadeOut(200);
    $(".menu").fadeIn(1800);
  })
  
  $("form#pizzaSpecs").submit(function(event) {
    event.preventDefault();
    
    
    var inputSize = $("#size").val();
    var pizza = new Pizza(inputSize);
    $("#priceOutput").html(pizza.sizePrice());
    $(".menu").fadeOut(300);
    $(".results").fadeIn(1700);

    $('#button3').on('click', '#reset', function(event) {
      event.preventDefault();
      $(".results").fadeOut(500);
      $(".menu").fadeIn(1700);
      document.getElementById('pizzaSpecs').reset();
      topPrice = 0;
      pizza.price = 0;
      topHolder =[0]
    })
  })
});