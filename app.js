const themeButton = document.getElementById('theme-button');
const body = document.body;

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme)

    if (theme == 'light') {
        themeButton.style.backgroundImage = 'url(icons/sun.svg)';
    }
    else {
        themeButton.style.backgroundImage = 'url(icons/moon.svg)';
    }
}

themeButton.onclick = () => {
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
        themeButton.style.backgroundImage = 'url(icons/moon.svg)';
    }
    else {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
        themeButton.style.backgroundImage = 'url(icons/sun.svg)';
    }
}

const mobileMenuBtn = document.getElementById('mobile-menu-cta');
const mobileMenu = document.getElementById('m-menu');
const content = document.getElementById('content');

mobileMenuBtn.onclick = () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
};

content.addEventListener('click', () => {

    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    };
});


const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }