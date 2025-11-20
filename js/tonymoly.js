$(document).ready(function () {
  updateUserStatus();
  logedInContol();
  bindUserActions();
  accountChangeCheck();
  addStorageVal();
  mnavControl();
  validateEmailForm();
  closePopup();
  searchCateCon();
  searchTag();
  searchRemoveVal();

  accordionControl();

  detailImgChange();
  cartSubmitEvent();
  customSelect();

  openPopup();
  initWishPopup();
  wishProductRemove();
  // popup

  cartQuant();
  addCartProduct();
  removeProduct();
  totalPriceCal();
  cartProductRemove();
  initCartItemId();
  //cart 

  addressEdit();
  addressLeavePopup();
  setDefaultAddress();
  initAddressPopup();
  // address
  promoCodeCopy();

  passwordCheck();
  summaryDiscount();
  headerScroll();
  backEvent();

  passwordType();
  orderBlank();
  signinValCheck();
  signupValCheck();
  forgotEmailCheck();
  cartInfoCheck();
  reviewProduct();

  phoneHyphen();
  cardSlash();
  inputText();


  handleResponsiveFunctions();
  $(window).on("resize", function () {
    handleResponsiveFunctions();
  });
  $(window).on('load', function () {
    if ($(".rewardContainer").length > 0) {
      customSlider(
        ".sliderImgBox",
        800,
        260,
        false,
        7,
        1,
        2,
        true,
        ".product-carousel__pager--reward",
        null,
        null,
        true,
      );
    }
    if ($("main.indexContainer").length > 0) {
      customSlider(
        ".sliderMain",
        500,
        0,
        false,
        1,
        1,
        1,
        true,
        null,
        ".prev_btn_main",
        ".next_btn_main",
        false,
      );
      carouselCon();
      carouselCon2();
    }
  });
})


let currentState = ''
let tabletState = ''
function handleResponsiveFunctions() {
  const width = window.innerWidth;
  const newState = width >= 1440 ? "pc" : "mobile";
  const newTabletState = width >= 768 ? "tablet" : "mobile";

  if (newState === currentState && tabletState === newTabletState) {
    return;
  }

  if (newState === "pc") {
    $(document).off('click', ".instagram-feed__item, .product-card, .hero-slider__slide");
    $(document).off('click', '.order-summary__toggle-button');
    $('.order-summary__toggle-button').removeClass('js-active').attr('aria-expanded', 'false');
    imgListHover();
    asideHover();
  } else {
    $(".productList li figure img").off("mouseenter mouseleave");
    sumAccordionControl();
    asideScroll();
    mnavList();
    imgListClick();
  }
  if (newTabletState === "tablet") {
    searchBarControl();
  } else {
    $(".search-form__submit-button").off("click");
    $(".search-form__input").removeClass("opacityClass js-active");
  }
  currentState = newState;
  tabletState = newTabletState;

}

function customSlider(
  slideName,
  sliderSpeed,
  sliderWidth,
  shrinkItem,
  maxSlide,
  minSlide,
  moveSlide,
  pagerOn,
  pagerName,
  prevName,
  nextName,
  HeightAdapt,
) {
  $(slideName).bxSlider({
    wrapperClass: "bx-wrapper",
    speed: sliderSpeed,
    slideWidth: sliderWidth,
    shrinkItems: shrinkItem,
    maxSlides: maxSlide,
    minSlides: minSlide,
    moveSlides: moveSlide,
    pager: pagerOn,
    pagerSelector: pagerName,
    prevSelector: prevName,
    nextSelector: nextName,
    adaptiveHeight: HeightAdapt,
    responsive: true,
    useCSS: false,
    easing: "swing",
    oneToOneTouch: false,
    preventDefaultSwipeX: true
  });
}

function carouselCon() {
  var activeCate = $(".cateNav li.active").text().replace(/\s+/g, "");
  var activelist = $(`[class^='${activeCate}-imgSlider']`).bxSlider({
    mode: "horizontal",
    speed: 800,
    minSlides: 1,
    maxSlides: 6,
    slideWidth: 328,
    moveSlides: 2,
    pager: true,
    easing: "ease-in-out",
    shrinkItems: true,
    pagerSelector: ".product-carousel__pager--new",
    nextSelector: ".next_btn",
    prevSelector: ".prev_btn",
    wrapperClass: `${activeCate}-Wrapper`,
    adaptiveHeight: true,
  });
  activelist.reloadSlider();
  $(".cateNav li").click(function () {
    var cateText = $(this).text().replace(/\s+/g, "");
    $(".cateNav li").removeClass("active godamS16W3");
    $("[class*='imgSlider']").removeClass("active");
    activelist.destroySlider();
    $(this).addClass("active godamS16W3");
    $(`[class^='${cateText}']`).addClass("active");
    activelist = $(`[class^='${cateText}-imgSlider']`).bxSlider({
      speed: 900,
      minSlides: 1,
      maxSlides: 6,
      slideWidth: 328,
      moveSlides: 2,
      pager: true,
      easing: "ease-in-out",
      shrinkItems: true,
      pagerSelector: ".product-carousel__pager--new",
      nextSelector: ".next_btn",
      prevSelector: ".prev_btn",
      wrapperClass: `${cateText}-Wrapper`,
      adaptiveHeight: true,
      responsive: true,
    });
    activelist.reloadSlider();
  });
}

