function Redirect() {
  window.location = "courses.html";
}

let nama = localStorage.getItem('nama');
document.getElementById('nama').innerHTML = nama;

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})