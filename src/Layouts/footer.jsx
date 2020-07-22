import React from "react"

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container-fluid">
        <p className="footer-company py-1 my-1">
          Công ty TNHH Thương mại điện tử LTTN Electric{" "}
          <img
            src={require("../img/logoLTTN.jpg")}
            alt=""
            width="40px"
            className="rounded-circle"
          />
        </p>
      </div>
    </footer>
  )
}

export default Footer
