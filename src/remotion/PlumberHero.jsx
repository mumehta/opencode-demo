import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion'

// Seamless 5s loop for FlowRight Plumbing hero — Context.dev theme.
// Palette: canvas #FFFFFF, accent #2563EB blue, surface #7041B5 purple,
// primary #EDE8F9 lavender, teal #18C386, ink #030712, dark #0D0D0F.
// Icons are inline SVG / CSS shapes — no emoji (headless Chrome lacks emoji fonts).
export const PlumberHero = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const DURATION = fps * 5

  // Seamless loop progress 0 -> 1
  const loop = frame / DURATION
  const wave = Math.sin(loop * Math.PI * 2)

  // Badge pulse
  const badgeScale = interpolate(wave, [-1, 1], [0.96, 1.04])

  // Wrench float + gentle rock
  const wrenchY = interpolate(wave, [-1, 1], [-14, 14])
  const wrenchRotate = interpolate(wave, [-1, 1], ['-8deg', '8deg'])

  // Water drops falling (3 drops, staggered, wrap around)
  const drops = [0, 1, 2].map((i) => {
    const offset = (loop + i / 3) % 1
    return {
      top: interpolate(offset, [0, 1], [-40, 620]),
      opacity: interpolate(offset, [0, 0.15, 0.85, 1], [0, 1, 1, 0]),
      key: i,
    }
  })

  // Stars gently twinkle with staggered phase (always visible, no pop)
  const star = (i) => {
    const phase = Math.sin(loop * Math.PI * 2 + i * 0.7)
    return {
      opacity: interpolate(phase, [-1, 1], [0.75, 1]),
      scale: interpolate(phase, [-1, 1], [0.92, 1.08]),
    }
  }

  // Bottom shimmer sweep
  const sweepX = interpolate(loop, [0, 1], [-300, 900])

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(rgb(255,255,255) 0%, rgb(237,243,253) 40%, rgb(206,224,249) 70%, rgba(148,186,241,0.85) 88%, rgba(100,155,235,0.4) 100%)',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* soft purple radial glow */}
      <div
        style={{
          position: 'absolute',
          width: 640,
          height: 640,
          borderRadius: '50%',
          backgroundColor: '#7041B5',
          opacity: 0.14,
        }}
      />
      {/* falling drops (CSS droplets — no emoji font needed) */}
      {drops.map((d) => (
        <div
          key={d.key}
          style={{
            position: 'absolute',
            left: 130 + d.key * 260,
            top: d.top,
            width: 30,
            height: 30,
            backgroundColor: '#2563EB',
            borderRadius: '0 50% 50% 50%',
            rotate: '45deg',
            opacity: d.opacity,
          }}
        />
      ))}

      {/* main card — featured purple */}
      <div
        style={{
          position: 'relative',
          width: 560,
          backgroundColor: '#7041B5',
          borderRadius: 23,
          padding: '44px 40px',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'rgba(77, 43, 123, 0.12) 0px 6px 24px 0px',
          border: 'none',
          overflow: 'hidden',
        }}
      >
        {/* badge */}
        <div
          style={{
            backgroundColor: '#222222',
            color: '#fff',
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 2,
            padding: '10px 28px',
            borderRadius: 999,
            scale: String(badgeScale),
          }}
        >
          ● 24/7 EMERGENCY
        </div>

        {/* wrench (inline SVG — renders in headless Chrome) */}
        <div
          style={{
            marginTop: 18,
            translate: `0px ${wrenchY}px`,
            rotate: wrenchRotate,
          }}
        >
          <svg
            width="110"
            height="110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </div>

        <div
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: '#ffffff',
            marginTop: 8,
            letterSpacing: -1.35,
            fontFamily: '"IBM Plex Sans", sans-serif',
          }}
        >
          FlowRight
        </div>
        <div style={{ fontSize: 24, color: '#EDE8F9', fontWeight: 400, marginTop: 2 }}>
          Plumbing • Done Right
        </div>

        {/* stars */}
        <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
          {[0, 1, 2, 3, 4].map((i) => {
            const s = star(i)
            return (
              <div
                key={i}
                style={{
                  fontSize: 36,
                  color: '#18C386',
                  opacity: s.opacity,
                  scale: String(s.scale),
                }}
              >
                ★
              </div>
            )
          })}
        </div>
        <div style={{ fontSize: 20, color: '#ffffff', opacity: 0.8, marginTop: 6 }}>
          4.9 — 2,400+ happy homes
        </div>

        {/* phone pill */}
        <div
          style={{
            marginTop: 24,
            backgroundColor: '#EDE8F9',
            color: '#030712',
            fontSize: 26,
            fontWeight: 500,
            padding: '14px 36px',
            borderRadius: 999,
            border: '1px solid rgba(0,0,0,0.04)',
            fontFamily: '"IBM Plex Mono", monospace',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          (555) 123-4567
        </div>

        {/* shimmer sweep */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: sweepX - 300,
            width: 120,
            background: 'linear-gradient(100deg, transparent, rgba(255,255,255,0.25), transparent)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </AbsoluteFill>
  )
}
