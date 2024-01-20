// toggle
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active"); //saat menu hamburger nya di klik maka class navbar-nav di toggle(kalau ada classnya ditambahin kalau tidak ada hilangin) akan menambahkan kelas active
};
