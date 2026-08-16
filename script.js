// ================= LANGUAGE SWITCH =================

document.addEventListener("DOMContentLoaded", function () {

    const englishButton = document.getElementById("lang-en");
    const hungarianButton = document.getElementById("lang-hu");

    const elements = document.querySelectorAll("[data-en][data-hu]");

    function setLanguage(language) {

        elements.forEach(function (element) {

            element.textContent = element.getAttribute("data-" + language);

        });

        if (language === "en") {

            englishButton.classList.add("active");
            hungarianButton.classList.remove("active");

            document.documentElement.lang = "en";

        } else {

            hungarianButton.classList.add("active");
            englishButton.classList.remove("active");

            document.documentElement.lang = "hu";

        }

        localStorage.setItem("language", language);
    }

    englishButton.addEventListener("click", function () {
        setLanguage("en");
    });

    hungarianButton.addEventListener("click", function () {
        setLanguage("hu");
    });

    const savedLanguage = localStorage.getItem("language") || "en";

    setLanguage(savedLanguage);

});