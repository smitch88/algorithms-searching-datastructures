require(["domReady", "datastructures/bitArray", "datastructures/dynamicArray"], function (domReady, BitArray, DynamicArray) {
  'use strict';

  var moduleInstances = {
    "bitArray": new BitArray(),
    "dynamicArray": new DynamicArray()
  };

  function resetCenterPanel() {

    document.getElementById("header-details").style.display = "block";
    document.getElementById("title").innerHTML = "Not Completed";
    document.getElementById("description").innerHTML = "Still working on it";
    document.getElementById("codez").innerHTML = "";

    return;
  };

  function loadCenterPanel(module) {

    if (module) {

      // hide app header
      document.getElementById("header-details").style.display = "none";

      // show title
      document.getElementById("title").innerHTML = module.getTitle();

      // show wiki definition
      document.getElementById("description").innerHTML = "Per Wiki: " + module.getDescription();

      // show codez
      document.getElementById("codez").innerHTML = module.getCodez();

    } else {

      resetCenterPanel();

    }

    window.scrollTo( 0, 0 );

    return;
  };

  function togglePanel(panelEl, e) {

    var el = e.currentTarget;
    var icon = el.querySelector("i");

    if (icon.classList.contains("glyphicon-chevron-right")) {

      icon.classList.remove("glyphicon-chevron-right");
      icon.classList.add("glyphicon-chevron-left");
      panelEl.querySelector( ".list-container").style.display = "block";
      panelEl.parentNode.className = "col-lg-3";

    } else {

      icon.classList.remove("glyphicon-chevron-left");
      icon.classList.add("glyphicon-chevron-right");
      panelEl.querySelector( ".list-container").style.display = "none";
      panelEl.parentNode.className = "col-lg-1";

    }

    return;
  };


  function getInstance(type) {
    return moduleInstances[type];
  };

  function showContent(e) {

    e.preventDefault();

    loadCenterPanel(getInstance(e.target.hash.replace("#", "")));

    return;
  };

  function attachApplicationHandlers() {

    var leftPanelEl = document.getElementById("left-panel");
    var moduleLinks = leftPanelEl.getElementsByTagName("a");

    Array.prototype.forEach.call(moduleLinks, function (el) {

      el.addEventListener("click", showContent);

    });

    var leftPanelToggler = leftPanelEl.querySelector("#closer");

    leftPanelToggler.addEventListener("click", togglePanel.bind(this, leftPanelEl));

    return;
  };

  domReady(function () {

    attachApplicationHandlers();

  });

});
