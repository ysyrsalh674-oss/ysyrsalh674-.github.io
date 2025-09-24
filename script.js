const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.style.display === 'flex' || mainNav.style.display === 'block';
  mainNav.style.display = isOpen ? 'none' : 'block';
  if (!isOpen) mainNav.style.flexDirection = 'column';
});
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){
    alert('الرجاء ملء جميع الحقول.');
    return;
  }
  const to = 'info@example.com';
  const subject = encodeURIComponent('رسالة من الموقع: ' + name);
  const body = encodeURIComponent('الاسم: ' + name + '\n' + 'البريد: ' + email + '\n\n' + message);
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});