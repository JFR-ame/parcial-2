// Global variables
let robots = []
let currentLanguage = "es"
let selectedRobotIndex = -1

// Translations
const translations = {
  es: {
    mainTitle: "Adopción de Robots",
    headerId: "#",
    headerName: "Nombre",
    headerModel: "Modelo",
    headerCompany: "Empresa",
    yearLabel: "Año de fabricación:",
    capacityLabel: "Capacidad de procesamiento:",
    humorLabel: "Humor:",
    additionalLabel: "Características adicionales:",
  },
  en: {
    mainTitle: "Robot Adoption",
    headerId: "#",
    headerName: "Name",
    headerModel: "Model",
    headerCompany: "Company",
    yearLabel: "Manufacturing year:",
    capacityLabel: "Processing capacity:",
    humorLabel: "Humor:",
    additionalLabel: "Additional features:",
  },
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  loadRobots()
  updateLanguage()
})

// Load robots data from the API
async function loadRobots() {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/josejbocanegra/aa5fb56863c326ebb3d558f8a225d223/raw/5c55db5012e5fc24862e05847ff1f2927aea11db/robots.json",
    )
    robots = await response.json()
    renderRobotsTable()
  } catch (error) {
    console.error("Error loading robots data:", error)
    // Fallback data in case the API is not available
    robots = [
      {
        id: 1,
        nombre: "WAL-E",
        modelo: "Limpieza",
        empresa: "Axiom",
        año: 2800,
        capacidadProcesamiento: "1 TB",
        humor: "Inquisitivo",
        imagen: "https://via.placeholder.com/200x200/007bff/ffffff?text=WAL-E",
        adicionales: ["Compactador de basura", "Navegación autónoma", "Reconocimiento de objetos"],
      },
    ]
    renderRobotsTable()
  }
}

// Render the robots table
function renderRobotsTable() {
  const tableBody = document.getElementById("robots-table-body")
  tableBody.innerHTML = ""

  robots.forEach((robot, index) => {
    const row = document.createElement("tr")
    row.onclick = () => selectRobot(index)

    row.innerHTML = `
            <td>${robot.id}</td>
            <td>${robot.nombre}</td>
            <td>${robot.modelo}</td>
            <td>${robot.empresa}</td>
        `

    tableBody.appendChild(row)
  })
}

// Select a robot and show its details
function selectRobot(index) {
  // Remove previous selection
  const previousSelected = document.querySelector(".table tbody tr.selected")
  if (previousSelected) {
    previousSelected.classList.remove("selected")
  }

  // Add selection to current row
  const rows = document.querySelectorAll(".table tbody tr")
  rows[index].classList.add("selected")

  selectedRobotIndex = index
  const robot = robots[index]

  // Update robot detail panel
  document.getElementById("robot-image").src = robot.imagen
  document.getElementById("robot-image").alt = robot.nombre
  document.getElementById("robot-name").textContent = robot.nombre
  document.getElementById("robot-year").textContent = robot.año
  document.getElementById("robot-capacity").textContent = robot.capacidadProcesamiento
  document.getElementById("robot-humor").textContent = robot.humor

  // Update additional features
  const additionalList = document.getElementById("robot-additional")
  additionalList.innerHTML = ""
  robot.adicionales.forEach((feature) => {
    const li = document.createElement("li")
    li.textContent = feature
    additionalList.appendChild(li)
  })

  // Show the detail panel with animation
  const detailPanel = document.getElementById("robot-detail")
  detailPanel.style.display = "block"
  detailPanel.classList.add("fade-in")

  // Remove animation class after animation completes
  setTimeout(() => {
    detailPanel.classList.remove("fade-in")
  }, 300)
}

// Change language
function changeLanguage(lang) {
  currentLanguage = lang
  updateLanguage()
  updateLanguageButtons()
}

// Update language buttons
function updateLanguageButtons() {
  document.getElementById("btn-es").classList.toggle("active", currentLanguage === "es")
  document.getElementById("btn-en").classList.toggle("active", currentLanguage === "en")
}

// Update all text elements with current language
function updateLanguage() {
  const t = translations[currentLanguage]

  document.getElementById("main-title").textContent = t.mainTitle
  document.getElementById("header-id").textContent = t.headerId
  document.getElementById("header-name").textContent = t.headerName
  document.getElementById("header-model").textContent = t.headerModel
  document.getElementById("header-company").textContent = t.headerCompany
  document.getElementById("year-label").textContent = t.yearLabel
  document.getElementById("capacity-label").textContent = t.capacityLabel
  document.getElementById("humor-label").textContent = t.humorLabel
  document.getElementById("additional-label").textContent = t.additionalLabel

  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage

  updateLanguageButtons()
}

// Handle image loading errors
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("robot-image").addEventListener("error", function () {
    this.src = "https://via.placeholder.com/200x200/6c757d/ffffff?text=Robot"
  })
})
