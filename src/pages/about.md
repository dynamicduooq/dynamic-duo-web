---
layout: ../layouts/Layout.astro
title: "About"
date: 2026-05-02
---
<style>
/* CSS dành riêng cho trang About */
.about-hero { text-align: center; margin-bottom: 30px; animation: fadeInDown 0.8s ease; }
@keyframes fadeInDown { from {opacity: 0; transform: translateY(-20px);} to {opacity: 1; transform: translateY(0);} }
.author-card {
background: var(--sky-pale); padding: 24px 20px; border-radius: var(--r-md);
border: 1px solid var(--sky-light); transition: transform 0.3s, box-shadow 0.3s;
}
.author-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(2,132,199,.15); }
/* Hiệu ứng gạch dưới Highlight chữ (Theo mẫu ảnh) */
.highlight-text {
background: linear-gradient(180deg, rgba(255,255,255,0) 60%, rgba(186,230,253, 0.8) 60%);
display: inline;
padding: 0 4px;
font-weight: 600;
color: var(--sky-dark);
}
[data-theme="dark"] .highlight-text {
background: linear-gradient(180deg, rgba(255,255,255,0) 60%, rgba(126,200,227, 0.3) 60%);
color: #a8daf0;
}
</style>
<div class="about-hero">
<span style="font-size: 2.8rem; display:inline-block; animation: float 3s ease-in-out infinite;">🐋</span>
<p style="color: var(--text-dim); letter-spacing: 5px; margin-top: 10px; font-size: 1.2rem; font-weight: 300;">⋆✴︎˚｡⋆</p>
</div>
<style>@keyframes float { 0% {transform:translateY(0)} 50% {transform:translateY(-8px)} 100%{transform:translateY(0)} }</style>
<h2 style="text-align: center; font-size: 1.5rem; margin-bottom: 5px;">Về Dynamic Duo</h2>
<p style="text-align: center; font-style: italic; color: var(--text-mid); margin-top: 0; margin-bottom: 32px; font-family:'Newsreader', serif;">"paired dreams, boundless gleam."</p>
Ở đây chúng mình có hai người, và chúng mình có những câu chuyện tình yêu sâu sắc *(cũ rích)*.
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 36px 0; text-align: center;">
<div class="author-card">
<img src="https://symbols.vn/wp-content/uploads/2022/02/Hinh-Ga-Chibi-sieu-dang-yeu-cute.jpg" alt="Avatar Xê" style="width: 85px; height: 85px; border-radius: 50%; object-fit: cover; border: 3px solid white; box-shadow: var(--sh-soft); margin: 0 auto 16px auto; display: block; transition: transform 0.3s;" onmouseover="this.style.transform='rotate(-10deg) scale(1.1)'" onmouseout="this.style.transform='rotate(0) scale(1)'" />
<h3 style="margin: 0 0 6px; color: var(--sky-dark); font-size: 1.1rem;">Xê</h3>
<p style="font-size: 14px; color: var(--text-mid); font-style: italic; margin: 0;">Editor · Làm màu</p>
</div>
<div class="author-card">
<img src="https://hoichimtroi.com/wp-content/uploads/2025/10/khi-chibi-27.jpg" alt="Avatar Gờ" style="width: 85px; height: 85px; border-radius: 50%; object-fit: cover; border: 3px solid white; box-shadow: var(--sh-soft); margin: 0 auto 16px auto; display: block; transition: transform 0.3s;" onmouseover="this.style.transform='rotate(10deg) scale(1.1)'" onmouseout="this.style.transform='rotate(0) scale(1)'" />
<h3 style="margin: 0 0 6px; color: var(--sky-dark); font-size: 1.1rem;">Gờ</h3>
<p style="font-size: 14px; color: var(--text-mid); font-style: italic; margin: 0;">Editor · Làm thinh</p>
</div>
</div>
<h3 style="text-align: center; margin-top: 40px; letter-spacing: 2px;">LỜI NHẮN GỬI 🌊</h3>
Xin chào mọi người, lại là dynamicduo_q đây 🌻
Chào mừng mọi người đến với nhà mới của chúng mình *(một lần nữa nữa ;))*, vẫn mong rằng chúng ta có thể ở lại đây thật lâu, thật lâu.
Truyện được chọn và edit hoàn toàn dựa trên gu đọc của hai đứa, vô cùng chào đón các bạn có chung sở thích, và cả các bạn muốn thử thách bản thân ở những thể loại bối cảnh mới.
<div style="text-align: center; margin: 36px 0;">
<p style="font-family: 'Merriweather', serif; font-style: italic; color: var(--sky2); font-weight: bold; font-size: 1.05rem;">Hoan nghênh các cậu ở lại, chào mừng các cậu ghé qua! 🌸</p>
<div style="color: var(--sky-light); font-size: 24px; letter-spacing: 8px; margin-top: 16px;">𓆝 𓆟 𓆞</div>
</div>
<div style="background: rgba(240,249,255,0.6); border: 1.5px dashed var(--sky-light); border-radius: var(--r-md); padding: 30px; text-align: center; margin-top: 36px;">
<span style="font-size: 1.8rem; display:block; margin-bottom: 10px;">𓌉◯𓇋</span>
<h4 style="margin: 0 0 8px; color: var(--sky-dark); font-size: 1.1rem;">Sẵn sàng nhảy hố?</h4>
<p style="font-size: 15px; color: var(--text-main); margin-bottom: 20px;">Khám phá ngay tủ truyện đã tẩm đầy gia vị hoàn chỉnh của nhà cá</p>
<a href="/dynamic-duo-web/ca-tren-ban/" style="display: inline-block; background: var(--sky); color: white; padding: 10px 30px; border-radius: var(--r-pill); font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s; box-shadow: 0 4px 12px rgba(2,132,199,0.2);" onmouseover="this.style.background='var(--sky2)'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='var(--sky)'; this.style.transform='translateY(0)';">Thưởng thức ngay →</a>
</div>
<div style="margin-top: 40px; padding: 24px; background: var(--sky-pale); border-radius: var(--r-md); border: 1px solid rgba(186,230,253,.5);">
<p style="font-size: .85rem; color: var(--text-mid); margin: 0; text-align: center; line-height: 1.8;">
✉ <strong style="color: var(--sky-dark); font-size: 1rem;">dynamicduoo.q@gmail.com</strong>

<span style="font-size:.78rem;color:var(--text-dim)">Liên hệ góp ý, báo lỗi, hoặc chỉ để hỏi thăm!</span>
</p>
</div>
<div style="text-align: center; margin-top: 45px; padding: 20px 0;">
<p style="font-size: .85rem; color: var(--text-dim); font-style: italic; margin-bottom: 12px; line-height: 1.6;">
Tất cả truyện đăng ở đây đều là edit (dịch + chỉnh sửa). Bản quyền thuộc về tác giả gốc.
</p>
<p style="font-size: 0.95rem; font-family: 'Merriweather', serif; color: var(--text-main);">
Một lưu ý nhỏ nữa: <span class="highlight-text">Vui lòng không re-up/chuyển ver, không spoil, gây war trong nhà chúng mình nhé!</span>
</p>
</div>
