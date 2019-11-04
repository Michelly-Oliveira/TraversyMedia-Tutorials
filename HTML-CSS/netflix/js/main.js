const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem(e) {
    // Remove borders from all the tabs
    removeBorder();

    // Remove content from all the tabs
    removeContent();

    // Add border to current tab
    this.classList.add("tab-border");

    // Grab the item from the DOM
    let itemToShow = document.querySelector(`#${this.id}-content`);

    // Show content from the current tab
    itemToShow.classList.add("show"); 
}

function removeBorder() {
    tabItems.forEach(tab => tab.classList.remove("tab-border"));
}

function removeContent() {
    tabContentItems.forEach(item => item.classList.remove("show"));
}


// Listen for tab click
tabItems.forEach(tab => tab.addEventListener("click", selectItem));