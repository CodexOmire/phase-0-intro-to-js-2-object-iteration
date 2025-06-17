// Recursive function to iterate deeply through arrays and objects
function deepIterator(target) {
  if (Array.isArray(target)) {
    // Handle arrays using for...of
    for (const element of target) {
      deepIterator(element);
    }
  } else if (target !== null && typeof target === "object") {
    // Handle objects using for...in
    for (const key in target) {
      deepIterator(target[key]);
    }
  } else {
    // Base case: primitive value (string, number, etc.)
    console.log(target);
  }
}

// Test case 1: Nested array
const numbers = [1, [2, [4, [5, [6]], 3]]];

console.log("Nested Array Output:");
deepIterator(numbers);
// Expected output: 1, 2, 4, 5, 6, 3

// Test case 2: Nested object with arrays and objects
const userInfo = {
  firstName: "Avi",
  lastName: "Flombaum",
  company: {
    name: "Flatbook Labs",
    jobTitle: "Developer Apprentice",
  },
  friends: [
    {
      firstName: "Nancy",
      lastName: "Burgess",
      company: {
        name: "Flatbook Labs",
        jobTitle: "Developer Apprentice",
      },
    },
    {
      firstName: "Corinna",
      lastName: "Jackson",
      company: {
        name: "Flatbook Labs",
        jobTitle: "Lead Developer",
      },
    },
  ],
  projects: [
    {
      title: "Flatbook",
      description: "The premier Flatiron School-based social network.",
    },
    {
      title: "Scuber",
      description: "A startup helping parents with kid transport.",
    },
  ],
};

console.log("\nNested Object Output:");
deepIterator(userInfo);
// Expected output: all primitive string values in the object
