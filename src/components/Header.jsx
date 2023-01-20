import { Link } from "react-router-dom";
import logofonasa from "../img/logofonasa.png"

function Header() {
  return (
    <>
      <div className="container">
        
        <div className="row my-4">
         <Link to={"/"} className="navbar-brand">
         <img src={logofonasa} alt="" />
         </Link>   

        </div>
      </div>
      {/* <h2 className="text-center mt-4 mb-4">Devolución de Pagos en Excesos</h2> */}
     
    </>
  );
}
export default Header;


