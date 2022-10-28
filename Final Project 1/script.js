function Redirect() {
  window.location = "courses.html";
}

let nama = localStorage.getItem('nama');
document.getElementById('nama').innerHTML = nama;
