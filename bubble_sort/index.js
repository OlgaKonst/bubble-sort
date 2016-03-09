window.addEventListener('load', function() {
  var input = document.querySelector('input');
  var cells = document.querySelectorAll('.cell');
  var counter = cells.length;
  var flag = 0;
  var btnEnter = document.querySelector('.enter');
  //console.log(cells);
  //console.log(input);
  btnEnter.addEventListener('click', function() {
   // if (input.value)
    if( counter > 0) {
      cells[flag].innerText = input.value;
      input.value = '';
      flag++;
      counter--;
      if (counter === 0) {

      }

    }
  })
})//end
