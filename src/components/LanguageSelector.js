"use client"

const LanguageSelector = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="language-selector">
      <div className="btn-group" role="group">
        <button
          type="button"
          className={`btn ${currentLanguage === "es" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => onLanguageChange("es")}
        >
          Español
        </button>
        <button
          type="button"
          className={`btn ${currentLanguage === "en" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => onLanguageChange("en")}
        >
          English
        </button>
      </div>
    </div>
  )
}

export default LanguageSelector
