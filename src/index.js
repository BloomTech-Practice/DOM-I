const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("project wired!");

// nav
let nav1 = document.querySelector("header nav a");
nav1.textContent = siteContent["nav"]["nav-item-1"];
nav1.classList.add("italic");

let nav2 = nav1.nextElementSibling;
nav2.textContent = siteContent["nav"]["nav-item-2"];
nav2.classList.add("italic");

let nav3 = nav2.nextElementSibling;
nav3.textContent = siteContent["nav"]["nav-item-3"];
nav3.classList.add("italic");

let nav4 = nav3.nextElementSibling;
nav4.textContent = siteContent["nav"]["nav-item-4"];
nav4.classList.add("italic");

let nav5 = nav4.nextElementSibling;
nav5.textContent = siteContent["nav"]["nav-item-5"];
nav5.classList.add("italic");

let nav6 = nav5.nextElementSibling;
nav6.textContent = siteContent["nav"]["nav-item-6"];
nav6.classList.add("italic");

// logo
let logo = document.querySelector("#logo-img");
logo.setAttribute("src", siteContent["images"]["logo-img"]);

// h1
let mainTitle = document.querySelector(".cta-text h1");
mainTitle.textContent = siteContent["cta"]["h1"];

// button
let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

// mainImage
let mainImage = document.querySelector("#cta-img");
mainImage.setAttribute("src", siteContent["images"]["cta-img"]);

//features title
let topContentTitleOne = document.querySelector(
  ".main-content .top-content .text-content h4"
);
topContentTitleOne.textContent = siteContent["main-content"]["features-h4"];

//features content
let topContentTextOne = document.querySelector(
  ".main-content .top-content .text-content p"
);
topContentTextOne.textContent = siteContent["main-content"]["features-content"];

//about title
let aboutTitle = document
  .querySelector(".main-content .top-content .text-content")
  .nextElementSibling.querySelector("h4");
aboutTitle.textContent = siteContent["main-content"]["about-h4"];

//about content
let aboutContent = document
  .querySelector(".main-content .top-content .text-content")
  .nextElementSibling.querySelector("p");

aboutContent.textContent = siteContent["main-content"]["about-content"];

//middle image
let middleImage = document.querySelector("#middle-img");
middleImage.setAttribute("src", siteContent["images"]["accent-img"]);

// services title
let servicesTitle = document.querySelector(".bottom-content .text-content h4");
servicesTitle.textContent = siteContent["main-content"]["services-h4"];

//services content
let servicesContent = document.querySelector(".bottom-content .text-content p");
servicesContent.textContent = siteContent["main-content"]["services-content"];

//product title
let productTitle = document
  .querySelector(".bottom-content .text-content")
  .nextElementSibling.querySelector("h4");
productTitle.textContent = siteContent["main-content"]["product-h4"];

//product content
let productContent = document
  .querySelector(".bottom-content .text-content")
  .nextElementSibling.querySelector("p");
productContent.textContent = siteContent["main-content"]["product-content"];

//vision title
let visionTitle = document
  .querySelectorAll(".main-content .bottom-content .text-content")[2]
  .querySelector("h4");

visionTitle.textContent = siteContent["main-content"]["vision-h4"];

//vision content
let visionContent = document
  .querySelectorAll(".main-content .bottom-content .text-content")[2]
  .querySelector("p");

visionContent.textContent = siteContent["main-content"]["vision-content"];

//contact
let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

//contactContentOne
let contactContentOne = document.querySelectorAll(".contact p")[0];
contactContentOne.textContent = siteContent["contact"]["address"];

//contactContentTwo
let contactContentTwo = document.querySelectorAll(".contact p")[1];
contactContentTwo.textContent = siteContent["contact"]["phone"];

//contactContentThree
let contactContentThree = document.querySelectorAll(".contact p")[2];
contactContentThree.textContent = siteContent["contact"]["email"];

//copyright
let copyright = document.querySelector("footer a");
copyright.textContent = siteContent["footer"]["copyright"];
copyright.classList.add("bold");
