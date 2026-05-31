document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `action=login&username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    });

    const data = await res.json();

    if (data.status === "success") {
        localStorage.setItem("username", data.username);
        window.location.href = "../index.html";
    } else {
        const alertBox = document.getElementById("alertBox");
        if (alertBox) {
            alertBox.innerText = "Username atau Password salah, silahkan coba lagi";
            alertBox.style.display = "block";
            setTimeout(() => {
                alertBox.style.display = "none";
            }, 3000);
        } else {
            alert("Username atau Password salah!");
        }
    }
});
