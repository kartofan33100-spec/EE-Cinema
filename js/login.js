function showError(fieldEl, msg) {
    const err = fieldEl.closest(".field")?.querySelector(".field__error");
    if (err) err.textContent = msg;
}

function clearError(fieldEl) {
    const err = fieldEl.closest(".field")?.querySelector(".field__error");
    if (err) err.textContent = "";
}

function isEmailValid(email) {
    return email.includes("@");
}

function showResult(block, text) {
    if (!block) return;
    block.style.display = "block";
    block.textContent = text;
}

function handleLogin() {
    const form = document.getElementById("loginForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = form.elements["email"];
        const password = form.elements["password"];
        const city = form.elements["city"];
        const agree = form.elements["agree"];

        let ok = true;

        // email
        if (!email.value.trim()) {
            showError(email, "Введите email");
            ok = false;
        } else if (!isEmailValid(email.value.trim())) {
            showError(email, "Email должен содержать символ @");
            ok = false;
        } else {
            clearError(email);
        }

        // password
        if (!password.value.trim()) {
            showError(password, "Введите пароль");
            ok = false;
        } else {
            clearError(password);
        }

        // city
        if (!city.value.trim()) {
            showError(city, "Введите город");
            ok = false;
        } else {
            clearError(city);
        }

        // checkbox
        const agreeErr = document.getElementById("agreeError");
        if (!agree.checked) {
            if (agreeErr) agreeErr.textContent = "Нужно принять правила сервиса";
            ok = false;
        } else {
            if (agreeErr) agreeErr.textContent = "";
        }

        if (!ok) return;

        const data = {
            type: "login",
            email: email.value.trim(),
            city: city.value.trim()
        };

        console.log("LOGIN:", data);
        alert("Вход успешен ✅ (смотри консоль)");
        showResult(document.getElementById("loginResult"), `Вход успешен: ${data.email} (${data.city})`);
        form.reset();
    });
}

function handleRegister() {
    const form = document.getElementById("registerForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.elements["name"];
        const email = form.elements["email"];
        const password = form.elements["password"];
        const agree = form.elements["agree"];
        const role = form.elements["role"]; // radio group

        let ok = true;

        // name
        if (!name.value.trim()) {
            showError(name, "Введите имя");
            ok = false;
        } else {
            clearError(name);
        }

        // email
        if (!email.value.trim()) {
            showError(email, "Введите email");
            ok = false;
        } else if (!isEmailValid(email.value.trim())) {
            showError(email, "Email должен содержать символ @");
            ok = false;
        } else {
            clearError(email);
        }

        // password
        if (!password.value.trim()) {
            showError(password, "Введите пароль");
            ok = false;
        } else {
            clearError(password);
        }

        // radio обязательный (добавили как доп. условие)
        const roleErr = document.getElementById("roleError");
        const roleValue = form.querySelector('input[name="role"]:checked')?.value;
        if (!roleValue) {
            if (roleErr) roleErr.textContent = "Выберите тип аккаунта";
            ok = false;
        } else {
            if (roleErr) roleErr.textContent = "";
        }

        // checkbox обязательный
        const agreeErr = document.getElementById("agreeErrorReg");
        if (!agree.checked) {
            if (agreeErr) agreeErr.textContent = "Нужно согласиться с условиями";
            ok = false;
        } else {
            if (agreeErr) agreeErr.textContent = "";
        }

        if (!ok) return;

        const data = {
            type: "register",
            name: name.value.trim(),
            email: email.value.trim(),
            role: roleValue
        };

        console.log("REGISTER:", data);
        alert("Регистрация успешна ✅ (смотри консоль)");
        showResult(
            document.getElementById("registerResult"),
            `Аккаунт создан: ${data.name} — ${data.email} (${data.role})`
        );

        form.reset();
    });
}

handleLogin();
handleRegister();
