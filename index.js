(function () {
  var experienceSection = document.querySelector("#experience");
  var showAllButton = document.querySelector("button[data-toggle='collapse']");
  var experienceList = document.querySelector(
    `#${showAllButton.dataset.target}`,
  );

  var lastItem = experienceList.querySelector("li:last-of-type");
  var lastShownItem = experienceList.querySelector("li:nth-of-type(2)");
  var firstHiddenItem = lastShownItem.nextElementSibling;

  var showAllContent = showAllButton.querySelector("span:first-of-type");
  var showLessContent = showAllContent.nextElementSibling;

  var expanded;
  var collapsed;

  var experienceListStyle = experienceList.style;
  var showLessContentStyle = showLessContent.style;
  var showAllContentStyle = showAllContent.style;

  initialize();
  collapse();

  function initialize() {
    expanded = experienceList.scrollHeight;
    collapsed = lastShownItem.offsetTop + lastShownItem.clientHeight;
  }

  function expand() {
    showAllButton.ariaExpanded = "true";
    experienceListStyle.height = `${expanded}px`;
    showAllContentStyle.display = "none";
    showLessContentStyle.display = null;
  }

  function collapse() {
    showAllButton.ariaExpanded = "false";
    experienceListStyle.height = `${collapsed}px`;
    showAllContentStyle.display = null;
    showLessContentStyle.display = "none";
  }

  function throttle(callback, delay) {
    var throttled = false;
    return function () {
      if (!throttled) {
        throttled = true;
        callback();
        setTimeout(function () {
          throttled = false;
        }, delay);
      }
    };
  }

  showAllButton.addEventListener("click", function () {
    if (this.ariaExpanded === "false") {
      expand();

      setTimeout(function () {
        firstHiddenItem.scrollIntoView();
      }, 300);
    } else {
      collapse();

      setTimeout(function () {
        experienceSection.scrollIntoView();
      }, 300);
    }
  });

  window.addEventListener(
    "resize",
    throttle(function () {
      initialize();

      if (showAllButton.ariaExpanded === "true") {
        experienceListStyle.height = `${lastItem.offsetTop + lastItem.clientHeight + 8}px`; // +8 for bottom padding
      } else {
        collapse();
      }
    }, 400),
  );
})();
