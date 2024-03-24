// For Trending Carousel
$(document).ready(function () {
  // For Trending-product Owl Carousel
  $('#slider1, #slider2, #slider3').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2600,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2.5,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  // For related products carousel
  // $(".related-product-wrapper .owl-carousel ").owlCarousel({
  //   loop: true,
  //   nav: false,
  //   dots: true,
  //   autoplay: true,
  //   // autoplayTimeout:2600,
  //   // autoplayHoverPause:true,
  //   // responsiveClass:true,
  //   // responsiveClass:true,
  //   responsive: {
  //     0: {
  //       items: 2.5,
  //     },
  //     600: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 5,
  //     },
  //   },
  // });

  // For Product Gallery Filteration

  // isotope filter
  var $grid = $(".grid").imagesLoaded(function () {
    $grid.isotope({
      itemSelector: ".grid-item",
      // layoutMode : 'fitRows'
    });
  });

  // filter items on button click
  $(".button-group").on("click", "button", function () {
    var filterData = $(this).attr("data-filter");
    $grid.isotope({ filter: filterData });
  });
});

if (window.location.pathname == "/categories.html") {
  $(function () {
    $("#slider-range").slider({
      range: true,
      min: 8000,
      max: 100000,
      values: [14000, 60000],
      slide: function (event, ui) {
        $("#amount").val("₹" + ui.values[0] + " - ₹" + ui.values[1]);
      },
    });
    $("#amount").val(
      "₹" +
        $("#slider-range").slider("values", 0) +
        " - ₹" +
        $("#slider-range").slider("values", 1)
    );
  });
}
// For Responsive Navigation
// var dropDown = document.querySelectorAll(".dropdown-area");
// var hasDropdown = document.querySelectorAll(".has-dropdown");
// hasDropdown.forEach((e) => {
//   e.addEventListener("click", () => {
//     e.classList.toggle("showdrop");
//   });
// });

// For Fixed Navigation and // Back to Top Btn
var backtoTopEl = document.querySelector(".back-to-top");
var navigation = document.querySelector(".header-wrapper");
window.onscroll = function () {
  // For Fixed Navigation
  if (document.documentElement.scrollTop > 800) {
    navigation.classList.add("scroll-on");
    document.querySelector(".nav-2").style.display = "none";
  } else {
    navigation.classList.remove("scroll-on");
    document.querySelector(".nav-2").style.display = "initial";
  }

  // Back to Top Btn
  // if (document.documentElement.scrollTop > 500) {
  //   backtoTopEl.style.visibility = "visible";
  //   backtoTopEl.style.opacity = "1";
  // } else {
  //   backtoTopEl.style.visibility = "hidden";
  //   backtoTopEl.style.opacity = "0";
  }

  // Cart Page Checkout btn
  // if (
  //   window.location.pathname == "/cart.html" &&
  //   document.body.clientWidth <= 1000
  // ) {
  //   var checkoutBtn = document.querySelector(".cart-checkout-btn");
  //   if (document.documentElement.scrollTop > 500) {
  //     checkoutBtn.classList.add("active");
  //   } else {
  //     checkoutBtn.classList.remove("active");
  //   }
  // }
// };

// For Product Gallery Buttons
// var button = document.querySelectorAll(".button-group .rect-btn");
// button.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     var activeBtn = document.querySelector(".active-btn");
//     if (activeBtn) {
//       activeBtn.classList.remove("active-btn");
//     }
//     btn.classList.add("active-btn");
//   });
// });

var mediaWidth = document.body.clientWidth;
var url = window.location.pathname;
if (mediaWidth <= 1200 && url == "/categories.html") {
  var filterBtnEl = document.querySelector(".filter-fixed-btn");
  var filterationEl = document.querySelector(".filteration");
  var filterationCloseEl = document.querySelector(".filteration-close");
  var bodyOverlayFilterEl = document.querySelector(".body-overlay-filter");

  filterBtnEl.addEventListener("click", toggleFilteration);
  filterationCloseEl.addEventListener("click", toggleFilteration);
  bodyOverlayFilterEl.addEventListener("click", toggleFilteration);

  function toggleFilteration() {
    filterationEl.classList.toggle("fixed");
    document.body.classList.toggle("noscroll");
    bodyOverlayFilterEl.classList.toggle("on");
  }

  // Sort Button
  var sortBtnEl = document.querySelector(".sort-fixed-btn");
  var sortEl = document.querySelector(".sort-mobile");
  var sortCloseEl = document.querySelector(".sort-close");
  var bodyOverlaySortEl = document.querySelector(".body-overlay-sort");
  var sortListEl = document.querySelectorAll(".sort-mobile ul li");

  sortListEl.forEach((li) => {
    li.addEventListener("click", () => {
      var activeList = document.querySelector(".sort-mobile ul li.selected");
      if (activeList) {
        activeList.classList.remove("selected");
      }

      li.classList.add("selected");
    });
  });
  sortBtnEl.addEventListener("click", toggleSort);
  sortCloseEl.addEventListener("click", toggleSort);
  bodyOverlaySortEl.addEventListener("click", toggleSort);

  function toggleSort() {
    sortEl.classList.toggle("active");
    bodyOverlaySortEl.classList.toggle("on");
    document.body.classList.toggle("noscroll");
  }
}

// Product Image
var smallImgEl = document.querySelectorAll(".product-small-img img");
var smallImgdivEl = document.querySelectorAll(".product-small-img");
var largeImgEl = document.querySelector(".product-large-img img");

smallImgdivEl.forEach((imgBox) => {
  imgBox.addEventListener("mouseover", changeImg);
  imgBox.addEventListener("click", changeImg);
  function changeImg() {
    var activeImgBox = document.querySelector(".product-small-img.active");
    if (activeImgBox) {
      activeImgBox.classList.remove("active");
    }
    imgBox.classList.add("active");
    var img = imgBox.childNodes;
    var src = img[1].attributes[0].nodeValue;
    largeImgEl.setAttribute("src", src);
  }
});

if (window.location.pathname == "/profile.html") {
  // Profile Personal Imformation
  var editInfoBtnEl = document.querySelector(".profile-edit-btn");
  var saveInfoBtnEl = document.querySelector(".profile-save-btn");
  var profileInputEl = document.querySelectorAll(
    ".profile-info-form div input"
  );

  editInfoBtnEl.addEventListener("click", editinfo);
  saveInfoBtnEl.addEventListener("click", saveinfo);
  function editinfo() {
    editInfoBtnEl.style.display = "none";
    saveInfoBtnEl.style.display = "initial";
    profileInputEl.forEach((input) => {
      input.disabled = false;
      input.style.cursor = "initial";
    });
  }
  function saveinfo() {
    editInfoBtnEl.style.display = "initial";
    saveInfoBtnEl.style.display = "none";
    profileInputEl.forEach((input) => {
      input.disabled = true;
      input.style.cursor = "not-allowed";
    });
  }
}
