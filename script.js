document.addEventListener("DOMContentLoaded", function () {
  // Animate on scroll using Intersection Observer
  const animateElements = document.querySelectorAll(".animate-on-scroll");
  const observerOptions = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateElements.forEach((el) => observer.observe(el));

  // Update the scroll progress bar
  const progressBar = document.getElementById("progressBar");
  window.addEventListener("scroll", () => {
    const scrollPercent =
      (document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
      100;
    progressBar.style.width = scrollPercent + "%";
  });

  // Add click functionality to the red down arrow
  const downArrow = document.querySelector(".down-arrow");
  downArrow.addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });

  // Create sparks from the candle periodically
  setInterval(() => {
    const candle = document.querySelector(".candle");
    if (candle) {
      const spark = document.createElement("div");
      spark.classList.add("spark");
      // Random horizontal offset within ±5px from center
      const randomOffset = Math.random() * 10 - 5;
      spark.style.left = `calc(50% + ${randomOffset}px)`;
      candle.appendChild(spark);
      // Remove spark after animation (2s)
      setTimeout(() => {
        spark.remove();
      }, 2000);
    }
  }, 2000);

  // (Additional JS functionality can be added here as needed)
});
