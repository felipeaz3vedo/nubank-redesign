window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  const nav = document.getElementById('header');

  return scrollY >= 50
    ? nav.classList.add('active-header')
    : nav.classList.remove('active-header');
}

const dropdownMenu1 = document.getElementById('dropdown-item-1');
const dropdownMenu2 = document.getElementById('dropdown-item-2');
const dropdownMenu3 = document.getElementById('dropdown-item-3');

const menuItem1 = document.getElementById('menu-item-1');
const menuItem2 = document.getElementById('menu-item-2');
const menuItem3 = document.getElementById('menu-item-3');

function showDropdown1(e) {
  e.preventDefault();
  dropdownMenu1.classList.toggle('active-dropdown-menu');
  dropdownMenu2.classList.remove('active-dropdown-menu');
  dropdownMenu3.classList.remove('active-dropdown-menu');
}
function showDropdown2(e) {
  e.preventDefault();
  dropdownMenu1.classList.remove('active-dropdown-menu');
  dropdownMenu2.classList.toggle('active-dropdown-menu');
  dropdownMenu3.classList.remove('active-dropdown-menu');
}
function showDropdown3(e) {
  e.preventDefault();
  dropdownMenu1.classList.remove('active-dropdown-menu');
  dropdownMenu2.classList.remove('active-dropdown-menu');
  dropdownMenu3.classList.toggle('active-dropdown-menu');
}

function removeDropdown() {
  dropdownMenu1.classList.remove('active-dropdown-menu');
  dropdownMenu2.classList.remove('active-dropdown-menu');
  dropdownMenu3.classList.remove('active-dropdown-menu');
}

menuItem1.addEventListener('click', showDropdown1);
menuItem2.addEventListener('click', showDropdown2);
menuItem3.addEventListener('click', showDropdown3);

dropdownMenu1.addEventListener('mouseleave', removeDropdown);
dropdownMenu2.addEventListener('mouseleave', removeDropdown);
dropdownMenu3.addEventListener('mouseleave', removeDropdown);

function showMenuMobile() {
  const toggle = document.getElementById('bx');
  const nav = document.getElementById('menu-mobile');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active-bx');
      nav.classList.toggle('active-menu-mobile');
    });
  }
}

showMenuMobile();
