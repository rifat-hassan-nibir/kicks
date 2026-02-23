export default function ProductSkeleton() {
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

    /* ── Mobile-first ── */
    .pd-wrap {
      max-width: 1280px;
      margin: 0 auto;
      padding: 24px 16px 64px;
    }
    .pd-layout {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    /* Mobile gallery */
    .gal-mobile { display: flex; flex-direction: column; gap: 16px; }
    .gal-main   { width: 100%; aspect-ratio: 1; border-radius: 16px; }
    .gal-thumbs { display: flex; gap: 8px; }
    .gal-thumb  { width: 56px; height: 56px; border-radius: 10px; flex-shrink: 0; }

    /* Desktop gallery hidden on mobile */
    .gal-desktop { display: none; }

    /* Info panel */
    .pd-info { display: flex; flex-direction: column; gap: 20px; }

    .badge   { width: 90px;  height: 28px; border-radius: 10px; }
    .title   { width: 75%;   height: 24px; border-radius: 8px; }
    .price   { width: 90px;  height: 24px; border-radius: 8px; }
    .label   { width: 55px;  height: 12px; border-radius: 4px; }
    .label-r { width: 85px;  height: 12px; border-radius: 4px; }

    .color-dots { display: flex; gap: 8px; }
    .color-dot  { width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0; }

    .size-grid { display: flex; flex-wrap: wrap; gap: 6px; }
    .size-btn  { width: 44px; height: 36px; border-radius: 8px; }

    .btn-row   { display: flex; gap: 8px; }
    .btn-main  { flex: 1; height: 48px; border-radius: 10px; }
    .btn-icon  { width: 48px; height: 48px; border-radius: 10px; flex-shrink: 0; }
    .btn-full  { width: 100%; height: 48px; border-radius: 10px; }

    .desc-lines { display: flex; flex-direction: column; gap: 8px; }

    /* Also like — 2 cols on mobile */
    .also-grid { display: flex; gap: 14px; overflow: hidden; }
    .also-item { flex: 0 0 calc(50% - 7px); min-width: 0; display: flex; flex-direction: column; gap: 10px; }
    .also-img  { width: 100%; height: 170px; border-radius: 16px; }

    /* ── Desktop (lg: 1024px+) ── */
    @media (min-width: 1024px) {
      .pd-wrap { padding: 32px 0 64px; }
      .pd-layout { flex-direction: row; gap: 16px; align-items: flex-start; }

      .gal-mobile  { display: none; }
      .gal-desktop {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        flex: 1;
      }
      .gal-cell { aspect-ratio: 1; border-radius: 28px; }

      .pd-info { width: 430px; flex-shrink: 0; gap: 24px; }

      .badge  { width: 100px; height: 32px; }
      .title  { height: 32px; }
      .price  { width: 100px; height: 32px; }
      .label  { height: 14px; }
      .label-r { height: 14px; }

      .color-dot  { width: 36px; height: 36px; }
      .size-btn   { width: 56px; height: 44px; }
      .btn-main   { height: 52px; }
      .btn-icon   { width: 52px; height: 52px; }
      .btn-full   { height: 52px; }

      .also-grid { gap: 24px; overflow: visible; }
      .also-item { flex: 1; min-width: 0; }
      .also-img  { height: 260px; border-radius: 20px; }
    }
  `;

  const Sk = ({ cls = "", style = {} }) => <div className={`sk ${cls}`} style={style} />;

  return (
    <>
      <style>{styles}</style>
      <div className="pd-wrap">
        <div className="pd-layout">
          {/* ── Mobile Gallery ── */}
          <div className="gal-mobile">
            <Sk cls="gal-main" />
            <div className="gal-thumbs">
              {[1, 2, 3, 4].map((i) => (
                <Sk key={i} cls="gal-thumb" />
              ))}
            </div>
          </div>

          {/* ── Desktop Gallery 2×2 ── */}
          <div className="gal-desktop">
            {[1, 2, 3, 4].map((i) => (
              <Sk key={i} cls="gal-cell" />
            ))}
          </div>

          {/* ── Product Info ── */}
          <div className="pd-info">
            {/* Badge / Title / Price */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Sk cls="badge" />
              <Sk cls="title" />
              <Sk cls="price" />
            </div>

            {/* Color */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Sk cls="label" />
              <div className="color-dots">
                {[1, 2, 3, 4].map((i) => (
                  <Sk key={i} cls="color-dot" />
                ))}
              </div>
            </div>

            {/* Size */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Sk cls="label" />
                <Sk cls="label-r" />
              </div>
              <div className="size-grid">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <Sk key={i} cls="size-btn" />
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div className="btn-row">
                <Sk cls="btn-main" />
                <Sk cls="btn-icon" />
              </div>
              <Sk cls="btn-full" />
            </div>

            {/* Description */}
            <div className="desc-lines">
              <Sk style={{ width: "150px", height: "14px", borderRadius: "4px" }} />
              {[100, 95, 88, 92, 70].map((w, i) => (
                <Sk key={i} style={{ width: `${w}%`, height: "12px", borderRadius: "4px" }} />
              ))}
            </div>
          </div>
        </div>

        {/* ── You may also like ── */}
        <div style={{ marginTop: "48px" }}>
          <Sk
            style={{ width: "200px", height: "28px", borderRadius: "8px", marginBottom: "20px" }}
          />
          <div className="also-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="also-item">
                <Sk cls="also-img" />
                <Sk style={{ width: "75%", height: "16px", borderRadius: "5px" }} />
                <Sk style={{ width: "50%", height: "14px", borderRadius: "5px" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
