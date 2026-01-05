// تابع اصلی که روی دکمه‌ها کلیک می‌شود
function handleTabSwitch(tabName) {
    // 1. نمایش دکمه فعال در منو (فوری)
    const links = document.getElementsByClassName("tab-link");
    for (let link of links) {
        link.classList.remove("active");
    }
    // پیدا کردن دکمه‌ای که کلیک شده بر اساس onclick آن
    // (راه ساده‌تر: اضافه کردن کلاس active به دکمه فشرده شده)
    // اینجا چون ایونت را مستقیم پاس ندادیم، بر اساس نام تب پیداش میکنیم (یا ساده تر، همه دکمه ها را غیرفعال میکنیم و در لحظه کلیک استایل میدهیم)
    // اما برای سادگی، کلاس active را همینجا ست میکنیم:
    const clickedBtn = document.querySelector(`button[onclick="handleTabSwitch('${tabName}')"]`);
    if(clickedBtn) clickedBtn.classList.add("active");

    // 2. نمایش لودر
    const loader = document.getElementById("loader-overlay");
    loader.style.display = "flex";

    // 3. مخفی کردن اسکرول صفحه در حین لود
    document.body.style.overflow = "hidden";

    // 4. صبر کردن به اندازه 2.5 ثانیه (مدت انیمیشن دیوار)
    setTimeout(() => {
        // انجام عملیات تغییر تب واقعی
        switchTabContent(tabName);
        
        // مخفی کردن لودر
        loader.style.display = "none";
        // برگرداندن اسکرول
        document.body.style.overflow = "auto";
        
    }, 2500); // 2500 میلی ثانیه = 2.5 ثانیه
}

// تابع داخلی برای تغییر محتوا (که بعد از لودر اجرا می‌شود)
function switchTabContent(tabName) {
    // 1. Hide all tab contents
    const contents = document.getElementsByClassName("tab-content");
    for (let content of contents) {
        content.style.display = "none";
        content.classList.remove("active");
    }

    // 2. Show the selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = "block";
        selectedTab.classList.add("active");
    }

    // 3. Header Avatar Logic
    const avatar = document.getElementById("headerAvatar");
    if (tabName === 'about') {
        avatar.style.display = "none";
    } else {
        avatar.style.display = "block";
    }

    // 4. Scroll to top
    window.scrollTo({ top: 0, behavior: 'auto' }); // Smooth scroll ممکن است با لودر تداخل داشته باشد، پس auto میگذاریم
}

function setLang(lang) {
    const body = document.getElementById("bodyTag");
    if (lang === 'fa') {
        body.classList.add("rtl-mode");
    } else {
        body.classList.remove("rtl-mode");
    }
}
