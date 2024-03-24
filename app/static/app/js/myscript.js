$(".plus-cart").click(function () {
  var id = $(this).attr("pid").toString();
  var eml = this.parentNode.children[2];
  console.log(id);
  $.ajax({
    type: "GET",
    url: "/pluscart",
    data: {
      prod_id: id,
    },
    success: function (data) {
      console.log(data);
      eml.innerText = data.quantity;
      document.getElementById("amount").innerText = data.amount.toFixed(2);
      document.getElementById("totalamount").innerText =
        data.totalamount.toFixed(2);
    },
  });
//   if ($("#totalamount").text() == "70" || $("#totalamount").text() == "70.00") {
    
//     console.log("faiz");
//     document.getElementsByClassName('place-order')[0].style.display = "none"
//   } else {
//     document.getElementsByClassName('place-order')[0].style.display = "initial"
//   }
});

$(".minus-cart").click(function () {
  var id = $(this).attr("pid").toString();
  var eml = this.parentNode.children[2];
  $.ajax({
    type: "GET",
    url: "/minuscart",
    data: {
      prod_id: id,
    },
    success: function (data) {
      console.log(data);
      eml.innerText = data.quantity;
      document.getElementById("amount").innerText = data.amount.toFixed(2);
      document.getElementById("totalamount").innerText =
        data.totalamount.toFixed(2);
    },
  });
//   if ($("#totalamount").text() == "70" || $("#totalamount").text() == "70.00") {
    

//     console.log("faiz");
//     document.getElementsByClassName('place-order')[0].style.display = "none"
//   } else {
//     document.getElementsByClassName('place-order')[0].style.display = "initial"
//   }
});

$(".remove-cart").click(function () {
  var id = $(this).attr("pid").toString();
  var elm = this;
  $.ajax({
    type: "GET",
    url: "/removecart",
    data: {
      prod_id: id,
    },
    success: function (data) {
    //   console.log(data);
      document.getElementById("amount").innerText = data.amount;
      document.getElementById("totalamount").innerText = data.totalamount;
      elm.parentNode.parentNode.parentNode.parentNode.remove();
    },
  });
//   if ($("#totalamount").text() == "70" || $("#totalamount").text() == "70.00") {
    
//     console.log("faiz");
//     document.getElementsByClassName('place-order')[0].style.display = "none"
//   } else {
//     document.getElementsByClassName('place-order')[0].style.display = "initial"
//   }
});

// $(".place-order").click(function(e){
//     if($('#totalamount').text() == '70' || $('#totalamount').text() == '70.00'){


//         document.getElementsByClassName('place-order')[0].style.display = "none"
//     }else{
//         document.getElementsByClassName('place-order')[0].style.display = "none"
//     }
// });
