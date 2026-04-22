import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BannerLast from '../components/BannerLast';

/* Reusable scroll-reveal hook */
function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Home() {
  const navigate = useNavigate();

  const quoteRef    = useScrollReveal();
  const masonryRef  = useScrollReveal();
  const writingsRef = useScrollReveal();

  return (
    <div className="home-container">

      {/* ── 1. FULL-SCREEN HERO ── */}
      <section className="home-hero">
        <div className="home-hero__overlay" />
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">a personal gallery</p>
          <h1 className="home-hero__title">artryst</h1>
          <p className="home-hero__subtitle">
            find inspiration in everyday moments&nbsp;&amp;&nbsp;the beauty of human experience
          </p>
          <div className="home-hero__ctas">
            <button className="home-cta home-cta--ghost" onClick={() => navigate('/artworks')}>
              Explore Artworks
            </button>
            <button className="home-cta home-cta--ghost" onClick={() => navigate('/writeups')}>
              Read Write-Ups
            </button>
          </div>
        </div>
        <div className="home-hero__scroll-hint">
          <span>scroll</span>
          <div className="home-hero__scroll-line" />
        </div>
      </section>

      {/* ── 2. EDITORIAL QUOTE STRIP ── */}
      <div className="home-quote reveal-target" ref={quoteRef}>
        <span className="home-quote__mark">"</span>
        <p className="home-quote__text">
          ·٠•Ƹ̵̡Ӝ̵̨̄Ʒ&nbsp;•&nbsp;٠&nbsp;&nbsp;exhibit A-rt&nbsp;&nbsp;٠&nbsp;•&nbsp;Ƹ̵̡Ӝ̵̨̄Ʒ•٠·˙
        </p>
      </div>

      {/* ── 3. MASONRY ARTWORK GRID ── */}
      <section className="home-masonry reveal-target" ref={masonryRef}>
        <header className="home-masonry__header">
          <h2 className="home-section-title">Artworks</h2>
          <button className="home-link-btn" onClick={() => navigate('/artworks')}>
            View All →
          </button>
        </header>
        <div className="home-masonry__grid">
          {/* large left cell */}
          <div className="home-masonry__cell home-masonry__cell--large" onClick={() => navigate('/artworks')}>
            <img src="/images/artwork2.jpg" alt="Lily" />
            <div className="home-masonry__label">Lily</div>
          </div>
          {/* right column */}
          <div className="home-masonry__col">
            <div className="home-masonry__cell" onClick={() => navigate('/artworks')}>
              <img src="/images/artwork3.jpg" alt="Live Up" />
              <div className="home-masonry__label">Live Up</div>
            </div>
            <div className="home-masonry__cell" onClick={() => navigate('/artworks')}>
              <img src="/images/artwork4.jpg" alt="Eye of Everything" />
              <div className="home-masonry__label">Eye of Everything</div>
            </div>
          </div>
          {/* accent vertical banner */}
          <div className="home-masonry__cell home-masonry__cell--accent" onClick={() => navigate('/artworks')}>
            <img src="/images/banner5.jpg" alt="Featured" />
            <div className="home-masonry__label">Featured</div>
          </div>
        </div>
      </section>

      {/* ── 4a. WRITINGS DIVIDER STRIP ── */}
      <div className="home-writings-divider reveal-target" ref={writingsRef}>
        <div className="home-writings-divider__inner">
          <div className="home-writings-divider__line" />
          <span className="home-writings-divider__text">
            ·٠• Writings &amp; Reflections •٠·
          </span>
          <div className="home-writings-divider__line" />
        </div>
        <p className="home-writings-divider__sub">
          stories, observations &amp; late-night thoughts
        </p>
      </div>

      {/* ── 4b. WRITINGS HORIZONTAL SCROLL ── */}
      <section className="home-writings">
        <header className="home-writings__header">
          <h2 className="home-section-title">Recent Pieces</h2>
          <button className="home-link-btn" onClick={() => navigate('/writeups')}>
            Read All →
          </button>
        </header>
        <div className="home-writings__strip">
          {[
            { img: '/images/writeups/writeup3.jpg',  title: 'Washed Away',          desc: 'A short story of letting go.' },
            { img: '/images/writeups/writeup4.jpg',  title: 'Glitter on the Floor',  desc: 'Fragments of a party left behind.' },
            { img: '/images/writeups/writeup5.jpg',  title: 'Following Him',         desc: 'On pursuit and surrender.' },
            { img: '/images/writeups/writeup7.jpg',  title: 'My Castles',            desc: 'Promises in sand castles.' },
          ].map((w) => (
            <div
              key={w.title}
              className="home-writings__card"
              onClick={() => navigate('/writeups')}
            >
              <div className="home-writings__card-tape" />
              <div className="home-writings__card-img">
                <img src={w.img} alt={w.title} />
              </div>
              <div className="home-writings__card-body">
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
                <span className="home-writings__read">Read →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. CLOSING BANNER — original BannerLast ── */}
      <BannerLast />

    </div>
  );
}

export default Home;
