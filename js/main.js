import { links } from "./links.js";

const linkContainer = document.getElementById("links");

function addLink(name, link) {
    return `
  <a href="${link}" class="link" target="blank">
    <span>${name}  </span>
  </a>
  `;
}

let allLinks = "";

links.forEach((ele) => {
    let link = ele.link;
    let name = ele.name;

    allLinks += addLink(name, link);
});

linkContainer.innerHTML = allLinks;
