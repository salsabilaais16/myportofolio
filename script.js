const toggle = document.getElementById("toggle");
const menu   = document.getElementById("menu");

toggle.onclick = () => {
  menu.classList.toggle("active");
};


/* ─────────────────────────────────────────────────
   2. ACTIVE NAVBAR LINK
───────────────────────────────────────────────── */
document.querySelectorAll(".nav-menu a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.querySelectorAll(".nav-menu a").forEach(function(n) {
      n.classList.remove("active");
    });
    this.classList.add("active");
    menu.classList.remove("active");
  });
});

const typedEl = document.getElementById("typed-text");
const lines   = ["Salsabila", "Nur Aisyah"];

let lineIdx  = 0;
let charIdx  = 0;
let deleting = false;

function render() {
  const done    = lines.slice(0, lineIdx); 
  const current = lines[lineIdx].slice(0, charIdx); 
  typedEl.innerHTML = done.map(l => l + "<br>").join("") + current;
}

function type() {
  const currentLine = lines[lineIdx];

  if (!deleting) {
    charIdx++;
    render();

    if (charIdx === currentLine.length) {
      if (lineIdx < lines.length - 1) {
        lineIdx++;
        charIdx = 0;
        setTimeout(type, 500); 
      } else {
        setTimeout(() => { deleting = true; type(); }, 1800); 
      }
      return;
    }
  } else {
    if (charIdx > 0) {
      charIdx--;
      render();
    } else {
      if (lineIdx > 0) {
        lineIdx--;
        charIdx = lines[lineIdx].length;
        setTimeout(type, 80);
      } else {
        deleting = false;
        charIdx  = 0;
        lineIdx  = 0;
        setTimeout(type, 400);
      }
      return;
    }
  }

  setTimeout(type, deleting ? 55 : 85);
}

setTimeout(type, 400); // mulai setelah 400ms halaman terbuka

const roleEl  = document.getElementById("role-text");
const roles   = ["UI/UX Designer", "Frontend Developer"];
let roleIdx   = 0;

function switchRole() {
  roleIdx = (roleIdx + 1) % roles.length;
  roleEl.style.animation = "none";
  roleEl.textContent = roles[roleIdx];
  roleEl.offsetHeight;
  roleEl.style.animation = "slideIn 0.4s ease";
}
setInterval(switchRole, 2500);