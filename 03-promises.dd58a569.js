!function(){var e=document.querySelector(".delay-js"),o=document.querySelector(".step-js"),n=document.querySelector(".amount-js"),t=document.querySelector(".button-js");function c(e,o){new Promise((function(n,t){var c=Math.random()>.3;setTimeout((function(){c?n({position:e,delay:o}):t({position:e,delay:o})}),o)})).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}t.addEventListener("click",(function(t){t.preventDefault();for(var u=Number(e.value),i=Number(o.value),a=Number(n.value),r=0;r<a;r++){c(r+1,u),u+=i}}))}();
//# sourceMappingURL=03-promises.dd58a569.js.map
