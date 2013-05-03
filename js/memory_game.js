$(document).ready(function(){

  array = ["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"];

  function fisherYates ( myArray ) {
    var i = myArray.length;
    if ( i === 0 ) return false;
    while ( --i ) {
       var j = Math.floor( Math.random() * ( i + 1 ) );
       var tempi = myArray[i];
       var tempj = myArray[j];
       myArray[i] = tempj;
       myArray[j] = tempi;
     }
  }

  fisherYates(array);

  console.log(array);

  for (var i = 0; i < array.length; i++) {
    var new_box = "<div class='box'><p class='letter hidden'>" + array[i] + "</p></div>";
    $('#game_space').append(new_box);
  }


  var revealed = [];

  var reveal = function(){
    var children = $(this).children();
    var p = $(children[0]);
    p.removeClass('hidden');
    p.addClass('revealed');
    revealed.push(p.html());
    console.log(revealed);
    if (revealed.length === 2) {
      $('.box').unbind('click');
      if (revealed[0] === revealed[1]) {
        revealed = [];
        $('.revealed').removeClass('revealed');
        $('.box').bind('click',reveal);
      } else {
        setTimeout(function(){$('.revealed').addClass('hidden');$('.box').bind('click', reveal);}, 1000);
        revealed = [];
      }
    }
  };

  $('.box').on('click', reveal);


});



