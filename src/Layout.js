import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css"

export const metadata = {
  title: "Adopción de Robots",
  description: "Aplicación para adopción de robots",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
