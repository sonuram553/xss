const box = document.getElementById('box')
const form = document.getElementById('form')
const textArea = document.getElementById('comment')

document.cookie = 'Cookie';
const jwt = 'In memory token'

form.onsubmit = (event) => {
    event.preventDefault();
    box.innerHTML = textArea.value;
}

// <h1> Hello There! </h1>
// <script> alert('Hello!') </script>
// <img src onerror=alert('Hacked!') />
// <img src onerror='alert(JSON.stringify(localStorage))' /> 
// <img src onerror='alert(document.cookie)' /> 
// <img src onerror='alert(jwt)' /> 
