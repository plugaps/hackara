document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");

    if (btn && menu) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
            const icon = btn.querySelector(".material-symbols-outlined");
            if (icon) {
                icon.textContent = menu.classList.contains("hidden") ? "menu" : "close";
            }
        });

        // Close menu on link click
        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.add("hidden");
                const icon = btn.querySelector(".material-symbols-outlined");
                if (icon) icon.textContent = "menu";
            });
        });
    }
});
