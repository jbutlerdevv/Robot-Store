//HARDWARE MOUSE EVENTS
//.processor events
$().ready(() => {
    $(".processor1")
    .mouseover(() => {
        $(".processor1").addClass("wordColor");
      })
      .mouseleave(() => {
        $(".processor1").removeClass("wordColor");
      });
  });

  $().ready(() => {
    $(".processor2")
    .mouseover(() => {
        $(".processor2").addClass("wordColor");
      })
      .mouseleave(() => {
        $(".processor2").removeClass("wordColor");
      });
  });

  $().ready(() => {
    $(".processor3")
    .mouseover(() => {
        $(".processor3").addClass("wordColor");
      })
      .mouseleave(() => {
        $(".processor3").removeClass("wordColor");
      });
  });
  //END .processor events
//*****************************
//*****************************
//.ramSize events
  $().ready(() => {
    $(".ramSize8")
    .mouseover(() => {
        $(".ramSize8").addClass("wordColor");
      })
      .mouseleave(() => {
        $(".ramSize8").removeClass("wordColor");
      });
  });

  $().ready(() => {
    $(".ramSize16")
    .mouseover(() => {
        $(".ramSize16").addClass("wordColor");
      })
      .mouseleave(() => {
        $(".ramSize16").removeClass("wordColor");
      });
  });
//END .ramSize events
//***************************
//***************************
//.hardType events
  $().ready(() => {
    $(".type1")
    .mouseover(() => {
        $(".type1").addClass("wordColor");
      })
      .mouseleave(() => {
        $(".type1").removeClass("wordColor");
      });
  });

  $().ready(() => {
    $(".type2")
    .mouseover(() => {
        $(".type2").addClass("wordColor");
      })
      .mouseleave(() => {
        $(".type2").removeClass("wordColor");
      });
  });

  $().ready(() => {
    $(".type3")
    .mouseover(() => {
        $(".type3").addClass("wordColor");
      })
      .mouseleave(() => {
        $(".type3").removeClass("wordColor");
      });
  });
//END .hardType events
//***************************
//***************************




//Try this code to condense from above to this....
/*
$().ready(() => {
  $('.hovering').hover(
    () => $(event.currentTarget).css('background-color', 'yellow'),
    () => $(event.currentTarget).css('background-color', 'white')
  );
});*/