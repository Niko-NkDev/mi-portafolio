import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import FloatingStars from './FloatingStars.jsx'

export default function SectionStars({ containerSelector, className, count = 500 }) {
  const [isActive, setIsActive] = useState(false)
  const [responsiveCount, setResponsiveCount] = useState(count)

  useEffect(() => {
    const el = document.querySelector(containerSelector)
    if (!el) return
    // Ajuste de densidad por tamaño de pantalla
    const updateCount = () => {
      const w = window.innerWidth
      if (w < 480) setResponsiveCount(Math.min(220, count))
      else if (w < 768) setResponsiveCount(Math.min(300, count))
      else setResponsiveCount(count)
    }
    updateCount()
    window.addEventListener('resize', updateCount)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsActive(entry.isIntersecting)
        })
      },
      { root: null, threshold: 0.2 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateCount)
    }
  }, [containerSelector, count])

  // Para rendimiento: monta el Canvas sólo cuando la sección sea visible
  if (!isActive) return null

  return (
    <Canvas
      className={className}
      aria-hidden="true"
      dpr={[1, 1.5]}
      gl={{ powerPreference: 'low-power', antialias: false }}
    >
      <FloatingStars count={responsiveCount} isActive={isActive} />
    </Canvas>
  )
}
