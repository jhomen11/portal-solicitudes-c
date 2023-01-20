function Footer() {
    return (
      <>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p> © 2022 Copyright FONASA, todos los derechos reservados</p>
  
            <p>
              Hecho con{" "}
              <i className="bi bi-heart-fill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              </i>
              {" "}por FONASA
            </p>
          </div>
        </div>
      </>
    );
  }
  export default Footer;
  