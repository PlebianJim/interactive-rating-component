function ratingsChangeColour() {
  // Initial values
  let activeRating = null;
  let activeIndex = null;

  // Get all the rating elements
  const ratings = document.querySelectorAll(
    ".container-unordered-list-list-item"
  );

  // Store their original background colors
  const originalColors = [];
  ratings.forEach((rating) => {
    originalColors.push(rating.style.backgroundColor);
  });

  // Add click event listeners
  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      // Remove active state from previously clicked
      if (activeRating) {
        activeRating.style.backgroundColor = originalColors[activeIndex];
      }

      // Update active rating
      activeRating = rating;
      activeIndex = [...ratings].indexOf(rating);

      // Change bg color
      rating.style.backgroundColor = "hsl(25, 97%, 53%)";
      rating.style.color = "hsl(0, 0%, 100%)";
    });
  });
}