function carouselCon2() {
  var activeCate2 = $(".bestNav li.active").text().slice(0, 4);
  var activelist2 = $(`[class^='${activeCate2}-bestSlider']`).bxSlider({
    speed: 900,
    minSlides: 1,
    maxSlides: 6,
    slideWidth: 328,
    moveSlides: 2,
    pager: true,
    easing: "ease-in-out",
    shrinkItems: true,
    pagerSelector: ".product-carousel__pager--best",
    nextSelector: ".next_btn2",
    prevSelector: ".prev_btn2",
    wrapperClass: `${activeCate2}-Wrapper`,
    adaptiveHeight: true,
  });
  activelist2.reloadSlider();
  $(".bestNav li").click(function () {
    var cateText2 = $(this).text().slice(0, 4);
    $(".bestNav li").removeClass("active godamS16W3");
    $("[class*='bestSlider']").removeClass("active");
    activelist2.destroySlider();
    $(this).addClass("active godamS16W3");
    $(`[class^='${cateText2}-']`).addClass("active");
    activelist2 = $(`[class^='${cateText2}-bestSlider']`).bxSlider({
      speed: 800,
      minSlides: 1,
      maxSlides: 6,
      slideWidth: 328,
      moveSlides: 2,
      pager: true,
      easing: "ease-in-out",
      shrinkItems: true,
      pagerSelector: ".product-carousel__pager--best",
      nextSelector: ".next_btn2",
      prevSelector: ".prev_btn2",
      wrapperClass: `${cateText2}-Wrapper`,
      adaptiveHeight: true,
      responsive: true,
    });
    activelist2.reloadSlider();
  });
}
// bx slider 

function updateUserStatus() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (isLoggedIn === 'true') {
    $('html').addClass('is-logged-in').removeClass('is-logged-out');
  } else {
    $('html').addClass('is-logged-out').removeClass('is-logged-in');

  }
}

function bindUserActions() {
  $('.is-logged-in .call-to-action__button').click(function (e) {
    e.preventDefault();
    activeClass('#loggedPopup');
  });

  $(".is-logged-in .product-card__add-to-cart-button").click(function () {
    if (!$(this).hasClass("js-active")) {
      activeClass("#cartPopup");
    }
  });

  $('.is-logged-in .product-info__actions .add-to-cart-button').click(function () {
    activeClass('#cartPopup')
  });

  $('.is-logged-in .account-delete-button').click(function () {
    $('html').addClass('is-logged-out').removeClass('is-logged-in');
  });

  $('.account-delete-button').click(function (e) {
    e.preventDefault();
    localStorage.removeItem('isLoggedIn');
    updateUserStatus();
    window.location.href = $(this).attr('href');
  })
  // is-logged-in

  $('.is-logged-out .add-to-cart-button, .is-logged-out .wishlist-button, .is-logged-out .wish-button').click(function (e) {
    e.preventDefault();
    activeClass('#loginMovePopup');
  })
  // is-logged-out

  toggleBtn();
}

function logedInContol() {
  $('.loged-out-form').on('submit', function () {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userFirstname');
    localStorage.removeItem('userLastname');

    updateUserStatus();
  })
}

function removeActiveClass(target) {
  $(target).removeClass("js-active");
}

function activeClass(target) {
  $(target).addClass("js-active");
}

function toggleBtn() {
  $(".is-logged-in .toggleBtn").click(function () {
    $(this).toggleClass("js-active");
  });
}

function addblockClick(clickTarget, blockTarget) {
  $(clickTarget).click(function () {
    activeClass(blockTarget);
  });
}

function closePopup() {
  $(".closeBtn").on("click", function () {
    removeActiveClass("[id*='Popup']");
  });
}
// global function

function headerScroll() {
  let lastScrollY = 0;
  const $header = $(".site-header");
  let ticking = false;

  $(window).on("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        const scrollPosition = $(window).scrollTop();

        if (Math.abs(scrollPosition - lastScrollY) > 5) {
          const isScrollDown = scrollPosition > lastScrollY;
          $header.toggleClass("hidden", isScrollDown);
        }
        lastScrollY = scrollPosition;
        ticking = false;
      });
    }
    ticking = true;
  });
}
// header scroll

function backEvent() {
  $(".backBtn, .leaveBtn").click(function () {
    history.back();
  });
}
// btn - back

function openPopup() {
  $(document).on('click.popup', "button[data-popname]", function () {
    const popName = $(this).data("popname");
    activeClass(`#${popName}Popup`);
  })
}

function initWishPopup() {
  $(document).on('click', "button[data-popname='clearWishComplete']", function () {
    $('.product-grid--wish .product-card').remove();
    removeActiveClass("#removeAllPopup");
    activeClass("#clearCompletePopup, .wishListempty");

    updateWishCount();
  })
}
// pop up 

function wishProductRemove() {
  $(document).on('click', '.product-grid--wish .wishlist-button', function () {
    const $this = $(this);
    if (!$this.hasClass('js-active')) {
      $this.closest('.product-card').remove();
    }
    updateWishCount();
  })
}

function updateWishCount() {
  const $wishGrid = $('.product-grid--wish');
  const wishLength = $wishGrid.find('.product-card').length;

  $('#wishCount').text(wishLength);

  if (wishLength == 0) {
    activeClass(".wishListempty");
    $wishGrid.removeClass('js-grid');
  } else {
    $('.wishListempty').removeClass('js-active');
    $wishGrid.addClass('js-active');
  }
}


function customSelect() {
  const $selectComponent = $(".selectComponent");
  $selectComponent.click(function () {
    $(this).toggleClass("active");
  });
  $(document).on('click', ".selectComponent > li", function () {
    const $clickedLi = $(this);
    $clickedLi.siblings().removeClass("active");
    $clickedLi.addClass("active");
  })
}
// select


function searchBarControl() {
  const $searchBtn = $(".search-form__submit-button");
  const $input = $(".search-form__input");
  $searchBtn.off("click").on("click", function (e) {
    e.preventDefault();
    if (!$input.hasClass('js-active')) {
      $input.addClass("opacityClass");
      activeClass($input);
    } else {
      $('.search-form').submit();
    }
  });
}


