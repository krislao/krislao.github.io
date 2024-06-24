(function () {
  var experience = document.querySelector("#experience");
  var experienceList = experience.querySelector("ul");
  var lastShownItem = experienceList.querySelector("li:nth-of-type(2)");
  var firstHiddenItem = lastShownItem.nextElementSibling;

  var showAllButton = experience.querySelector("button");
  var showAllContent = showAllButton.querySelector("span:first-of-type");
  var showLessContent = showAllContent.nextElementSibling;

  var expanded = experienceList.offsetHeight;
  var collapsed = lastShownItem.offsetTop + lastShownItem.offsetHeight;

  var experienceListStyle = experienceList.style;
  var showLessContentStyle = showLessContent.style;
  var showAllContentStyle = showAllContent.style;

  // default values:
  // 1. list collapsed
  // 2. show last 2 recent entries
  // 3. show "Show All"
  experienceListStyle.height = `${collapsed}px`;
  showLessContentStyle.display = "none";

  showAllButton.addEventListener("click", function () {
    if (experienceList.dataset.expanded === undefined) {
      experienceList.dataset.expanded = "";
      experienceListStyle.height = `${expanded}px`;

      showAllContentStyle.display = "none";
      showLessContentStyle.display = null;

      setTimeout(function () {
        firstHiddenItem.scrollIntoView();
      }, 400);
    } else {
      delete experienceList.dataset.expanded;
      experienceListStyle.height = `${collapsed}px`;

      showAllContentStyle.display = null;
      showLessContentStyle.display = "none";

      setTimeout(function () {
        experience.scrollIntoView();
      }, 400);
    }
  });

  // TODO: recalibrate on resize
})();
