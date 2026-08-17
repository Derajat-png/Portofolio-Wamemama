import React, { useEffect, useState } from 'react'

function WelcomeLoader({ onFadeEnd }) {
  const [shouldRender, setShouldRender] = useState(true)
  const [isFading, setIsFading] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = 'Welcome to Wamemama English Class!'

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 45) // 45ms per character. 34 characters = ~1.5s total typing time

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    // Start fading out after 3.0 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, 3000)

    // Call onFadeEnd and unmount after fade transition (300ms) completes
    const endTimer = setTimeout(() => {
      setShouldRender(false)
      if (onFadeEnd) onFadeEnd()
    }, 3300)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(endTimer)
    }
  }, [onFadeEnd])

  if (!shouldRender) return null

  return (
    <div className={`welcome-loader ${isFading ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <h1 className="loader-text">
          {typedText}
          <span className="loader-cursor">|</span>
        </h1>
        <div className="loader-bar-container">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeLoader
