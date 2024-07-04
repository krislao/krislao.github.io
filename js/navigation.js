(function () {
  var navItems = Array.from(document.querySelector("nav ul").children);
  var navLinkHashes = navItems.map(function (item) {
    return item.firstElementChild.hash;
  });

  initialize();

  function initialize() {
    if (shouldRedirectToHome()) {
      this.window.location.hash = navLinkHashes[0];
    } else {
      updateNavLinks();
    }
  }

  function shouldRedirectToHome() {
    return (
      !window.location.hash || !navLinkHashes.includes(window.location.hash)
    );
  }

  function updateNavLinks() {
    var inactiveAnchorClasses = ["text-black/60", "hover:text-black/80"];
    var activeAnchorClasses = ["text-black/90", "active"];

    navItems.forEach(function (itemEl) {
      var { firstElementChild: anchorEl } = itemEl;
      if (anchorEl.hash == window.location.hash) {
        anchorEl.classList.remove(...inactiveAnchorClasses);
        anchorEl.classList.add(...activeAnchorClasses);
      } else {
        anchorEl.classList.remove(...activeAnchorClasses);
        anchorEl.classList.add(...inactiveAnchorClasses);
      }
    });
  }

  window.addEventListener("hashchange", function () {
    initialize();
  });
})();
