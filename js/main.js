var seeMenu 
var seeAbout

function openMenu(){
    seeMenu = document.querySelector('.mainNav');
    seeMenu.classList.add('mainNav-visible');
};
function closeMenu(){
    seeMenu.classList.remove('mainNav-visible')
};
function openAbout(){
    seeAbout = document.querySelector('.sectionAbout');
    seeAbout.classList.add('sectionAbout-visible');
};
function closeAbout(){
    seeAbout.classList.remove('sectionAbout-visible')
};
