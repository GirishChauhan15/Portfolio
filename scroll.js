const width = window.innerWidth;
if (window.innerWidth >= 1100) {
  ScrollReveal({
    reset: false,
    distance: "50px",
    duration: 3000,
    delay: 400,
  });

  ScrollReveal().reveal(".logo", { delay: 100, origin: "left" });
  ScrollReveal().reveal(".nav", { delay: 150, origin: "right" });

  ScrollReveal().reveal(".hero_content", { delay: 250, origin: "left" });
  ScrollReveal().reveal(".hero_img", { delay: 200,distance:'0'});

  ScrollReveal().reveal(".about_me-one", { delay: 150, origin: "right"});
  ScrollReveal().reveal(".about_me-two", { delay: 200, origin: "left" });

  ScrollReveal().reveal(".skills_title", { delay: 200, origin: "left" });
  ScrollReveal().reveal(".skills_info", { delay: 350, distance:'0', scale:'1.2'});

  ScrollReveal().reveal(".projects_title", { delay: 100, origin: "left" });
  ScrollReveal().reveal(".projects_btn", { delay: 100, origin: "right" });
  ScrollReveal().reveal(".project", { delay: 250, distance:'0', scale:'1.1'});

  
  ScrollReveal().reveal(".contact_me-one", { delay: 200, origin: "left"});
  ScrollReveal().reveal(".contact_me-two", { delay: 150, origin: "right" });
}
