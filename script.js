window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// Function to generate a random time between 1 and 5 seconds
function getRandomTime() {
  return Math.random() * 4000 + 1000; // Random time between 1 and 5 seconds in milliseconds
}

// Create an array of promises with random resolve times
for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const randomTime = getRandomTime();
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved in ${randomTime / 1000} seconds`);
    }, randomTime);
  });
  promises.push(promise);
}

// Use Promise.any to wait for the first promise to resolve
Promise.any(promises)
  .then((result) => {
    // Print the result to the "output" div
    document.getElementById("output").textContent = result;
  })
  .catch((error) => {
    console.error("All promises failed:", error);
  });
