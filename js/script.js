window.onload = function () {
  
    // 언어 목록 기능
  const langBt = document.getElementById("lang-bt");
  const langList = document.getElementById("lang-list");

  const hambugerBt = document.getElementById("hambuger-bt");
  const hambugerList = document.getElementById("hambuger-list");

  const toggleListArr = [langList, hambugerList];

  function listToggle(버튼, 목록) {
    목록.style.display = "none";
    버튼.addEventListener("click", function (event) {
      const nowListId = 목록.getAttribute("id");

      const hideArr = toggleListArr.filter(function (item) {
        let id = item.getAttribute("id");

        if (id !== nowListId) {
          return this;
        }
      });

      console.log(hideArr);

      hideArr.forEach(function (item) {
        item.style.display = "none";
      });

      if (this.tagName === "A") {
        event.preventDefault();
      }
      const css = getComputedStyle(목록).display;
      if (css === "none") {
        목록.style.display = "block";
      } else {
        목록.style.display = "none";
      }
    });
  }
  listToggle(langBt, langList);
//   listToggle(hambugerBt, hambugerList);
};
