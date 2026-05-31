function goLogin() {
    window.location.href = "login/index.html";
}

function logout() {
    localStorage.removeItem("username");
    location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
    const user = localStorage.getItem("username");
    const userInfo = document.getElementById("userInfo");
    const authArea = document.getElementById("authArea");

    if (user) {
        userInfo.innerText = "Halo, " + user;
        authArea.innerHTML = '<button onclick="logout()" class="nav-cta">Logout</button>';
    } else {
        userInfo.innerText = "Belum login";
        authArea.innerHTML = '<button onclick="goLogin()" class="nav-cta">Login</button>';
    }
});
