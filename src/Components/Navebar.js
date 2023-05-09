import  'bootstrap/dist/css/bootstrap.min.css' ;
function Navebar () {
    return (
        <div className="navbar">
            <div className="container d-flex justify-content-between">
                <div className="flex-start">
                    <span className="logo">SenFilms</span>
                </div>
                <div className="flex-end " >
                    <span className="item active">Acceuil</span>
                    <span className="item">Profil</span>
                    <span className="item">About</span>
                </div>
            </div>
        </div>
    )
}
export default Navebar;


