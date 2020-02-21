$(function() {
  $(document).ready(function() {
    $(".prof-logo").click(function() {
      $(".sidebar").toggleClass("hidden-bar");
    });

    $("#range").on("input", function() {
      $("#vall").text(this.value);
    });

    $("#range1").on("input", function() {
      $("#vall1").text(this.value);
    });

    if ($(".rank").attr("name") == "user") {
      $(".nav").click(function(e) {
        if ($(this).attr("href") == "/lk/qr") {
          var popup_id = "#popup2";
          e.preventDefault();

          $(popup_id).show();
          $(".overlay_popup").show();
        } else {
        }
      });
      $(".overlay_popup").click(function() {
        $(".overlay_popup, .popap").hide();
      });
      $(".close").click(function() {
        $(".overlay_popup, .popap").hide();
      });

      $(".news-box").click(function() {
        w = $(this).attr("rel");
        i = $(this)
          .find(".new-img img")
          .attr("src");
        d = $(this)
          .find(".news-content span")
          .text();
        t = $(this)
          .find(".news-content h3")
          .text();
        p = $(this)
          .find(".des")
          .text();

        $(w)
          .find("h4")
          .text(t);
        $(w)
          .find("span")
          .text(d);
        $(w)
          .find(".img-cover")
          .attr("src", i);
        $(w)
          .find("p")
          .text(p);
        $(w).show();
        $(".overlay_popup").show();
      });

      $(".wrapimgnews").click(function() {
        w = $(this).attr("rel");
        i = $(this)
          .find(".linkim")
          .attr("src");
        d = $(this)
          .find(".datenews")
          .text();
        t = $(this)
          .find(".titlenews g")
          .text();
        p = $(this)
          .find(".newsdesc")
          .text();

        $(w)
          .find("h4")
          .text(t);
        $(w)
          .find("span")
          .text(d);
        $(w)
          .find(".img-cover")
          .attr("src", i);
        $(w)
          .find("p")
          .text(p);
        $(w).show();
        $(".overlay_popup").show();
      });
    }

    $("ul.tabboxhis").on("click", ".tabhis:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
    var fActive = "";

    function filterColor(color) {
      if (fActive != color) {
        $(".desc")
          .filter("." + color)
          .slideDown();
        $(".desc")
          .filter(":not(." + color + ")")
          .slideUp();
        fActive = color;
      }
    }

    $(".tranu").click(function() {
      filterColor("transt");
    });
    $(".deposu").click(function() {
      filterColor("depost");
    });
    $(".withu").click(function() {
      filterColor("witht");
    });
    $(".creatu").click(function() {
      filterColor("creatt");
    });

    $(".allu").click(function() {
      $(".desc").slideDown();
      fActive = "all";
    });
  });

  var canvas = document.getElementById("myChart");
  var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.4,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#703c16",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#703c16",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 3,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 3,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [65, 59, -40, -10, 56, 55, 40]
      }
    ]
  };

  var option = {
    showLines: true,
    padding: 50,
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  };
  var myLineChart = Chart.Line(canvas, {
    data: data,
    options: option
  });
});
