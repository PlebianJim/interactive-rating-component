/*
The  `ratingsChangeColour`  function is responsible for handling the behavior when a rating element is clicked. Here's a breakdown of what the function does:
1. It initializes two variables,  `activeRating`  and  `activeIndex` , to keep track of the currently selected rating element.
2. It selects all the rating elements with the class  `.container-unordered-list-list-item`  using  `document.querySelectorAll()`  and stores them in the  `ratings`  variable.
3. It creates an array called  `originalColors`  to store the original background colors of the rating elements.
4. It iterates over each rating element using  `ratings.forEach()`  and pushes the  `style.backgroundColor`  of each element to the  `originalColors`  array. This allows the function to remember the original background colors of the rating elements.
5. It adds a click event listener to each rating element using  `ratings.forEach()` . When a rating element is clicked, the event listener function is triggered.
6. Inside the event listener function, it first checks if there is a previously clicked rating element ( `activeRating` ). If there is, it restores the original background color of the previously clicked element by accessing  `originalColors`  using the  `activeIndex` .
7. It then updates the  `activeRating`  and  `activeIndex`  variables to store the currently clicked rating element and its index in the  `ratings`  array.
8. Finally, it changes the background color and text color of the clicked rating element to a specific value ( `hsl(25, 97%, 53%)`  and  `hsl(0, 0%, 100%)` , respectively). This visually indicates that the rating element has been selected.
In summary, the  `ratingsChangeColour`  function sets up event listeners for the rating elements, allowing the user to click on a rating and change its appearance while restoring the original appearance of previously clicked ratings.
*/
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
/*
The function  `storeSelection`  is a JavaScript function that takes a parameter called  `value` . This function is designed to store the  `value`  in the browser's  `localStorage`  object.
Here's a breakdown of how the function works:
1.  `function storeSelection(value) { ... }` : This is the function declaration. It defines a function named  `storeSelection`  that takes one parameter,  `value` .
2.  `localStorage.setItem("userSelection", value);` : This line of code uses the  `setItem`  method of the  `localStorage`  object to store the  `value`  in the browser's local storage. The  `setItem`  method takes two arguments: the key and the value. In this case, the key is  `"userSelection"` , and the value is the  `value`  passed to the function.
By calling this function with a specific  `value` , you can store that value in the browser's local storage under the key  `"userSelection"` . This allows you to retrieve and use the stored value later in your application.
*/
function storeSelection(value) {
  localStorage.setItem("userSelection", value);
}
/*
The function  `handleRatingSelection`  is a JavaScript function that handles the selection of ratings. It is designed to add click event listeners to each rating element, update their styles based on the selection, and store the selected value.
Here's a breakdown of how the function works:
1.  `function handleRatingSelection() { ... }` : This is the function declaration. It defines a function named  `handleRatingSelection` .
2.  `const ratings = document.querySelectorAll(".container-unordered-list-list-item");` : This line of code selects all the elements with the class name "container-unordered-list-list-item" using the  `querySelectorAll`  method. It returns a NodeList containing all the matching elements.
3.  `ratings.forEach((rating) => { ... });` : This code iterates over each rating element using the  `forEach`  method. For each rating element, it sets up a click event listener and defines the callback function.
4.  `rating.addEventListener("click", () => { ... });` : This line of code adds a click event listener to each rating element. When a rating element is clicked, the callback function is executed.
5.  `const selectedValue = rating.dataset.value;` : This code retrieves the value stored in the  `data-value`  attribute of the clicked rating element using the  `dataset`  property. It assigns the value to the  `selectedValue`  variable.
6.  `storeSelection(selectedValue);` : This line of code calls the  `storeSelection`  function and passes the  `selectedValue`  as an argument. It stores the selected value in localStorage or performs any other desired actions.
7.  `ratings.forEach((r) => { ... });` : This code iterates over all the rating elements again using the  `forEach`  method. It updates the styles of each rating element based on whether it is the selected rating or not.
8.  `r.style.backgroundColor = r === rating ? "hsl(25, 97%, 53%)" : "hsl(216, 12%, 30%)";` : This line of code sets the background color of each rating element. If the current rating element is the selected rating, it sets the background color to "hsl(25, 97%, 53%)"; otherwise, it sets it to "hsl(216, 12%, 30%)".
9.  `r.style.color = r === rating ? "hsl(0, 0%, 100%)" : "hsl(217, 12%, 63%)";` : This line of code sets the text color of each rating element. If the current rating element is the selected rating, it sets the text color to "hsl(0, 0%, 100%)"; otherwise, it sets it to "hsl(217, 12%, 63%)".
In summary, the  `handleRatingSelection`  function sets up click event listeners for the rating elements, updates their styles based on the selection, and stores the selected value. It provides interactivity to the rating elements and allows for capturing user input.
*/
function handleRatingSelection() {
  const ratings = document.querySelectorAll(
    ".container-unordered-list-list-item"
  );

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      const selectedValue = rating.dataset.value;

      storeSelection(selectedValue);

      ratings.forEach((r) => {
        r.style.backgroundColor =
          r === rating ? "hsl(25, 97%, 53%)" : "hsl(216, 12%, 30%)";
        r.style.color =
          r === rating ? "hsl(0, 0%, 100%)" : "hsl(217, 12%, 63%)";
      });
    });
  });
}
/*
The function  `redirectToThankYouPage`  is a JavaScript function that redirects the user to a different web page, specifically the "thankYou.html" page.
Here's how the function works:
1.  `function redirectToThankYouPage() { ... }` : This is the function declaration. It defines a function named  `redirectToThankYouPage` .
2.  `window.location.href = "thankYou.html";` : This line of code sets the value of the  `window.location.href`  property to the URL "thankYou.html". This causes the browser to navigate to the specified URL, effectively redirecting the user to the "thankYou.html" page.
In summary, when the  `redirectToThankYouPage`  function is called, it changes the URL of the current window to "thankYou.html", resulting in a page redirect.
*/
function redirectToThankYouPage() {
  window.location.href = "thankYou.html";
}

document.addEventListener("DOMContentLoaded", handleRatingSelection);
