export default function HomeSkeleton() {
  const styles = `
    @keyframes shimmer {
      0% { background-position: -800px 0; }
      100% { background-position: 800px 0; }
    }
    .sk {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 800px 100%;
      animation: shimmer 1.4s ease-in-out infinite;
      flex-shrink: 0;
    }
    .sk-dark {
      background: linear-gradient(90deg, #2a2a2a 25%, #383838 50%, #2a2a2a 75%);
      background-size: 800px 100%;
      animation: shimmer 1.4s ease-in-out infinite;
      flex-shrink: 0;
    }

    /* ── Mobile-first ── */
    .home-wrap {
      max-width: 1280px;
      margin: 0 auto;
    }

    /* Hero */
    .hero-section { padding: 24px 16px 0; }
    .hero-title   { width: 100%; height: 64px; border-radius: 10px; margin-bottom: 16px; }
    .hero-img     {
      position: relative;
      width: 100%; height: 400px;
      border-radius: 24px;
      overflow: hidden;
    }
    .hero-tag     { position: absolute; top: 23px; left: 0; width: 36px; height: 100px; border-radius: 0 8px 8px 0; }
    .hero-text-bl { position: absolute; left: 16px; bottom: 16px; display: flex; flex-direction: column; gap: 8px; }
    .hero-h1      { width: 180px; height: 24px; border-radius: 6px; }
    .hero-sub     { width: 220px; height: 14px; border-radius: 4px; }
    .hero-cta     { width: 110px; height: 36px; border-radius: 8px; }
    .hero-thumbs  { position: absolute; right: 16px; bottom: 16px; display: flex; flex-direction: column; gap: 8px; }
    .hero-thumb   { width: 80px; height: 80px; border-radius: 16px; }

    /* New Drops */
    .drops-section { padding: 40px 16px 24px; }
    .section-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px; }
    .section-title-sm { width: 55%; height: 28px; border-radius: 8px; }
    .section-btn-sm   { width: 130px; height: 42px; border-radius: 10px; flex-shrink: 0; }

    /* Product grid — 2 cols mobile */
    .drops-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .drop-card  { display: flex; flex-direction: column; gap: 10px; }
    .drop-img   { width: 100%; aspect-ratio: 1; border-radius: 16px; }
    .drop-name  { height: 16px; border-radius: 5px; }
    .drop-btn   { height: 40px; border-radius: 10px; }

    /* Categories */
    .cats-section { background: #1a1a1a; padding: 40px 16px 0; }
    .cats-header  { display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px; }
    .cats-title   { width: 160px; height: 28px; border-radius: 8px; }
    .cats-arrows  { display: flex; gap: 8px; }
    .cats-arrow   { width: 34px; height: 34px; border-radius: 8px; }

    /* Cat cards — stacked on mobile */
    .cats-grid  { display: flex; flex-direction: column; border-radius: 32px 32px 0 0; overflow: hidden; gap: 2px; }
    .cat-card   { position: relative; height: 400px; }
    .cat-label  { position: absolute; left: 24px; right: 24px; bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
    .cat-name   { width: 120px; height: 26px; border-radius: 6px; }
    .cat-icon   { width: 40px; height: 40px; border-radius: 8px; flex-shrink: 0; }

    /* Reviews */
    .reviews-section { padding: 40px 16px 64px; }
    .reviews-header  { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }

    /* Review cards — 1 col mobile */
    .reviews-grid { display: flex; flex-direction: column; gap: 16px; }
    .review-card  { border-radius: 20px; overflow: hidden; }
    .review-top   { background: #fff; padding: 20px; display: flex; flex-direction: column; gap: 10px; }
    .review-head  { display: flex; justify-content: space-between; align-items: flex-start; }
    .review-text  { display: flex; flex-direction: column; gap: 8px; flex: 1; }
    .review-title { height: 20px; width: 140px; border-radius: 5px; }
    .review-body  { height: 14px; width: 85%; border-radius: 4px; }
    .review-avatar{ width: 48px; height: 48px; border-radius: 50%; flex-shrink: 0; margin-left: 12px; }
    .review-stars { display: flex; gap: 4px; }
    .review-star  { width: 16px; height: 16px; border-radius: 3px; }
    .review-score { width: 28px; height: 16px; border-radius: 3px; margin-left: 4px; }
    .review-img   { height: 200px; }

    /* ── Desktop ── */
    @media (min-width: 1024px) {
      .hero-section { padding: 32px 0 0; }
      .hero-title   { height: clamp(80px, 13vw, 223px); border-radius: 12px; margin-bottom: 32px; }
      .hero-img     { height: 600px; border-radius: 48px; }
      .hero-tag     { width: 48px; height: 120px; border-radius: 0 12px 12px 0; }
      .hero-text-bl { left: 48px; bottom: 48px; gap: 12px; }
      .hero-h1      { width: 300px; height: 44px; }
      .hero-sub     { width: 420px; height: 20px; }
      .hero-cta     { width: 160px; height: 52px; border-radius: 10px; }
      .hero-thumbs  { right: 32px; bottom: 32px; }
      .hero-thumb   { width: 160px; height: 160px; border-radius: 28px; }

      .drops-section { padding: 80px 0 48px; }
      .section-title-sm { height: clamp(32px, 5vw, 74px); width: 380px; }
      .section-btn-sm   { height: 52px; width: 180px; }
      .drops-grid { grid-template-columns: repeat(4, 1fr); }
      .drop-img   { border-radius: 24px; }
      .drop-btn   { height: 52px; }

      .cats-section { padding: 80px 0 0; }
      .cats-title   { height: clamp(36px, 5vw, 74px); width: 250px; }
      .cats-arrow   { width: 40px; height: 40px; }
      .cats-grid  { flex-direction: row; border-radius: 48px 48px 0 0; }
      .cat-card   { flex: 1; height: 600px; }
      .cat-label  { left: 48px; right: 48px; bottom: 30px; }
      .cat-name   { height: 32px; width: 160px; }
      .cat-icon   { width: 48px; height: 48px; }

      .reviews-section { padding: 80px 0 128px; }
      .reviews-grid { flex-direction: row; gap: 20px; }
      .review-card { flex: 1; border-radius: 32px; }
      .review-top  { padding: 32px; }
      .review-title{ height: 22px; width: 160px; }
      .review-avatar { width: 64px; height: 64px; }
      .review-star   { width: 20px; height: 20px; }
      .review-img    { height: 280px; }
    }
  `;

  const Sk = ({ cls = "", style = {} }) => <div className={`sk ${cls}`} style={style} />;
  const SkDark = ({ cls = "", style = {} }) => <div className={`sk-dark ${cls}`} style={style} />;

  return (
    <>
      <style>{styles}</style>

      {/* ── Hero ── */}
      <section className="hero-section" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Sk cls="hero-title" />
        <div className="hero-img sk">
          <Sk cls="hero-tag" />
          <div className="hero-text-bl">
            <Sk cls="hero-h1" />
            <Sk cls="hero-sub" />
            <Sk cls="hero-cta" style={{ marginTop: "4px" }} />
          </div>
          <div className="hero-thumbs">
            <Sk cls="hero-thumb" />
            <Sk cls="hero-thumb" />
          </div>
        </div>
      </section>

      {/* ── New Drops ── */}
      <div className="drops-section" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="section-header">
          <Sk cls="section-title-sm" />
          <Sk cls="section-btn-sm" />
        </div>
        <div className="drops-grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="drop-card">
              <Sk cls="drop-img" />
              <Sk cls="drop-name" style={{ width: "70%" }} />
              <Sk cls="drop-btn" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Categories (dark) ── */}
      <section className="cats-section">
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="cats-header">
            <SkDark cls="cats-title" />
            <div className="cats-arrows">
              <SkDark cls="cats-arrow" />
              <SkDark cls="cats-arrow" />
            </div>
          </div>
          <div className="cats-grid">
            {[1, 2].map((i) => (
              <div key={i} className="cat-card sk-dark">
                <div className="cat-label">
                  <SkDark cls="cat-name" />
                  <SkDark cls="cat-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="reviews-section" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="reviews-header">
          <Sk style={{ width: "180px", height: "28px", borderRadius: "8px" }} />
          <Sk style={{ width: "110px", height: "42px", borderRadius: "10px", flexShrink: 0 }} />
        </div>
        <div className="reviews-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="review-card" style={{ border: "1px solid #f0f0f0" }}>
              <div className="review-top">
                <div className="review-head">
                  <div className="review-text">
                    <Sk cls="review-title" />
                    <Sk cls="review-body" />
                  </div>
                  <Sk cls="review-avatar" />
                </div>
                <div className="review-stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Sk key={s} cls="review-star" />
                  ))}
                  <Sk cls="review-score" />
                </div>
              </div>
              <Sk cls="review-img" style={{ display: "block", width: "100%" }} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
