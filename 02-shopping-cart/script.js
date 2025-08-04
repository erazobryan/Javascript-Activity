const cart = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Pencil", price: 10, quantity: 5 }
];

// Calculate total price per item and overall cart value
const cartWithTotal = cart.map(item => ({
  ...item,
  total: item.price * item.quantity
}));

const totalCartValue = cartWithTotal.reduce((sum, item) => sum + item.total, 0);

// Helper to create a section with a title and list
const createSection = (title, items) => {
  const section = document.createElement("div");
  const heading = document.createElement("h3");
  heading.textContent = title;
  section.appendChild(heading);

  const ul = document.createElement("ul");
  items.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });

  section.appendChild(ul);
  return section;
};

// Build sections
const descriptionSection = createSection("Item Descriptions", cart.map(item => `${item.name} - ₱${item.price}`));
const totalSection = createSection("Item Totals", cartWithTotal.map(item => `${item.name} x ${item.quantity} = ₱${item.total}`));
const valueDisplay = document.createElement("p");
valueDisplay.textContent = `Total Cart Value: ₱${totalCartValue}`;

// Render to page
document.body.append(descriptionSection, totalSection, valueDisplay);