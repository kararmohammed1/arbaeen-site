// عند تحميل الصفحة، نضيف كلاس 'visible' الى محتوى الصفحة لتفعيل الانيميشن
document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.querySelector('.main-content');
  if(mainContent){
    mainContent.classList.add('visible');
  }
});