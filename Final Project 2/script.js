
/* ==== ketika klik login ==== */ 
function login() {
    // mengambil nilai yang diinputkan user
    const uname = document.getElementById("username").value
    const pass = document.getElementById("password").value

    // menyimpan nilai ke local storage
    localStorage.setItem("username", uname)
    localStorage.setItem("password", pass)

    // mengubah button login & sign up menjadi sapaan
    signin.style.cssText = "display: none;"
    signup.style.cssText = "display: none;"
    document.querySelector('#greet').innerHTML = `<p>Haloo, ${uname} !</p>`
    greet.style.cssText = "font-weight: 700;"
}

/* ==== menyimpan email di local storage ==== */ 
function saveToLocalstorage() {
    // mengambil nilai dari input pada id email
    const email = document.getElementById("email").value
    // menyimpan nilai dari id email ke local storage
    localStorage.setItem("email", email)
    // memunculkan pop up pemberitahuan bahwa email berhasil disimpan
    Swal.fire({
        title: 'Berhasil',
        text: `Sekarang anda dapat melihat informasi terbaru kami melalui email ${email}`,
        icon: 'success',
        confirmButtonColor: '#234CAD',
        allowOutsideClick: false
    })
}
