// Add event listeners to close the dropdown when clicking outside of it
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target)) {
      const dropdownMenu = dropdown.querySelector('.dropdown-menu');
      dropdownMenu.style.display = 'none';
    }
  });
  
  // Toggle the dropdown menu when clicking the button
  document.querySelector('.dropdown-button').addEventListener('click', function() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu.style.display === 'block') {
      dropdownMenu.style.display = 'none';
    } else {
      dropdownMenu.style.display = 'block';
    }
  });
  