document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  const typedTextElement = document.querySelector(".typed-text");
  if (typedTextElement) {
    const words = ["Fullstack", "Frontend", "Backend", "Web"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 1000; 
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500; 
      }

      setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
  }

  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href").substring(1) === current) {
        item.classList.add("active");
      }
    });

    const header = document.querySelector("header");
    if (header) {
      if (window.scrollY > 100) {
        header.style.padding = "10px 0";
        header.style.background = "rgba(38, 28, 95, 0.98)";
      } else {
        header.style.padding = "15px 0";
        header.style.background = "rgba(38, 28, 95, 0.95)";
      }
    }
  });

    //* EM BREVE FUNCIONALIDADE DO FORMULÁRIO *//
  // Envio de formulário
  // const contactForm = document.getElementById("contactForm");
  // if (contactForm) {
  //   contactForm.addEventListener("submit", (e) => {
  //     e.preventDefault();

  //     // pegar do html os campos a serem preenchidos
  //     const name = document.getElementById("name").value;
  //     const email = document.getElementById("email").value;
  //     const message = document.getElementById("message").value;

  //     // Quando for enviado os dados no formulário resetar os campos
  //     alert(`Obrigado ${name}! Sua mensagem foi enviada com sucesso.`);

  //     // Reseta formulário
  //     contactForm.reset();
  //   });
  // }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