function searchCateCon() {
  $(document).on('click', '.togglebtns li', function () {
    const $this = $(this);
    const searchCate = $this.text().replace(/\s+/g, "");

    const $searchMark = $(".search-results__count mark");
    const $searchProduct = $(".product-grid--search > .product-card");
    const $searchListEmpty = $('.searchListempty');
    var totalSearchProductCount = $searchProduct.length;
    let activeSearchList = 0;

    $this.siblings().removeClass("js-active");
    $searchProduct.removeClass("js-active");
    $searchListEmpty.removeClass("js-active");


    if ($this.hasClass("js-active")) {
      $this.removeClass("js-active");
      activeClass($searchProduct);
      activeSearchList = totalSearchProductCount;
    } else {
      activeClass($this)
      const filteredProducts = $(`[data-sept^='${searchCate}']`);
      filteredProducts.addClass("js-active");
      activeSearchList = filteredProducts.length;
    }

    $searchMark.text(activeSearchList);

    if (activeSearchList === 0) {
      activeClass($searchListEmpty);
    }
  })
}


function searchTag() {
  $(document).on("click", ".search-list__tag", function () {
    const clickedTagText = $(this).text();
    const $searchInput = $(".search-list-form__input");
    $searchInput.val(clickedTagText);
  });
}

function searchRemoveVal() {
  $(".search-list-form__remove-button").click(function () {
    const $searchInput = $(".search-list-form__input");
    $searchInput.val("");
  });
}
// search



function detailImgChange() {
  $(document).on('click', ".product-gallery__thumbnails > li", function () {
    const $galleryLi = $(".product-gallery__thumbnails > li");
    const $galleryImg = $(".product-gallery__main-image");
    const $thisThumbnail = $(this);
    const newSrc = $thisThumbnail.find('img').attr("src");

    $galleryLi.removeClass('active');
    $thisThumbnail.addClass('active');
    $galleryImg.attr("src", newSrc);
  })
}
// detail

function accordionControl() {
  $('.accordion-trigger').click(function () {
    const $triggerButton = $(this);
    const accordionControl = $triggerButton.attr("aria-controls");
    const $targetPanel = $('#' + accordionControl);
    const accordionExpand = $triggerButton.attr('aria-expanded') === 'true';

    if (accordionExpand) {
      removeActiveClass($targetPanel);
      removeActiveClass($triggerButton);
      $triggerButton.attr('aria-expanded', 'false');
    } else {
      activeClass($targetPanel);
      activeClass($triggerButton);
      $triggerButton.attr('aria-expanded', 'true');
    }
  })
}
// 범용 accordion

function sumAccordionControl() {
  $(document).off('click', '.order-summary__toggle-button');

  $(document).on('click', '.order-summary__toggle-button', function () {
    const $button = $(this);
    const $container = $button.closest('.order-summary__title');
    const accordionExpand = $button.attr('aria-expanded') === 'true';

    $container.toggleClass('js-active')
    $button.attr('aria-expanded', !accordionExpand);
  });
}
// sum 한정 accordion

function removeProduct() {
  $(document).on('click', "button[data-popName='clearAllCartComplete']", function () {
    activeClass(".cartListempty");
    removeActiveClass(".cart-items__item");
    $("#subTotalPrice").text(0);
  });
}
// cart - 모든 btn remove

function cartSubmitEvent() {
  const $form = $('.cart-order-summary__checkout-form');
  const $subBtn = $(".cart-order-summary__checkout-button");
  const $checkbox = $(".cart-order-summary__policy-checkbox");

  $checkbox.on("change", function () {
    $subBtn.toggleClass('js-active', $(this).is(":checked"));
  });

  $form.on('submit', function (e) {
    if (!$checkbox.is(":checked")) {
      e.preventDefault();
    }
  });
}
// cart - submit 


function cartQuant() {
  $(document).on('click', ".cart-items__quantity-selector-button", function () {
    const $product = $(this).closest(".cart-items__item.js-active");
    const actionType = $(this).data("cartPrice");

    const $quant = $product.find("[data-cart-price='quantValue']");
    const $productPrice = $product.find("[data-cart-price='productPrice']");
    const $subtotal = $product.find("[data-cart-price='subTotalPrice']");
    const $total = $("#totalPrice");

    let quantVal = parseInt($quant.text());
    let productVal = parseInt($productPrice.text());

    if (actionType == 'quantSub' && quantVal != 1) {
      quantVal--;
    } else if (actionType == 'quantAdd' && quantVal != 999) {
      quantVal++;
    }
    const newSubtotalVal = quantVal * productVal;

    let newTotalVal = 0;
    $(".cart-items__item.js-active").each(function () {
      const itemSubtotal = parseInt($(this).find("[data-cart-price='subTotalPrice']").text());
      if ($(this).is($product)) {
        newTotalVal += newSubtotalVal;
      } else {
        newTotalVal += itemSubtotal;
      }
    });

    $quant.text(quantVal);
    $subtotal.text(newSubtotalVal);
    $total.text(newTotalVal);
  });
}
// cart - quant 계산 


function addCartProduct() {
  $(document).on('click', ".addProduct", function () {
    const $product = $(this).closest('.product-recommendations__item');
    const imgSrc = $product.find('img').attr("src");
    const nameText = $product.find(".product-recommendations__item-title").text();
    const cateText = $product.find(".product-recommendations__item-detail").text();
    const priceText = parseInt($product.find(".product-recommendations__item-quant > strong").text());

    const newId = Date.now();

    let categoryHtml = '';
    if (cateText && cateText.trim() !== '') {
      categoryHtml = `<dd class="cart-items__product-option godamS14W1 color-gray4">${cateText}</dd>`;
    }

    const appendProduct = `
                    <li class="cart-items__item js-active" data-cart-id="${newId}">
                        <div class="cart-items__item-wrapper flex-wrap justify-between">
                            <div class="cart-items__product-info flex-wrap">
                                <img src="${imgSrc}" alt="may need product" class="cart-items__product-image">
                                <dl class="cart-items__product-details">
                                    <dt class="cart-items__product-name godamS16W1">${nameText}</dt>
                                    ${categoryHtml}
                                    <dd class="cart-items__product-price godamS16W3 color-gray1" data-cart-price="productPrice">${priceText}</dd>
                                </dl>
                            </div>
                            <div class="cart-items__quantity-selector flex-wrap justify-center">
                                <button type="button" data-cart-price="quantSub" class="cart-items__quantity-selector-button cart-items__quantity-selector-button--sub">Subtract one product button</button>
                                <span data-cart-price="quantValue" class="godamW2">1</span>
                                <button type="button" data-cart-price="quantAdd" class="cart-items__quantity-selector-button cart-items__quantity-selector-button--add">Add one product button</button>
                            </div>
                            <strong class="cart-items__subtotal-price godamS20W3" data-cart-price="subTotalPrice">${priceText}</strong>
                            <button type="button" data-popName="removeProduct" class="cart-items__remove-item-button">remove product</button>
                        </div>
                    </li>
            `;

    $(".cart-items__list").append(appendProduct);
    totalPriceCal();
    $(".cartListempty").removeClass("js-active");
  })
}
// cart - may need add 


