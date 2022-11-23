const myform = document.getElementById('form');
const username = document.getElementById('name');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const checkbox = document.getElementById('agreement');

function validateForm() {
  myform.addEventListener('submit', function () {

    if (username.value && tel.value && email.value && checkbox.checked) {
      localStorage.setItem('username', username.value);
      localStorage.setItem('phone', tel.value);
      localStorage.setItem('email', email.value);
      myform.submit();
    }
  });
  myform.reset();
}

export {validateForm};
