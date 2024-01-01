/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
// import * as bootstrap from "bootstrap";

/**
 * Write any other JavaScript below
 */

const mButton = document.querySelector("#sandwich");
const menu = document.querySelector("#menu");

mButton.addEventListener(
  "click",
  (e) => {
    let button;
    if (
      e.target.classList[0] === "sandwich__bar" 
    )
      button = e.target.parentElement;
    else {
      button = e.target;
    }
    let bars=button.querySelectorAll(".sandwich__bar");
    
    bars[0].classList.toggle("translate-y-[11px]");
    bars[0].classList.toggle("rotate-45");
    bars[1].classList.toggle("opacity-0");
    bars[2].classList.toggle("-translate-y-[11px]");
    bars[2].classList.toggle("-rotate-45");

    menu.classList.toggle("hidden");
  },
  false,
);
