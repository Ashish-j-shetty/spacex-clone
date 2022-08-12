const counters = document.querySelectorAll(".counter");

let isScrolled = false;

document.addEventListener("scroll", scrollPage);

function scrollPage() {
  const scrollpos = window.scrollY;

  if (scrollpos > 80 && !isScrolled) {
    countUp();
    isScrolled = true;
  } else if (scrollpos < 80) {
    reset();
    isScrolled = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = Number(counter.getAttribute("data-target"));

      const c = +counter.innerText;

      const increment = target / 100;

      if (c < target) {
        counter.innerText = Math.ceil(c + increment);

        setTimeout(updateCounter, 40);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerText = "0"));
}