function cartProductRemove() {
  const $popUp = $('#removeProductPopup');
  $(document).on('click', ".cart-items__remove-item-button", function () {
    const thisProductId = $(this).closest(".cart-items__item.js-active").data("cartId");
    $popUp.find($("button[data-popName='clearComplete']")).data('target-id', `${thisProductId}`);
  });

  $(document).on('click', "button[data-popName='clearComplete']", function () {
    const targetId = $(this).data('target-id');
    if (targetId) {
      $(`.cart-items__item[data-cart-id="${targetId}"]`).remove();
    }

    const $cartLength = $(".cart-items__item.js-active").length;
    if ($cartLength == 0) {
      $(".cartListempty").addClass("js-active");
    }

    totalPriceCal();
  });
}
// cart - product remove 


function totalPriceCal() {
  const $total = $("#totalPrice");
  let newTotalVal = 0;
  $(".cart-items__item.js-active").each(function () {
    const itemSubtotal = parseInt($(this).find("[data-cart-price='subTotalPrice']").text());
    if (!isNaN(itemSubtotal)) {
      newTotalVal += itemSubtotal;
    }
  });
  $total.text(newTotalVal);
}
// cart total 계산 


function initCartItemId() {
  $(".cart-items__item").each(function (index) {
    if (!$(this).attr('data-cart-id')) {
      const cartId = Date.now() + index;
      $(this).attr('data-cart-id', cartId);
    }
  });
}
// cart - product id 부여


function reviewProduct() {
  $(document).on("click", "#reviewProduct > li", function () {
    const $reviewProduct = $('#reviewProduct');
    const clickedIndex = $(this).index();
    const starRating = clickedIndex + 1;

    $reviewProduct.removeClass('star1 star2 star3 star4 star5');
    $reviewProduct.addClass('star' + starRating);
  });
}
// orders - review 팝업

function initAddressPopup() {
  $(document).on('click', "button[data-popName='clearAllAddressComplete']", function () {
    removeActiveClass("#removeAddressesPopup");
    activeClass("#clearCompletePopup");
    $(".address-card:not(.address-card--default)").remove();
    updateAddressCount();
  });

  $(document).on('click', "button[data-popName='removeAddress']", function () {
    const $addressCard = $(this).closest('.address-card');
    if ($addressCard.hasClass('.address-card--default')) {
      return;
    }
    const addressId = $addressCard.data('address-id');
    $('#removeAddressPopup').find("button[data-popName='clearAddressComplete']").data('target-id', addressId);
  });

  $(document).on('click', "button[data-popName='clearAddressComplete']", function () {
    const targetId = $(this).data('target-id');
    if (targetId) {
      $(`.address-card[data-address-id='${targetId}']`).remove();
      updateAddressCount();
    }
    removeActiveClass("#removeAddressPopup");
    activeClass("#clearCompletePopup");
  });
}

function setDefaultAddress() {
  $(document).on('click', ".address-card__set-default-button", function () {
    $(".address-card").removeClass('address-card--default');
    $(this).closest(".address-card").addClass('address-card--default');
  });
}
// address - default 주소 설정 


