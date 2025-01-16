const resourcesData = {
  "tutorial-videos": [
    "Video 1: Introduction",
    "Video 2: Advanced Features",
    "Video 3: Practical Examples",
    "Video 4: Real-World Scenarios",
    "Video 5: Bonus Tips"
  ],
  "tests": [
    "Test 1: Basics",
    "Test 2: Intermediate",
    "Test 3: Advanced",
    "Test 4: Practical Assessment"
  ],
  "pdf-notes": [
    "PDF 1: Beginner Guide",
    "PDF 2: Advanced Topics",
    "PDF 3: Practical Exercises"
  ],
  "homework": [
    "Homework 1: Assignment Basics",
    "Homework 2: Research Task"
  ],
  "practice-questions": [
    "Practice 1: MCQs",
    "Practice 2: Short Answers",
    "Practice 3: Case Study",
    "Practice 4: Problem Solving",
    "Practice 5: Group Discussion",
    "Practice 6: Final Challenge"
  ]
};

function displayResources(selectElement) {
  const selectedResource = selectElement.value;
  const resourceList = document.getElementById("resource-list");

  if (selectedResource && resourcesData[selectedResource]) {
    const items = resourcesData[selectedResource]
      .map((item) => `<li>${item}</li>`)
      .join("");

    resourceList.innerHTML = `
      <h4>${selectElement.options[selectElement.selectedIndex].text}</h4>
      <ul>${items}</ul>
    `;
  } else {
    resourceList.innerHTML = "<p>No resources available</p>";
  }
}
