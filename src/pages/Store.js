import React from 'react'
import Categories from '../components/Categories'




const Store = ({handleAddProduct, catg, setCatg, filterProducts}) => {

  return (
    <>
        

        <div className="store-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Shop By Categories</h3>
                  <div>
                    <ul>
                      <li>
                          <button
                            className="btn btn-link" 
                            onClick={() => filterProducts('laptop')}
                            >
                              Laptops
                          </button>
                      </li>
                      <li>
                          <button
                            className="btn btn-link" 
                            onClick={() => filterProducts('mobile')}
                            >
                              Mobiles / Smartphones
                          </button>
                      </li>
                      <li><button
                            className="btn btn-link" 
                            onClick={() => filterProducts('watch')}
                            >
                              Watches
                          </button>
                      </li>
                      <li>
                          <button
                            className="btn btn-link" 
                            onClick={() => filterProducts('camera')}
                            >
                              Cameras
                          </button>
                      </li>
                      <li>
                          <button
                            className="btn btn-link" 
                            onClick={() => filterProducts('headphone')}
                            >
                              Headphones
                          </button>
                      </li>
                      <li>
                          <button
                            className="btn btn-link" 
                            onClick={() => setCatg(Categories)}
                            >
                              All
                          </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Filter By</h3>
                  <div>
                    <h5 className="filter-sub-title">Availability</h5>
                    <div>
                    <div className="form-check">
                      <input 
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" for="">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                    <input 
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                      checked
                    />
                    <label className="form-check-label" for="">
                      Out of Stock (0)
                    </label>
                    </div>
                    </div>
                    <h5 className="filter-sub-title">Price</h5>
                    <div className="d-flex align-items-center gap-10">
                      <div className="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="From"/>
                        <label htmlfor="floatingInput">From</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="To"/>
                        <label htmlfor="floatingInput">To</label>
                      </div>
                    </div>
                    <h5 className="filter-sub-title">Colors</h5>
                    <div>
                      <ul className="colors ps-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>                 
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Product Tags</h3>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Smartphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Cable & Charger
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="product-sort-grid">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-10">
                      <p className="mb-0 d-block">Sort By:</p>
                      <select name="" className="form-control form-select" id="">
                        <option selected="selected">Best Selling</option>
                        <option>Price, low to high</option>
                        <option>Price, high to low</option>
                        <option>Date, new to old</option>
                        <option>Date, old to new</option>
                      </select>
                    </div>
                    <div>
                      <p className="totalproducts">25 Products</p>
                    </div>
                  </div>
                  <div className="products-list pb-5">
                    <div className="row">
                      {catg.map((values) => {                        
                        const {id, title, price, image} = values;
                        return (
                          <>                            
                            <div className="col-4 my-4" key={id}>
                              <div className="card">
                                <img src={image} className="card-img-top" alt="..." width="50" height="60" />
                                <div className="card-body">
                                  <h5 className="card-title">{title}</h5>
                                  <p className="price">£{price}</p>
                                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <button className="btn button" onClick={() => handleAddProduct(values)}>Add to Cart</button> 
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      }

                      )}
                      
                       
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Store