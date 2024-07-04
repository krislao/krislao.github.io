(function () {
  var navItems = Array.from(document.querySelector("nav ul").children);
  var navLinkHashes = navItems.map(function (item) {
    return item.firstElementChild.hash;
  });

  initialize();

  function initialize() {
    if (shouldRedirectToHome()) {
      this.window.location.hash = navLinkHashes[0];
    }
  }

  function shouldRedirectToHome() {
    return (
      !window.location.hash || !navLinkHashes.includes(window.location.hash)
    );
  }

  function updateNavLinks() {
    var activeItemClasses = ["border-b-2", "border-black"];
    var inactiveAnchorClass = "text-black/60";
    var activeAnchorClass = "text-black/90";

    navItems.forEach(function (item) {
      var { firstElementChild: anchorEl } = item;
      if (anchorEl.hash == window.location.hash) {
        item.classList.add(...activeItemClasses);
        anchorEl.classList.replace(inactiveAnchorClass, activeAnchorClass);
      } else {
        item.classList.remove(...activeItemClasses);
        anchorEl.classList.replace(activeAnchorClass, inactiveAnchorClass);
      }
    });
  }

  window.addEventListener("hashchange", function () {
    if (shouldRedirectToHome()) {
      this.window.location.hash = navLinkHashes[0];
      return;
    }
    updateNavLinks();
  });
})();
