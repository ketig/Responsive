// ნავიგაციის ფუნქციონალი
function showSection(sectionId) {
  // ყველა სექციის დამალვა
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // ყველა tab-ის deactivate
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // არჩეული სექციის ჩვენება
  document.getElementById(sectionId).classList.add("active");
  event.target.classList.add("active");

  // პროგრეს ბარის განახლება
  updateProgress();
}

// პროგრეს ბარის განახლება
function updateProgress() {
  const activeTab = document.querySelector(".nav-tab.active");
  const allTabs = document.querySelectorAll(".nav-tab");
  const activeIndex = Array.from(allTabs).indexOf(activeTab);
  const progress = ((activeIndex + 1) / allTabs.length) * 100;

  document.getElementById("progressBar").style.width = progress + "%";
}

// ფორმის ვალიდაცია (მაგალითისთვის)
function validateDemoForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  let isValid = true;

  // სახელის შემოწმება
  if (name.value.length < 2) {
    name.style.borderColor = "#e74c3c";
    isValid = false;
  } else {
    name.style.borderColor = "#27ae60";
  }

  // ელ-ფოსტის შემოწმება
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    email.style.borderColor = "#e74c3c";
    isValid = false;
  } else {
    email.style.borderColor = "#27ae60";
  }

  return isValid;
}

// ფორმის ველების რეალურ დროში ვალიდაცია
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input, textarea, select");

  inputs.forEach((input) => {
    input.addEventListener("blur", validateDemoForm);
    input.addEventListener("focus", function () {
      this.style.borderColor = "#007bff";
    });
  });

  // თავდაპირველად პროგრეს ბარის განახლება
  updateProgress();
});

// ეკრანის ზომის მონიტორინგი და ინფორმაციის ჩვენება
function showScreenInfo() {
  const width = window.innerWidth;
  let deviceType = "";

  if (width <= 480) {
    deviceType = "მობილური (480px ან ნაკლები)";
  } else if (width <= 768) {
    deviceType = "მცირე ტაბლეტი (481px - 768px)";
  } else if (width <= 1024) {
    deviceType = "ტაბლეტი/მცირე ლეპტოპი (769px - 1024px)";
  } else {
    deviceType = "დესკტოპი (1024px-ზე მეტი)";
  }

  // ინფორმაციის ჩვენება კონსოლში (განვითარების მიზნებისთვის)
  console.log(`ეკრანის ზომა: ${width}px - ${deviceType}`);
}

// ეკრანის ზომის ცვლილების მოსმენა
window.addEventListener("resize", showScreenInfo);
window.addEventListener("load", showScreenInfo);

// Smooth scrolling ანიმაცია
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
