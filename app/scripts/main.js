require(["domReady", "jquery", "bootstrap", "datastructures/vector", "datastructures/bitArray"], function (domReady, $, Bootstrap, Vector, BitArray) {
  'use strict';

  var moduleInstances = {
    "vector": new Vector(),
    "bitArray": new BitArray(8)
  };

  function resetCenterPanel() {

    document.getElementById("header-details").style.display = "block";
    document.getElementById("title").innerHTML = "Not Examined Yet...";
    document.getElementById("description").innerHTML = "";
    document.getElementById("codez-holder").style.display = "none";
    document.getElementById("codez").innerHTML = "";
    document.getElementById("js-codez").href = "#";
    document.getElementById("contextual-description").innerHTML = "";

    return;
  };

  function loadCenterPanel(instance) {

    if (instance) {

      // hide app header
      document.getElementById("header-details").style.display = "none";

      // show title
      document.getElementById("title").innerHTML = instance.meta.title;

      // show wiki definition
      document.getElementById("description").innerHTML = "<strong>Per Wiki:</strong> " + instance.meta.wiki;

      // show definition in context of javascript
      document.getElementById("contextual-description").innerHTML = "<strong>Javascript Context:</strong> " + instance.meta.description;

      // show example code
      document.getElementById("codez-holder").style.display = "block";

      document.getElementById("js-codez").href = instance.meta.jsCodez;

      document.getElementById("codez").href = instance.meta.codez;

      $('[data-toggle="tabajax"]').eq(0).trigger( "click" );

    } else {

      resetCenterPanel();

    }

    window.scrollTo(0, 0);

    return;
  };

  function togglePanel(panelEl, e) {

    console.log(el);

    var el = e.currentTarget;
    var icon = el.querySelector("i");

    if (icon.classList.contains("glyphicon-chevron-right")) {

      icon.classList.remove("glyphicon-chevron-right");
      icon.classList.add("glyphicon-chevron-left");
      panelEl.querySelector(".list-container").style.display = "block";
      panelEl.parentNode.className = "col-lg-3";

    } else {

      icon.classList.remove("glyphicon-chevron-left");
      icon.classList.add("glyphicon-chevron-right");
      panelEl.querySelector(".list-container").style.display = "none";
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

    // ajax tab
    $('[data-toggle="tabajax"]').on("click",function(e) {

      e.preventDefault();

      var $this = $(this);
      var loadurl = $this.attr('href');
      var targ = $this.attr('data-target');

      $.get(loadurl, function(data) {
        $(targ).html(data);
      });

      $this.tab('show');
      return false;
    });

    return;
  };

  function addArrayPolyfills() {

    // add polyfills( mdn )
    if (!Array.prototype.fill) {

      Array.prototype.fill = function (value) {

        // Steps 1-2.
        if (this == null) {
          throw new TypeError('this is null or not defined');
        }

        var O = Object(this);

        // Steps 3-5.
        var len = O.length >>> 0;

        // Steps 6-7.
        var start = arguments[1];
        var relativeStart = start >> 0;

        // Step 8.
        var k = relativeStart < 0 ?
          Math.max(len + relativeStart, 0) :
          Math.min(relativeStart, len);

        // Steps 9-10.
        var end = arguments[2];
        var relativeEnd = end === undefined ?
          len : end >> 0;

        // Step 11.
        var final = relativeEnd < 0 ?
          Math.max(len + relativeEnd, 0) :
          Math.min(relativeEnd, len);

        // Step 12.
        while (k < final) {
          O[k] = value;
          k++;
        }

        // Step 13.
        return O;
      };
    }

    return;
  }

  domReady(function () {

    attachApplicationHandlers();

    addArrayPolyfills();

  });

});
