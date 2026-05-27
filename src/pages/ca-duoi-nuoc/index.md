---
import Layout from '../../layouts/Layout.astro';

const stories = [
  {
    title: 'Quan hệ bạn cùng phòng',
    author: 'Hạnh Lan',
    desc: 'Anh ấy nghèo thì đã sao? Tôi có tiền là được rồi.',
    cover: '/dynamic-duo-web/images/biaqhbcp.png',
    href: '/dynamic-duo-web/ca-duoi-nuoc/quan-he-ban-cung-phong/',
    status: 'ongoing',
    tags: ['đam mỹ', 'hiện đại', 'niên hạ', 'trai thẳng', 'yêu thầm'],
    progress: '1.3% (1/72)',
    firstChap: '/dynamic-duo-web/ca-duoi-nuoc/quan-he-ban-cung-phong/chuong-01/',
  },
  {
    title: 'Hạ cháy đồng hoang',
    author: 'Hỉ Thượng Mi Sao',
    desc: 'Tình yêu là bản năng ẩn sau miền hoang tàn của ký ức.',
    cover: '/dynamic-duo-web/images/biatdxt.png',
    href: '/dynamic-duo-web/ca-duoi-nuoc/ha-chay-dong-hoang/',
    status: 'ongoing',
    tags: ['đam mỹ', 'hiện đại', 'chua xót', 'mất trí nhớ', 'đồng quê'],
    progress: '5.5% (6/109)',
    firstChap: '/dynamic-duo-web/ca-duoi-nuoc/ha-chay-dong-hoang/chuong-01/',
  },
];
---

<Layout frontmatter={{ title: 'Cá dưới nước' }}>
  <style>
    .page-hero { text-align: center; padding: 10px 0 36px; }
    .page-emoji { font-size: 2.5rem; display: block; margin-bottom: 10px; }
    .page-title { font-family: 'Merriweather', serif; font-size: 1.4rem; color: var(--sky-dark); margin: 0 0 6px; }
    .page-sub { font-size: .85rem; color: var(--text-dim); font-style: italic; margin: 0; }

    .story-list { display: flex; flex-direction: column; gap: 24px; margin-top: 24px; }
    .story-item {
      display: flex; gap: 20px;
      border: 1px solid rgba(186,230,253,.5);
      border-radius: var(--r-md);
      overflow: hidden;
      background: #fff;
      transition: var(--t);
    }
    .story-item:hover { box-shadow: var(--sh-card); transform: translateY(-2px); }
    .story-cover { width: 140px; min-height: 180px; object-fit: cover; flex-shrink: 0; background: var(--sky-pale); display: block; }
    .story-info { padding: 18px 20px 18px 0; flex: 1; display: flex; flex-direction: column; }
    .story-badge {
      display: inline-block; font-size: .65rem; letter-spacing: 1.5px;
      text-transform: uppercase; padding: 2px 10px; border-radius: var(--r-pill);
      margin-bottom: 8px; font-weight: 600; width: fit-content;
      background: #fef9c3; color: #854d0e;
    }
    .story-title { font-family: 'Merriweather', serif; font-size: 1rem; color: var(--sky-dark); margin: 0 0 4px; }
    .story-author { font-size: .76rem; color: var(--text-dim); font-style: italic; margin: 0 0 8px; }
    .story-desc { font-size: .84rem; color: var(--text-mid); line-height: 1.65; margin: 0 0 10px; flex: 1; }
    .story-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 10px; }
    .story-tag { font-size: .68rem; padding: 2px 8px; border: 1px solid var(--sky-light); border-radius: var(--r-pill); color: var(--sky); background: var(--sky-pale); }
    .story-progress { font-size: .72rem; color: var(--text-dim); margin-bottom: 12px; }
    .story-btns { display: flex; gap: 8px; }
    .btn-outline {
      padding: 7px 16px; border: 1.5px solid var(--sky-light); border-radius: var(--r-pill);
      color: var(--sky-dark); font-size: .8rem; font-family: 'Newsreader', serif; transition: var(--t);
    }
    .btn-outline:hover { background: var(--sky-pale); color: var(--sky); }
    .btn-fill {
      padding: 7px 16px; background: var(--sky); border: 1.5px solid var(--sky); border-radius: var(--r-pill);
      color: #fff; font-size: .8rem; font-family: 'Newsreader', serif; transition: var(--t);
    }
    .btn-fill:hover { background: var(--sky2); }
    @media (max-width: 500px) {
      .story-item { flex-direction: column; }
      .story-cover { width: 100%; height: 180px; }
      .story-info { padding: 14px; }
    }
  </style>

  <div class="page-hero">
    <span class="page-emoji">🐠</span>
    <h1 class="page-title">Cá dưới nước</h1>
    <p class="page-sub">về tất cả những chú cá đang bơi — truyện đang tiến hành</p>
  </div>

  <div class="story-list">
    {stories.map(s => (
      <div class="story-item">
        <a href={s.href}>
          <img src={s.cover} alt={s.title} class="story-cover" onerror="this.src='/dynamic-duo-web/images/frontpage.png'" />
        </a>
        <div class="story-info">
          <span class="story-badge">🌊 Đang tiến hành</span>
          <h2 class="story-title">{s.title}</h2>
          <p class="story-author">Tác giả: {s.author}</p>
          <p class="story-desc">{s.desc}</p>
          <div class="story-tags">
            {s.tags.map(t => <span class="story-tag"># {t}</span>)}
          </div>
          <p class="story-progress">📖 Tiến độ: {s.progress}</p>
          <div class="story-btns">
            <a href={s.href} class="btn-outline">Trang truyện</a>
            <a href={s.firstChap} class="btn-fill">Đọc chương 1 →</a>
          </div>
        </div>
      </div>
    ))}
  </div>
</Layout>
