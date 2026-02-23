export default function CartSkeleton() {
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
    .cart-wrap {
      max-width: 1280px;
      margin: 0 auto;
      padding: 24px 16px 48px;
    }

    /* Title block */
    .cart-title { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }

    /* Main layout: stacked on mobile */
    .cart-layout { display: flex; flex-direction: column; gap: 24px; }

    /* Bag panel */
    .bag-panel {
      background: #FAFAFA;
      border-radius: 16px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    /* Cart item row */
    .cart-item {
      display: flex;
      gap: 16px;
      padding-bottom: 32px;
      border-bottom: 1px solid rgba(0,0,0,0.08);
      margin-bottom: 8px;
    }
    .cart-item:last-child { border-bottom: none; }

    .item-img { width: 157px; height: 157px; border-radius: 16px; flex-shrink: 0; }

    .item-details { flex: 1; display: flex; flex-direction: column; gap: 8px; }
    .item-top    { display: flex; justify-content: space-between; align-items: flex-start; }
    .item-title  { width: 60%; height: 18px; border-radius: 6px; }
    .item-price-desktop { display: none; }  /* hidden on mobile, shown desktop */
    .item-price-mobile  { width: 80px; height: 20px; border-radius: 6px; margin-top: 8px; }
    .item-color  { width: 100px; height: 14px; border-radius: 4px; }
    .item-row    { display: flex; align-items: center; gap: 16px; }
    .item-size   { width: 70px; height: 16px; border-radius: 4px; }
    .item-qty    { width: 90px; height: 34px; border-radius: 8px; }
    .item-actions { display: flex; gap: 8px; margin-top: 8px; }
    .item-action-btn { width: 28px; height: 28px; border-radius: 50%; }

    /* Summary panel */
    .summary-panel {
      background: #FAFAFA;
      border-radius: 16px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .summary-row { display: flex; justify-content: space-between; }
    .summary-divider {
      border-top: 1px solid #e0e0e0;
      padding-top: 16px;
      display: flex;
      justify-content: space-between;
    }
    .checkout-btn { width: 100%; height: 52px; border-radius: 12px; }
    .promo-link   { width: 150px; height: 16px; border-radius: 4px; }

    /* Also like — 2 cols on mobile */
    .also-section { margin-top: 40px; }
    .also-grid { display: flex; gap: 14px; overflow: hidden; }
    .also-item { flex: 0 0 calc(50% - 7px); min-width: 0; display: flex; flex-direction: column; gap: 10px; }
    .also-img  { width: 100%; height: 170px; border-radius: 14px; }

    /* ── Desktop (lg: 1024px+) ── */
    @media (min-width: 1024px) {
      .cart-wrap { padding: 36px 0 64px; }
      .cart-title { margin-bottom: 36px; max-width: 780px; }
      .cart-layout { flex-direction: row; gap: 48px; align-items: flex-start; }

      /* Bag panel */
      .bag-panel { flex: 1; padding: 24px; }
      .item-img { width: 208px; height: 208px; border-radius: 28px; }
      .item-title { height: 26px; width: 50%; }
      .item-price-desktop { display: block; width: 80px; height: 26px; border-radius: 6px; }
      .item-price-mobile  { display: none; }
      .item-color { height: 18px; }
      .item-size  { height: 18px; }
      .item-qty   { width: 110px; height: 40px; }
      .item-action-btn { width: 32px; height: 32px; }
      .item-actions { margin-top: auto; padding-top: 40px; }

      /* Summary panel */
      .summary-panel {
        background: transparent;
        padding: 0;
        width: 418px;
        flex-shrink: 0;
        gap: 24px;
      }
      .checkout-btn { height: 52px; }

      /* Also like — 4 cols on desktop */
      .also-grid { gap: 24px; overflow: visible; }
      .also-item { flex: 1; min-width: 0; }
      .also-img  { height: 260px; border-radius: 20px; }
    }
  `;

  const Sk = ({ cls = "", style = {} }) => <div className={`sk ${cls}`} style={style} />;

  const CartItem = () => (
    <div className="cart-item">
      <Sk cls="item-img" />
      <div className="item-details">
        <div className="item-top">
          <Sk cls="item-title" />
          <Sk cls="item-price-desktop" />
        </div>
        <Sk cls="item-color" />
        <div className="item-row">
          <Sk cls="item-size" />
          <Sk cls="item-qty" />
        </div>
        <Sk cls="item-price-mobile" />
        <div className="item-actions">
          <Sk cls="item-action-btn" />
          <Sk cls="item-action-btn" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{styles}</style>
      <div className="cart-wrap">
        {/* Title block */}
        <div className="cart-title">
          <Sk style={{ width: "240px", height: "28px", borderRadius: "8px" }} />
          <Sk style={{ width: "80%", height: "14px", borderRadius: "4px" }} />
          <Sk style={{ width: "160px", height: "14px", borderRadius: "4px" }} />
        </div>

        <div className="cart-layout">
          {/* ── Bag Panel ── */}
          <div className="bag-panel">
            <Sk style={{ width: "140px", height: "28px", borderRadius: "8px" }} />
            <Sk
              style={{ width: "70%", height: "14px", borderRadius: "4px", marginBottom: "16px" }}
            />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          {/* ── Order Summary ── */}
          <div className="summary-panel">
            <Sk style={{ width: "180px", height: "28px", borderRadius: "8px" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                ["120px", "80px"],
                ["100px", "70px"],
                ["110px", "70px"],
              ].map(([w1, w2], i) => (
                <div key={i} className="summary-row">
                  <Sk style={{ width: w1, height: "18px", borderRadius: "5px" }} />
                  <Sk style={{ width: w2, height: "18px", borderRadius: "5px" }} />
                </div>
              ))}
              <div className="summary-divider">
                <Sk style={{ width: "70px", height: "22px", borderRadius: "5px" }} />
                <Sk style={{ width: "90px", height: "22px", borderRadius: "5px" }} />
              </div>
            </div>

            <Sk cls="checkout-btn" />
            <Sk cls="promo-link" />
          </div>
        </div>

        {/* ── You may also like ── */}
        <div className="also-section">
          <Sk
            style={{ width: "200px", height: "26px", borderRadius: "8px", marginBottom: "20px" }}
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
