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
navItems[0].textContent = siteContent["nav"]['nav-item-1'];
navItems[1].textContent = siteContent["nav"]['nav-item-2'];
navItems[2].textContent = siteContent["nav"]['nav-item-3'];
navItems[3].textContent = siteContent["nav"]['nav-item-4'];
navItems[4].textContent = siteContent["nav"]['nav-item-5'];
navItems[5].textContent = siteContent["nav"]['nav-item-6'];

let newA3 = document.createElement('a');
newA3.textContent = 'Affiliate Program';
navMenu.prepend(newA3);

let navItemsFull = document.querySelectorAll('nav > a')
navItemsFull.forEach(x => x.style.color = 'green')

let headerImage = document.querySelector('#cta-img');
headerImage.src = siteContent["cta"]["img-src"]

let middleImage = document.querySelector('#middle-img')
middleImage.src = siteContent["main-content"]["middle-img-src"]

let ctaHeader = document.querySelector('.cta-text > h1')

let text1 = document.createTextNode('dom')
let text2 = document.createTextNode('is')
let text3 = document.createTextNode('awesome')
var br1 = document.createElement("br");
var br2 = document.createElement("br");
var br3 = document.createElement("br");
ctaHeader.appendChild(text1)
ctaHeader.appendChild(br1)
ctaHeader.appendChild(text2)
ctaHeader.appendChild(br2)
ctaHeader.appendChild(text3)

document.querySelector('button').textContent = 'Get Started'

let h4s = document.querySelectorAll('h4')
h4s[0].textContent = siteContent['main-content']['features-h4'];
h4s[1].textContent = siteContent['main-content']['about-h4'];
h4s[2].textContent = siteContent['main-content']['services-h4'];
h4s[3].textContent = siteContent['main-content']['product-h4'];
h4s[4].textContent = siteContent['main-content']['vision-h4'];
h4s[5].textContent = siteContent['main-content']['contact-h4'];

let paragraphs = document.querySelectorAll('p')
paragraphs[0].textContent = siteContent["main-content"]["features-content"]
paragraphs[1].textContent = siteContent["main-content"]["about-content"]
paragraphs[2].textContent = siteContent["main-content"]["services-content"]
paragraphs[3].textContent = siteContent["main-content"]["product-content"]
paragraphs[4].textContent = siteContent["main-content"]["vision-content"]
paragraphs[5].textContent = siteContent["contact"]["address"]
paragraphs[6].textContent = siteContent["contact"]["phone"]
paragraphs[7].textContent = siteContent["contact"]["email"]
paragraphs[8].textContent = siteContent["footer"]["copyright"]

let contact = document.querySelector('.contact')
contact.style.width = '10rem'

console.log(siteContent.nav.keys)