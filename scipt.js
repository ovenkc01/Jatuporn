// ค้นหา Element ในหน้าเว็บ
const themeToggleBtn = document.getElementById('theme-toggle');
const likeButtons = document.querySelectorAll('.like-btn');

// 1. ระบบสลับโหมดมืด / โหมดสว่าง (Dark/Light Mode)
themeToggleBtn.addEventListener('click', () => {
    // ตรวจสอบว่าปัจจุบันหน้าเว็บใช้ธีมอะไรอยู่
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        // เปลี่ยนเป็นโหมดมืด
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = '☀️ โหมดสว่าง';
    } else {
        // เปลี่ยนเป็นโหมดสว่าง
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.innerHTML = '🌙 โหมดมืด';
    }
});

// 2. ระบบปุ่มกดไลก์โปรเจกต์ (Project Like Button)
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // ค้นหาตำแหน่งแสดงผลตัวเลขในปุ่มที่ถูกกด
        const likeCountSpan = button.querySelector('.like-count');
        // ดึงตัวเลขปัจจุบันออกมาแปลงเป็นตัวเลข (Integer)
        let currentLikes = parseInt(likeCountSpan.textContent);
        
        // เพิ่มจำนวนไลก์ขึ้น 1
        currentLikes++;
        
        // ใส่ตัวเลขใหม่กลับเข้าไปในหน้าเว็บ
        likeCountSpan.textContent = currentLikes;
        
        // ใส่เอฟเฟกต์ทริกเกอร์เล็กๆ แจ้งว่ากดแล้ว
        button.style.transform = 'scale(1.1)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
});
