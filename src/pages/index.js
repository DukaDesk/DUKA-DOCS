import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function Card({ title, body, to }) {
  return (
    <Link
      to={to}
      style={{
        display: 'block',
        padding: 20,
        borderRadius: 14,
        border: '1px solid var(--ifm-color-emphasis-200)',
        background: 'var(--ifm-background-surface-color)',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 14, opacity: 0.75, lineHeight: 1.5 }}>{body}</div>
    </Link>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="hero hero--duka" style={{ padding: '64px 0' }}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
            <Link className="button button--warning button--lg" to="/getting-started">
              Get started
            </Link>
            <Link
              className="button button--outline button--lg"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
              to="/app-builder/screens"
            >
              Browse app screens
            </Link>
          </div>
        </div>
      </header>
      <main className="container" style={{ padding: '32px 16px 64px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 16,
          }}
        >
          <Card
            title="1 · Set up your shop"
            body="Sign up, complete onboarding and KYC, and set up products, branding and payments."
            to="/getting-started"
          />
          <Card
            title="2 · Run daily sales"
            body="Use the Dashboard, Orders, Products, Inventory and Customers pages every day."
            to="/dashboard"
          />
          <Card
            title="3 · Build your customer app"
            body="Pick from 10+ publish-ready screens — Dashboard, Orders, Booking, Billing and more."
            to="/app-builder/screens"
          />
          <Card
            title="4 · Publish & grow"
            body="Publish from the builder, check My App, then market with Messages and Analytics."
            to="/app-builder/publish"
          />
        </div>
      </main>
    </Layout>
  );
}
