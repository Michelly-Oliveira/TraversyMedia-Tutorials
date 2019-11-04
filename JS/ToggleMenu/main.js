let toggleNavStatus = false;
document.querySelector('.btn-toggle-nav').addEventListener('click', toggleNav);

function toggleNav() {
    let getSideBar = document.querySelector('.nav-sidebar');
    let getSideBarUl = document.querySelector('.nav-sidebar ul');
    let getSideBarTitle = document.querySelector('.nav-sidebar span');
    let getSideBarLinks = document.querySelectorAll('.nav-sidebar a');

    if(!toggleNavStatus) {
        getSideBarUl.style.visibility = 'visible';
        getSideBar.style.width = '272px';
        getSideBarTitle.style.opacity = '0.5';

        for(let i = 0; i < getSideBarLinks.length; i++) {
            getSideBarLinks[i].style.opacity = '1';
        }

        toggleNavStatus = true;
    } else {
        getSideBar.style.width = '50px';
        getSideBarTitle.style.opacity = '0';

        for(let i = 0; i < getSideBarLinks.length; i++) {
            getSideBarLinks[i].style.opacity = '0';
        }

        getSideBarUl.style.visibility = 'hidden';

        toggleNavStatus = false;
    }
}