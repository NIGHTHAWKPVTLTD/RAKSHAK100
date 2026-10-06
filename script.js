/* =========================================
   RAKSHAK WEBSITE
   Main JavaScript
========================================= */


/* ---------- SCROLL REVEAL ---------- */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

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


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ---------- DOWNLOAD BUTTON ---------- */

const downloadButtons =
    document.querySelectorAll(".download-link");


downloadButtons.forEach((button) => {

    button.addEventListener(
        "click",
        function (event) {

            const link =
                this.getAttribute("href");


            if (
                !link ||
                link === "YOUR_APK_DOWNLOAD_LINK_HERE"
            ) {

                event.preventDefault();


                alert(
                    "APK download link has not been configured yet."
                );

            }

        }
    );

});


/* ---------- NAVBAR SCROLL EFFECT ---------- */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 30) {

            navbar.style.background =
                "rgba(7, 7, 17, 0.90)";

        } else {

            navbar.style.background =
                "rgba(7, 7, 17, 0.72)";

        }

    }
);


/* ---------- SMOOTH INTERNAL LINKS ---------- */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    targetId === "#" ||
                    !targetId
                ) {

                    return;

                }


                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


/* ---------- PAGE LOAD ---------- */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
