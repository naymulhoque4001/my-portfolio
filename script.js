/* =====================================================
   NAYMUL HOQUE PORTFOLIO
   GLOBAL SETTINGS SYSTEM
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const settingsBtn = document.getElementById("settingsBtn");
    const settingsOverlay = document.getElementById("settingsOverlay");
    const closeSettings = document.getElementById("closeSettings");

    const animationSetting =
        document.getElementById("animationSetting");

    const glowSetting =
        document.getElementById("glowSetting");

    const resetSettings =
        document.getElementById("resetSettings");

    const themeButtons =
        document.querySelectorAll(".theme-color");

    const modeButtons =
        document.querySelectorAll(".mode-button");


    /* =================================================
       SETTINGS OPEN
    ================================================= */

    if (settingsBtn && settingsOverlay) {

        settingsBtn.addEventListener("click", () => {

            settingsOverlay.classList.add("active");

            document.body.classList.add("settings-open");

        });

    }


    /* =================================================
       SETTINGS CLOSE
    ================================================= */

    function closeSettingsPanel() {

        if (settingsOverlay) {

            settingsOverlay.classList.remove("active");

            document.body.classList.remove("settings-open");

        }

    }


    if (closeSettings) {

        closeSettings.addEventListener(
            "click",
            closeSettingsPanel
        );

    }


    /* OUTSIDE CLICK */

    if (settingsOverlay) {

        settingsOverlay.addEventListener(
            "click",
            (event) => {

                if (event.target === settingsOverlay) {

                    closeSettingsPanel();

                }

            }
        );

    }


    /* ESC */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeSettingsPanel();

        }

    });


    /* =================================================
       THEME COLOUR
    ================================================= */

    function applyTheme(color) {

        document.documentElement
            .style
            .setProperty("--accent", color);

        localStorage.setItem(
            "themeColor",
            color
        );


        themeButtons.forEach(button => {

            button.classList.remove("active");

            button.style.transform = "scale(1)";

        });


        themeButtons.forEach(button => {

            if (
                button.dataset.color === color
            ) {

                button.classList.add("active");

                button.style.transform =
                    "scale(1.18)";

            }

        });

    }


    themeButtons.forEach(button => {

        button.addEventListener("click", () => {

            const color =
                button.dataset.color;

            if (!color) return;

            applyTheme(color);

        });

    });


    /* =================================================
       DARK / WHITE MODE
    ================================================= */

    function applyMode(mode) {

        if (mode === "light") {

            document.body.classList.add(
                "light-mode"
            );

        } else {

            document.body.classList.remove(
                "light-mode"
            );

        }


        localStorage.setItem(
            "appearanceMode",
            mode
        );


        modeButtons.forEach(button => {

            button.classList.remove("active");

        });


        modeButtons.forEach(button => {

            if (
                button.dataset.mode === mode
            ) {

                button.classList.add("active");

            }

        });

    }


    modeButtons.forEach(button => {

        button.addEventListener("click", () => {

            applyMode(
                button.dataset.mode
            );

        });

    });


    /* =================================================
       ANIMATION ON / OFF
    ================================================= */

    if (animationSetting) {

        animationSetting.addEventListener(
            "change",
            function () {

                if (this.checked) {

                    document.body.classList
                        .remove("no-animations");

                    localStorage.setItem(
                        "animations",
                        "on"
                    );

                } else {

                    document.body.classList
                        .add("no-animations");

                    localStorage.setItem(
                        "animations",
                        "off"
                    );

                }

            }
        );

    }


    /* =================================================
       GLOW ON / OFF
    ================================================= */

    if (glowSetting) {

        glowSetting.addEventListener(
            "change",
            function () {

                if (this.checked) {

                    document.body.classList
                        .remove("no-glow");

                    localStorage.setItem(
                        "glow",
                        "on"
                    );

                } else {

                    document.body.classList
                        .add("no-glow");

                    localStorage.setItem(
                        "glow",
                        "off"
                    );

                }

            }
        );

    }


    /* =================================================
       RESET
    ================================================= */

    if (resetSettings) {

        resetSettings.addEventListener(
            "click",
            () => {

                localStorage.removeItem(
                    "themeColor"
                );

                localStorage.removeItem(
                    "appearanceMode"
                );

                localStorage.removeItem(
                    "animations"
                );

                localStorage.removeItem(
                    "glow"
                );


                applyTheme("#C8A96B");

                applyMode("dark");


                document.body.classList.remove(
                    "no-animations"
                );

                document.body.classList.remove(
                    "no-glow"
                );


                if (animationSetting) {

                    animationSetting.checked = true;

                }

                if (glowSetting) {

                    glowSetting.checked = true;

                }

            }
        );

    }


    /* =================================================
       LOAD SAVED SETTINGS
    ================================================= */

    const savedTheme =
        localStorage.getItem("themeColor");

    const savedMode =
        localStorage.getItem("appearanceMode");

    const savedAnimations =
        localStorage.getItem("animations");

    const savedGlow =
        localStorage.getItem("glow");


    /* THEME */

    if (savedTheme) {

        applyTheme(savedTheme);

    } else {

        applyTheme("#C8A96B");

    }


    /* MODE */

    if (savedMode) {

        applyMode(savedMode);

    } else {

        applyMode("dark");

    }


    /* ANIMATIONS */

    if (savedAnimations === "off") {

        document.body.classList.add(
            "no-animations"
        );

        if (animationSetting) {

            animationSetting.checked = false;

        }

    }


    /* GLOW */

    if (savedGlow === "off") {

        document.body.classList.add(
            "no-glow"
        );

        if (glowSetting) {

            glowSetting.checked = false;

        }

    }

});





















