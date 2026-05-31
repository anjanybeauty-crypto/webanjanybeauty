function goLogin() {
    window.location.href = "login/index.html";
}

function logout() {
    localStorage.removeItem("username");
    location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
    const user = localStorage.getItem("username");

    if (user) {
        document.getElementById("userInfo").innerText = "Halo, " + user;
        document.getElementById("authArea").innerHTML = '<button onclick="logout()" class="nav-cta">Logout</button>';
    }
});
