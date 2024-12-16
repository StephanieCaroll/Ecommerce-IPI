export default function SearchBar() {
  return (
    <nav className="navbar nbg-body-tertiary">
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 w-75 w-md-50" 
            type="search"
            placeholder="Search Products..."
            aria-label="Search"
          />
          {/* Alterei para btn-outline-primary */}
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}
