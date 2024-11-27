document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname; // Get the current file path
  if (currentPath.includes('index.html')) {
    const mainHeading = document.querySelector('h1');
    const hours = new Date().getHours();
    const greeting = mainHeading.textContent = `${greeting} Neidys Velasquez`;
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const mainHeading = document.querySelector('h1');
  const hours = new Date().getHours();
  let greeting;

  if (hours < 12) {
    greeting = 'Good Morning!';
  } else if (hours < 18) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }

  if (mainHeading) {
    mainHeading.textContent = `${greeting} Welcome to My Portfolio!`;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent actual form submission
      alert('Thank you! Your form has been submitted.');
    });
  });
});
