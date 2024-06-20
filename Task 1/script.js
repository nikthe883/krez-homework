

document.addEventListener("DOMContentLoaded", () => {
  // Dropdown
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const dropdownMenus = document.querySelectorAll('.dropdown');
  const dropdownMenuChainShops = document.getElementById('dropdown1');

  // Cart
  const shoppingCart = document.getElementById('shopping-cart');
  const numberDisplay = document.getElementById('total-shopping-cart');

  // Sub Menu
  const subMenuItems = document.querySelectorAll('.sub-menu-options-container .simple-text-body');
  const whereItem = document.getElementById("where-text")

  // Profile Settings
  const changeFirstName = document.getElementById('change-first-name');
  const changeLastName = document.getElementById('change-last-name');
  const changeEmail = document.getElementById('change-email');

  // Profife Password
  let PASSWORD = ""

  const canChangePassword = document.getElementById('canChangePass');
  const oldPassword = document.getElementById('old-password');
  const newPassword = document.getElementById('new-password');
  const confirmNewPassword = document.getElementById('confirm-new-password');

  const passes = [oldPassword, newPassword, confirmNewPassword]
  

  const passwordStrength = document.getElementById('password-strength');
  const powerPoint = document.getElementById('power-point');

  const widthPower = ["0%", "25%", "50%", "75%", "100%"];
  const colorPower = ["red", "orange", "yellow", "lightgreen", "green"];
  const strengthText = [
    "няма въведена парола",
    "много слаба",
    "слаба",
    "средна",
    "силна",
    "много силна"
];

  // Save button
  const save = document.getElementById('btn-save');


  // Attaching Events to document
  function attachEvents() {


    // Save changes
    save.addEventListener('click', saveFunc);

    // New password change and strength
    newPassword.addEventListener('input', () => {
      const strength = evaluatePasswordStrength(newPassword.value);
      passwordStrength.style.width = widthPower[strength];
      passwordStrength.style.backgroundColor = colorPower[strength];
      powerPoint.textContent = `Сигурност на паролата: ${strengthText[strength]}`;
  });

    // Can chenge password checkbox
    canChangePassword.addEventListener('change', () => {
      passes.forEach(pass => {
          pass.disabled = !canChangePassword.checked;
      });
    });

    // Loop through all dropdown butons
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', toggleDropDownMenu);
    });
   

    // Loop through all sub-menu items
    subMenuItems.forEach(item => {
      item.addEventListener('click', () => setActive(item));
    });

    // Check for click outside of dropdown menu
    document.addEventListener('click', closeDropDownMenuOnClickOutside);

    // Add event listener to shopping cart to increment number of items
    shoppingCart.addEventListener('click', incrementNumber);

    // Change text of chosen for the first dropdown menu
    attachAnchorEvents();
  }

  
  function updatePassword(){
    
    if(oldPassword.value == PASSWORD){
      if(newPassword.value == confirmNewPassword.value){
        PASSWORD =  newPassword.value;
        
      }
    }
  }

  function evaluatePasswordStrength(password){
    let score = 0;
    if (password.length > 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  }

  function saveFunc() {
    updatePassword()
    if(PASSWORD == ""){
      PASSWORD = '1234'
    }
    const allChanges = {
        "First Name" : changeFirstName.value,
        "Last Name" : changeLastName.value,
        "Email" : changeEmail.value,
        "Password" : PASSWORD
        }

    Object.entries(allChanges).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);

    });
  }


  function attachAnchorEvents() {
    dropdownMenuChainShops.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
  }

  function handleAnchorClick(event) {
    updateButtonText(event);
    closeDropDownMenu();
  }

  function toggleDropDownMenu(event) {
    event.stopPropagation();
    const targetId = event.currentTarget.getAttribute('data-target');
    const dropdownMenu = document.getElementById(targetId);
    dropdownMenu.classList.toggle('show');

    // Close other dropdowns
    dropdownMenus.forEach(menu => {
      if (menu.id !== targetId) {
        menu.classList.remove('show');
      }
    });
  }

  function closeDropDownMenu() {
    dropdownMenus.forEach(menu => {
      menu.classList.remove('show');
    });
  }

  function closeDropDownMenuOnClickOutside(event) {
    if (!event.target.closest('.entry-registration') && !event.target.closest('.btn-dropdown')) {
      closeDropDownMenu();
    }
  }

  function updateButtonText(event) {
    const selectedText = event.target.textContent.trim();
    const toggleButton = document.querySelector(`[data-target="dropdown1"]`);
    toggleButton.textContent = selectedText;
  }

  function incrementNumber() {
    numberDisplay.textContent = parseInt(numberDisplay.textContent) + 1;
  }

  function setActive(element) {

    subMenuItems.forEach(el => {
      el.classList.remove('active');
      const arrowIcon = el.querySelector('.arrow-icon');
      if (arrowIcon) {
        arrowIcon.remove();
      }
    });

    
    element.classList.add('active');

    
    const arrowIcon = document.createElement('div');
    arrowIcon.classList.add('material-symbols-outlined', 'arrow-icon');
    arrowIcon.textContent = 'arrow_forward';

    // Create new element on top of sub menu
    whereItem.textContent = `Начало > ${element.textContent}`;

    
    element.insertBefore(arrowIcon, element.firstChild);
  }

  // Initialize event listeners
  attachEvents();
});
