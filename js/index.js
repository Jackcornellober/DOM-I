const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navMenu = document.querySelector('nav');

let newA1 = document.createElement('a');
newA1.textContent = 'Cat Pictures';
navMenu.appendChild(newA1);



let navItems = document.querySelectorAll('nav > a')
navItems[0].textContent = 'Services';
navItems[1].textContent = 'Product';
navItems[2].textContent = 'Vision';
navItems[3].textContent = 'Features';
navItems[4].textContent = 'About';
navItems[5].textContent = 'Contact';

let newA3 = document.createElement('a');
newA3.textContent = 'Affiliate Program';
navMenu.prepend(newA3);

let navItemsFull = document.querySelectorAll('nav > a')
navItemsFull.forEach(x => x.style.color = 'green')

let headerImage = document.querySelector('#cta-img');
headerImage.src = "img/header-img.png"

let middleImage = document.querySelector('#middle-img')
middleImage.src = "img/mid-page-accent.jpg"

let ctaHeader = document.querySelector('.cta-text > h1')

let boi1 = document.createTextNode('dom')
let boi2 = document.createTextNode('is')
let boi3 = document.createTextNode('awesome')
var br1 = document.createElement("br");
var br2 = document.createElement("br");
var br3 = document.createElement("br");
ctaHeader.appendChild(boi1)
ctaHeader.appendChild(br1)
ctaHeader.appendChild(boi2)
ctaHeader.appendChild(br2)
ctaHeader.appendChild(boi3)

document.querySelector('button').textContent = 'Get Started'

let h4s = document.querySelectorAll('h4')
h4s[0].textContent = 'Features';
h4s[1].textContent = 'About';
h4s[2].textContent = 'Services';
h4s[3].textContent = 'Product';
h4s[4].textContent = 'Vision';
h4s[5].textContent = 'Contact';

let paragraphs = document.querySelectorAll('p')
paragraphs[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[5].textContent = `123 Way 456 Street \r Somewhere, USA`
paragraphs[6].textContent = '1 (888) 888-8888'
paragraphs[7].textContent = 'sales@greatidea.io'