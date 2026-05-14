// 上田井接骨院 - 共通ヘッダー/フッター/スクロール処理
(function() {
  function buildHeader(active) {
    const navItems = [
      { href: 'index.html', label: 'ホーム', key: 'home' },
      { href: 'about.html', label: '当院の特徴', key: 'about' },
      { href: 'menu.html', label: '施術メニュー', key: 'menu' },
      { href: 'symptoms.html', label: '症状・お悩み', key: 'symptoms' },
      { href: 'flow.html', label: '施術の流れ', key: 'flow' },
      { href: 'access.html', label: '院情報・アクセス', key: 'access' },
      { href: 'blog.html', label: 'ブログ', key: 'blog' },
    ];

    const navHTML = navItems.map(i =>
      `<li><a href="${i.href}" class="${i.key === active ? 'active' : ''}">${i.label}</a></li>`
    ).join('');

    return `
      <header class="site-header">
        <div class="header-top">
          <div class="container">
            <span class="clinic-tag">徳島市中昭和町の接骨院｜交通事故治療に強い</span>
            <div class="header-info">
              <span>受付時間 9:15〜12:00 / 15:30〜19:30（土曜は午前のみ）</span>
              <a class="tel-link" href="tel:0886252361">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                088-625-2361
              </a>
            </div>
          </div>
        </div>
        <div class="header-main">
          <a href="index.html" class="logo">
            <span class="logo-mark leaf-sway">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M6 30c0-12 9-21 24-24-3 15-12 24-24 24z" fill="#7ba556"/>
                <path d="M6 30c6-6 12-10 21-18" stroke="#426828" stroke-width="1.2" stroke-linecap="round"/>
              </svg>
            </span>
            <span>
              上田井接骨院
              <span class="logo-sub">UDAI SEIKOTSU-IN</span>
            </span>
          </a>
          <nav>
            <ul class="nav-main">${navHTML}</ul>
          </nav>
          <a href="#reserve" class="btn-reserve-header">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            WEB予約
          </a>
          <button class="menu-toggle" aria-label="メニューを開く" id="menuToggle">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <div class="mobile-drawer" id="mobileDrawer">
        <div class="mobile-drawer-panel">
          <button class="mobile-drawer-close" id="drawerClose" aria-label="閉じる">×</button>
          <ul>
            ${navItems.map(i => `<li><a href="${i.href}">${i.label}</a></li>`).join('')}
          </ul>
          <div class="mobile-drawer-cta">
            <a href="#reserve" class="btn btn-accent">WEB予約</a>
            <a href="tel:0886252361" class="btn btn-outline">088-625-2361</a>
          </div>
        </div>
      </div>
    `;
  }

  function buildFooterCTA() {
    return `
      <section class="footer-cta" id="reserve">
        <div class="container footer-cta-grid">
          <div>
            <h2>交通事故・腰痛のお悩みは、<br>お気軽にご相談ください。</h2>
            <p>あなたの痛みに、しっかり向き合う施術を。</p>
          </div>
          <div class="footer-cta-buttons">
            <div class="footer-cta-tel">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div>
                <div class="num">088-625-2361</div>
                <div class="hours">受付時間 9:15〜12:00 / 15:30〜19:30（土曜は午前のみ）休診：土曜午後・日・祝</div>
              </div>
            </div>
            <a href="#" class="btn btn-accent btn-block btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              WEBで予約する  <span style="font-size:11px;font-weight:400;opacity:0.85;">(24時間受付)</span>
            </a>
          </div>
        </div>
      </section>
    `;
  }

  function buildFooter() {
    return `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="index.html" class="logo">
                <span class="logo-mark"><svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M6 30c0-12 9-21 24-24-3 15-12 24-24 24z" fill="#7ba556"/><path d="M6 30c6-6 12-10 21-18" stroke="#426828" stroke-width="1.2" stroke-linecap="round"/></svg></span>
                <span>上田井接骨院<span class="logo-sub">UDAI SEIKOTSU-IN</span></span>
              </a>
              <p class="footer-address">
                〒770-0943<br>
                徳島県徳島市中昭和町5丁目28-3<br>
                受付時間 9:15〜12:00 / 15:30〜19:30<br>
                ※土曜は午前のみ（9:15〜12:00）<br>
                定休日:土曜午後・日曜・祝日
              </p>
              <a href="#" class="footer-tour-btn">院内ツアーを見る ›</a>
            </div>
            <div class="footer-col">
              <h5>当院について</h5>
              <ul>
                <li><a href="about.html">院の特徴</a></li>
                <li><a href="staff.html">スタッフ紹介</a></li>
                <li><a href="flow.html">施術の流れ</a></li>
                <li><a href="access.html">院内のご案内</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h5>施術メニュー</h5>
              <ul>
                <li><a href="menu.html">交通事故ケア</a></li>
                <li><a href="menu.html">腰痛・ぎっくり腰</a></li>
                <li><a href="menu.html">肩こり・首の痛み</a></li>
                <li><a href="menu.html">スポーツ障害</a></li>
                <li><a href="menu.html">各種保険対応</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h5>症状・お悩み</h5>
              <ul>
                <li><a href="symptoms.html">むち打ち</a></li>
                <li><a href="symptoms.html">腰痛・ぎっくり腰</a></li>
                <li><a href="symptoms.html">肩こり</a></li>
                <li><a href="symptoms.html">膝・関節の痛み</a></li>
                <li><a href="symptoms.html">交通事故後の不調</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h5>ご利用案内</h5>
              <ul>
                <li><a href="price.html">料金・初めての方</a></li>
                <li><a href="access.html">アクセス</a></li>
                <li><a href="voice.html">患者さまの声</a></li>
                <li><a href="faq.html">よくあるご質問</a></li>
                <li><a href="contact.html">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-grid" style="border-top:1px solid var(--color-border);padding-top:24px;grid-template-columns:repeat(2,1fr);gap:24px;">
            <div class="footer-col">
              <h5>その他</h5>
              <ul>
                <li><a href="blog.html">スタッフブログ</a></li>
                <li><a href="#">プライバシーポリシー</a></li>
                <li><a href="#">サイトマップ</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h5>提携サービス</h5>
              <ul>
                <li><a href="#">交通事故サポートページ</a></li>
                <li><a href="#">Facebook コミュニティ</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-clinic-name">上田井接骨院</div>
          <div class="footer-copyright">© 2026 UDAI SEIKOTSU-IN. All Rights Reserved.</div>
        </div>
      </footer>
      <div class="float-reserve" id="floatReserve">
        <a class="web" href="#"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> WEB予約</a>
        <a class="tel" href="tel:0886252361"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> お電話</a>
      </div>
    `;
  }

  // Render
  window.UdaiSite = {
    renderHeader: function(active) {
      const slot = document.getElementById('site-header');
      if (slot) slot.outerHTML = buildHeader(active);
      this.bindMobileMenu();
    },
    renderFooter: function() {
      const slot = document.getElementById('site-footer');
      if (slot) slot.outerHTML = buildFooterCTA() + buildFooter();
      this.bindFloatReserve();
    },
    bindMobileMenu: function() {
      const t = document.getElementById('menuToggle');
      const d = document.getElementById('mobileDrawer');
      const c = document.getElementById('drawerClose');
      if (!t || !d) return;
      t.addEventListener('click', () => {
        d.classList.add('is-open');
        t.classList.add('is-open');
      });
      const close = () => { d.classList.remove('is-open'); t.classList.remove('is-open'); };
      if (c) c.addEventListener('click', close);
      d.addEventListener('click', e => { if (e.target === d) close(); });
    },
    bindFloatReserve: function() {
      const fr = document.getElementById('floatReserve');
      if (!fr) return;
      const onScroll = () => {
        if (window.scrollY > 480) fr.classList.add('is-visible');
        else fr.classList.remove('is-visible');
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    },
    initReveal: function() {
      const els = document.querySelectorAll('.reveal');
      if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('is-visible'));
        return;
      }
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      }, { rootMargin: '0px 0px -60px 0px' });
      els.forEach(el => io.observe(el));
    },
    init: function(activeKey) {
      this.renderHeader(activeKey);
      this.renderFooter();
      this.initReveal();
    }
  };
})();
