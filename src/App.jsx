import { useState } from 'react'
import './App.css'
import { motion, MotionConfig } from "framer-motion"

function App() {
  return (
      <div className="background">
        <MotionConfig reducedMotion="user">
          <div className="sharingan">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </MotionConfig>
      </div>
  )
}

export default App
