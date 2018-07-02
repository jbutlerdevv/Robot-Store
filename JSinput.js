//***************************
//highlight active inputs
$().ready(() => {
    $('#fullname')
    .focus(() => {
        $('#fullname').css('background-color', 'blue');
      })
      .blur(() => {
        $('#fullname').css('background-color', 'white');
      });
  });
$().ready(() => {
    $('#email')
    .focus(() => {
        $('#email').css('background-color', 'blue');
      })
      .blur(() => {
        $('#email').css('background-color', 'white');
      });
  });
$().ready(() => {
    $('#locName')
    .focus(() => {
        $('#locName').css('background-color', 'blue');
      })
      .blur(() => {
        $('#locName').css('background-color', 'white');
      });
  });
$().ready(() => {
    $('textarea')
    .focus(() => {
        $('textarea').css('background-color', 'blue');
      })
      .blur(() => {
        $('textarea').css('background-color', 'white');
      });
  });
//END hightlight active inputs
//***************************
//***************************