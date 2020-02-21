$(function() {
  $(document).ready(function() {
    $(window).bind("hashchange", function() {
      var hash = location.hash;
      if (hash == "#regconfirm") {
        $("section").addClass("disable");
        $(".success").removeClass("disable");
      }
      if (hash == "#policy") {
        $("section").addClass("disable");
        $(".privaci").removeClass("disable");
      }
      if (hash == "#returnpass_1") {
        $("section").addClass("disable");
        $(".autoriz")
          .removeClass("disable")
          .removeClass("sign")
          .removeClass("login")
          .removeClass("recovery")
          .addClass("recovery_1");
      }
      if (hash == "#twofa") {
        $("section").addClass("disable");
        $(".autoriz")
          .removeClass("disable")
          .removeClass("sign")
          .removeClass("login")
          .removeClass("recovery")
          .addClass("twofa");
      }
    });

    $("#bffonline").click(function() {
      $("section").addClass("disable");
      $("#login").prop("checked", true);
      $(".autoriz")
        .removeClass("disable")
        .removeClass("recovery_1")
        .removeClass("recovery")
        .removeClass("sign")
        .addClass("login");
    });
    $("#sign").click(function() {
      $(".autoriz")
        .removeClass("disable")
        .removeClass("recovery_1")
        .removeClass("login")
        .removeClass("recovery")
        .addClass("sign");
    });
    $("#login").click(function() {
      $(".autoriz")
        .removeClass("disable")
        .removeClass("recovery_1")
        .removeClass("sign")
        .removeClass("recovery")
        .addClass("login");
    });
    $("#recovery").click(function() {
      $(".autoriz")
        .removeClass("disable")
        .removeClass("recovery_1")
        .removeClass("sign")
        .removeClass("login")
        .addClass("recovery");
    });
    $("#back").click(function() {
      $(".autoriz")
        .removeClass("disable")
        .removeClass("sign")
        .removeClass("recovery_1")
        .removeClass("recovery")
        .addClass("login");
    });

    $(".nav-menu .nav-items").click(function() {
      $(".nav-menu .nav-items").removeClass("active");
      $("section").addClass("disable");
      $(this).addClass("active");
      w = $(this).attr("id");
      $("." + w).removeClass("disable");
    });
  });
});
