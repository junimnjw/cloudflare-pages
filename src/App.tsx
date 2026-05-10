import { useEffect, useState } from 'react'
import { profile } from './profile'

type EdgeInfo = { city?: string; country?: string; colo?: string }

function Hero() {
  const [edge, setEdge] = useState<EdgeInfo | null>(null)

  useEffect(() => {
    fetch('/api/hello')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d && setEdge(d))
      .catch(() => {})
  }, [])

  const greeting = edge?.city
    ? `Hi from Cloudflare's ${edge.colo ?? 'edge'} · serving you from ${edge.city}, ${edge.country}`
    : "Live from Cloudflare's edge"

  return (
    <section className="hero fade-in d1">
      <img className="avatar" src="/avatar.jpg" alt={profile.name} width="96" height="96" loading="eager" decoding="async" />
      <h1>{profile.name}</h1>
      <div className="headline">{profile.headline}</div>
      <div className="company">@ {profile.company}</div>
      <div className="edge-greet">
        <span className="pulse" />
        {greeting}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about fade-in d2">
      <div className="section-label">About</div>
      {profile.about.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </section>
  )
}

function Skills() {
  return (
    <section className="fade-in d3">
      <div className="section-label">Skills</div>
      <div className="skills-grid">
        {profile.skills.map((s) => (
          <span key={s} className="chip">{s}</span>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="fade-in d4">
      <div className="section-label">Selected Work</div>
      <div className="projects-grid">
        {profile.projects.map((p) => (
          <article key={p.title} className="project">
            <div className="project-header">
              <h3>{p.title}</h3>
              <span className="highlight">{p.highlight}</span>
            </div>
            <p>{p.description}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

type GitHubUser = {
  public_repos: number
  followers: number
  following: number
}

function GitHubStats() {
  const [data, setData] = useState<GitHubUser | null>(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.github.username}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d && setData(d))
      .catch(() => {})
  }, [])

  const cells = [
    { label: 'Public Repos', value: data?.public_repos },
    { label: 'Followers', value: data?.followers },
    { label: 'Following', value: data?.following },
  ]

  return (
    <section className="fade-in d5">
      <div className="section-label">Live · github.com/{profile.github.username}</div>
      <div className="stats-grid">
        {cells.map((c) => (
          <div key={c.label} className="stat">
            <div className="stat-value">{c.value ?? '—'}</div>
            <div className="stat-label">{c.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

const icons = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.39.97.01 1.95.14 2.86.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.91 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
}

function Contact() {
  return (
    <section className="fade-in d5">
      <div className="section-label">Contact</div>
      <div className="contact-grid">
        {profile.contacts.map((c) => (
          <a key={c.label} href={c.href} className="contact-link" target="_blank" rel="noopener noreferrer">
            {icons[c.icon as keyof typeof icons]}
            <span>{c.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <div className="bg" aria-hidden="true" />
      <main className="page">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubStats />
        <Contact />
        <footer>
          Built with React, Vite, and Cloudflare Pages · {new Date().getFullYear()}
        </footer>
      </main>
    </>
  )
}
