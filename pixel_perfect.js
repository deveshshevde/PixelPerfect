var lastScrollTop = 0;
// Detect the scroll.
window.addEventListener(
  "scroll",
  function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
      // Downscroll code
      //   console.log("\n\ngoing down V\n\n");

      document.getElementById("box-shadow").classList.add("great");
    } else {
      // Upscroll code
      //   console.log("\n\ngoing up ^\n\n");
      document.getElementById("box-shadow").classList.remove("great");
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);
