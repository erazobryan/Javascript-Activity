// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};

const outputDiv = document.getElementById("output");

// 1. List all enabled settings
const enabledList = Object.entries(settings)
  .filter(([key, value]) => value === true)
  .map(([key]) => `${key}: true`)
  .join("<br>");
outputDiv.innerHTML += `<h3>Enabled Settings:</h3><p>${enabledList}</p>`;

// 2. Count how many settings are set to true
const trueCount = Object.values(settings).filter(value => value === true).length;
outputDiv.innerHTML += `<h3>Total Enabled Settings:</h3><p>${trueCount}</p>`;

// 3 & 4. Convert to array, filter, then rebuild the object
const filteredArray = Object.entries(settings).filter(([_, value]) => value === true);
const enabledSettings = Object.fromEntries(filteredArray);

outputDiv.innerHTML += `<h3>Filtered Settings Object:</h3><pre>${JSON.stringify(enabledSettings, null, 2)}</pre>`;