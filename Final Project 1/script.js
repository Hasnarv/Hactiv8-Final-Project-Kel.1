function Redirect() {
  window.location = "courses.html";
}

let nama = localStorage.getItem('name');
document.getElementById('name').innerHTML = nama;

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})