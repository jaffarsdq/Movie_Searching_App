
function Navbar () {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    <button className="btn btn-primary p-2 m-2">Theme</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar;