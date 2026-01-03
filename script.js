function openTab(evt, tabName) {
    // 1. Hide all tab contents
    const contents = document.getElementsByClassName("tab-content");
    for (let content of contents) {
        content.style.display = "none";
        content.classList.remove("active");
    }

    // 2. Remove active class from buttons
    const links = document.getElementsByClassName("tab-link");
    for (let link of links) {
        link.classList.remove("active");
    }

    // 3. Show the selected tab
    const selectedTab = document.getElementById(tabName);
    selectedTab.style.display = "block";
    selectedTab.classList.add("active");
    evt.currentTarget.classList.add("active");

    // 4. Header Avatar Logic
    const avatar = document.getElementById("headerAvatar");
    if (tabName === 'about') {
        // Hide avatar in header for About page (since it's large in the page)
        avatar.style.display = "none";
    } else {
        // Show avatar in header for Resume & Portfolio
        // نکته: در فایل CSS موبایل این عکس کوچک‌تر می‌شود
        avatar.style.display = "block";
    }

    // 5. Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setLang(lang) {
    const body = document.getElementById("bodyTag");
    if (lang === 'fa') {
        body.classList.add("rtl-mode");
    } else {
        body.classList.remove("rtl-mode");
    }
}
