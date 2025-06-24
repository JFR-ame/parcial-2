const RobotDetail = ({ robot, t }) => {
  return (
    <div className="robot-detail-sidebar">
      <div className="card h-100">
        <div className="card-header bg-primary text-white text-center">
          <h5 className="card-title mb-0">{robot.nombre}</h5>
        </div>
        <div className="card-body">
          <div className="robot-image-container-sidebar mb-3">
            <img
              src={robot.imagen || "/placeholder.svg?height=150&width=150"}
              alt={robot.nombre}
              className="img-fluid robot-detail-image-sidebar"
            />
          </div>

          <div className="robot-info-sidebar">
            <div className="info-item mb-2">
              <strong className="text-primary">• {t("manufacturingYear")}:</strong>
              <div className="ms-3">{robot.añoFabricacion}</div>
            </div>

            <div className="info-item mb-2">
              <strong className="text-primary">• {t("processingCapacity")}:</strong>
              <div className="ms-3">{robot.capacidadProcesamiento}</div>
            </div>

            <div className="info-item">
              <strong className="text-primary">• {t("additionalFeatures")}:</strong>
              <div className="ms-3 text-muted">{robot.humor}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RobotDetail
