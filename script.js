// Function to generate a random number between min and max
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add your promises to the `promises` array
for (let i = 0; i < 5; i++) {
  // Generate a random time between 1 and 5 seconds
  const randomTime = getRandomTime(1000, 5000);

  // Create a promise that resolves after the random time
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved in ${randomTime} milliseconds`);
    }, randomTime);
  });

  // Push the promise into the `promises` array
  window.promises.push(promise);
}

// Use Promise.any() to wait for the first promise to resolve
Promise.any(window.promises)
  .then((result) => {
    // Get the output div element
    const outputDiv = document.getElementById("output");

    // Display the result in the div
    outputDiv.innerText = result;
  })
  .catch((error) => {
    console.error("All promises were rejected:", error);
  });
