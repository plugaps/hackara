document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");

    if (btn && menu) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
            const menuIcon = btn.querySelector(".menu-icon");
            const closeIcon = btn.querySelector(".close-icon");
            if (menuIcon && closeIcon) {
                menuIcon.classList.toggle("hidden");
                closeIcon.classList.toggle("hidden");
            }
        });

        // Close menu on link click
        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.add("hidden");
                const menuIcon = btn.querySelector(".menu-icon");
                const closeIcon = btn.querySelector(".close-icon");
                if (menuIcon && closeIcon) {
                    menuIcon.classList.remove("hidden");
                    closeIcon.classList.add("hidden");
                }
            });
        });
    }
});
