// Select color input
// Select size input

var height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  height =$('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height,width);
    // console.log('Height: ' + height 'and width: ' + width);

});

function makeGrid(x, y) {
  $('tr').remove();
     // based on user input grid squares will be made accordingly



  for (var i =1; i <= x; i++) {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr');
    for (var j = 1; j <=y; j++) {
      $('#table' +i).append('<td></td>');
         //grid table will be created from user input
    }
  }
  
  $('td').click(function addColor() {
    color = $('#colorPicker').val();
      // selected color to be applied to cell in graph
    if ($(this).attr('style')) {
        $(this).attr('style', 'background-color:' + color);
        // new chosen color will be applied over existing color

    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  })
}
