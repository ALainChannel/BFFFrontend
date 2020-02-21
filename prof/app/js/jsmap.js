if (window.location.href.indexOf("subregional") > -1) {
  jQuery(document).ready(function($) {
    let tagreg = $(".maps-region").attr("name");
    let setReg = $(".maps-region").attr("name");
    $(".maps-region").vectorMap({
      map: "ru_fd_mill",
      backgroundColor: "none",
      showTooltip: false,
      selectedRegions: [setReg],
      regionsSelectableOne: true,
      regionStyle: {
        selected: {
          fill: "#e25050"
        }
      },
      series: {
        regions: [
          {
            values: gdpData,
            scale: ["#f8d496", "#7d4516"],
            normalizeFunction: "polynomial"
          }
        ]
      },
      onRegionTipShow: function(e, label, code) {
        e.preventDefault();
      },

      onRegionSelected: function(event, code, isSelected, selectedRegions) {
        let map = $(".maps-region").vectorMap("get", "mapObject");
        if ($(".maps-region").attr("name") == code) {
          $(".maps-region").attr("name", "");
        } else {
          $(".maps-region").attr("name", code);
        }
        // code = code.toLowerCase();
        // window.location.href = "#" + code;
      },
      onRegionClick: function(e, code) {
        // map.setSelectedRegions(code);
        //map.setSelectedRegions(code);
        //map.clearSelectedRegions();
        if (code == "somethingYouWantToDisable") {
          e.preventDefault();
        }
      }
    });
  });
} else if (window.location.href.indexOf("regional") > -1) {
  jQuery(document).ready(function($) {
    let tagreg = $(".maps-region").attr("name");
    $(".maps-region").vectorMap({
      map: "ru_fd_mill",
      backgroundColor: "none",
      showTooltip: false,
      regionsSelectable: true,
      regionsSelectableOne: true,
      regionStyle: {
        selected: {
          fill: "#e25050"
        }
      },
      series: {
        regions: [
          {
            values: gdpData,
            scale: ["#f8d496", "#7d4516"],
            normalizeFunction: "polynomial"
          }
        ]
      },
      onRegionTipShow: function(e, label, code) {
        e.preventDefault();
      },

      onRegionSelected: function(event, code, isSelected, selectedRegions) {
        let map = $(".maps-region").vectorMap("get", "mapObject");
        if ($(".maps-region").attr("name") == code) {
          $(".maps-region").attr("name", "");
          clearSelectedRegions();
        } else {
          $(".maps-region").attr("name", code);
        }
        // code = code.toLowerCase();
        // window.location.href = "#" + code;
      },
      onRegionClick: function(e, code) {
        // map.setSelectedRegions(code);
        //map.setSelectedRegions(code);
        //map.clearSelectedRegions();
        if (code == "somethingYouWantToDisable") {
          e.preventDefault();
        }
      }
    });
  });
}
