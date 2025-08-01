<template>
  <div class="cat9-platform">
    <!-- 导航栏 -->
    <header class="navbar">
      <div class="container">
        <div class="logo-container">
          <div class="cat-avatar"></div>
          <h1 class="logo">Cat9 <span class="entertainment">Entertainment</span></h1>
        </div>
        <nav class="nav-links">
          <a href="#home" class="nav-link active">{{ $t('nav.home') }}</a>
          <a href="#games" class="nav-link">{{ $t('nav.games') }}</a>
          <a href="#about" class="nav-link">{{ $t('nav.about') }}</a>
          <a href="#community" class="nav-link">{{ $t('nav.community') }}</a>
        </nav>
        <div class="user-actions">
          <button class="btn-connect">{{ $t('wallet.connect') }}</button>
          <div class="language-selector">
            <button class="btn-lang" @click="toggleLanguage('zh')" :class="{ active: this.$i18n.locale === 'zh' }">{{
              $t('lang.zh') }}</button>
            <button class="btn-lang" @click="toggleLanguage('en')" :class="{ active: this.$i18n.locale === 'en' }">{{
              $t('lang.en') }}</button>
            <button class="btn-lang" @click="toggleLanguage('ja')" :class="{ active: this.$i18n.locale === 'ja' }">{{
              $t('lang.ja') }}</button>
            <button class="btn-lang" @click="toggleLanguage('ko')" :class="{ active: this.$i18n.locale === 'ko' }">{{
              $t('lang.ko') }}</button>
          </div>
        </div>
      </div>
    </header>

    <!-- 英雄区域 -->
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-content">
          <h2 class="hero-title">{{ $t('hero.title') }}</h2>
          <p class="hero-description">{{ $t('hero.description') }}</p>
          <div class="hero-buttons">
            <button class="btn-primary">{{ $t('action.startGame') }}</button>
            <button class="btn-secondary">{{ $t('action.learnMore') }}</button>
          </div>
        </div>
      </div>
    </section>
    <!-- 热门游戏区域 -->
<section class="games-section" id="games">
  <div class="container">
    <h2 class="section-title">{{ $t('games.hot') }}</h2>
    <div class="games-filter">
      <button class="filter-btn active">{{ $t('filter.all') }}</button>
      <button class="filter-btn">{{ $t('filter.action') }}</button>
      <button class="filter-btn">{{ $t('filter.strategy') }}</button>
      <button class="filter-btn">{{ $t('filter.rpg') }}</button>
      <button class="filter-btn">{{ $t('filter.casual') }}</button>
    </div>
    <div class="games-grid waterfall">
      <!-- 游戏卡片将通过瀑布流动态布局 -->
      <div class="game-card">
        <div class="game-image" style="height: 200px;"></div>
        <div class="game-info">
          <h3 class="game-title">Crypto Raiders</h3>
          <div class="game-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <span class="rating-number">4.5</span>
          </div>
          <p class="game-description">{{ $t('games.cryptoRaiders.description') }}</p>
          <div class="game-tags">
            <span class="tag">{{ $t('tags.adventure') }}</span>
            <span class="tag">{{ $t('tags.nft') }}</span>
          </div>
          <button class="btn-play">{{ $t('action.startGame') }}</button>
        </div>
      </div>
// ... 其他游戏卡片也做类似修改 ...
    </div>
    <button class="btn-load-more">{{ $t('games.more') }}</button>
  </div>
</section>
// ... existing code ...
<!-- 关于我们区域 -->
<section class="about-section" id="about">
  <div class="container">
    <div class="about-content">
      <h2 class="section-title">{{ $t('about.title') }}</h2>
      <p>{{ $t('about.description') }}</p>
      <div class="about-features">
        <div class="feature-item">
          <div class="feature-icon"><i class="fas fa-shield-alt"></i></div>
          <h3>{{ $t('about.features.security') }}</h3>
          <p>{{ $t('about.features.securityDesc') }}</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon"><i class="fas fa-crown"></i></div>
          <h3>{{ $t('about.features.ownership') }}</h3>
          <p>{{ $t('about.features.ownershipDesc') }}</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon"><i class="fas fa-globe"></i></div>
          <h3>{{ $t('about.features.community') }}</h3>
          <p>{{ $t('about.features.communityDesc') }}</p>
        </div>
      </div>
    </div>
  </div>
