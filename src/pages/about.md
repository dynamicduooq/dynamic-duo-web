---
layout: ../layouts/Layout.astro
title: "About"
date: 2026-05-02
---
<style>
.about-container { max-width: 800px; margin: 0 auto; animation: fadeIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
@keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
.about-hero { text-align: center; margin-bottom: 20px; padding-top: 10px; position: relative;}
.hero-whale { font-size: 3.5rem; display: inline-block; cursor: pointer; animation: float 3.5s ease-in-out infinite; transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); user-select: none; position: relative; }
.hero-whale.spin { transform: rotate(360deg) scale(1.2); }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
.typewriter-wrap { display: inline-flex; align-items: center; justify-content: center; font-style: italic; color: var(--text-mid); font-family: 'Newsreader', serif; margin-top: 5px; margin-bottom: 32px; font-size: 1.05rem; }
.typewriter-text { overflow: hidden; white-space: nowrap; border-right: 2px solid var(--sky); width: 0; animation: typing 2.5s steps(35, end) forwards 0.5s, blink 0.75s step-end infinite; }
@keyframes typing { from { width: 0 } to { width: 100% } }
@keyframes blink { from, to { border-color: transparent } 50% { border-color: var(--sky); } }
.team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 35px; margin: 40px 0; }
.polaroid-card { background: #fff; padding: 15px 15px 25px; border-radius: 8px; box-shadow: 0 10px 25px rgba(2,132,199,0.08); border: 1px solid rgba(186,230,253,.6); text-align: center; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); position: relative; overflow: hidden; }
[data-theme="dark"] .polaroid-card { background: rgba(15,35,54,0.9); border-color: rgba(126,200,227,.2); box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
.polaroid-card:nth-child(1) { --rot: -4; transform: rotate(calc(var(--rot) * 1deg)); }
.polaroid-card:nth-child(2) { --rot: 4; transform: rotate(calc(var(--rot) * 1deg)); }
.polaroid-card:hover { transform: translateY(-12px) rotate(0deg) scale(1.03); box-shadow: 0 20px 40px rgba(2,132,199,0.15); z-index: 10; }
[data-theme="dark"] .polaroid-card:hover { box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
.polaroid-img-wrap { overflow: hidden; border-radius: 4px; margin-bottom: 16px; border: 2px solid var(--sky-pale); background: var(--bg-card2); }
[data-theme="dark"] .polaroid-img-wrap { border-color: rgba(80,150,210,.2); }
.polaroid-img { width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block; transition: transform 0.6s ease; }
.polaroid-card:hover .polaroid-img { transform: scale(1.08); }
.author-name { margin: 0 0 6px; color: var(--sky-dark); font-size: 1.2rem; font-family: 'Merriweather', serif;}
[data-theme="dark"] .author-name { color: #a8daf0; }
.author-role { font-size: 14px; color: var(--text-mid); font-style: italic; margin: 0; font-family: 'Newsreader', serif; }
.message-box { background: linear-gradient(135deg, rgba(240,249,255,0.7), rgba(255,255,255,0.4)); border-left: 4px solid var(--sky); padding: 25px 30px; border-radius: 0 16px 16px 0; margin: 45px 0; position: relative; box-shadow: 0 4px 20px rgba(2,132,199,0.06); }
[data-theme="dark"] .message-box { background: linear-gradient(135deg, rgba(15,35,54,0.7), rgba(10,20,35,0.4)); border-left-color: #7ec8e3; }
.message-box p { margin-bottom: 12px; line-height: 1.7; }
.message-box p:last-child { margin-bottom: 0; }
.fish-container { text-align: center; margin-top: 16px; height: 35px; overflow: hidden; position: relative; }
.swimming-fish { display: inline-block; font-size: 24px; letter-spacing: 8px; color: var(--sky-light); cursor: pointer; transition: color 0.3s; position: relative; }
.swimming-fish:hover { color: var(--sky); animation: swimAway 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
[data-theme="dark"] .swimming-fish { color: rgba(126,200,227,.4); }
[data-theme="dark"] .swimming-fish:hover { color: #a8daf0; }
@keyframes swimAway { 0% { transform: translateX(0) scale(1); opacity: 1; } 50% { transform: translateX(50px) scale(1.1) translateY(-5px); opacity: 0.8; } 100% { transform: translateX(150px) scale(0.8) translateY(0); opacity: 0; } }
.cta-box { background: url('https://www.transparenttextures.com/patterns/cubes.png'), linear-gradient(135deg, var(--sky-pale), var(--bg-card)); border: 2px dashed rgba(186,230,253,.8); border-radius: 24px; padding: 40px 20px; text-align: center; margin-top: 50px; position: relative; transition: all 0.4s ease; }
[data-theme="dark"] .cta-box { background: url('https://www.transparenttextures.com/patterns/cubes.png'), linear-gradient(135deg, rgba(15,35,54,0.9), var(--bg-card)); border-color: rgba(126,200,227,.3); }
.cta-box:hover { border-color: var(--sky); border-style: solid; transform: scale(1.02); box-shadow: 0 10px 30px rgba(2,132,199,0.1); }
[data-theme="dark"] .cta-box:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.cta-btn { display: inline-block; background: var(--sky); color: white !important; padding: 12px 35px; border-radius: 99px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px; transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); box-shadow: 0 6px 20px rgba(14,165,233,0.3); text-decoration: none; margin-top: 15px; }
.cta-btn:hover { background: var(--sky2); transform: translateY(-4px); box-shadow: 0 12px 25px rgba(14,165,233,0.4); }
.contact-box { margin-top: 40px; padding: 24px; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-card); text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.03); transition: border-color 0.3s; }
.contact-box:hover { border-color: var(--sky-light); }
.email-copy { cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; color: var(--sky-dark); background: var(--sky-pale); padding: 8px 20px; border-radius: 99px; transition: all 0.2s; border: 1px solid var(--sky-light); font-weight: 600; font-size: 1rem; position: relative; }
[data-theme="dark"] .email-copy { background: rgba(15,35,54,0.6); color: #a8daf0; border-color: rgba(126,200,227,.2); }
.email-copy:hover { background: var(--sky); color: #fff; transform: translateY(-2px); border-color: var(--sky); }
.copy-tooltip-about { position: absolute; top: -35px; background: #10b981; color: #fff; font-size: 0.7rem; padding: 4px 10px; border-radius: 6px; pointer-events: none; opacity: 0; transform: translateY(10px); transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); white-space: nowrap; font-weight: normal; }
.copy-tooltip-about::after { content: ''; position: absolute; bottom: -4px; left: 50%; transform: translateX(-50%); border-width: 4px 4px 0; border-style: solid; border-color: #10b981 transparent transparent transparent; }
.copy-tooltip-about.show { opacity: 1; transform: translateY(0); }
.highlight-text { background: linear-gradient(180deg, rgba(255,255,255,0) 60%, rgba(186,230,253, 0.8) 60%); display: inline; padding: 0 4px; font-weight: 600; color: var(--sky-dark); }
[data-theme="dark"] .highlight-text { background: linear-gradient(180deg, rgba(255,255,255,0) 60%, rgba(126,200,227, 0.3) 60%); color: #a8daf0; }
</style>
<div class="about-container">
<div class="about-hero">
<span class="hero-whale" id="interactiveWhale" title="Chọc cá voi đi!">🐋</span>
<p style="color: var(--text-dim); letter-spacing: 5px; margin-top: 10px; font-size: 1.2rem; font-weight: 300;">⋆✴︎˚｡⋆</p>
<h2 style="font-size: 1.8rem; margin-bottom: 5px; font-family: 'Merriweather', serif;">Về Dynamic Duo</h2>
<div class="typewriter-wrap"><span class="typewriter-text">"paired dreams, boundless gleam."</span></div>
<p style="text-align: center; margin-top: 0; line-height: 1.6;">Ở đây chúng mình có hai người, và chúng mình có những câu chuyện tình yêu sâu sắc <em>(cũ rích)</em>.</p>
</div>
<div class="team-grid">
<div class="polaroid-card">
<div class="polaroid-img-wrap"><img src="https://symbols.vn/wp-content/uploads/2022/02/Hinh-Ga-Chibi-sieu-dang-yeu-cute.jpg" alt="Avatar Xê" class="polaroid-img" /></div>
<h3 class="author-name">Xê</h3>
<p class="author-role">Editor · Làm màu</p>
</div>
<div class="polaroid-card">
<div class="polaroid-img-wrap"><img src="https://hoichimtroi.com/wp-content/uploads/2025/10/khi-chibi-27.jpg" alt="Avatar Gờ" class="polaroid-img" /></div>
<h3 class="author-name">Gờ</h3>
<p class="author-role">Editor · Làm thinh</p>
</div>
</div>
<h3 style="text-align: center; margin-top: 50px; letter-spacing: 3px; font-family: 'Merriweather', serif; color: var(--sky-dark);">LỜI NHẮN GỬI 🌊</h3>
<div class="message-box">
<p>Xin chào mọi người, lại là dynamicduo_q đây 🌻</p>
<p>Chào mừng mọi người đến với nhà mới của chúng mình <em>(một lần nữa nữa ;))</em>, vẫn mong rằng chúng ta có thể ở lại đây thật lâu, thật lâu.</p>
<p>Truyện được chọn và edit hoàn toàn dựa trên gu đọc của hai đứa, vô cùng chào đón các bạn có chung sở thích, và cả các bạn muốn thử thách bản thân ở những thể loại bối cảnh mới.</p>
</div>
<div style="text-align: center; margin: 40px 0;">
<p style="font-family: 'Merriweather', serif; font-style: italic; color: var(--sky2); font-weight: bold; font-size: 1.15rem;">Hoan nghênh các cậu ở lại, chào mừng các cậu ghé qua! 🌸</p>
<div class="fish-container"><div class="swimming-fish" id="swimFishTrigger" title="Chạm vào cá xem!">𓆝 𓆟 𓆞</div></div>
</div>
<div class="cta-box">
<span style="font-size: 2.2rem; display:block; margin-bottom: 15px; color: var(--sky);">𓌉◯𓇋</span>
<h4 style="margin: 0 0 10px; color: var(--sky-dark); font-size: 1.3rem; font-family: 'Merriweather', serif;">Sẵn sàng nhảy hố?</h4>
<p style="font-size: 0.95rem; color: var(--text-main); margin-bottom: 25px;">Khám phá ngay tủ truyện đã tẩm đầy gia vị hoàn chỉnh của nhà cá</p>
<a href="/dynamic-duo-web/ca-tren-ban/" class="cta-btn">Thưởng thức ngay →</a>
</div>
<div class="contact-box">
<p style="font-size: 0.9rem; color: var(--text-mid); margin: 0 0 12px 0;">Hòm thư liên hệ góp ý, báo lỗi. </p>
<div class="email-copy" id="aboutEmailCopy" title="Nhấn để copy">
<span id="aboutTooltip" class="copy-tooltip-about">Bắt được cá! ✔️</span>
✉ dynamicduoo.q@gmail.com
</div>
</div>
<div style="text-align: center; margin-top: 50px; padding: 20px 0;">
<p style="font-size: 0.95rem; font-family: 'Merriweather', serif; color: var(--text-main); line-height: 1.8;">Một lưu ý nhỏ nữa: <span class="highlight-text">Tất cả truyện đăng ở đây đều là edit (dịch + chỉnh sửa). Bản quyền thuộc về tác giả gốc. Vui lòng không re-up/chuyển ver, không spoil, gây war trong nhà chúng mình nhé!</span></p>
</div>
</div>
<script is:inline>
document.addEventListener('DOMContentLoaded', () => {
const emailBtn = document.getElementById('aboutEmailCopy');
const tooltip = document.getElementById('aboutTooltip');
if(emailBtn && tooltip) { emailBtn.addEventListener('click', () => { navigator.clipboard.writeText('dynamicduoo.q@gmail.com').then(() => { tooltip.classList.add('show'); const drop = document.createElement('div'); drop.innerHTML = '🐳'; drop.style.position = 'absolute'; drop.style.right = '20px'; drop.style.top = '-10px'; drop.style.transition = 'all 1s ease'; drop.style.opacity = '1'; emailBtn.appendChild(drop); setTimeout(() => { drop.style.transform = 'translateY(-30px) scale(0)'; drop.style.opacity = '0'; }, 50); setTimeout(() => { tooltip.classList.remove('show'); drop.remove(); }, 2000); }); }); }
const whale = document.getElementById('interactiveWhale');
if(whale) { whale.addEventListener('click', function() { if(!this.classList.contains('spin')) { this.classList.add('spin'); for(let i=0; i<3; i++) { const splash = document.createElement('span'); splash.innerText = '💦'; splash.style.position = 'absolute'; splash.style.left = '50%'; splash.style.top = '50%'; splash.style.fontSize = '1.5rem'; splash.style.pointerEvents = 'none'; splash.style.transition = 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)'; this.appendChild(splash); setTimeout(() => { splash.style.transform = `translate(${(Math.random()-0.5)*80}px, ${(Math.random()-0.5)*80}px) scale(0)`; splash.style.opacity = '0'; }, 50); setTimeout(() => splash.remove(), 650); } setTimeout(() => this.classList.remove('spin'), 600); } }); }
const fishGroup = document.getElementById('swimFishTrigger');
if (fishGroup) { fishGroup.addEventListener('animationend', () => { fishGroup.style.animation = 'none'; void fishGroup.offsetWidth; }); }
});
</script>