!function(){var t=document.querySelector(".btn-start-js"),e=document.querySelector(".btn-stop-js"),n=document.querySelector("body"),o=null;function r(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,n.style.backgroundColor=r(),o=setInterval((function(){n.style.backgroundColor=r()}),1e3)})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.e10ebbda.js.map