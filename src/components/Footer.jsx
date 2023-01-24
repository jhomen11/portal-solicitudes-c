import React from "react";
function Footer() {
  return (
    <>
    <div className="footer pt-2 pb-2 ">
    <div className="container">
      <div className="row  ">
        <div className="col-md-12  text-center">
          <p className=""> © Copyright FONASA, todos los derechos reservados</p>

          <p className=" ">
            Hecho con{" "}
            <i className="bi bi-balloon-heart-fill text-danger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-balloon-heart-fill text-danger"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </i>{" "}
            por FONASA
          </p>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
export default Footer;


  