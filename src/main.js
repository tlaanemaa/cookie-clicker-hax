if (!window.___CLICKER_HX) {
  console.log("Attaching Cookie Clicker häx!");
  (() => {
    const cookie = document.getElementById("bigCookie");
    const click = () => {
      cookie.click();
      setTimeout(click, 15);
    };
    click();
  })();
}

window.___CLICKER_HX = true;
