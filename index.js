/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

// mapping over projects
const workContainer = document.querySelector(".work__boxes");

const projects = Object.freeze([
  {
    id:1,
    name: "Shopping Cart",
    description: "A mock online shopping website that sells traditional clothing.",
    tools: ["ReactJS", "React Router"],
    images: ["./images/products-page.jpg", "./images/product-detail-page.jpg"],
    siteLink: "https://siya-shopping-cart.netlify.app",
    githubLink: "https://github.com/vusiSiya/Online-Shopping-Store"
  },
  {
    id:2,
    name: "Kasi Fast Food",
    description: "A fast food demo website",
    tools: ["Imba","TypeScript", "Firebase Auth", "Firebase Firestore"],
    images: ["./images/kasi-menu.jpg", "./images/kasi-login.jpg" ],
    siteLink: "https://kasi-fast-food.netlify.app",
    githubLink: "https://github.com/vusiSiya/kasi-fast-food"
  }
])

workContainer.innerHTML = projects.map((project) =>{
  return (`
    <div class="work__box">
      <div class="work__text">
          <h3>${project.name}</h3>
          <p>${project.description}</p>

          <ul class="work__list">
            ${project.tools.map(tool=> `<li>${tool}</li>`).join("")}
          </ul>
          
          <div class="work__links">
            <a href="${project.siteLink}"  target="_blank" rel="noopener noreferrer" class="link__text">
              Visit Site <span>&rarr;</span>
            </a>
            <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" >
              <img src="./images/github.svg" class="work__code" title="View Source Code" alt="GitHub">
            </a>
          </div>
        </div>
        <div class="work__image-box">
          ${project.images.map(imgUrl =>`
            <img src="${imgUrl}" class="work__image" alt="Project ${project.id}" />`).join("")
          }
        </div>
      </div>
    <div>
    `)
}).join("")