function addressEdit() {
  $(document).on('click', '.edit-button', function () {
    const $card = $(this).closest('.address-card');
    $('.custom-select__list li').removeClass('active');

    const listId = $card.data('address-id');
    const firstName = $card.data('first-name');
    const lastName = $card.data('last-name');
    const userPhoneNumber = $card.data('phone-number');
    const userAddress = $card.data('address');
    const country = $card.data('country');
    const detailAddress = $card.data('detail-address');
    const companyAddress = $card.data('company-address')
    const postalCode = $card.data('postal-code');
    const userCity = $card.data('city');
    const province = $card.data('province');

    $('.address-form__title').text('Edit Address');
    $('#editingAddressId').val(listId)
    $('#' + country).addClass('active');
    $('#' + province).addClass('active');
    $('#userFirstname').val(firstName);
    $('#userLastname').val(lastName);
    $('#userPhone').val(userPhoneNumber);
    $('#userAddress').val(userAddress);
    $('#userCode').val(postalCode);
    $('#userCity').val(userCity);
    if (detailAddress) {
      $('#userDetailAddress').val(detailAddress);
    }
    if (companyAddress) {
      $('#userCompany').val(companyAddress);
    }
    $('#addressListContainer').hide();
    $('#addressEditContainer').show();
  });

  $('.addresses-page__address-add-button').click(function () {
    $('.address-form__title').text('Add Address');
    $('#editingAddressId').val('');
    $('#editAddress')[0].reset();

    $('#addressListContainer').hide();
    $('#addressEditContainer').show();
  })

  $('#saveAddresses').click(function (e) {
    e.preventDefault();

    const isFormValid = validateForm(addressEditRules);
    if (isFormValid) {
      activeClass("#saveAddressesPopup");
    } else {
      return;
    }
    const addressID = $('#editingAddressId').val();

    const $newCountry = $('.custom-select__list--country li.active');
    const $newProvince = $('.custom-select__list--province li.active');
    const newCountryText = $newCountry.text();
    const newProvinceText = $newProvince.text();

    const newCountryID = $newCountry.attr('id');
    const newProvinceId = $newProvince.attr('id');

    const newFirstName = $('#userFirstname').val();
    const newLastName = $('#userLastname').val();
    const newAddress = $('#userAddress').val();
    const newCity = $('#userCity').val();
    const newPostalCode = $('#userCode').val();
    const newPhoneNum = $('#userPhone').val();
    let newCompany = $('#userCompany').val();
    let newDetailAddress = $('#userDetailAddress').val();
    const addressParts = [
      newAddress,
      newDetailAddress,
      newCompany,
      newCity,
      newProvinceText,
      newPostalCode,
      newCountryText
    ];
    const nameParts = [
      newLastName,
      newFirstName
    ]
    const fullAddress = addressParts.filter(Boolean).join(' ');
    const fullNameAddress = nameParts.filter(Boolean).join(' ');

    if (addressID) {
      const $targetCard = $(`.address-card[data-address-id="${addressID}"]`);

      if (newDetailAddress) {
        $targetCard.data('detail-address', newDetailAddress);
      } else {
        newDetailAddress = '';
      }
      if (newCompany) {
        $targetCard.data('company-address', newCompany);
      } else {
        newCompany = '';
      }

      $targetCard.data('first-name', newFirstName);
      $targetCard.data('last-name', newLastName);
      $targetCard.data('country', newCountryID);
      $targetCard.data('province', newProvinceId);
      $targetCard.data('address', newAddress);
      $targetCard.data('city', newCity);
      $targetCard.data('postal-code', newPostalCode);
      $targetCard.data('phone-number', newPhoneNum);

      $targetCard.find('.address-card__owner-name').text(fullNameAddress);
      $targetCard.find('.address-card__phone-number').text(newPhoneNum);
      $targetCard.find('.address-card__address').text(fullAddress);
    }
    else {
      const newId = 'attr-' + Date.now();
      let newCompanyHTML = '';
      let newDetailAddressHTML = '';
      if (newCompany && newCompany.length > 1) {
        newCompanyHTML = `data-company-address="${newCompany}"`;
      }
      if (newDetailAddress && newDetailAddress.length > 1) {
        newDetailAddressHTML = `data-detail-address="${newDetailAddress}"`;
      }
      const newAddressHTML = `
                      <li class="address-card js-active"
                data-address-id="${newId}"
                data-first-name="${newFirstName}"
                data-last-name="${newLastName}"
                data-phone-number="${newPhoneNum}"
                data-address="${newAddress}"
                data-country="${newCountryID}"
                ${newCompanyHTML}
                ${newDetailAddressHTML}
                data-postal-code="${newPostalCode}"
                data-city="${newCity}"
                data-province="${newProvinceId}">
                    <span class="address-card__owner-name godamS16W3"><mark class="address-card__badge pinkS14Bedge mb-10">Default</mark>${fullNameAddress}</span>
                    <div>
                        <div class="address-card__customer-section roboS14W2">
                            <p class="address-card__phone-number mb-10">${newPhoneNum}</p>
                            <p class="address-card__address">${fullAddress}</p>
                            <button type="button" class="address-card__set-default-button btn btn-maintext">Set as default address</button>
                        </div>
                        <div class="address-card__actions">
                            <button type="button" data-popName="removeAddress" class="btn btn-grayline">Remove</button>
                            <button type="button" class="edit-button btn btn-mainline">Edit</button>
                        </div>
                    </div>
                </li>
      `;
      $('.addresses-page__list').append(newAddressHTML);
      updateAddressCount();
    }
  })

  $('.saveAlertButton').click(function () {
    $('#addressEditContainer').hide();
    $('#addressListContainer').show();
  });

}

function addressLeavePopup() {
  $('.addressLeaveBtn').click(function () {
    removeActiveClass("#cancelPopup");
    $('#addressEditContainer').hide();
    $('#addressListContainer').show();
    $('#editAddressForm')[0].reset();
  });
}

function updateAddressCount() {
  const addressLength = $(".address-card").length;
  $('#addressCount').text(addressLength);
}
// address list count 

function accountChangeCheck() {
  const $firstNameInput = $('#userFirstname');
  const $lastNameInput = $('#userLastname');

  function loadUserInfo() {
    const userFirstname = localStorage.getItem('userFirstname');
    const userLastname = localStorage.getItem('userLastname');
    if (userFirstname && userLastname) {
      $firstNameInput.val(userFirstname);
      $lastNameInput.val(userLastname);
    }
  }
  loadUserInfo();

  $('#accountSaveForm').on("submit", function (e) {
    e.preventDefault();

    const newFirstName = $firstNameInput.val();
    const newLastName = $lastNameInput.val();
    localStorage.setItem('userFirstname', newFirstName);
    localStorage.setItem('userLastname', newLastName)

    activeClass('#savechangePopup');
  });

  $('.address-cancel-button').on('click', function () {
    loadUserInfo();
  });
}
// account change

function promoCodeCopy() {
  $('.promo-code-showcase__button').click(function () {
    const $button = $(this);
    const textCopy = $button.find('.promo-code-showcase__code').text();
    const tempTextarea = $('<textarea>');
    $('.promotion-page').append(tempTextarea);
    tempTextarea.val(textCopy).select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? '성공' : '실패';
      if (successful) {
        activeClass('#textCopySuccessPopup');
      }
    } catch (err) {
      alert('이 브라우저에서는 복사 기능을 지원하지 않습니다.');
    }
    tempTextarea.remove();
  });
}

/**
 * 입력 필터링을 위한 범용 함수
 * @param {string} target - jquery 셀렉터
 * @param {RegExp} regex - 제거할 문자를 찾는 정규식
 */
function restrictInput(target, regex) {
  $(target).on("input", function () {
    const griginaValue = $(this).val();
    const filteredValue = griginaValue.replace(regex, "");
    $(this).val(filteredValue);
  });
}


function inputText() {
  restrictInput("#userCardNumber", /\D/g);
  restrictInput("#userCardcode", /\D/g);
  restrictInput("#userCode", /\D/g);
  //숫자만 허용 

  restrictInput("#userCardName", /[^a-zA-Z0-9]/g);
  restrictInput("#userCity", /[^a-zA-Z0-9]/g);
  //영문, 숫자만 허용

  restrictInput("#userAddress", /[^a-zA-Z0-9 ]/g);
  //영문/숫자/공백만 허용
}


const emailCheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const numbEngCheck = /^[a-zA-Z0-9]*$/;
const firstNameCheck = /^[A-Za-z]+(?:['\-][A-Za-z]+)*$/; // 대소문자,하이픈, 아포스트로피 허용
const lastNameCheck = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;  // 대소문자, 공백, 하이픈, 아포스트로피 허용
const phoneCheck = /^\(\d{3}\)\d{3}-\d{4}$/;
const sumCheck = /^\d+$/;
const cardDateCheck = /^(0[1-9]|1[0-2])\/\d{2}$/;
// 정규식

const signupRules = [
  {
    selector: '#userFirstname',
    errorSelector: "label[for='userFirstname']+mark",
    validate: (val) => val.length >= 2 && firstNameCheck.test(val),
  }, {
    selector: '#userLastname',
    errorSelector: "label[for='userLastname']+mark",
    validate: (val) => val.length >= 2 && lastNameCheck.test(val),
  }, {
    selector: '#userEmail',
    errorSelector: "label[for='userEmail']+mark",
    validate: (val) => emailCheck.test(val),
  }, {
    selector: '#userPassword',
    errorSelector: "#pwVisible+mark",
    validate: (val) => val.length >= 5 && numbEngCheck.test(val),
  },
];

const signinRulse = [
  {
    selector: '#userEmail',
    errorSelector: "label[for='userEmail']+mark",
    validate: (val) => emailCheck.test(val),
  }, {
    selector: '#userPassword',
    errorSelector: "#pwVisible+mark",
    validate: (val) => val.length >= 5 && numbEngCheck.test(val),
  },
]

const addressRules = [
  {
    selector: '#userNewFirstname',
    errorSelector: "label[for='userNewFirstname']+mark",
    validate: (val) => val.length >= 2 && firstNameCheck.test(val),
  }, {
    selector: '#userNewLastname',
    errorSelector: "label[for='userNewLastname']+mark",
    validate: (val) => val.length >= 2 && lastNameCheck.test(val),
  }, {
    selector: '#userAddress',
    errorSelector: "label[for='userAddress']+mark",
    validate: (val) => val.trim() !== "" && val.length >= 2,
  }, {
    selector: '#userCity',
    errorSelector: "label[for='userCity']+mark",
    validate: (val) => val.trim() !== "" && val.length >= 2,
  }, {
    selector: '#userCode',
    errorSelector: "label[for='userCode']+mark",
    validate: (val) => val.trim() !== "" && val.length >= 2,
  }, {
    selector: '#userPhone',
    errorSelector: "button[data-popName='phoneHelp']+mark",
    validate: (val) => val.trim() !== "" && val.length >= 2 && phoneCheck.test(val),
  },
];

const addressEditRules = [
  {
    selector: '#userFirstname',
    errorSelector: "label[for='userFirstname']+mark",
    validate: (val) => val.length >= 2 && firstNameCheck.test(val),
  }, {
    selector: '#userLastname',
    errorSelector: "label[for='userLastname']+mark",
    validate: (val) => val.length >= 2 && lastNameCheck.test(val),
  }, {
    selector: '#userAddress',
    errorSelector: "label[for='userAddress']+mark",
    validate: (val) => val.trim() !== "" && val.length >= 2,
  }, {
    selector: '#userCity',
    errorSelector: "label[for='userCity']+mark",
    validate: (val) => val.trim() !== "" && val.length >= 2,
  }, {
    selector: '#userCode',
    errorSelector: "label[for='userCode']+mark",
    validate: (val) => val.trim() !== "" && val.length >= 2,
  }, {
    selector: '#userPhone',
    errorSelector: "button[data-popName='phoneHelp']+mark",
    validate: (val) => val.trim() !== "" && val.length >= 2 && phoneCheck.test(val),
  },
]

const emailRules = [
  {
    selector: '#userEmail',
    errorSelector: "label[for='userEmail']+mark",
    validate: (val) => emailCheck.test(val),
  },
]

const newsEmailRuled = [
  {
    selector: '#inputEmail',
    errorSelector: '#emailInvalidPopup',
    validate: (val) => emailCheck.test(val),
  },
]

const summaryRuled = [
  {
    selector: '#sumText',
    errorSelector: '.cart-order-summary__invalid-code-popup',
    validate: (val) => val.trim() !== "" && val.length >= 2 && sumCheck.test(val),
  }
]

const cardRuled = [
  {
    selector: "#userCardNumber",
    errorSelector: "label[for='userCardNumber']+mark",
    validate: (val) => val.trim() !== "" && val.length >= 16,
  }, {
    selector: "#userCardName",
    errorSelector: "label[for='userCardName']+mark",
    validate: (val) => val.trim() !== "" && val.length >= 2,
  }, {
    selector: "#userCardDate",
    errorSelector: "label[for='userCardDate']+mark",
    validate: (val) => val.trim() !== "" && val.length >= 5 && cardDateCheck.test(val),
  }, {
    selector: "#userCardcode",
    errorSelector: "label[for='userCardcode']+mark",
    validate: (val) => val.trim() !== "" && val.length >= 3,
  },
]

const pwCheckRuled = [
  {
    selector: "#userPassword",
    errorSelector: "label[for='userPassword']+mark",
    validate: (val) => val.trim() !== "" && val.length >= 5 && numbEngCheck.test(val),
  },
]


/**
 * 아래 정의된 규칙에 따라 폼 유효성을 검사하는 범용 함수
 * @param {Array} rules - 검사 규칙 객체의 배열
 * @returns {boolean} - 폼이 유효하면 true, 아니면 false 
 */
function validateForm(rules) {
  let isFormValid = true;

  rules.forEach(rule => removeActiveClass(rule.errorSelector));
  rules.forEach(rule => {
    const $field = $(rule.selector);
    const value = $field.val().trim();

    if (!rule.validate(value)) {
      activeClass(rule.errorSelector);
      isFormValid = false;
    }
  });
  return isFormValid;
}

function addStorageVal() {
  if ($('.account-layout').length > 0) {
    const savedEmail = localStorage.getItem('userEmail');
    const savedFirstName = localStorage.getItem('userFirstname');
    const savedLastName = localStorage.getItem('userLastname');

    if (savedEmail) {
      $('#userEmail').val(savedEmail);
      $('.userEmailText').text(savedEmail);
    }
    if (savedFirstName) {
      $('#userFirstname').val(savedFirstName);
    }
    if (savedLastName) {
      $('#userLastname').val(savedLastName);
    }
  }
}

function signinValCheck() {
  $('.sign-in-form__submit-button').on('click', function (e) {
    e.preventDefault();
    const isFormValid = validateForm(signinRulse);
    const inputEmail = $('#userEmail').val();
    const savedEmail = localStorage.getItem('userEmail');
    if (!isFormValid) {
      return;
    }
    if (!savedEmail || inputEmail !== savedEmail) {
      activeClass('.email-not-found-message');
      return;
    }
    localStorage.setItem('isLoggedIn', 'true');
    $('#signInForm').submit();
  });

  $('.sign-in-form__guest-button').on('click', function (e) {
    e.preventDefault();
    const guestEmail = 'guest@test.com';
    const guestFirstName = 'Guest';
    const guestLastName = 'User';
    localStorage.setItem('userEmail', guestEmail);
    localStorage.setItem('userFirstname', guestFirstName);
    localStorage.setItem('userLastname', guestLastName);
    localStorage.setItem('isLoggedIn', 'true');
    $('#signInForm').submit();
  });
}

function signupValCheck() {
  $(".sign-up-form__submit-button").on("click", function () {
    const isFormValid = validateForm(signupRules);
    if (isFormValid) {
      activeClass('#signupPopup');
    }
  });

  $('.sign-up-button').on('click', function () {
    const userFirstname = $('#userFirstname').val();
    const userLastName = $('#userLastname').val();
    const userEmail = $('#userEmail').val();
    $('#signUpForm').submit();
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userFirstname', userFirstname);
    localStorage.setItem('userLastname', userLastName);
  });
}

function cartInfoSubmit(target) {
  $(target).on("submit", function (e) {
    const combinedRules = [...emailRules, ...addressRules]
    const isFormValid = validateForm(combinedRules);

    if (!isFormValid) {
      e.preventDefault();
    }
  });
}
// email + address rules가 있는 경우 사용 

function cartInfoCheck() {
  cartInfoSubmit(".information-form");
}

function orderBlank() {
  $(".checkout-form__form").on("submit", function (e) {
    const $this = $(this);
    e.preventDefault();

    let cardValid = true;
    let billingAddressValid = true;

    if ($("#creditCard").prop("checked")) {
      cardValid = validateForm(cardRuled);
      if ($("#differentAddress").prop("checked")) {
        billingAddressValid = validateForm(addressRules);
      }
    }
    //유효성 검사

    if ($("#afterCard").prop("checked")) {
      $this.attr(
        "action",
        "https://portal.afterpay.com/v2/checkout/en-US/us?token=002.12fs9oo1dbp52037j8u6lllsnitdha0fkduqb2eqa5o5j6m5"
      );
      $this.attr("target", "_blank");
      this.submit();
    }
    else if ($("#paypalCard").prop("checked")) {
      $this.attr(
        "action",
        "https://paypal.com/checkoutnow?atomic-event-state=eyJkb21haW4iOiJzZGtfcGF5cGFsX3Y1IiwiZXZlbnRzIjpbXSwiaW50ZW50IjoiY2xpY2tfcGF5bWVudF9idXR0b24iLCJpbnRlbnRUeXBlIjoiY2xpY2siLCJpbnRlcmFjdGlvblN0YXJ0VGltZSI6MTMxNS4wOTk5OTk5OTk2Mjc1LCJ0aW1lU3RhbXAiOjEzMTUsInRpbWVPcmlnaW4iOjE3Mzk5NDIwNTE1NDIuOSwidGFzayI6InNlbGVjdF9vbmVfdGltZV9jaGVja291dCIsImZsb3ciOiJvbmUtdGltZS1jaGVja291dCIsInVpU3RhdGUiOiJ3YWl0aW5nIiwicGF0aCI6Ii9zbWFydC9idXR0b25zIiwidmlld05hbWUiOiJwYXlwYWwtc2RrIn0%3D&sessionID=uid_f7ac2dc039_mdu6mtm6nta&buttonSessionID=uid_b78c1f60b8_mdu6mtq6mti&stickinessID=uid_7dadce0997_mdu6mtm6nte&smokeHash=&sign_out_user=false&fundingSource=paypal&buyerCountry=KR&locale.x=en_US&commit=false&client-metadata-id=uid_f7ac2dc039_mdu6mtm6nta&standaloneFundingSource=paypal&branded=true&token=EC-30M71121677904058&clientID=AfUEYT7nO4BwZQERn9Vym5TbHAG08ptiKa9gm8OARBYgoqiAJIjllRjeIMI4g294KAH1JdTnkzubt1fr&env=production&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jb21taXQ9ZmFsc2UmY3VycmVuY3k9VVNEJmNvbXBvbmVudHM9YnV0dG9ucyZjbGllbnQtaWQ9QWZVRVlUN25PNEJ3WlFFUm45VnltNVRiSEFHMDhwdGlLYTlnbThPQVJCWWdvcWlBSklqbGxSamVJTUk0ZzI5NEtBSDFKZFRua3p1YnQxZnImbWVyY2hhbnQtaWQ9OUdRVUI2VDRGTTk0NCZsb2NhbGU9ZW5fVVMiLCJhdHRycyI6eyJkYXRhLXVpZCI6InVpZF9idWVkbHNpdWl6ZGJkd29peXh2c2FtcXRwb2N0amsifX0&country.x=US&xcomponent=1&version=5.0.470"
      );
      $this.attr("target", "_blank");
      this.submit();
    }
    else if ($("#creditCard").prop("checked") && cardValid && billingAddressValid) {
      $this.attr("action", "orderComplete.html");
      $this.attr("target", "_self");
      this.submit();
    }
  });
}
// order blank

function phoneHyphen() {
  $("#userPhone").on("input", function () {
    var inputVal = $(this).val().replace(/\D/g, "");

    let hyphenVal = "";
    if (inputVal.length > 6) {
      hyphenVal = `(${inputVal.substring(0, 3)})${inputVal.substring(3, 6)}-${inputVal.substring(6)}`;
    } else if (inputVal.length > 3) {
      hyphenVal = `(${inputVal.substring(0, 3)})${inputVal.substring(3)}`;
    } else if (inputVal.length > 0) {
      hyphenVal = `(${inputVal}`;
    }

    $(this).val(hyphenVal);
  });
}

function cardSlash() {
  $("#userCardDate").on("input", function () {
    var inputVal = $(this).val().replace(/\D/g, "");

    if (inputVal.length > 4) {
      inputVal = inputVal.substring(0, 4);
    }

    var formattedVal = "";
    if (inputVal.length > 2) {
      formattedVal = `${inputVal.substring(0, 2)}/${inputVal.substring(2)}`;
    } else {
      formattedVal = inputVal;
    }

    $(this).val(formattedVal);
  });
}

function validateEmailForm() {
  $(".newsletter-form__form").on("submit", function (e) {
    e.preventDefault();

    const isFormValid = validateForm(newsEmailRuled);
    if (isFormValid) {
      setTimeout(function () {
        activeClass(".emailAlert");
        removeActiveClass("#emailInvalidPopup");
      }, 300)
    }
  });
}
//  footer - email send 알림 


function summaryDiscount() {
  $(".cart-order-summary__discount-form").on('submit', function (e) {
    e.preventDefault();

    const isFormValid = validateForm(summaryRuled);
    if (isFormValid) {
      $("#discountApply").text("Apply Free Shipping Code");
      $("#sumText").val("");
    }
  });
}
// cart summary


function passwordType() {
  $("#pwVisible").click(function () {
    const $passwordInput = $('#userPassword');
    const currentType = $passwordInput.attr("type");

    $(this).toggleClass("js-active");

    if (currentType === "password") {
      $("#userPassword").attr("type", "text");
    } else {
      $("#userPassword").attr("type", "password");
    }
  });
}


function forgotEmailCheck() {
  $("#forgotPwForm").on("submit", function (e) {
    e.preventDefault();
    const isFormValid = validateForm(emailRules);
    const inputEmail = $('#userEmail').val();
    const userEmail = localStorage.getItem('userEmail');
    if (!isFormValid || inputEmail !== userEmail) {
      activeClass("#forgotPwForm .form-group__error-message");
    } else {
      this.submit();
    }
  });
}
// sign 


function passwordCheck() {
  $("button[data-popName='deleteComplete']").click(function () {
    const isFormValid = validateForm(pwCheckRuled);
    if (isFormValid) {
      removeActiveClass("#deleteAlertPopup");
      activeClass("#deleteCompletePopup");
    }
  });
}
// account delete







function asideHover() {
  const navList = $('.category-nav__list');
  let originalActive = null;

  navList.on('mouseenter', ".category-nav__item", function () {
    const sublist = $(this).find('.category-nav__sublist');

    originalActive = navList.find('.category-nav__link.active');
    $('.category-nav__link').removeClass("active");

    if (sublist.length > 0) {
      const realHeight = sublist[0].scrollHeight;
      sublist.css('height', realHeight + 'px');
    }
  })

  navList.on('mouseleave', ".category-nav__item", function () {
    const sublist = $(this).find('.category-nav__sublist');

    navList.find('category-nav__link').removeClass('active');
    originalActive.addClass("active");

    if (sublist.length > 0) {
      sublist.css('height', '0px');
    }
  })
}
// web에서만 작동
// aside hover


function mnavControl() {
  $(document).on('click', '#mnav', function () {
    $(this).toggleClass("js-active");
    $('.main-nav').toggleClass("js-active");
  })
}


function mnavList() {
  $('.main-nav__primary-list').on('click', 'button.main-nav__link', function () {
    const $navList = $(this).closest("li");
    $navList.toggleClass("active");
    $navList.siblings().toggleClass("noneClass");
  });
}


function asideScroll() {
  let lastScrollY = 0;
  let ticking = false;

  const $sideBars = $(".product-listing-layout__sidebar, .account-layout__sidebar")

  $(window).on("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        const scrollPosition = $(window).scrollTop();

        if (Math.abs(scrollPosition - lastScrollY) > 5) {
          const isScrollDown = scrollPosition < lastScrollY;
          $sideBars.toggleClass("hidden", isScrollDown);
        }

        lastScrollY = scrollPosition;
        ticking = false;
      });

      ticking = true;
    }
  });
}

function imgListClick() {
  $(document).off('click.imgLink', '.instagram-feed__item, .product-card, .hero-slider__slide');

  $(document).on('click.imgLink', '.instagram-feed__item, .product-card, .hero-slider__slide', function (event) {
    if ($(event.target).closest('button').length) {
      return;
    }

    const link = $(this).find('a').first().attr('href');
    if (link) {
      if ($(this).hasClass('instagram-feed__item')) {
        window.open(link, '_blank');
      } else {
        window.location.href = link;
      }
    }
  })
}

function imgListHover() {
  const $imgs = $(".productList li figure img");
  $imgs.off("mouseenter mouseleave");

  $imgs.hover(
    function () {
      const $this = $(this);
      $this.attr("src", $this.attr("src").replace(".png", "_hover.png"));
    },
    function () {
      const $this = $(this);
      $this.attr("src", $this.attr("src").replace("_hover.png", ".png"));
    }
  );
}
