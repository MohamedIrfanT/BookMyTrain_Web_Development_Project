// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function() {
  // Get all the dropdowns on the page
  var dropdowns = document.querySelectorAll('#class-select');

  // Add an event listener for each dropdown
  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('change', function() {
      // Get the selected option value and row data
      var selectedOption = this.value;
      var row = this.parentNode.parentNode;
      var rowData = row.dataset;

      // Update the price cell based on the selected option and row data
      var priceCell = row.querySelector('.price-cell');
      priceCell.textContent = rowData[selectedOption];
    });
  });
});

const bookButtons = document.querySelectorAll("button[type='submit']");

bookButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const row = button.closest("tr");
    const classSelect = row.querySelector("select");
    const priceCell = row.querySelector(".price-cell");

    if (classSelect.selectedIndex !== 0) {
      const price = row.dataset[classSelect.value];
      priceCell.textContent = price;
      localStorage.setItem("selectedPrice", price);
    }
  });
});
