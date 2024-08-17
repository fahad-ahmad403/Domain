            // For submenu dropdown
const sub_menu = document.querySelector(".sub_menu");

function dropdown() {
    sub_menu.classList.toggle("open");
}
            // When clicked outside the submenu
document.addEventListener("click", function (event) {
    const isClickInside = sub_menu.contains(event.target);
    const isClickonButton = event.target.closest("li", ".sub_menu");
    
    if (!isClickInside && !isClickonButton && sub_menu.classList.contains("open")) {
        sub_menu.classList.remove("open");
    }
});
            // For dropdown arrow head
const arrow = document.querySelector("#arrow");
const arrow_head = document.querySelector("i");

arrow.addEventListener("click", function (event) {
    event.preventDefault();
    arrow_head.classList.toggle("rotate");
});
            // When clicked outside the submenu, arrowhead rotates
document.addEventListener("click", function (event) {
    const isClick_Inside = arrow.contains(event.target);
    const isClickon_Button = event.target.closest("li", "#arrow");
    
    if (!isClick_Inside && !isClickon_Button && arrow_head.classList.contains("rotate")) {
        arrow_head.classList.remove("rotate");
    }
});
            // For card animation
const card = document.querySelectorAll(".card");

const observer = new IntersectionObserver(function (enteries, observer){
  enteries.forEach(entry =>{
    if(!entry.isIntersecting) {
        return;
    }
    else {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    }
  })
}, {threshold: 0.5});

card.forEach(Card =>{
    observer.observe(Card)
});
            // For mobile sidebar display
const mobile_sidebar = document.querySelector(".mobile_sidebar");

function open_sidebar() {
    mobile_sidebar.classList.add("sidebar_display");
}

function close_sidebar() {
    mobile_sidebar.classList.remove("sidebar_display");
}

document.addEventListener("click", function (event) {
    const isclickInside = mobile_sidebar.contains(event.target);
    const isclickonButton = event.target.closest("i");

    if(!isclickInside && !isclickonButton && mobile_sidebar.classList.contains("sidebar_display")) {
        mobile_sidebar.classList.remove("sidebar_display");
    }
});
            // For sidebar dropdown
const mobile_submenu = document.querySelector(".mobile_submenu");
const activelink = document.querySelector(".activelink");

function dropdown_display() {
    mobile_submenu.classList.toggle("dropdownlinks_display");
    activelink.classList.toggle("is_active");
}