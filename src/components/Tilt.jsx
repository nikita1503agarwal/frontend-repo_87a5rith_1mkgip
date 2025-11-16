import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef } from 'react'

export default function Tilt({ children, className = '', intensity = 10 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [ -0.5, 0.5 ], [ intensity, -intensity ])
  const rotateY = useTransform(x, [ -0.5, 0.5 ], [ -intensity, intensity ])
  const brightness = useTransform(y, [-0.5, 0.5], [1.05, 0.95])

  function handleMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  function handleMouseLeave() {
    animate(x, 0, { duration: 0.3 })
    animate(y, 0, { duration: 0.3 })
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, filter: brightness.to(v => `brightness(${v})`) }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: 'spring', stiffness: 150, damping: 10 }}
    >
      {children}
    </motion.div>
  )
}
