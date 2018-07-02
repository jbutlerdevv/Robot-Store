//IMG mouse events
$().ready(() => {
    $("#imgrobo1")
    .mouseover(() => {
        $("#imgrobo1").addClass("backgroundIMG");
      })
      .mouseleave(() => {
        $("#imgrobo1").removeClass("backgroundIMG");
      });
  });
$().ready(() => {
    $("#imgrobo2")
    .mouseover(() => {
        $("#imgrobo2").addClass("backgroundIMG");
      })
      .mouseleave(() => {
        $("#imgrobo2").removeClass("backgroundIMG");
      });
  });
$().ready(() => {
    $("#imgrobo3")
    .mouseover(() => {
        $("#imgrobo3").addClass("backgroundIMG");
      })
      .mouseleave(() => {
        $("#imgrobo3").removeClass("backgroundIMG");
      });
  });
//END img mouse events
//***************************
//***************************
//Filter robots in search bar
$('#searchInput').keyup(function(){
    var valThis = $(this).val().toLowerCase();
     if(valThis == ""){
         $('.roboList > li').show();           
     } else {
         $('.roboList > li').each(function(){
             var text = $(this).text().toLowerCase();
             (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
         });
    };
 });
