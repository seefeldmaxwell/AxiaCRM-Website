import React from 'react'

export default function Home() {
  return (
    <>
      <div className="noise"></div>
      <div className="gradient-bg"></div>

      <div className="container">
        <header>
          <div className="logo">
            AXIA <span className="logo-highlight">CRM</span>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="hero">
          <div className="badge">🌟 OPEN SOURCE • NON-PROFIT • GOOD CAUSE</div>
          <h1>
            <span className="gradient-text">Enterprise CRM</span><br />
            Built for Everyone
          </h1>
          <p className="subtitle">
            Battle-tested by real companies. Powered by Cloudflare&apos;s edge network.
            Click to Deploy coming soon—making enterprise CRM accessible to all.
          </p>

          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '2rem auto', padding: '1.5rem', background: 'rgba(0, 102, 255, 0.1)', border: '1px solid rgba(0, 102, 255, 0.3)', borderRadius: '12px' }}>
            <p style={{ color: '#0066ff', fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem' }}>
              💖 Support Free CRM Development
            </p>
            <p style={{ color: '#999', fontSize: '0.95rem', lineHeight: 1.6 }}>
              100% of proceeds fund free enterprise-grade CRM tools for small businesses and non-profits who can&apos;t afford Salesforce or HubSpot.
            </p>
          </div>

          <div className="trust-bar">
            <div className="trust-bar-title">Trusted By</div>
            <div className="client-logos">
              <div className="client-logo">STURDY ROOFING</div>
              <div className="client-logo">GLOBAL PUBLIC ADJUSTERS</div>
              <div className="client-logo">Y12.AI CLIENTS</div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Everything You Need to Close Deals</h2>
            <p className="section-subtitle">
              Built for revenue teams who need power, speed, and reliability—not bloated enterprise software.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">📞</div>
              <div className="feature-title">Built-In Power Dialer</div>
              <div className="feature-description">
                Make 100+ calls per hour. Click-to-call, automatic logging, call recording, real-time analytics.
                No third-party integrations needed.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <div className="feature-title">Cloudflare D1 Database</div>
              <div className="feature-description">
                Lightning-fast globally distributed database. Sub-50ms response times worldwide.
                Automatic replication across 300+ cities.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <div className="feature-title">Enterprise Security</div>
              <div className="feature-description">
                Built by Y12.AI&apos;s cybersecurity team. SOC2 compliant, end-to-end encryption.
                The same security protecting defense contractors.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <div className="feature-title">Battle-Tested Reliability</div>
              <div className="feature-description">
                Proven in production by Sturdy Roofing and Global Public Adjusters.
                Handles high-volume sales teams and millions in tracked revenue.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <div className="feature-title">Sales Automation</div>
              <div className="feature-description">
                Automated follow-ups, lead scoring, pipeline management, custom workflows.
                Let the CRM handle repetitive tasks.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <div className="feature-title">Real-Time Analytics</div>
              <div className="feature-description">
                Live dashboards, custom reports, revenue forecasting, team performance metrics.
                Know exactly what&apos;s happening in your pipeline.
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY SECTION */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Powered by Cloudflare&apos;s Edge Network</h2>
            <p className="section-subtitle">
              Enterprise performance without enterprise complexity. Your CRM runs on 300+ cities worldwide.
            </p>
          </div>

          <div className="tech-section">
            <h3 className="tech-title">Why Cloudflare D1 Changes Everything</h3>
            <p style={{ color: '#999', lineHeight: 1.6, marginBottom: '2rem' }}>
              Traditional CRMs run on single-region databases. Users far from the server experience lag.
              D1 runs at the edge—your data is automatically replicated globally.
            </p>

            <div className="tech-grid">
              <div className="tech-item">
                <h4>⚡ Sub-50ms Response</h4>
                <p>4-10x faster than traditional cloud databases. Query data from anywhere with minimal latency.</p>
              </div>

              <div className="tech-item">
                <h4>🌍 300+ Edge Locations</h4>
                <p>Automatic replication worldwide. Users in Miami and Manila get identical performance.</p>
              </div>

              <div className="tech-item">
                <h4>🔄 Zero-Downtime Scaling</h4>
                <p>From 10 users to 10,000 without configuration changes. Infrastructure adapts automatically.</p>
              </div>

              <div className="tech-item">
                <h4>💰 Cost-Effective</h4>
                <p>10-50x cheaper than traditional databases. Pay only for what you use. No minimum commitments.</p>
              </div>

              <div className="tech-item">
                <h4>🛡️ DDoS Protection</h4>
                <p>Built-in enterprise-grade protection. Your CRM stays online even under attack.</p>
              </div>

              <div className="tech-item">
                <h4>🔒 Automatic SSL</h4>
                <p>End-to-end encryption for all data. No manual certificate management required.</p>
              </div>
            </div>
          </div>

          {/* COMPARISON */}
          <div style={{ marginTop: '6rem' }}>
            <h3 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              Cloudflare D1 vs Traditional Databases
            </h3>

            <div className="comparison-grid">
              <div className="comparison-card">
                <div className="comparison-label">Traditional Database</div>
                <h3>AWS RDS / Azure SQL</h3>
                <ul className="comparison-list">
                  <li>
                    <span className="cross">✗</span>
                    <span>200-500ms internationally</span>
                  </li>
                  <li>
                    <span className="cross">✗</span>
                    <span>Manual scaling required</span>
                  </li>
                  <li>
                    <span className="cross">✗</span>
                    <span>$50-200/month minimum</span>
                  </li>
                  <li>
                    <span className="cross">✗</span>
                    <span>Complex replication setup</span>
                  </li>
                  <li>
                    <span className="cross">✗</span>
                    <span>Downtime during scaling</span>
                  </li>
                  <li>
                    <span className="cross">✗</span>
                    <span>Requires DevOps team</span>
                  </li>
                </ul>
              </div>

              <div className="comparison-card highlight">
                <div className="comparison-label">Axia CRM</div>
                <h3>Cloudflare D1</h3>
                <ul className="comparison-list">
                  <li>
                    <span className="check">✓</span>
                    <span>Sub-50ms worldwide</span>
                  </li>
                  <li>
                    <span className="check">✓</span>
                    <span>Automatic scaling</span>
                  </li>
                  <li>
                    <span className="check">✓</span>
                    <span>100K free queries/day</span>
                  </li>
                  <li>
                    <span className="check">✓</span>
                    <span>Automatic replication</span>
                  </li>
                  <li>
                    <span className="check">✓</span>
                    <span>Zero-downtime scaling</span>
                  </li>
                  <li>
                    <span className="check">✓</span>
                    <span>Zero maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Proven in Production</h2>
            <p className="section-subtitle">
              Real companies. Real results. Real revenue tracked through Axia CRM.
            </p>
          </div>

          <div className="testimonial-grid">
            <div className="testimonial">
              <div className="testimonial-quote">
                &quot;Axia&apos;s power dialer transformed our sales process. We went from 40 calls a day to 120+ calls per rep.
                The built-in analytics showed us exactly which scripts work and which don&apos;t.&quot;
              </div>
              <div className="testimonial-author">Sales Team</div>
              <div className="testimonial-company">Sturdy Roofing</div>
            </div>

            <div className="testimonial">
              <div className="testimonial-quote">
                &quot;We needed a CRM that could handle complex claims workflows and high call volumes. Axia delivered both.
                The Cloudflare infrastructure means our adjusters never wait for data to load.&quot;
              </div>
              <div className="testimonial-author">Operations Director</div>
              <div className="testimonial-company">Global Public Adjusters</div>
            </div>

            <div className="testimonial">
              <div className="testimonial-quote">
                &quot;Built by engineers who understand real business needs. No bloat. No unnecessary features.
                Just a CRM that helps us close deals faster.&quot;
              </div>
              <div className="testimonial-author">Revenue Team</div>
              <div className="testimonial-company">Y12.AI Client</div>
            </div>
          </div>
        </section>

        {/* CLICK TO DEPLOY */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Click to Deploy is Coming</h2>
            <p className="section-subtitle">
              Everything you just read—deployed in under 60 seconds. Free for non-profits and small businesses.
            </p>
          </div>

          <div className="feature-grid" style={{ marginTop: '4rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>60 Second Deploy</h3>
              <p style={{ color: '#999', lineHeight: 1.6 }}>From zero to fully functional CRM in one minute. No setup wizards.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔧</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Zero Configuration</h3>
              <p style={{ color: '#999', lineHeight: 1.6 }}>No DevOps team required. Just click and your CRM is live.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Battle-Tested Code</h3>
              <p style={{ color: '#999', lineHeight: 1.6 }}>Same proven CRM powering real companies today.</p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="cta-final">
          <h2>💖 Support This Open Source Project</h2>
          <p>
            <strong>This is a non-profit, open-source project for a good cause.</strong><br />
            Help us provide free enterprise CRM to small businesses and non-profits who can&apos;t afford Salesforce.
            Your support makes Click to Deploy possible for everyone.
          </p>

          <div className="stripe-button-wrapper">
            <stripe-buy-button
              buy-button-id="buy_btn_1SrjqOKIG1YICOqsPXTZEto3"
              publishable-key="pk_live_51RwromKIG1YICOqsEPV7DPlbVzFkxralQtDcXJwJNP65xeLRA39W8Df2uO1grLU3C6wocWlEl7DVYWTbxTzVhBcT00Z2RD7Z9L"
            >
            </stripe-buy-button>
          </div>

          <p style={{ marginTop: '2rem', fontSize: '1.1rem' }}>
            <strong style={{ color: '#ff6b6b' }}>100% of proceeds fund development.</strong><br />
            Every dollar makes enterprise CRM accessible to more people.
          </p>
        </section>

        {/* FOOTER */}
        <footer>
          <p style={{ marginBottom: '1rem', color: '#0066ff', fontWeight: 600 }}>
            🌟 Open Source • Non-Profit • Good Cause
          </p>
          <p>Made by <a href="https://y12.ai" className="footer-link">Y12.AI</a> • Engineering Services & Cybersecurity</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>© 2025 Y12.AI. All rights reserved.</p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#999' }}>
            Axia CRM is an open-source project. 100% of proceeds fund free CRM for small businesses and non-profits.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            <a href="https://y12.ai/support" className="footer-link">Support</a> •
            <a href="mailto:support@y12.ai" className="footer-link">Contact</a>
          </p>
        </footer>
      </div>
    </>
  )
}