document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       TIMELINE SCROLL PROGRESS
    ========================================== */

    const timeline = document.querySelector(".education-timeline");
    const progress = document.querySelector(".timeline-progress");

    function updateTimeline() {

        if (!timeline || !progress) return;

        const rect = timeline.getBoundingClientRect();

        const windowHeight = window.innerHeight;

        const start = windowHeight * 0.75;

        const total = rect.height;

        let amount = start - rect.top;

        amount = Math.max(0, Math.min(amount, total));

        progress.style.height =
            (amount / total * 100) + "%";
    }

    window.addEventListener("scroll", updateTimeline);

    updateTimeline();


    /* ==========================================
       3D CARD MOUSE EFFECT
    ========================================== */

    const cards =
        document.querySelectorAll(".education-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", event => {

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateY =
                (x - centerX) / 35;

            const rotateX =
                (centerY - y) / 35;

            card.style.transform =
                `translateY(-8px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;
        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0) rotateX(0) rotateY(0)";

        });

    });


    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const items =
        document.querySelectorAll(".education-item");

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "education-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    items.forEach(item => {
        observer.observe(item);
    });

});




















/* =====================================================
   NAYMUL HOQUE — SKILLS JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       SKILL SECTION REVEAL
    ================================================= */

    const clusters =
        document.querySelectorAll(".skill-cluster");

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "cluster-visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    clusters.forEach((cluster, index) => {

        cluster.style.transitionDelay =
            `${index * 70}ms`;

        revealObserver.observe(cluster);

    });


    /* =================================================
       FILTER SYSTEM
    ================================================= */

    const filters =
        document.querySelectorAll(".skill-filter");

    filters.forEach((filter) => {

        filter.addEventListener("click", () => {

            const selected =
                filter.dataset.filter;

            filters.forEach((button) => {
                button.classList.remove("active");
            });

            filter.classList.add("active");


            clusters.forEach((cluster) => {

                const category =
                    cluster.dataset.category;

                const show =
                    selected === "all" ||
                    selected === category;

                if (show) {

                    cluster.style.display = "";

                    setTimeout(() => {
                        cluster.classList.add(
                            "cluster-visible"
                        );
                    }, 40);

                } else {

                    cluster.classList.remove(
                        "cluster-visible"
                    );

                    setTimeout(() => {

                        if (
                            !cluster.classList.contains(
                                "cluster-visible"
                            )
                        ) {
                            cluster.style.display = "none";
                        }

                    }, 350);

                }

            });

        });

    });


    /* =================================================
       3D CARD TILT + LIGHT
    ================================================= */

    const cards =
        document.querySelectorAll(
            ".skill-node-card"
        );

    cards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -3.5;

            const rotateY =
                ((x - centerX) / centerX) * 3.5;

            card.style.transform =
                `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-7px)
                `;

            card.style.setProperty(
                "--card-x",
                `${x}px`
            );

            card.style.setProperty(
                "--card-y",
                `${y}px`
            );

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                `
                perspective(900px)
                rotateX(0deg)
                rotateY(0deg)
                translateY(0)
                `;

        });

    });


    /* =================================================
       SETTINGS
    ================================================= */

    const settingsBtn =
        document.getElementById("settingsBtn");

    const overlay =
        document.getElementById(
            "settingsOverlay"
        );

    const closeBtn =
        document.getElementById(
            "closeSettings"
        );


    if (settingsBtn && overlay) {

        settingsBtn.addEventListener("click", () => {

            overlay.classList.add(
                "settings-open"
            );

        });

    }


    if (closeBtn && overlay) {

        closeBtn.addEventListener("click", () => {

            overlay.classList.remove(
                "settings-open"
            );

        });

    }


    if (overlay) {

        overlay.addEventListener("click", (event) => {

            if (event.target === overlay) {

                overlay.classList.remove(
                    "settings-open"
                );

            }

        });

    }


    /* =================================================
       ACCENT COLOUR
    ================================================= */

    const themeButtons =
        document.querySelectorAll(
            ".theme-color"
        );

    themeButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const color =
                button.dataset.color;

            document.documentElement.style
                .setProperty(
                    "--accent",
                    color
                );

            themeButtons.forEach((item) => {
                item.classList.remove("active");
            });

            button.classList.add("active");

            localStorage.setItem(
                "portfolioAccent",
                color
            );

        });

    });


    const savedAccent =
        localStorage.getItem(
            "portfolioAccent"
        );

    if (savedAccent) {

        document.documentElement.style
            .setProperty(
                "--accent",
                savedAccent
            );

        themeButtons.forEach((button) => {

            button.classList.toggle(
                "active",
                button.dataset.color ===
                savedAccent
            );

        });

    }


    /* =================================================
       DARK / WHITE
    ================================================= */

    const modeButtons =
        document.querySelectorAll(
            ".mode-button"
        );

    modeButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const mode =
                button.dataset.mode;

            document.body.dataset.theme =
                mode;

            modeButtons.forEach((item) => {
                item.classList.remove("active");
            });

            button.classList.add("active");

            localStorage.setItem(
                "portfolioMode",
                mode
            );

        });

    });


    const savedMode =
        localStorage.getItem(
            "portfolioMode"
        );

    if (savedMode) {

        document.body.dataset.theme =
            savedMode;

        modeButtons.forEach((button) => {

            button.classList.toggle(
                "active",
                button.dataset.mode === savedMode
            );

        });

    }


    /* =================================================
       ANIMATION TOGGLE
    ================================================= */

    const animationToggle =
        document.getElementById(
            "animationSetting"
        );

    if (animationToggle) {

        const savedAnimation =
            localStorage.getItem(
                "portfolioAnimations"
            );

        if (savedAnimation !== null) {

            animationToggle.checked =
                savedAnimation === "true";

            document.body.classList.toggle(
                "animations-off",
                !animationToggle.checked
            );

        }


        animationToggle.addEventListener(
            "change",
            () => {

                document.body.classList.toggle(
                    "animations-off",
                    !animationToggle.checked
                );

                localStorage.setItem(
                    "portfolioAnimations",
                    animationToggle.checked
                );

            }
        );

    }


    /* =================================================
       GLOW TOGGLE
    ================================================= */

    const glowToggle =
        document.getElementById(
            "glowSetting"
        );

    if (glowToggle) {

        const savedGlow =
            localStorage.getItem(
                "portfolioGlow"
            );

        if (savedGlow !== null) {

            glowToggle.checked =
                savedGlow === "true";

            document.body.classList.toggle(
                "glow-off",
                !glowToggle.checked
            );

        }


        glowToggle.addEventListener(
            "change",
            () => {

                document.body.classList.toggle(
                    "glow-off",
                    !glowToggle.checked
                );

                localStorage.setItem(
                    "portfolioGlow",
                    glowToggle.checked
                );

            }
        );

    }


    /* =================================================
       RESET
    ================================================= */

    const reset =
        document.getElementById(
            "resetSettings"
        );

    if (reset) {

        reset.addEventListener("click", () => {

            localStorage.removeItem(
                "portfolioAccent"
            );

            localStorage.removeItem(
                "portfolioMode"
            );

            localStorage.removeItem(
                "portfolioAnimations"
            );

            localStorage.removeItem(
                "portfolioGlow"
            );


            document.documentElement.style
                .setProperty(
                    "--accent",
                    "#C8A96B"
                );

            document.body.dataset.theme =
                "dark";

            document.body.classList.remove(
                "animations-off"
            );

            document.body.classList.remove(
                "glow-off"
            );


            themeButtons.forEach((button) => {

                button.classList.toggle(
                    "active",
                    button.dataset.color ===
                    "#C8A96B"
                );

            });


            modeButtons.forEach((button) => {

                button.classList.toggle(
                    "active",
                    button.dataset.mode ===
                    "dark"
                );

            });


            if (animationToggle) {
                animationToggle.checked = true;
            }

            if (glowToggle) {
                glowToggle.checked = true;
            }

        });

    }


    /* =================================================
       MOUSE DEPTH ON WHOLE PAGE
    ================================================= */

    document.addEventListener("mousemove", (event) => {

        document.documentElement.style
            .setProperty(
                "--mx",
                `${event.clientX}px`
            );

        document.documentElement.style
            .setProperty(
                "--my",
                `${event.clientY}px`
            );

    });

});



















document.addEventListener("DOMContentLoaded", function () {

    // SETTINGS ELEMENTS
    const settingsBtn = document.getElementById("settingsBtn");
    const settingsOverlay = document.getElementById("settingsOverlay");
    const closeSettings = document.getElementById("closeSettings");
    const resetSettings = document.getElementById("resetSettings");

    const themeButtons = document.querySelectorAll(".theme-color");
    const modeButtons = document.querySelectorAll(".mode-button");

    const animationSetting = document.getElementById("animationSetting");
    const glowSetting = document.getElementById("glowSetting");

    // DEFAULT SETTINGS
    const defaultSettings = {
        accent: "#C8A96B",
        mode: "dark",
        animation: true,
        glow: true
    };

    // LOAD SAVED SETTINGS
    let savedSettings;

    try {
        savedSettings = JSON.parse(
            localStorage.getItem("portfolioSettings")
        );
    } catch (error) {
        savedSettings = null;
    }

    const settings = {
        ...defaultSettings,
        ...(savedSettings || {})
    };

    // SAVE SETTINGS
    function saveSettings() {
        localStorage.setItem(
            "portfolioSettings",
            JSON.stringify(settings)
        );
    }

    // APPLY ACCENT COLOR
    function applyAccent(color) {
        document.documentElement.style.setProperty(
            "--accent",
            color
        );

        themeButtons.forEach(function (button) {
            button.classList.toggle(
                "active",
                button.dataset.color === color
            );
        });
    }

    // APPLY APPEARANCE
    function applyMode(mode) {
        document.body.classList.toggle(
            "light-mode",
            mode === "light"
        );

        document.documentElement.dataset.theme = mode;

        modeButtons.forEach(function (button) {
            button.classList.toggle(
                "active",
                button.dataset.mode === mode
            );
        });
    }

    // APPLY ANIMATION
    function applyAnimation(enabled) {
        document.body.classList.toggle(
            "no-animations",
            !enabled
        );

        if (animationSetting) {
            animationSetting.checked = enabled;
        }
    }

    // APPLY GLOW
    function applyGlow(enabled) {
        document.body.classList.toggle(
            "no-glow",
            !enabled
        );

        if (glowSetting) {
            glowSetting.checked = enabled;
        }
    }

    // APPLY ALL SETTINGS
    function applyAllSettings() {
        applyAccent(settings.accent);
        applyMode(settings.mode);
        applyAnimation(settings.animation);
        applyGlow(settings.glow);
    }

    // OPEN SETTINGS
    if (settingsBtn && settingsOverlay) {
        settingsBtn.addEventListener("click", function () {
            settingsOverlay.classList.add("active");
        });
    }

    // CLOSE SETTINGS
    if (closeSettings && settingsOverlay) {
        closeSettings.addEventListener("click", function () {
            settingsOverlay.classList.remove("active");
        });
    }

    // CLOSE BY CLICKING OUTSIDE
    if (settingsOverlay) {
        settingsOverlay.addEventListener("click", function (event) {
            if (event.target === settingsOverlay) {
                settingsOverlay.classList.remove("active");
            }
        });
    }

    // CHANGE ACCENT COLOR
    themeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            settings.accent = button.dataset.color;

            applyAccent(settings.accent);
            saveSettings();
        });
    });

    // CHANGE APPEARANCE
    modeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            settings.mode = button.dataset.mode;

            applyMode(settings.mode);
            saveSettings();
        });
    });

    // ANIMATION SWITCH
    if (animationSetting) {
        animationSetting.addEventListener("change", function () {
            settings.animation = animationSetting.checked;

            applyAnimation(settings.animation);
            saveSettings();
        });
    }

    // GLOW SWITCH
    if (glowSetting) {
        glowSetting.addEventListener("change", function () {
            settings.glow = glowSetting.checked;

            applyGlow(settings.glow);
            saveSettings();
        });
    }

    // RESET SETTINGS
    if (resetSettings) {
        resetSettings.addEventListener("click", function () {
            Object.assign(settings, defaultSettings);

            applyAllSettings();
            saveSettings();
        });
    }

    // INITIALIZE SETTINGS
    applyAllSettings();

});
// PROJECT IMAGE CLICK TO OPEN

document.addEventListener("DOMContentLoaded", function () {
    const projectImages = document.querySelectorAll(
        ".project-gallery img"
    );

    projectImages.forEach(function (img) {
        img.style.cursor = "zoom-in";

        img.addEventListener("click", function () {
            const viewer = document.createElement("div");

            viewer.style.cssText = `
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.95);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 99999;
                padding: 20px;
                cursor: zoom-out;
            `;

            const largeImage = document.createElement("img");
            largeImage.src = img.src;

            largeImage.style.cssText = `
                max-width: 95%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 10px;
            `;

            viewer.appendChild(largeImage);
            document.body.appendChild(viewer);

            viewer.addEventListener("click", function () {
                viewer.remove();
            });
        });
    });
});



















/* RESUME SCROLL ANIMATION */

document.addEventListener("DOMContentLoaded", function () {

    const resumeSections = document.querySelectorAll(
        ".resume-section.reveal"
    );

    if ("IntersectionObserver" in window) {

        const resumeObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        resumeObserver.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        resumeSections.forEach(function (section) {
            resumeObserver.observe(section);
        });

    } else {

        resumeSections.forEach(function (section) {
            section.classList.add("visible");
        });

    }

});




















/* =====================================
   CONTACT FORM - EMAIL FUNCTION
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("contactName").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const subject = document.getElementById("contactSubject").value.trim();
            const message = document.getElementById("contactMessage").value.trim();

            const emailAddress = "naymulhoque4001@gmail.com";

            const mailSubject = encodeURIComponent(subject);

            const mailBody = encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message
            );

            const mailtoLink =
                "mailto:" + emailAddress +
                "?subject=" + mailSubject +
                "&body=" + mailBody;

            window.location.href = mailtoLink;

        });

    }

});


/* CONTACT PAGE SCROLL ANIMATION */

document.addEventListener("DOMContentLoaded", function () {

    const contactSections = document.querySelectorAll(
        ".contact-page .reveal"
    );

    if ("IntersectionObserver" in window) {

        const contactObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        contactObserver.unobserve(entry.target);

                    }

                });

            },
            { threshold: 0.12 }
        );

        contactSections.forEach(function (section) {
            contactObserver.observe(section);
        });

    } else {

        contactSections.forEach(function (section) {
            section.classList.add("visible");
        });

    }

});
