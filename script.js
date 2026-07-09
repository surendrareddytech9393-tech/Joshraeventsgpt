const slides = document.querySelectorAll(".slide");

console.log("Slides found:", slides.length);

if (slides.length > 0) {
    let current = 0;

    setInterval(() => {
        slides[current].classList.remove("active");

        current = (current + 1) % slides.length;

        slides[current].classList.add("active");
    }, 4000);
}
