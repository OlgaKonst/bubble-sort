window.addEventListener('load', function() {
  var input = document.querySelector('input');
  var cells = document.querySelectorAll('.cell');
  var buttonsBlock =  document.querySelector('.buttons-block');
  var inputBlock =  document.querySelector('.input-block');
  var resetButton = document.querySelector('.reset');
  var nextButton = document.querySelector('.next');
  var message = document.querySelector('.message');
  var counter = cells.length;
  var index = 0;
  var btnEnter = document.querySelector('.enter');
  var flagInnerLoop = cells.length - 1;
  var flagOuterLoop = cells.length - 1;
  input.focus();

  btnEnter.addEventListener('click', function() {
    var inputValue = input.value;
    if (isNaN(inputValue) || !isFinite(inputValue) || inputValue.indexOf('0x') >= 0 || inputValue === '') {
      message.innerText = 'Введите число';
      message.style.visibility = 'visible';
      input.value = '';
      input.focus();
      return;
    } else {
      message.style.visibility = 'hidden';
    }
    if( counter > 0) {
      cells[index].innerText = parseInt(input.value, 10);
      input.focus();
      if (counter === 1) {
        setVisibility(inputBlock, false);
        setVisibility(buttonsBlock, true);
      }
      input.value = '';
      index++;
      counter--;
      if(counter === 0) {
        counter = cells.length;
        index = 0;
        return;
      }
    }
  });
  nextButton.addEventListener('click', function(e) {
    if (!flagOuterLoop) {
      setBackgroundColor("#FAFAFA");
      return;}
    setBackgroundColor("white");
    console.log(index);
    cells[index].style.background = "yellow";
    cells[index+1].style.background = "yellow";
    if (flagInnerLoop && index < counter) {
      if (parseInt(cells[index].innerText, 10) > parseInt(cells[index+1].innerText, 10)) {
        cells[index].style.background = "red";
        cells[index+1].style.background = "red";
        var temp = cells[index].innerText;
        cells[index].innerText = cells[index+1].innerText;
        cells[index+1].innerText = temp;
      } else {
        cells[index].style.background = "yellow";
        cells[index+1].style.background = "yellow";
      }
      index++;
      flagInnerLoop--;
      if (flagInnerLoop === 0) {
        flagOuterLoop--;
        if (flagOuterLoop >= 0) {
          index = 0;
          flagInnerLoop = cells.length - 1;
        } else {

        }
      }
    } else {

    }

  });
  resetButton.addEventListener('click', function() {
    for( var i = 0; i < cells.length; i++) {
      cells[i].innerText = '';
      cells[i].style.background = "white";
      index = 0;
      flagInnerLoop = cells.length - 1;
      flagOuterLoop = cells.length - 1;
    }
    setVisibility(inputBlock, true);
    setVisibility(buttonsBlock, false);
    input.focus();
  });

  function setBackgroundColor(color) {
      for( var i = 0; i < cells.length; i++) {
        cells[i].style.background = color;
      }
  }
  function setVisibility(elem, flag) {
    if (flag) {
      elem.style.visibility = 'visible';
    } else {
      elem.style.visibility = 'hidden';
    }
  }
})