</section>
// ... existing code ...
<!-- 页脚 -->
<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-logo">
        <div class="cat-avatar"></div>
        <h3 class="logo">Cat9 <span class="entertainment">Entertainment</span></h3>
      </div>
      <div class="footer-links">
        <div class="footer-link-group">
          <h4>{{ $t('footer.platform') }}</h4>
          <a href="#home" class="footer-link">{{ $t('nav.home') }}</a>
          <a href="#games" class="footer-link">{{ $t('footer.games') }}</a>
          <a href="#about" class="footer-link">{{ $t('nav.about') }}</a>
          <a href="#community" class="footer-link">{{ $t('nav.community') }}</a>
        </div>
        <div class="footer-link-group">
          <h4>{{ $t('footer.support') }}</h4>
          <a href="#" class="footer-link">{{ $t('footer.helpCenter') }}</a>
          <a href="#" class="footer-link">{{ $t('footer.faq') }}</a>
          <a href="#" class="footer-link">{{ $t('footer.contact') }}</a>
        </div>
        <div class="footer-link-group">
          <h4>{{ $t('footer.legal') }}</h4>
          <a href="#" class="footer-link">{{ $t('footer.privacy') }}</a>
          <a href="#" class="footer-link">{{ $t('footer.terms') }}</a>
          <a href="#" class="footer-link">{{ $t('footer.cookie') }}</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>{{ $t('footer.copyright') }}</p>
    </div>
  </div>
</footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted () {
    // 初始化瀑布流布局
    this.initWaterfall()
    // 添加滚动监听
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    // 移除滚动监听
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleLanguage (lang) {
      if (['zh', 'en', 'ja', 'ko'].includes(lang)) {
        this.$i18n.locale = lang
        localStorage.setItem('language', lang)
      }
    },
    // 初始化瀑布流
    initWaterfall () {
      const container = document.querySelector('.waterfall')
      if (!container) return

      // 简单的瀑布流实现
      const items = Array.from(document.querySelectorAll('.game-card'))
      const columnCount = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3
      const columnWidth = container.clientWidth / columnCount
      const columnHeights = Array(columnCount).fill(0)

      items.forEach(item => {
        // 设置卡片宽度
        item.style.width = `${columnWidth - 20}px` // 减去间距

        // 找到高度最小的列
        let minHeight = columnHeights[0]
        let minIndex = 0
        columnHeights.forEach((height, index) => {
          if (height < minHeight) {
            minHeight = height
            minIndex = index
          }
        })

        // 设置卡片位置
        item.style.position = 'absolute'
        item.style.left = `${minIndex * columnWidth}px`
        item.style.top = `${minHeight + 20}px` // 加上间距

        // 更新列高度
        columnHeights[minIndex] = minHeight + item.offsetHeight + 20
      })

      // 设置容器高度
      container.style.height = `${Math.max(...columnHeights)}px`
    },
    // 处理滚动加载更多
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight

      // 当滚动到页面底部附近时加载更多
      if (scrollTop + clientHeight >= scrollHeight - 300) {
        this.loadMoreGames()
      }
    },
    // 加载更多游戏
    loadMoreGames () {
      // 这里应该是异步加载更多游戏的逻辑
      // 为了演示，我们只是简单地复制现有的游戏卡片
      const container = document.querySelector('.games-grid')
      if (!container) return

      // 避免重复加载
      if (this.isLoading) return
      this.isLoading = true

      // 模拟加载延迟
      setTimeout(() => {
        const existingCards = Array.from(document.querySelectorAll('.game-card'))
        existingCards.slice(0, 3).forEach(card => {
          const newCard = card.cloneNode(true)
          container.appendChild(newCard)
        })

        // 重新布局瀑布流
        this.initWaterfall()
        this.isLoading = false
      }, 1000)
    }
  },
  data () {
    return {
      isLoading: false
    }
  }
}
</script>
<style scoped>
/* 基础样式 */
.cat9-platform {
  font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;
  background-color: #0f0f0f;
  color: #ffffff;
  min-height: 100vh;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

/* 导航栏 */
.navbar {
  background-color: #111111;
  border-bottom: 1px solid #333333;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.cat-avatar {
  width: 50px;
  height: 50px;
  background-color: #333333;
  border-radius: 50%;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6l4 2"/></svg>');
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}

.entertainment {
  color: #666666;
  font-weight: 400;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: #cccccc;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.active {
  color: #ffffff;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
}

.user-actions {
  display: flex;
  gap: 15px;
}

.btn-connect {
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.language-selector {
  display: flex;
  gap: 5px;
}

.btn-lang {
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-lang:hover {
  background-color: #ffffff;
  color: #000000;
}

.btn-lang.active {
  background-color: #ffffff;
  color: #000000;
}

.btn-connect:hover {
  background-color: #cccccc;
}

/* 英雄区域 */
.hero {
  padding: 180px 0 100px;
  background-color: #111111;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(30, 30, 30, 0.5) 0%, rgba(17, 17, 17, 1) 70%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: #ffffff;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.2rem;
  color: #cccccc;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn-primary {
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #cccccc;
}

.btn-secondary {
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 12px 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* 游戏区域 */
.games-section {
  padding: 100px 0;
  background-color: #0f0f0f;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  color: #ffffff;
}

.games-filter {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-btn {
  background-color: #1a1a1a;
  color: #cccccc;
  border: 1px solid #333333;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background-color: #333333;
  color: #ffffff;
  border-color: #444444;
}

.games-grid {
  position: relative;
  margin-bottom: 40px;
}

.waterfall {
  position: relative;
  width: 100%;
}

.game-card {
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  border: 1px solid #333333;
  position: absolute;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border-color: #444444;
}

.game-image {
  width: 100%;
  background-color: #222222;
  background-image: linear-gradient(45deg, #222222, #111111);
  position: relative;
}

.game-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 60%);
}

.game-info {
  padding: 20px;
}

.game-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #ffffff;
}

.game-rating {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.game-rating i {
  color: #ffcc00;
  margin-right: 5px;
}

.rating-number {
  color: #cccccc;
  margin-left: 10px;
  font-size: 0.9rem;
}

.game-description {
  font-size: 0.95rem;
  color: #999999;
  margin-bottom: 15px;
  line-height: 1.5;
}

.game-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  background-color: #2a2a2a;
  color: #cccccc;
  border-radius: 15px;
  padding: 4px 12px;
  font-size: 0.8rem;
}

.btn-play {
  display: block;
  width: 100%;
  background-color: #333333;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-play:hover {
  background-color: #444444;
}

.btn-load-more {
  display: block;
  margin: 0 auto;
  background-color: transparent;
  color: #cccccc;
  border: 1px solid #333333;
  border-radius: 4px;
  padding: 12px 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-load-more:hover {
  background-color: #1a1a1a;
  color: #ffffff;
}

/* 关于我们区域 */
.about-section {
  padding: 100px 0;
  background-color: #111111;
  border-top: 1px solid #333333;
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.about-content p {
  color: #cccccc;
  margin-bottom: 30px;
  line-height: 1.6;
  font-size: 1.05rem;
}

.about-features {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
  flex-wrap: wrap;
}

.feature-item {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 30px;
  width: 250px;
  border: 1px solid #333333;
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border-color: #444444;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background-color: #2a2a2a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #ffffff;
  font-size: 1.5rem;
}

.feature-item h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #ffffff;
}

.feature-item p {
  color: #999999;
  font-size: 0.95rem;
  margin-bottom: 0;
}

/* 社区区域 */
.community-section {
  padding: 100px 0;
  background-color: #0f0f0f;
  border-top: 1px solid #333333;
  text-align: center;
}

.community-description {
  color: #cccccc;
  margin-bottom: 40px;
  font-size: 1.05rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-link {
  width: 50px;
  height: 50px;
  background-color: #1a1a1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cccccc;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #333333;
}

.social-link:hover {
  background-color: #333333;
  color: #ffffff;
  transform: translateY(-3px);
  border-color: #444444;
}

/* 页脚 */
.footer {
  background-color: #111111;
  padding: 60px 0 30px;
  border-top: 1px solid #333333;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.footer-links {
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
}

.footer-link-group {
  margin-bottom: 30px;
}

.footer-link-group h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
}

.footer-link {
  display: block;
  color: #999999;
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ffffff;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid #333333;
}

.footer-bottom p {
  color: #666666;
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .feature-item {
    width: 200px;
  }
}

@media (max-width: 768px) {
  .navbar .container {
    height: 60px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .cat-avatar {
    width: 40px;
    height: 40px;
  }

  .nav-links {
    display: none;
  }

  .hero {
    padding: 140px 0 80px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .about-features {
    flex-direction: column;
    align-items: center;
  }

  .feature-item {
    width: 100%;
    max-width: 300px;
  }

  .footer-content {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 300px;
  }
}
</style>
