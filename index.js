const Age = document.querySelector('#Age');

function registerFn() {
  let ValidForm = false;
  const check = document.querySelector('#check').checked;
  const pattern = /^[1-9][0-9]*$/;
  
  let age = Age.value;

  if (pattern.test(age) && check) {
    ValidForm = true;
  }

  return ValidForm;
}

