/* ==== menyimpan email di local storage ==== */ 
function saveToLocalstorage() {
    // mengambil nilai dari input pada id email
    const email = document.getElementById("email").value
    // mengambil nilai dari input pada id subject
    const subject = document.getElementById("subject").value
    // mengambil nilai dari input pada id message
    const message = document.getElementById("message").value

    // menyimpan nilai dari id email ke local storage
    localStorage.setItem("email", email)
    // menyimpan nilai dari id subject ke local storage
    localStorage.setItem("subject", subject)
    // menyimpan nilai dari id message ke local storage
    localStorage.setItem("message", message)
    // memunculkan pop up pemberitahuan bahwa email berhasil disimpan
    Swal.fire({
        title: 'Berhasil',
        text: `Pendapat Anda telah kami terima, Terimakasih!`,
        icon: 'success',
        confirmButtonColor: '#E73587',
        allowOutsideClick: false
    })
}