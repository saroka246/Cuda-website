var btnContainer = document.getElementById("btnList");

var btns = btnContainer.getElementsByClassName("portfolio-nav-item");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("enable");
    current[0].className = current[0].className.replace(" enable", "");
    this.className += " enable";
  });
}
$(document).ready(function () {
        $(".second_div").hide();
        $(".third_div").hide();
        $(".fourth_div").hide();
            $(".btn1").click(function () {
                $(".second_div").hide();
                $(".third_div").hide();
                $(".fourth_div").hide();
                $(".first_div").show()
            });
          $(".btn2").click(function () {
                $(".first_div").hide();
                $(".third_div").hide();
                $(".fourth_div").hide();
                $(".second_div").show()
        });
    $(".btn3").click(function () {
                $(".first_div").hide();
                $(".second_div").hide();
                $(".fourth_div").hide();
                $(".third_div").show()
        });
    $(".btn4").click(function () {
                $(".first_div").hide();
                $(".third_div").hide();
                $(".second_div").hide();
                $(".fourth_div").show()
        });
     });