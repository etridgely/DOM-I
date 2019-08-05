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
//header
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('a');
nav[0].textContent = (siteContent["nav"]["nav-item-1"])
nav[1].textContent = (siteContent["nav"]["nav-item-2"])
nav[2].textContent = (siteContent["nav"]["nav-item-3"])
nav[3].textContent = (siteContent["nav"]["nav-item-4"])
nav[4].textContent = (siteContent["nav"]["nav-item-5"])
nav[5].textContent = (siteContent["nav"]["nav-item-6"])

// cta 
let mainImg = document.querySelector("#cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"])

let mainText = document.querySelector("h1");
mainText.textContent = (siteContent["cta"]["h1"])

let button = document.querySelector(".cta-text button");
button.textContent = (siteContent["cta"]["button"])

//main content
let middleHeader = document.querySelectorAll('.top-content .text-content h4');
middleHeader[0].textContent = (siteContent["main-content"]["features-h4"])
middleHeader[1].textContent = (siteContent["main-content"]["about-h4"])

let middleText = document.querySelectorAll('.top-content .text-content p');
middleText[0].textContent = (siteContent["main-content"]["features-content"])
middleText[1].textContent = (siteContent["main-content"]["about-content"])

let bottomHeader = document.querySelectorAll('.bottom-content .text-content h4');
bottomHeader[0].textContent = (siteContent["main-content"]["services-h4"])
bottomHeader[1].textContent = (siteContent["main-content"]["product-h4"])
bottomHeader[2].textContent = (siteContent["main-content"]["vision-h4"])

let bottomText = document.querySelectorAll('.bottom-content .text-content p');
bottomText[0].textContent = (siteContent["main-content"]["services-content"])
bottomText[1].textContent = (siteContent["main-content"]["product-content"])
bottomText[2].textContent = (siteContent["main-content"]["vision-content"])


let middleImage = document.querySelector(".middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//contact

let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = (siteContent["contact"]["contact-h4"])

let contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = (siteContent["contact"]["address"])
contactText[1].textContent = (siteContent["contact"]["phone"])
contactText[2].textContent = (siteContent["contact"]["email"])

//footer

let footer = document.querySelector("footer p");
footer.textContent = (siteContent["footer"]["copyright"])
