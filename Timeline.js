// TimeLine Section
$(function () {
  var inputs = $(".input");
  var paras = $(".description-flex-container").find("p");
  inputs.click(function () {
    var t = $(this),
      ind = t.index(),
      matchedPara = paras.eq(ind);

    t.add(matchedPara).addClass("active");
    inputs.not(t).add(paras.not(matchedPara)).removeClass("active");
  });
});

(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom >=0 &&
      rect.right >=0
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
