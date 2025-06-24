"use client"

import { useState, useEffect } from "react"
import RobotList from "./components/RobotList"
import RobotDetail from "./components/RobotDetail"
import LanguageSelector from "./components/LanguageSelector"
import { translations } from "./localization/translations"
import "./App.css"

function App() {
  const [robots, setRobots] = useState([])
  const [selectedRobot, setSelectedRobot] = useState(null)
  const [language, setLanguage] = useState("es")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRobots()
  }, [])

  const fetchRobots = async () => {
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/josejbocanegra/aa5fb56863c326ebb3d558f8a225d223/raw/5c55db5012e5fc24862e05847ff1f2927aea11db/robots.json",
      )
      const data = await response.json()
      setRobots(data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching robots:", error)
      setLoading(false)
    }
  }

  const handleRobotSelect = (robot) => {
    setSelectedRobot(robot)
  }

  const handleBackToList = () => {
    setSelectedRobot(null)
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  if (loading) {
    return (
      <div className="container-fluid">
        <div className="text-center mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header-section">
              <h1 className="text-center mb-2">Adopta un robot con robots lovers!</h1>
              
              <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
            </div>

            <div className="banner-container">
              <img src="/robots-banner.png" alt="Robots Banner" className="banner-image" />
            </div>

            {selectedRobot ? (
              <RobotDetail robot={selectedRobot} onBack={handleBackToList} t={t} />
            ) : (
              <RobotList robots={robots} onRobotSelect={handleRobotSelect} t={t} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
