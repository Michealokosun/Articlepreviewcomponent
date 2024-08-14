const shareBtn = document.getElementById("share_btn");
const socialicons = document.getElementById("social_icons");

shareBtn.addEventListener("click", () => {
  socialicons.classList.toggle("show");
});
