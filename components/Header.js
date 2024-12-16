import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      {/* Barra de navegação superior */}
      <div className="px-3 py-2 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <a href="#" className="nav-link text-secondary">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                    <index/>
                  </svg>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                    
                  </svg>
                  <span>Orders</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                    
                  </svg>
                  <span>Products</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                    
                  </svg>
                  <span>Client</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-3 py-2 border-bottom mb-3">
        <div className="container d-flex flex-wrap align-items-center justify-content-between">
          <div className="me-auto">
            <SearchBar />
          </div>
          <div className="text-end">
            <button type="button" className="btn btn-light text-dark me-2">
            Connect
            </button>
            <button type="button" className="btn btn-primary">
            Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
