
import './style.scss';

// Write Javascript code!
const appDiv = document.getElementById('app');
const navbar = document.getElementById('site-navbar');
const pageHeader = document.getElementById('page-header');
const footer = document.getElementById('page-footer');

function setHeadContent() {
  let headContents = require('./html-partials/head-content.html');
  // document.querySelector("head").insertAdjacentHTML(`${headContents}`);
  const headElement = document.head;
  headElement.insertAdjacentHTML("beforeend", headContents);
}
function createNavbar() {
  const navbarContents = require('./html-partials/navbar.html');
  navbar.innerHTML = `${navbarContents}`;
}
function createHeader() {
  let headerContent = require('./html-partials/page-header.html');
  pageHeader.innerHTML = `${headerContent}`;
}
function createFooter() {
  let footerContent = require('./html-partials/page-footer.html');
  footer.innerHTML = `${footerContent}`;
}
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/*
  function navbarComponent() {
    const navbarContents = require('./html-partials/navbar.html');
    let navbarElement = document.createElement('nav');
    navbarElement.innerHTML = ` ${navbarContents} `;
    return navbarElement;
  }

  const navBar = navbarComponent();
  const docBody = document.getElementsByTagName('body')[0];
  docBody.insertBefore(navBar, appDiv);
*/

setHeadContent();
createNavbar();
createHeader();
createFooter();