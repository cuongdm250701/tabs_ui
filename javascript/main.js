const getTabItem = document.querySelectorAll(".tab-item");
const tabActive = document.querySelector(".tab-item.active");
const line = document.querySelector(".line");
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";
const pane = document.querySelectorAll(".tab-pane");
console.log(pane);
getTabItem.forEach((tab, index) => {
  //   console.log(tab);
  tab.onclick = function () {
    const tabActive = document.querySelector(".tab-item.active");
    console.log({ tabActive });
    tabActive.classList.remove("active");
    this.classList.add("active");
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    const paneActive = document.querySelector(".tab-pane.active");
    paneActive.classList.remove("active");
    pane[index].classList.add("active");
  };
});
