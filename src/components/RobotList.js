"use client"

const RobotList = ({ robots, onRobotSelect, selectedRobot, t }) => {
  return (
    <div className="robot-list-container">
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col" className="text-center">
                ID
              </th>
              <th scope="col" className="text-center">
                {t("name")}
              </th>
              <th scope="col" className="text-center">
                {t("model")}
              </th>
              <th scope="col" className="text-center">
                {t("company")}
              </th>
            </tr>
          </thead>
          <tbody>
            {robots.map((robot, index) => (
              <tr
                key={robot.id}
                onClick={() => onRobotSelect(robot)}
                className={`robot-row table-row-hover ${
                  selectedRobot && selectedRobot.id === robot.id ? "table-active selected-row" : ""
                }`}
                style={{ cursor: "pointer" }}
              >
                <td className="text-center fw-bold">{index + 1}</td>
                <td className="fw-semibold">{robot.nombre}</td>
                <td>{robot.modelo}</td>
                <td className="text-muted">{robot.empresaFabricante}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RobotList
