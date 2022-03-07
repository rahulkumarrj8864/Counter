var add = document.getElementById('add');
var rest = document.getElementById('rest');
var sub = document.getElementById('sub');
var show = document.getElementById("show");
var sum = 0;
// $("#sub").prop('disabled', true);

// $("#rest").attr('disabled');
// if flag=1:
//     $('#rest').prop('disabled', true);
// else:
//     $('#rest').prop('disabled', false);
//     if flag=1:
//     $('#your-btn').addClass('btn-disabled');
// else:
//     $('#your-btn').removeClass('btn-disabled');

add.addEventListener("click",adding);
rest.addEventListener("click",reset);
sub.addEventListener("click",subtract);


add.disabled = false;
rest.disabled = true;
sub.disabled = false;

function adding() {
  sum++;
  show.innerHTML = sum;
  show.style.fontSize = "4rem";
  if(sum > 0) {
    rest.disabled = false;
    // sub.disabled = false;
  }
}

function reset() {
  sum = 0;
  show.style.fontSize = "4rem";
  show.innerHTML = sum;
  if(sum => 0) {
    document.getElementById('rest').disabled = true;
  }
}

function subtract() {
  sum--;
  show.innerHTML = sum;
  show.style.fontSize = "4rem";
  if(sum <= 0) {
      rest.disabled = false;
  }
}
