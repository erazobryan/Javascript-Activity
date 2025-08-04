const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // default grade 0
];

function displayStudent({ name, grade = 0 }) {
  return `Student: ${name}, Grade: ${grade}`;
}

// Helper to add list items
function addToList(id, items) {
  const ul = document.getElementById(id);
  items.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });
}

// Uppercase names
addToList("uppercase-names", students.map(s => s.name.toUpperCase()));

// Top students (grade ≥ 85)
addToList("top-students", students
  .filter(({ grade = 0 }) => grade >= 85)
  .map(({ name, grade }) => `${name} - ${grade}`)
);

// Average grade
const avg = students.reduce((sum, { grade = 0 }) => sum + grade, 0) / students.length;
document.getElementById("average-grade").textContent = avg.toFixed(2);

// All students using displayStudent
addToList("all-students", students.map(displayStudent));