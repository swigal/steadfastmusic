/* Place your JavaScript in this file */

// Function to filter elements based on the selected tag on home page
function filterElements(filterType) {
  // 1. Get all filterable items
  const items = document.querySelectorAll('.filterable-item');

  // 2. Iterate over the items and toggle the 'hidden' class
  items.forEach(item => {
    if (filterType === 'all') {
      // Show all elements
      item.classList.remove('hidden');
    } else {
      // Check if the element's data-category matches the filter type
      const itemType = item.getAttribute('data-category');
      if (itemType === filterType) {
        // Show matching elements
        item.classList.remove('hidden');
      } else {
        // Hide non-matching elements
        item.classList.add('hidden');
      }
    }
  });
}