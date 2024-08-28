
const scroll = new LocomotiveScroll({
    el: document.querySelector('#wrapper-main'),
    smooth: true
});

function Anima() {
    let fixed = document.querySelector("#fixed-image");
    let elems = document.querySelectorAll(".elem");
    elems.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            if (elem.getAttribute("data-idata")) {
                const image = fixed.querySelector("img");
                image.src = elem.getAttribute("data-idata");
                image.style.display = "block";
            }
            else {
                const video = fixed.querySelector("video");
                video.src = elem.getAttribute("data-vdata");
                video.style.display = "block";
            }
            fixed.style.display = "block";
        })
        elem.addEventListener("mouseleave", () => {
            const video = fixed.querySelector("video");
            video.src = "";
            const image = fixed.querySelector("img");
            image.src = "";
            video.style.display = "none";
            image.style.display = "none";
            fixed.style.display = "none";
        });
    });
}

function Data() {
    const serviceData = {
        design: {
            description: `Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.`,
            image: './image8.png'
        },
        project: {
            description: `Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.`,
            image: './image9.png'
        },
        execution: {
            description: `We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.`,
            image: './image10.png'
        }
    };

    function handleServiceClick(event) {
        document.querySelectorAll('.service-heading').forEach(heading => {
            heading.classList.remove('active');
        });
        event.currentTarget.classList.add('active');

        const target = event.currentTarget.getAttribute('data-target');

        const descText = document.getElementById('description-text');
        const serviceImage = document.getElementById('service-image');

        descText.textContent = serviceData[target].description;
        serviceImage.src = serviceData[target].image;
    }

    document.querySelectorAll('.service-heading').forEach(heading => {
        heading.addEventListener('click', handleServiceClick);
    });

    document.querySelector('.service-heading[data-target="design"]').classList.add('active');

}


function SwiperJS() {
    if (window.innerWidth <= 600) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1.3,
            spaceBetween: 25,
            freeMode: true,

        });
    } else {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,

        });
    }
}


function Menu() {
    let menu = document.querySelector("nav h3");
    let full = document.querySelector("#full-scr");
    let img = document.querySelector("nav img");
    let menuIcon = document.querySelector("nav .menu-icon")
    let flag = 0;
    menu.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        if (flag === 0) {
            full.style.top = '0';
            img.style.opacity = 0;
            flag = 1;
        } else {
            full.style.top = '-100%';
            img.style.opacity = 1;
            flag = 0;
        }
    });

}

function Elements() {
    let elems = document.querySelectorAll(".elem");

    if (window.innerWidth <= 600) {
        elems.forEach((elem) => {
            // Create the div only if max-height is 600px
            const fixedImageDiv = document.createElement("div");
            fixedImageDiv.id = "image";
            fixedImageDiv.className = "fixed-image";
            elem.querySelector(".overlay").after(fixedImageDiv);

            let image = document.createElement("img");
            let video = document.createElement("video");
            video.autoplay = true;
            video.muted = true;
            video.loop = true;

            if (elem.getAttribute("data-idata")) {
                image.src = elem.getAttribute("data-idata");
                image.style.display = "block";
                video.style.display = "none";
                fixedImageDiv.appendChild(image);
            } else if (elem.getAttribute("data-vdata")) {
                video.src = elem.getAttribute("data-vdata");
                video.style.display = "block";
                image.style.display = "none";
                fixedImageDiv.appendChild(video);
            }

            fixedImageDiv.style.display = "block";
        });
    }
}

Anima();
Data();
SwiperJS();
Menu();
Elements();

window.addEventListener('resize', () => {
    Anima();
    Data();
    SwiperJS();
    Menu();
    Elements();
});