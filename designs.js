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
  // add color to cell in graph
  $('td').click(function addColor() {
    color = $('#colorPicker').val();

    if ($(this).attr('style')) {
        $(this).removeAttr('style');
        // remove color from graph

    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  })
}
