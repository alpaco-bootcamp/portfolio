// dom로드시
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav__mobile-toggle");
  const nav = document.querySelector(".nav");
  const navItems = document.querySelectorAll(".nav__item a");

  // 토글 버튼 클릭 이벤트 핸들러
  const handleToggleClick = () => {
    nav.classList.toggle("active");

    // 메뉴가 열렸을 때 스크롤 방지
    if (nav.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  // 메뉴 아이템 클릭 이벤트 핸들러
  const handleNavItemClick = () => {
    nav.classList.remove("active");
    document.body.style.overflow = "";
  };

  // 이벤트 리스너 등록
  navToggle.addEventListener("click", handleToggleClick);

  // 각 메뉴 아이템에 이벤트 리스너 등록
  navItems.forEach((item) => {
    item.addEventListener("click", handleNavItemClick);
  });
});
