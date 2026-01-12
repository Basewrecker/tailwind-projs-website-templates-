const input = document.getElementById('link-input');
const errorMessage = document.getElementById('err-msg');
const linkForm = document.getElementById('link-form');

linkForm.addEventListener('submit', formSubmit);

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' +                    // protocol
    '(((a-z\\d)([a-z\\d-]*[a-z\\d])*)\\.)+' + // domain name
    '[a-z]{2,}' +                             // TLD
    '|' +
    '((\\d{1,3}\\.){3}\\d{1,3})' +             // OR IPv4
    '(\\:\\d+)?' +                            // port
    '(\\/[-a-z\\d%_.~+]*)*' +                 // path
    '(\\?[;&a-z\\d%_.~+=-]*)?' +              // query string
    '(\\#[-a-z\\d_]*)?$',
    'i'
  )

  return !!pattern.test(str)
}


function formSubmit(event) {
    event.preventDefault();
    val = input.value;
    if (val === '') {
        errorMessage.innerHTML = 'Please enter a link..';
        input.classList.add('border-red');
    } else if (!validURL(val)) {
        errorMessage.innerHTML = 'Please enter a valid link';
    } else {
        errorMessage.innerHTML = '';
        input.classList.remove('border-red');
        alert('Success!');
    }
}