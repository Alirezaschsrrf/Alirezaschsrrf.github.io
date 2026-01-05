// ایجاد مربع‌های مهارت به محض لود شدن صفحه
document.addEventListener("DOMContentLoaded", () => {
    renderSkillSquares();
});

function renderSkillSquares() {
    const containers = document.querySelectorAll('.square-container');
    containers.forEach(container => {
        const score = parseInt(container.getAttribute('data-score'));
        container.innerHTML = ''; // پاکسازی
        for (let i = 1; i <= 10; i++) {
            const sq = document.createElement('div');
            sq.classList.add('skill-sq');
            if (i <= score) {
                sq.classList.add('fill');
            }
            container.appendChild(sq);
        }
    });
}

function handleTabSwitch(tabName) {
    // 1. استایل دکمه‌ها
    const links = document.getElementsByClassName("tab-link");
    for (let link of links) {
        link.classList.remove("active");
        if(link.getAttribute('onclick').includes(tabName)) {
            link.classList.add("active");
        }
    }

    // 2. لودر
    const loader = document.getElementById("loader-overlay");
    loader.style.display = "flex";
    document.body.style.overflow = "hidden";

    // 3. زمان لودر به 1.5 ثانیه کاهش یافت
    setTimeout(() => {
        switchTabContent(tabName);
        loader.style.display = "none";
        document.body.style.overflow = "auto";
        
        // اگر تب رزومه لود شد، مربع‌ها دوباره چک شوند
        if(tabName === 'resume') renderSkillSquares();
        
    }, 1500); 
}

function switchTabContent(tabName) {
    const contents = document.getElementsByClassName("tab-content");
    for (let content of contents) {
        content.style.display = "none";
        content.classList.remove("active");
    }

    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = "block";
        selectedTab.classList.add("active");
    }

    // مدیریت آواتار هدر
    const avatar = document.getElementById("headerAvatar");
    if (tabName === 'about') {
        avatar.style.display = "none";
    } else {
        avatar.style.display = "block";
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
}

function setLang(lang) {
    const body = document.getElementById("bodyTag");
    if (lang === 'fa') {
        body.classList.add("rtl-mode");
    } else {
        body.classList.remove("rtl-mode");
    }
}
