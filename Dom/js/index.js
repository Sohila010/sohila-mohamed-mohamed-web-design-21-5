function changebgtext(element) {
  var items = document.querySelectorAll("#menu li");
  items.forEach((item) => item.classList.remove("bg-danger", "text-white"));
  element.classList.add("bg-danger", "text-white");
}
