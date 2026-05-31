---
layout: ../layouts/Layout.astro
title: "Về Dynamic Duo"
date: 2026-05-02
---

<style is:global>
  /* ── VARIABLE NÂNG CAO ── */
  :root {
    --glass-bg: rgba(255, 255, 255, 0.7);
    --glass-border: rgba(186, 230, 253, 0.4);
    --accent-soft: #f0f9ff;
  }
  [data-theme="dark"] {
    --glass-bg: rgba(15, 35, 54, 0.7);
    --glass-border: rgba(126, 200, 227, 0.15);
    --accent-soft: rgba(30, 74, 106, 0.3);
  }

  /* ── ANIMATIONS ── */
  @keyframes swim {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(5px, -10px) rotate(5deg); }
    66% { transform: translate(-5px, -5px) rotate(-5deg); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes shine {
    from { left: -100%; }
    to { left: 100%; }
  }

  .reveal-sec { opacity: 0; transform: translateY(20px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
  .reveal-sec.visible { opacity: 1; transform: translateY(0); }

  /* ── STYLES ── */
  .about-container { max-width: 800px; margin: 0 auto; line-height: 1.8; }

  .hero-ocean {
    text-align: center; padding: 60px 0 40px; position: relative;
    background: radial-gradient(circle at center, var(--sky-pale) 0%, transparent 70%);
  }
  .whale-icon { font-size: 4rem; display: inline-block; animation: swim 5s ease-in-out infinite; cursor: default; }

  .highlight-text {
    background: linear-gradient(180deg, transparent 60%, var(--sky-light) 60%);
    display: inline; padding: 0 5px; font-weight: 600; color: var(--sky-dark);
  }
  [data-theme="dark"] .highlight-text { background: linear-gradient(180deg, transparent 60%, rgba(126, 200, 227, 0.2) 60%); color: #a8daf0; }

  /* Author Cards */
  .authors-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 50px 0; }
  @media (max-width: 600px) { .authors-grid { grid-template-columns: 1fr; } }

  .author-card {
    background: var(--glass-bg); backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border); border-radius: 24px;
    padding: 40px 20px; text-align: center; position: relative; overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .author-card::before {
    content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
    transform: skewX(-25deg); transition: 0.5s;
  }
  .author-card:hover::before { left: 150%; transition: 0.5s; }
  .author-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(2, 132, 199, 0.15); border-color: var(--sky); }

  .avatar-frame {
    width: 110px; height: 110px; margin: 0 auto 20px; border-radius: 50%;
    padding: 5px; background: linear-gradient(135deg, var(--sky-light), var(--sky));
    position: relative;
  }
  .avatar-frame img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 3px solid white; transition: 0.3s; }
  .author-card:hover img { transform: scale(1.05) rotate(5deg); }

  /* Content Boxes */
  .story-box {
    background: var(--accent-soft); border-left: 4px solid var(--sky);
    padding: 30px; border-radius: 0 20px 20px 0; margin: 40px 0;
  }

  .cta-section {
    background: linear-gradient(135deg, var(--sky-dark), var(--sky));
    border-radius: 30px; padding: 50px 30px; text-align: center; color: white;
    margin: 60px 0; box-shadow: 0 15px 30px rgba(2, 132, 199, 0.3);
  }
  .cta-btn {
    display: inline-block; background: white; color: var(--sky-dark);
    padding: 12px 40px; border-radius: 99px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 2px; transition: 0.3s;
    margin-top: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
  .cta-btn:hover { transform: scale(1.05); box-shadow: 0 6px 20px rgba(0,0,0,0.2); background: var(--sky-pale); }
</style>

<div class="about-container">
  <!-- HERO SECTION -->
  <header class="hero-ocean">
    <div class="whale-icon">🐋</div>
    <h1 style="font-family: 'Merriweather', serif; font-size: 2.2rem; margin: 20px 0 5px;">Dynamic Duo</h1>
    <p style="font-family: 'Newsreader', serif; font-style: italic; color: var(--text-mid); font-size: 1.1rem;">
      "paired dreams, boundless gleam."
    </p>
    <div style="font-size: 1.5rem; letter-spacing: 10px; color: var(--sky-light); margin-top: 15px;">•••</div>
  </header>

  <!-- INTRO -->
  <section class="reveal-sec" style="text-align: center; margin-bottom: 60px;">
    <p style="font-size: 1.1rem;">
      Ở đây, chúng mình có hai người, và chúng mình có những câu chuyện tình yêu sâu sắc <span style="font-style: italic; opacity: 0.8;">(cũ rích).</span>
    </p>
  </section>

  <!-- AUTHORS GRID -->
  <section class="authors-grid reveal-sec">
    <!-- XÊ -->
    <div class="author-card">
      <div class="avatar-frame">
        <img src="https://symbols.vn/wp-content/uploads/2022/02/Hinh-Ga-Chibi-sieu-dang-yeu-cute.jpg" alt="Xê" />
      </div>
      <h3 style="font-family: 'Merriweather', serif; font-size: 1.4rem; margin-bottom: 5px;">Xê</h3>
      <p style="color: var(--sky); font-weight: 600; font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase;">Editor • Làm màu</p>
      <p style="font-size: 0.85rem; font-style: italic; margin-top: 10px; color: var(--text-mid);">
        Các cậu sẽ gặp mình thường xuyên hơn Gờ◝(ᵔᗜᵔ)◜
      </p>
    </div>

    <!-- GỜ -->
    <div class="author-card">
      <div class="avatar-frame">
        <img src="https://hoichimtroi.com/wp-content/uploads/2025/10/khi-chibi-27.jpg" alt="Gờ" />
      </div>
      <h3 style="font-family: 'Merriweather', serif; font-size: 1.4rem; margin-bottom: 5px;">Gờ</h3>
      <p style="color: var(--sky); font-weight: 600; font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase;">Editor • Làm thinh</p>
      <p style="font-size: 0.85rem; font-style: italic; margin-top: 10px; color: var(--text-mid);">
        Ngàn năm mới ngoi lên một lần (,,>﹏<,,)
      </p>
    </div>
  </section>

  <!-- PHILOSOPHY -->
  <section class="story-box reveal-sec">
    <h3 style="font-family: 'Merriweather', serif; color: var(--sky-dark); margin-bottom: 15px;">Lời nhắn gửi từ đại dương 🌊</h3>
    <p>
      Chào mừng mọi người đã ghé thăm. Truyện tại nhà Cá được chọn lọc và edit hoàn toàn dựa trên 
      <span class="highlight-text">gu cá nhân của hai đứa</span>. 
    </p>
    <p>
Xin chào mọi người, lại là dynamicduo_q đây 🌻 Chào mừng mọi người đến với nhà mới của chúng mình <span style="font-style: italic; opacity: 0.8;">(một lần nữa nữa ꉂ(˵˃ ᗜ ˂˵))</span>, vẫn mong rằng chúng ta có thể ở lại đây thật lâu, thật lâu. 
<p> Truyện được chọn và edit hoàn toàn dựa trên gu đọc của hai đứa, vô cùng chào đón các bạn có chung sở thích, và cả các bạn muốn thử thách bản thân ở những thể loại bối cảnh mới.
</p>
    </p>
  </section>

  <!-- CALL TO ACTION -->
  <section class="cta-section reveal-sec">
    <div style="font-size: 2.5rem; margin-bottom: 10px;">🍽️</div>
    <h2 style="font-family: 'Merriweather', serif; margin: 0 0 10px; color: white;">Bạn đã đói chưa?</h2>
    <p style="opacity: 0.9;">Tủ truyện "Cá Trên Bàn" đã tẩm đầy gia vị, sẵn sàng phục vụ các bạn.</p>
    <a href="/dynamic-duo-web/ca-tren-ban/" class="cta-btn">Thưởng thức ngay</a>
  </section>

  <!-- FOOTER RULES -->
  <footer class="reveal-sec" style="margin-top: 80px; padding-bottom: 40px;">
    <div style="text-align: center; border-top: 1px solid var(--glass-border); padding-top: 30px;">
      <p style="font-size: 0.9rem; color: var(--text-mid);">
        Mọi đóng góp, báo lỗi, lời muốn nói, đừng ngần ngại gửi về:
      </p>
      <a href="mailto:dynamicduoo.q@gmail.com" style="font-weight: bold; color: var(--sky); font-size: 1.1rem;">
        dynamicduoo.q@gmail.com
      </a>
      
      <div style="margin-top: 40px; padding: 25px; background: var(--sky-pale); border-radius: 20px; font-size: 0.85rem;">
        <p style="margin: 0; line-height: 1.6;">
          <strong style="color: var(--sky-dark);">Lưu ý nhỏ:</strong> 
          Tất cả truyện tại đây đều là bản edit phi lợi nhuận. Bản quyền gốc thuộc về tác giả. 
          Vui lòng <span class="highlight-text">không re-up/chuyển ver</span> dưới mọi hình thức để ủng hộ công sức của chúng mình nhé!
        </p>
      </div>
    </div>
  </footer>
</div>

<script is:inline>
  // Script để tạo hiệu ứng hiện dần khi cuộn trang
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-sec').forEach(el => observer.observe(el));
</script>