/*
-----------------------------------------------------------------------------------------
SOUS MENU JQUERY
-----------------------------------------------------------------------------------------
Email: contact@impala-webstudio.fr

-----------------------------------------------------------------------------------------
*/
$(document).ready(function() {
  var toggle = function(direction, display) {
    return function() {
      var self = this;
      var ul = $("ul", this);
      if( ul.css("display") == display && !self["block" + direction] ) {
        self["block" + direction] = true;
        ul["slide" + direction]("slow", function() {
          self["block" + direction] = false;
        });
      }
    };
  }
  $("li.menu").hover(toggle("Down", "none"), toggle("Up", "block"));
  $("li.menu ul").hide();
  
$('li.menu').hover(function() {
$(this).addClass('selected');
}, 
function() {
$(this).removeClass('selected');
});
});

