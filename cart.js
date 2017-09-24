// My Javascript code goes here
// Code needs to go here
let subTotal = 0;
let total = 0;
let tax = 0;
$("#shoppingForm").hide();
$('.additem').click(function(){
    let itemName = $('p').eq(0).text();
    let itemPrice = $('p').eq(1).text();
    $(".cart").append('<p>' + itemName + '   '+ itemPrice + '</p>');
    calculete(itemPrice);


function calculete(itemPrice){
    cleanPrice = itemPrice.slice(1);
    $("#calc").empty();
    subTotal +=  parseFloat(cleanPrice);
    tax = (subTotal * (0.1));
    total = subTotal + tax;
    $('#calc').append('<p> <b>Subtotal :  </b> $' + subTotal.toFixed(2) + '</p>');
    $('#calc').append('<p> <b>Tax :</b> $' + tax.toFixed(2) + '<p>');
    $('#calc').append('<p><b> Total </b> $' +  total.toFixed(2) + '</p>');
}
});

    $('.sendTo').click(function() {
    $('#shoppingForm').show();
});
    $("#done").click(function(){
    alert("Your orde is complet. Thanks!")
});


