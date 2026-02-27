'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Target,
  Phone,
  Mail,
  Bot,
  CalendarDays,
  Megaphone,
  Play,
  Check,
  ArrowRight,
} from 'lucide-react'

/* ============================================
   AXIA CRM — Landing Page
   Palantir-inspired dark design
   ============================================ */

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <style>{`
        /* ---- Nav ---- */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          z-index: 100;
          transition: all 0.3s ease;
        }
        .nav.scrolled {
          background: rgba(10, 11, 14, 0.8);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 3px;
          color: var(--text-primary);
        }
        .nav-logo-symbol {
          font-size: 24px;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }
        .nav-link {
          font-size: 14px;
          color: var(--text-secondary);
          transition: color 0.2s;
          cursor: pointer;
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .nav-signin {
          font-size: 14px;
          color: var(--text-secondary);
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
        }
        .nav-signin:hover {
          color: var(--text-primary);
        }

        /* ---- Hero ---- */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 24px 80px;
          position: relative;
        }
        .hero-headline {
          font-size: var(--text-hero);
          font-weight: var(--weight-bold);
          line-height: 1.05;
          color: var(--text-primary);
          max-width: 900px;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        .hero-subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.7;
          margin-bottom: 40px;
        }
        .hero-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .hero-note {
          font-size: 13px;
          color: var(--text-tertiary);
          margin-bottom: 64px;
        }

        /* ---- Dashboard Mockup ---- */
        .dashboard-mockup {
          width: 100%;
          max-width: 900px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 80px rgba(0,0,0,0.4);
        }
        .mockup-toolbar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border);
        }
        .mockup-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .mockup-body {
          display: grid;
          grid-template-columns: 200px 1fr;
          min-height: 280px;
        }
        .mockup-sidebar {
          border-right: 1px solid var(--border);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mockup-sidebar-item {
          height: 10px;
          border-radius: 4px;
          background: rgba(255,255,255,0.04);
        }
        .mockup-sidebar-item.active {
          background: var(--accent-glow);
          border-left: 2px solid var(--accent);
        }
        .mockup-main {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .mockup-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .mockup-stat-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .mockup-stat-label {
          width: 60%;
          height: 6px;
          border-radius: 3px;
          background: rgba(255,255,255,0.06);
        }
        .mockup-stat-value {
          width: 40%;
          height: 14px;
          border-radius: 3px;
          background: rgba(255,255,255,0.1);
        }
        .mockup-chart {
          flex: 1;
          display: flex;
          align-items: flex-end;
          gap: 8px;
          padding: 12px;
          background: rgba(255,255,255,0.01);
          border: 1px solid var(--border);
          border-radius: 8px;
        }
        .mockup-bar {
          flex: 1;
          border-radius: 4px 4px 0 0;
          min-height: 20px;
          transition: height 0.3s;
        }

        /* ---- Social Proof ---- */
        .social-proof {
          background: var(--bg-secondary);
          padding: 40px 24px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .social-proof-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 48px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .social-proof-label {
          font-size: 13px;
          color: var(--text-tertiary);
          white-space: nowrap;
        }
        .social-proof-logos {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .social-proof-logo {
          font-family: var(--font-mono);
          font-size: 13px;
          letter-spacing: 3px;
          color: var(--text-tertiary);
          opacity: 0.5;
          transition: opacity 0.2s;
        }
        .social-proof-logo:hover {
          opacity: 0.8;
        }

        /* ---- Section ---- */
        .section {
          padding: 120px 24px;
        }
        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .section-header .mono-tag {
          margin-bottom: 16px;
          display: block;
        }
        .section-title {
          font-size: var(--text-h1);
          font-weight: var(--weight-bold);
          color: var(--text-primary);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        /* ---- Features Grid ---- */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .feature-card {
          padding: 32px;
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          background: rgba(22, 24, 29, 0.9);
        }
        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          background: var(--accent-glow);
        }
        .feature-title {
          font-size: var(--text-h3);
          font-weight: var(--weight-semibold);
          color: var(--text-primary);
          margin-bottom: 10px;
        }
        .feature-desc {
          font-size: var(--text-small);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* ---- Showcase (two-column) ---- */
        .showcase {
          padding: 120px 24px;
        }
        .showcase-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .showcase-text .mono-tag {
          margin-bottom: 16px;
          display: block;
        }
        .showcase-title {
          font-size: var(--text-h2);
          font-weight: var(--weight-bold);
          color: var(--text-primary);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          white-space: pre-line;
        }
        .showcase-body {
          font-size: var(--text-body);
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .showcase-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .showcase-bullet {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: var(--text-small);
          color: var(--text-secondary);
        }
        .showcase-bullet .check-icon {
          color: var(--green);
          flex-shrink: 0;
        }

        /* ---- Kanban Mockup ---- */
        .kanban-mockup {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .kanban-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .kanban-col-header {
          height: 4px;
          border-radius: 2px;
          margin-bottom: 4px;
        }
        .kanban-col-title {
          font-size: 10px;
          color: var(--text-tertiary);
          font-family: var(--font-mono);
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .kanban-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 10px;
          border-left: 3px solid;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .kanban-card-line {
          height: 6px;
          border-radius: 3px;
          background: rgba(255,255,255,0.06);
        }
        .kanban-card-line.short {
          width: 60%;
        }
        .kanban-card.floating {
          animation: floatCard 6s ease-in-out infinite;
          position: relative;
        }

        /* ---- Dialer Mockup ---- */
        .dialer-mockup {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
          max-width: 320px;
          margin: 0 auto;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .dialer-display {
          text-align: center;
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
          margin-bottom: 20px;
        }
        .dialer-number {
          font-family: var(--font-mono);
          font-size: 24px;
          color: var(--text-primary);
          letter-spacing: 2px;
        }
        .dialer-status {
          font-size: 12px;
          color: var(--text-tertiary);
          margin-top: 4px;
        }
        .dialer-keypad {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }
        .dialer-key {
          aspect-ratio: 1;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: var(--text-primary);
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
        }
        .dialer-key:hover {
          background: rgba(255,255,255,0.08);
        }
        .dialer-call-btn {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          background: var(--green);
          border: none;
          color: #000;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 20px;
          transition: box-shadow 0.2s;
        }
        .dialer-call-btn:hover {
          box-shadow: 0 0 20px var(--green-glow);
        }
        .dialer-recent {
          border-top: 1px solid var(--border);
          padding-top: 16px;
        }
        .dialer-recent-title {
          font-size: 11px;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }
        .dialer-recent-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.03);
        }
        .dialer-recent-name {
          font-size: 13px;
          color: var(--text-secondary);
        }
        .dialer-recent-time {
          font-size: 11px;
          color: var(--text-tertiary);
          font-family: var(--font-mono);
        }

        /* ---- Script Assist ---- */
        .script-assist {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px;
          max-width: 320px;
          margin: 20px auto 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .script-assist-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--border);
        }
        .script-assist-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .script-assist-title {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-mono);
          letter-spacing: 1px;
        }
        .script-line {
          padding: 8px 12px;
          margin-bottom: 6px;
          border-radius: 6px;
          font-size: 12px;
          line-height: 1.5;
          color: var(--text-secondary);
        }
        .script-line.active {
          background: var(--accent-glow);
          color: var(--text-primary);
          border-left: 2px solid var(--accent);
        }
        .script-line.rebuttal {
          background: rgba(245, 166, 35, 0.08);
          border-left: 2px solid var(--amber);
          color: var(--amber);
          font-size: 11px;
        }

        /* ---- Inbox Mockup ---- */
        .inbox-mockup {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          display: grid;
          grid-template-columns: 160px 240px 1fr;
          min-height: 300px;
        }
        .inbox-folders {
          border-right: 1px solid var(--border);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .inbox-folder {
          font-size: 12px;
          color: var(--text-tertiary);
          padding: 6px 10px;
          border-radius: 6px;
          cursor: pointer;
        }
        .inbox-folder.active {
          background: var(--accent-glow);
          color: var(--accent);
        }
        .inbox-list {
          border-right: 1px solid var(--border);
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .inbox-email {
          padding: 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.15s;
        }
        .inbox-email:hover {
          background: rgba(255,255,255,0.03);
        }
        .inbox-email.active {
          background: rgba(45, 127, 249, 0.08);
        }
        .inbox-email-from {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2px;
        }
        .inbox-email-subject {
          font-size: 11px;
          color: var(--text-secondary);
          margin-bottom: 2px;
        }
        .inbox-email-preview {
          font-size: 10px;
          color: var(--text-tertiary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .inbox-detail {
          padding: 20px;
        }
        .inbox-detail-header {
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
        }
        .inbox-detail-subject {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .inbox-detail-meta {
          font-size: 11px;
          color: var(--text-tertiary);
        }
        .inbox-detail-body-line {
          height: 8px;
          border-radius: 4px;
          background: rgba(255,255,255,0.04);
          margin-bottom: 8px;
        }

        /* ---- Chat Mockup ---- */
        .chat-mockup {
          max-width: 560px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .chat-bubble {
          padding: 16px 20px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.6;
          max-width: 85%;
        }
        .chat-bubble.user {
          background: rgba(45, 127, 249, 0.12);
          border: 1px solid rgba(45, 127, 249, 0.2);
          color: var(--text-primary);
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }
        .chat-bubble.ai {
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          align-self: flex-start;
          border-bottom-left-radius: 4px;
        }
        .chat-data-table {
          margin-top: 10px;
          width: 100%;
          font-family: var(--font-mono);
          font-size: 12px;
        }
        .chat-data-row {
          display: flex;
          justify-content: space-between;
          padding: 4px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .chat-data-label {
          color: var(--text-tertiary);
        }
        .chat-data-value {
          color: var(--text-primary);
          font-weight: 500;
        }
        .chat-powered {
          text-align: center;
          font-size: 12px;
          color: var(--text-tertiary);
          font-family: var(--font-mono);
          margin-top: 8px;
        }

        /* ---- Pricing ---- */
        .pricing-card {
          max-width: 560px;
          margin: 0 auto;
          padding: 48px;
          text-align: center;
        }
        .pricing-amount {
          font-size: 72px;
          font-weight: var(--weight-bold);
          color: var(--text-primary);
          line-height: 1;
        }
        .pricing-period {
          font-size: 20px;
          color: var(--text-tertiary);
          font-weight: var(--weight-regular);
        }
        .pricing-subtitle {
          font-size: 14px;
          color: var(--text-secondary);
          margin-top: 8px;
          margin-bottom: 32px;
        }
        .pricing-divider {
          height: 1px;
          background: var(--border);
          margin-bottom: 32px;
        }
        .pricing-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          text-align: left;
          margin-bottom: 40px;
        }
        .pricing-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--text-secondary);
        }
        .pricing-feature .check-icon {
          color: var(--green);
          flex-shrink: 0;
        }

        /* ---- CTA Section ---- */
        .cta-section {
          padding: 120px 24px;
          text-align: center;
        }
        .cta-title {
          font-size: var(--text-h1);
          font-weight: var(--weight-bold);
          color: var(--text-primary);
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .cta-subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }
        .cta-demo-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          font-size: 14px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.2s;
        }
        .cta-demo-link:hover {
          color: var(--accent);
        }

        /* ---- Footer ---- */
        .footer {
          background: #08090C;
          padding: 64px 24px 32px;
          border-top: 1px solid var(--border);
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-columns {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 48px;
        }
        .footer-col-title {
          font-size: 12px;
          font-weight: var(--weight-semibold);
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }
        .footer-col-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-col-link {
          font-size: 14px;
          color: var(--text-tertiary);
          transition: color 0.2s;
          cursor: pointer;
        }
        .footer-col-link:hover {
          color: var(--text-secondary);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }
        .footer-copy {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text-tertiary);
        }
        .footer-copy-symbol {
          font-size: 18px;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-socials {
          display: flex;
          gap: 20px;
        }
        .footer-social {
          font-size: 13px;
          color: var(--text-tertiary);
          transition: color 0.2s;
          cursor: pointer;
        }
        .footer-social:hover {
          color: var(--text-secondary);
        }

        /* ---- Responsive ---- */
        @media (max-width: 1024px) {
          .showcase-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .inbox-mockup {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .inbox-folders,
          .inbox-detail {
            display: none;
          }
          .inbox-list {
            border-right: none;
          }
        }
        @media (max-width: 768px) {
          .nav {
            padding: 0 16px;
          }
          .nav-links {
            display: none;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
          .pricing-features {
            grid-template-columns: 1fr;
          }
          .pricing-card {
            padding: 32px 24px;
          }
          .footer-columns {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
          .kanban-mockup {
            grid-template-columns: repeat(2, 1fr);
          }
          .hero-headline {
            font-size: clamp(36px, 8vw, 56px);
          }
          .mockup-body {
            grid-template-columns: 1fr;
          }
          .mockup-sidebar {
            display: none;
          }
          .mockup-stats {
            grid-template-columns: repeat(2, 1fr);
          }
          .social-proof-logos {
            gap: 24px;
          }
          .dialer-mockup {
            max-width: 280px;
          }
          .script-assist {
            max-width: 280px;
          }
          .chat-bubble {
            max-width: 95%;
          }
        }
        @media (max-width: 480px) {
          .footer-columns {
            grid-template-columns: 1fr;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      {/* ==================== 1. NAVIGATION ==================== */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="nav-logo">
          <span className="nav-logo-symbol">&Omega;</span>
          AXIA
        </Link>
        <div className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#" className="nav-link">Blog</a>
        </div>
        <div className="nav-right">
          <button className="nav-signin">Sign In</button>
          <button className="btn-primary">Start Free Trial</button>
        </div>
      </nav>

      {/* ==================== 2. HERO ==================== */}
      <section className="hero grid-bg gradient-mesh">
        <div className="fade-up">
          <span className="mono-tag">SALES &bull; PIPELINE &bull; INTELLIGENCE</span>
        </div>
        <h1 className="hero-headline fade-up" style={{ transitionDelay: '0.1s' }}>
          Close deals faster with<br />AI-powered CRM
        </h1>
        <p className="hero-subtitle fade-up" style={{ transitionDelay: '0.2s' }}>
          Pipeline management, built-in phone, Gmail sync, and AI assistant — all for $60/month. No per-seat pricing. No feature gating.
        </p>
        <div className="hero-buttons fade-up" style={{ transitionDelay: '0.3s' }}>
          <button className="btn-primary">Start Free Trial</button>
          <button className="btn-secondary">
            <Play size={14} /> Watch Demo
          </button>
        </div>
        <p className="hero-note fade-up" style={{ transitionDelay: '0.4s' }}>
          No credit card required &middot; 14-day free trial
        </p>

        {/* Dashboard Mockup */}
        <div className="dashboard-mockup fade-up" style={{ transitionDelay: '0.5s' }}>
          <div className="mockup-toolbar">
            <div className="mockup-dot" style={{ background: '#FF4757' }} />
            <div className="mockup-dot" style={{ background: '#F5A623' }} />
            <div className="mockup-dot" style={{ background: '#00DC82' }} />
            <div style={{ flex: 1 }} />
            <div style={{ width: 120, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.06)' }} />
          </div>
          <div className="mockup-body">
            <div className="mockup-sidebar">
              <div className="mockup-sidebar-item active" style={{ width: '80%' }} />
              <div className="mockup-sidebar-item" style={{ width: '65%' }} />
              <div className="mockup-sidebar-item" style={{ width: '70%' }} />
              <div className="mockup-sidebar-item" style={{ width: '50%' }} />
              <div className="mockup-sidebar-item" style={{ width: '60%' }} />
              <div className="mockup-sidebar-item" style={{ width: '75%' }} />
            </div>
            <div className="mockup-main">
              <div className="mockup-stats">
                {[
                  { color: 'var(--accent)' },
                  { color: 'var(--green)' },
                  { color: 'var(--amber)' },
                  { color: 'var(--red)' },
                ].map((s, i) => (
                  <div key={i} className="mockup-stat-card">
                    <div className="mockup-stat-label" />
                    <div className="mockup-stat-value" style={{ background: `${s.color}33` }} />
                  </div>
                ))}
              </div>
              <div className="mockup-chart">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 50].map((h, i) => (
                  <div
                    key={i}
                    className="mockup-bar"
                    style={{
                      height: `${h}%`,
                      background: i >= 9
                        ? 'var(--accent)'
                        : `rgba(45, 127, 249, ${0.15 + (i * 0.05)})`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. SOCIAL PROOF ==================== */}
      <section className="social-proof fade-up">
        <div className="social-proof-inner">
          <span className="social-proof-label">Trusted by teams at</span>
          <div className="social-proof-logos">
            {['MERIDIAN', 'ATLAS CO', 'VANGUARD', 'HELIX', 'QUANTUM', 'APEX'].map((name) => (
              <span key={name} className="social-proof-logo">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4. FEATURES GRID ==================== */}
      <section className="section" id="features">
        <div className="section-header fade-up">
          <span className="mono-tag">PLATFORM</span>
          <h2 className="section-title">Everything you need to close</h2>
        </div>
        <div className="features-grid">
          {[
            {
              icon: <Target size={24} />,
              title: 'Smart Pipeline',
              desc: 'Azure Boards-style kanban with drag-and-drop, sub-tasks, and deal scoring.',
            },
            {
              icon: <Phone size={24} />,
              title: 'Power Dialer',
              desc: 'Call leads directly from your browser. Auto-dial queues, dispositions, call recording.',
            },
            {
              icon: <Mail size={24} />,
              title: 'Unified Inbox',
              desc: 'Gmail and Outlook sync. Read, compose, and send without leaving the CRM.',
            },
            {
              icon: <Bot size={24} />,
              title: 'AI Assistant',
              desc: 'Ask questions, search records, get insights. Powered by on-device AI — no API costs.',
            },
            {
              icon: <CalendarDays size={24} />,
              title: 'Calendar Sync',
              desc: 'Google and Microsoft calendar integration. See meetings alongside your pipeline.',
            },
            {
              icon: <Megaphone size={24} />,
              title: 'Marketing Hub',
              desc: 'Schedule social posts, run email campaigns, track engagement — all in one place.',
            },
          ].map((f, i) => (
            <div
              key={i}
              className="glass-card glow-hover feature-card fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-glow" />

      {/* ==================== 5. PIPELINE SHOWCASE ==================== */}
      <section className="showcase">
        <div className="showcase-inner">
          <div className="showcase-text fade-up">
            <span className="mono-tag">PIPELINE MANAGEMENT</span>
            <h2 className="showcase-title">
              {'Kanban boards that\nactually make sense'}
            </h2>
            <p className="showcase-body">
              Inspired by Azure Boards, our pipeline gives you the power of enterprise project management tools — designed specifically for sales teams.
            </p>
            <ul className="showcase-bullets">
              {[
                'Drag-and-drop between stages',
                'Sub-items with progress tracking',
                'WIP limits and team visibility',
                'Closed Won/Lost analytics',
              ].map((item) => (
                <li key={item} className="showcase-bullet">
                  <Check size={16} className="check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="kanban-mockup">
              {[
                { color: 'var(--accent)', label: 'PROSPECT', cards: 3 },
                { color: 'var(--amber)', label: 'QUALIFY', cards: 2, hasFloating: true },
                { color: '#FF6B35', label: 'PROPOSAL', cards: 2 },
                { color: 'var(--green)', label: 'WON', cards: 2 },
              ].map((col, ci) => (
                <div key={ci} className="kanban-col">
                  <div className="kanban-col-header" style={{ background: col.color }} />
                  <div className="kanban-col-title">{col.label}</div>
                  {Array.from({ length: col.cards }).map((_, cardIdx) => (
                    <div
                      key={cardIdx}
                      className={`kanban-card${col.hasFloating && cardIdx === 1 ? ' floating' : ''}`}
                      style={{ borderLeftColor: col.color }}
                    >
                      <div className="kanban-card-line" style={{ width: `${70 + cardIdx * 10}%` }} />
                      <div className="kanban-card-line short" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ==================== 6. PHONE SYSTEM SHOWCASE ==================== */}
      <section className="showcase">
        <div className="showcase-inner">
          <div className="showcase-text fade-up">
            <span className="mono-tag">BUILT-IN PHONE</span>
            <h2 className="showcase-title">
              {'Your browser is now\na phone system'}
            </h2>
            <p className="showcase-body">
              No extra apps. No Twilio setup. Buy a number, start dialing. WebRTC-powered calls directly from the CRM.
            </p>
            <p className="showcase-body" style={{ marginTop: -12 }}>
              Real-time script adjustments tell your employees what to say and handle rebuttals — minimizing cognitive load and maximizing close rates.
            </p>
            <ul className="showcase-bullets">
              {[
                'One-click number purchasing',
                'Auto-dial queues and power dialer',
                'Call recording and dispositions',
                'Real-time AI script assistance',
              ].map((item) => (
                <li key={item} className="showcase-bullet">
                  <Check size={16} className="check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="dialer-mockup">
              <div className="dialer-display">
                <div className="dialer-number">+1 (555) 012-3456</div>
                <div className="dialer-status">Ready to dial</div>
              </div>
              <div className="dialer-keypad">
                {['1','2','3','4','5','6','7','8','9','*','0','#'].map((key) => (
                  <div key={key} className="dialer-key">{key}</div>
                ))}
              </div>
              <div className="dialer-call-btn">
                <Phone size={16} /> Call Now
              </div>
              <div className="dialer-recent">
                <div className="dialer-recent-title">Recent Calls</div>
                {[
                  { name: 'Sarah Chen', time: '2m ago' },
                  { name: 'Mike Johnson', time: '15m ago' },
                  { name: 'Lisa Park', time: '1h ago' },
                ].map((item) => (
                  <div key={item.name} className="dialer-recent-item">
                    <span className="dialer-recent-name">{item.name}</span>
                    <span className="dialer-recent-time">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Script Assist Card */}
            <div className="script-assist">
              <div className="script-assist-header">
                <div className="script-assist-dot" />
                <span className="script-assist-title">LIVE SCRIPT</span>
              </div>
              <div className="script-line active">
                &quot;Hi Sarah, this is Alex from Axia. I saw you downloaded our pipeline guide...&quot;
              </div>
              <div className="script-line">
                &quot;How are you currently managing your sales pipeline?&quot;
              </div>
              <div className="script-line rebuttal">
                If &quot;we use spreadsheets&quot; → &quot;Totally understand — most teams start there. What if I showed you how to cut deal tracking time by 60%?&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ==================== 7. EMAIL SHOWCASE ==================== */}
      <section className="showcase">
        <div className="showcase-inner">
          <div className="showcase-text fade-up">
            <span className="mono-tag">UNIFIED INBOX</span>
            <h2 className="showcase-title">
              {'Your inbox, inside\nyour CRM'}
            </h2>
            <p className="showcase-body">
              Connect Gmail or Outlook. Read, reply, and compose without switching tabs. Bulk campaigns via SendGrid.
            </p>
            <ul className="showcase-bullets">
              {[
                'Gmail and Outlook two-way sync',
                'Compose and reply in-app',
                'Email templates and sequences',
                'Bulk campaigns with analytics',
              ].map((item) => (
                <li key={item} className="showcase-bullet">
                  <Check size={16} className="check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="inbox-mockup">
              <div className="inbox-folders">
                <div className="inbox-folder active">Inbox (12)</div>
                <div className="inbox-folder">Sent</div>
                <div className="inbox-folder">Drafts (3)</div>
                <div className="inbox-folder">Starred</div>
                <div className="inbox-folder">Archive</div>
              </div>
              <div className="inbox-list">
                {[
                  { from: 'Sarah Chen', subject: 'Re: Proposal Review', preview: 'Thanks for sending over the updated pricing...', active: true },
                  { from: 'Mike Johnson', subject: 'Meeting Follow-up', preview: 'Great call today! Wanted to confirm next steps...' },
                  { from: 'Lisa Park', subject: 'Contract Questions', preview: 'Hey, quick question about the licensing terms...' },
                  { from: 'James Wilson', subject: 'Demo Request', preview: 'We\'d love to see a walkthrough of the pipeline...' },
                  { from: 'Amy Torres', subject: 'Budget Approval', preview: 'Good news — got sign-off from our VP...' },
                ].map((email, i) => (
                  <div key={i} className={`inbox-email${email.active ? ' active' : ''}`}>
                    <div className="inbox-email-from">{email.from}</div>
                    <div className="inbox-email-subject">{email.subject}</div>
                    <div className="inbox-email-preview">{email.preview}</div>
                  </div>
                ))}
              </div>
              <div className="inbox-detail">
                <div className="inbox-detail-header">
                  <div className="inbox-detail-subject">Re: Proposal Review</div>
                  <div className="inbox-detail-meta">Sarah Chen &middot; 10 min ago</div>
                </div>
                <div className="inbox-detail-body-line" style={{ width: '100%' }} />
                <div className="inbox-detail-body-line" style={{ width: '95%' }} />
                <div className="inbox-detail-body-line" style={{ width: '80%' }} />
                <div className="inbox-detail-body-line" style={{ width: '90%' }} />
                <div className="inbox-detail-body-line" style={{ width: '60%' }} />
                <div style={{ height: 16 }} />
                <div className="inbox-detail-body-line" style={{ width: '100%' }} />
                <div className="inbox-detail-body-line" style={{ width: '85%' }} />
                <div className="inbox-detail-body-line" style={{ width: '70%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ==================== 8. AI SECTION ==================== */}
      <section className="section">
        <div className="section-header fade-up">
          <span className="mono-tag">ARTIFICIAL INTELLIGENCE</span>
          <h2 className="section-title">AI that knows<br />your business</h2>
          <p style={{
            color: 'var(--text-secondary)',
            maxWidth: 560,
            margin: '20px auto 0',
            fontSize: 16,
            lineHeight: 1.7,
          }}>
            Ask &quot;How many deals are open?&quot; and get an instant answer. Create records, search contacts, get recommendations — all through chat.
          </p>
        </div>
        <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
          <div className="chat-mockup">
            <div className="chat-bubble user">
              How many deals are open this quarter?
            </div>
            <div className="chat-bubble ai">
              You have <strong style={{ color: 'var(--text-primary)' }}>23 open deals</strong> this quarter worth a combined <strong style={{ color: 'var(--text-primary)' }}>$184,500</strong>.
              <div className="chat-data-table">
                <div className="chat-data-row">
                  <span className="chat-data-label">Prospect</span>
                  <span className="chat-data-value">8 deals</span>
                </div>
                <div className="chat-data-row">
                  <span className="chat-data-label">Qualified</span>
                  <span className="chat-data-value">9 deals</span>
                </div>
                <div className="chat-data-row">
                  <span className="chat-data-label">Proposal</span>
                  <span className="chat-data-value">6 deals</span>
                </div>
              </div>
            </div>
            <div className="chat-bubble user">
              Which ones are most likely to close this week?
            </div>
            <div className="chat-bubble ai">
              Based on engagement signals and deal velocity, I&apos;d prioritize these 3:<br /><br />
              <strong style={{ color: 'var(--text-primary)' }}>1. Acme Corp</strong> — $42K, proposal viewed 3x today<br />
              <strong style={{ color: 'var(--text-primary)' }}>2. TechStart Inc</strong> — $28K, champion replied within 5min<br />
              <strong style={{ color: 'var(--text-primary)' }}>3. GlobalRetail</strong> — $18K, budget approved yesterday
            </div>
          </div>
          <p className="chat-powered fade-up" style={{ transitionDelay: '0.4s' }}>
            Powered by Cloudflare Workers AI &middot; No API costs &middot; Runs on-device
          </p>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ==================== 9. PRICING ==================== */}
      <section className="section" id="pricing">
        <div className="section-header fade-up">
          <span className="mono-tag">PRICING</span>
          <h2 className="section-title">One plan. Everything included.</h2>
        </div>
        <div className="glass-card glow-hover pricing-card fade-up" style={{ transitionDelay: '0.15s' }}>
          <div className="pricing-amount">
            $60<span className="pricing-period">/month</span>
          </div>
          <p className="pricing-subtitle">per organization &middot; unlimited users</p>
          <div className="pricing-divider" />
          <div className="pricing-features">
            {[
              'Unlimited leads, contacts, deals',
              'Power Dialer + number purchasing',
              'Gmail & Outlook inbox sync',
              'Google & Microsoft calendar sync',
              'AI assistant',
              'Kanban pipeline management',
              'Marketing hub + campaigns',
              'Team collaboration',
              'Blog & content management',
              'Priority support',
            ].map((feature) => (
              <div key={feature} className="pricing-feature">
                <Check size={16} className="check-icon" />
                {feature}
              </div>
            ))}
          </div>
          <button className="btn-primary btn-primary-lg" style={{ width: '100%', justifyContent: 'center' }}>
            Start Free Trial
          </button>
          <p style={{ fontSize: 13, color: 'var(--text-tertiary)', marginTop: 16 }}>
            14-day free trial &middot; No credit card required
          </p>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ==================== 10. CTA ==================== */}
      <section className="cta-section gradient-mesh-strong">
        <div className="fade-up">
          <h2 className="cta-title">Ready to close more deals?</h2>
          <p className="cta-subtitle">
            Join hundreds of teams using Axia to manage their entire sales operation.
          </p>
          <button className="btn-primary btn-primary-lg">Start Free Trial</button>
          <div>
            <a className="cta-demo-link">
              Or schedule a demo <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== 11. FOOTER ==================== */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-columns fade-up">
            <div>
              <div className="footer-col-title">Product</div>
              <ul className="footer-col-links">
                <li><a href="#features" className="footer-col-link">Features</a></li>
                <li><a href="#pricing" className="footer-col-link">Pricing</a></li>
                <li><a href="#" className="footer-col-link">Blog</a></li>
                <li><a href="#" className="footer-col-link">Changelog</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Company</div>
              <ul className="footer-col-links">
                <li><a href="#" className="footer-col-link">About</a></li>
                <li><a href="#" className="footer-col-link">Careers</a></li>
                <li><a href="#" className="footer-col-link">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Resources</div>
              <ul className="footer-col-links">
                <li><a href="#" className="footer-col-link">Documentation</a></li>
                <li><a href="#" className="footer-col-link">API Reference</a></li>
                <li><a href="#" className="footer-col-link">Status</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Legal</div>
              <ul className="footer-col-links">
                <li><a href="#" className="footer-col-link">Privacy</a></li>
                <li><a href="#" className="footer-col-link">Terms</a></li>
                <li><a href="#" className="footer-col-link">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">
              <span className="footer-copy-symbol">&Omega;</span>
              &copy; 2026 Axia CRM. All rights reserved.
            </div>
            <div className="footer-socials">
              <a href="#" className="footer-social">Twitter</a>
              <a href="#" className="footer-social">LinkedIn</a>
              <a href="#" className="footer-social">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
