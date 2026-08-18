// ================= LANGUAGE SWITCH =================

document.addEventListener("DOMContentLoaded", function () {

    const englishButton = document.getElementById("lang-en");
    const hungarianButton = document.getElementById("lang-hu");

    const elements = document.querySelectorAll("[data-en][data-hu]");

    function setLanguage(language) {

        elements.forEach(function (element) {

            const translation = element.getAttribute("data-" + language);

            if (translation !== null) {
                element.textContent = translation;
            }

        });

        if (englishButton) {
            englishButton.classList.toggle("active", language === "en");
        }

        if (hungarianButton) {
            hungarianButton.classList.toggle("active", language === "hu");
        }

        document.documentElement.lang = language;

        try {
            localStorage.setItem("language", language);
        } catch (error) {
            // Continue normally if localStorage is unavailable.
        }
    }

    if (englishButton) {
        englishButton.addEventListener("click", function () {
            setLanguage("en");
        });
    }

    if (hungarianButton) {
        hungarianButton.addEventListener("click", function () {
            setLanguage("hu");
        });
    }

    let savedLanguage = "en";

    try {
        savedLanguage = localStorage.getItem("language") || "en";
    } catch (error) {
        savedLanguage = "en";
    }

    setLanguage(savedLanguage === "hu" ? "hu" : "en");

});