// M M Aduri - Search System

const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".card");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    products.forEach((card) => {
      const title = card.querySelector("h3").innerText.toLowerCase();

      if (title.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({
        behavior:"smooth"
      });
    }
  });
});

// Welcome Message
window.onload = function(){
  console.log("Welcome to M M Aduri");
};
