
function login() {
    //kontorllerden sonra
    var userInfo = {
        email: email,
        password: password
    };
    // Convert the object to a JSON string and save it to localStorage
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
}
function saveUserLocally(currentUser) {
    if (currentUser) {
        // Kullanıcı bilgilerini yerel depolamaya kaydet
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        console.log('User saved locally:', currentUser);
    } else {
        console.error('No user logged in.');
    }
}
// Kullanıcıyı yerel depodan yükleme fonksiyonu
function loadUserLocally() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        console.log('User loaded from local storage:', currentUser);
    } else {
        localStorage.setItem()
    }
}
function validateForm() {
    var email = document.getElementById('email').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false; // prevent form submission
    }
    // Continue with form submission if email is valid
    return true;
}
