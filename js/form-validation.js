document.addEventListener("DOMContentLoaded", function () {
  // ===== Validate Request Info Form =====
  const requestForm = document.querySelector(".request-info-form");
  if (requestForm) {
    requestForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      const name = requestForm.name.value.trim();
      const email = requestForm.email.value.trim();
      const vehicle = requestForm.vehicle.value.trim();
      const message = requestForm.message.value.trim();

      if (name.length < 3) {
        alert("Please enter a valid name (at least 3 characters).");
        valid = false;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        valid = false;
      }

      if (vehicle.length < 3) {
        alert("Please enter a valid vehicle.");
        valid = false;
      }

      if (message.length < 10) {
        alert("Message should be at least 10 characters.");
        valid = false;
      }

      if (valid) requestForm.submit();
    });
  }

  // ===== Validate Newsletter Form =====
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      const email = newsletterForm.email.value.trim();
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        valid = false;
      }

      if (valid) newsletterForm.submit();
    });
  }

  // ===== Validate Contact Form =====
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const subject = contactForm.subject.value.trim();
      const message = contactForm.message.value.trim();

      if (name.length < 3) {
        alert("Please enter a valid name (at least 3 characters).");
        valid = false;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        valid = false;
      }

      if (subject.length < 3) {
        alert("Please enter a valid subject.");
        valid = false;
      }

      if (message.length < 10) {
        alert("Message should be at least 10 characters.");
        valid = false;
      }

      if (valid) contactForm.submit();
    });
  }
});
