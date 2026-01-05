
/* ----------------------------------
		Mobile Menu
---------------------------------- */

	const menuIcon = document.querySelector(".menu-icon");
	const menu = document.querySelector(".menu");

	menuIcon.addEventListener("click", () => {
	  menu.classList.toggle("active");
	});





/* ----------------------------------
		Mobile Menu Highlight
---------------------------------- */

	const menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      menuLinks.forEach(item => item.classList.remove("active"));
      this.classList.add("active");
    });
  });





/* ----------------------------------
		Sticky Header
---------------------------------- */

	const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });





/* ----------------------------------
		About us Animation
---------------------------------- */

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    "#about-fanta",
    {
      y: 50
    },
    {
      y: -50,
      duration: 3, // smooth seconds feel
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".about-image",
        start: "top center",
        end: "bottom center",
        scrub: 2 // scroll = animation sync
      }
    }
  );

  gsap.to("#about-fanta", {
	  y: -50,
	  repeat: -1,
	  yoyo: true,
	  duration: 2,
	  ease: "sine.inOut"
	});





/* ----------------------------------
		Product Slider Animation
---------------------------------- */

  var tl = gsap.timeline({
  	defaults: { ease: "none" },
  	scrollTrigger:{
  	trigger: ".product-box",
  	start: "top 65%",
  	end: "bottom 170%",
  	scrub: 3,
  	markers: false,
  }})

  //	Mango Slice
  tl.to("#slice-drink",{
  	x: 811,   	// horizontal scroll
  	y: 1550,    // Vertical scroll
  })

  tl.to("#slice-mango",{
  	x: 830,   	// horizontal scroll
  	y: 1500,    // vertical scroll
  }, "<")																//	👉 "<" means: "Start this animation at the same time as the previous animation."


  //	Fanta Drink
  tl.to("#fanta-drink",{
  	x: -420,   	// horizontal scroll
  	y: 1480,    // Vertical scroll
  }, "<")

  tl.to("#fanta-orange-slice",{
  	x: -400,   	// horizontal scroll
  	y: 1460,    // vertical scroll
  }, "<")


  //	7-Up Drink
  tl.to("#seven-up-drink",{
  	x: -380,   	// horizontal scroll
  	y: 1550,    // Vertical scroll
  }, "<")

  tl.to("#seven-up-lemon-slice",{
  	x: -400,   	// horizontal scroll
  	y: 1540,    // vertical scroll
  }, "<")





  window.addEventListener("load", () => {

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px) and (max-width: 1024px)", () => {

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger:{
          trigger: ".product-box",
          start: "top 70%",
          end: "bottom 160%",
          scrub: 2,
          markers: false, // DEBUG sathi ON kar
        }
      });

      tl.to("#slice-drink",{ x: 0, y: 1500 })
        .to("#slice-mango",{ x: 470, y: 880 }, "<")
        /*.to("#fanta-drink",{ x: -260, y: 900 }, "<")
        .to("#fanta-orange-slice",{ x: -240, y: 880 }, "<")
        .to("#seven-up-drink",{ x: -230, y: 920 }, "<")
        .to("#seven-up-lemon-slice",{ x: -250, y: 900 }, "<");*/

    });

  });






/* ----------------------------------
		END
---------------------------------- */	