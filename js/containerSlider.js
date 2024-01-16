document.addEventListener("DOMContentLoaded", function () {
  const sliderContainers = document.querySelectorAll(".sliderContainer");

  sliderContainers.forEach((sliderContainer) => {
      let isDragging = false;
      let startPosition = 0;
      let currentTranslate = 0;

      sliderContainer.addEventListener("mousedown", (e) => startDragging(e));
      sliderContainer.addEventListener("touchstart", (e) => startDragging(e));

      sliderContainer.addEventListener("mousemove", (e) => whileDragging(e));
      sliderContainer.addEventListener("touchmove", (e) => whileDragging(e));

      sliderContainer.addEventListener("mouseup", () => stopDragging());
      sliderContainer.addEventListener("touchend", () => stopDragging());
      sliderContainer.addEventListener("mouseleave", () => stopDragging());

      function startDragging(event) {
          isDragging = true;
          startPosition = getPositionX(event);
          currentTranslate = getTranslateX();
      }

      function whileDragging(event) {
          if (!isDragging) return;
          const currentPosition = getPositionX(event);
          const distance = currentPosition - startPosition;
          translateX(currentTranslate + distance);
      }

      function stopDragging() {
          isDragging = false;
      }

      function getPositionX(event) {
          return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
      }

      function getTranslateX() {
          const style = window.getComputedStyle(sliderContainer);
          const matrix = new WebKitCSSMatrix(style.transform);
          return matrix.m41;
      }

      function translateX(value) {
          sliderContainer.style.transform = `translateX(${value}px)`;
      }
  });
});