

document.addEventListener('DOMContentLoaded', function() {
  attachClickEventToButton();
})

function attachClickEventToButton() {
  // first we have to find the button that we want to attach the event to.

  // const button = document.getElementById('color-button');
  const button = document.querySelector('button');

  button.addEventListener('click', changeToBlue);
}

function changeToBlue(event) {
  const button = event.target;
  button.style.backgroundColor = 'blue';
  button.style.color = 'white';
}