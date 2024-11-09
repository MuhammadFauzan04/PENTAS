import { Link } from 'react-router-dom';


export const HomePage = () => {



  return (
    <div>
          <div className="welcome-text position-absolute top-50 start-50 translate-middle text-left text-white">
            <p>SELAMAT DATANG DI PENTAS</p>
            <h1 className='fw-bold'>WEBSITE PEMINJAMAN FASILITAS FMIPA UNHAS</h1>
            <p>"Website Peminjaman Fasilitas FMIPA Unhas adalah platform resmi untuk mempermudah proses peminjaman fasilitas akademik di Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Hasanuddin."</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-start' }}>
              <Link to="/login" style={{
                cursor: 'pointer',
                fontWeight: 700,
                transition: 'all 0.2s',
                padding: '10px 20px', 
                borderRadius: '100px',
                background: '#E72929',
                border: '1px solid transparent',
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '15px',
                textDecoration: 'none',
                color: 'white',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#E72929';
                e.currentTarget.querySelector('svg').style.transform = 'translateX(5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#E72929';
                e.currentTarget.querySelector('svg').style.transform = 'translateX(0)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                <span>Mulai Peminjaman</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 74 74"
                  height="34"
                  width="34"
                  style={{
                    width: '34px',
                    marginLeft: '10px',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                >
                  <circle strokeWidth="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                  <path
                    fill="white"
                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  ></path>
                </svg>
              </Link>

              <Link to="/register" style={{
                cursor: 'pointer',
                fontWeight: 700,
                transition: 'all 0.2s',
                padding: '10px 20px', 
                borderRadius: '100px',
                background: '#ffffff',
                border: '1px solid transparent',
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '15px',
                textDecoration: 'none',
                color: 'black',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#f0f0f0';
                e.currentTarget.querySelector('svg').style.transform = 'translateX(5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.querySelector('svg').style.transform = 'translateX(0)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                <span>Daftar</span>
              </Link>
            </div>
            
          </div>
        {/* CARAUSEL */}
                <div id="carouselExampleIndicators" className="carousel slide fixed-size-carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img
                        src="https://sippn.menpan.go.id/images/article/large/fakultas-mipa-750x375-1-20240905105353.jpeg"
                        className="d-block w-100 carousel-image"
                        alt="..."
                        style={{filter: 'brightness(0.7)'}}
                    />
                    </div>
                    <div className="carousel-item">
                    <img 
                        src="https://identitasunhas.com/wp-content/uploads/2019/08/WhatsApp-Image-2019-08-09-at-21.34.55.jpeg" 
                        className="d-block w-100" 
                        alt="..."
                        style={{filter: 'brightness(0.7)'}}
                    />
                    </div>
                    <div className="carousel-item">
                    <img 
                        src="https://sci.unhas.ac.id/wp-content/uploads/2023/12/foto-1024x489.jpg" 
                        className="d-block w-100" 
                        alt="..."
                        style={{filter: 'brightness(0.7)'}}
                    />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>     

        {/* FASILITAS */}
            <div className="fasilitas container-fluid">
                <div className="container">
                    
                    <h2 className="text-center py-5 fw-semibold">
                    FASILITAS
                    </h2>

                    {/* CARD */}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
                        {[1, 2, 3].map((index) => (
                          <div className="col" key={index}>
                            <div className="card h-100" style={{
                              background: "#fff",
                              boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                            }}>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR652IUoH2ZkNXQaEpnhs46v-pWMzf0GZD9rg&s" className="card-img-top" alt="..." />
                              <div className="card-body">
                                <h5 className="card-title fw-medium">Nama Gedung</h5>
                                <p className="card-text">00 : 00 - 00 : 00 AM.</p>
                                <Link to="/detail-fasilitas" className="btn" style={{
                                  background: "#006BFF",
                                  color: "#fff",
                                  borderRadius: "30px",
                                  padding: "8px 20px",
                                  transition: "0.3s",
                                  fontWeight: "500",
                                  textDecoration: "none"
                                }}>Lihat Detail</Link>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center mt-4">
                        {[1, 2, 3].map((index) => (
                          <div className="col" key={index}>
                            <div className="card h-100">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR652IUoH2ZkNXQaEpnhs46v-pWMzf0GZD9rg&s" className="card-img-top" alt="..." />
                              <div className="card-body">
                                <h5 className="card-title">Nama Gedung</h5>
                                <p className="card-text">00 : 00 - 00 : 00 AM.</p>
                                <Link to="/detail-fasilitas" className="btn btn-primary">Lihat Detail</Link>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                </div>
                
            </div>

         {/* FOOTER */}
              <footer className='mt-5' style={{
                background: "#E72929",
                height: 350,
              }}>
                <section className=''>
                  <div className="container py-4">
                    <div className="row mt-3">
                      <div className="col-md-4 px-5 text-white">
                        <img 
                          src="public/logoUnhas.png"
                          alt="Logo PENTAS"
                          style={{
                            width: "100px",
                            height: "auto",
                            marginBottom: "15px"
                          }}
                        />
                        <h5 className="fw-bold mb-2">Disini Kreativitas Menemukan Panggungnya</h5>
                        <p style={{fontSize: "12px"}}>
                          Fauzan, 2024
                        </p>
                      </div>
                          
                      <div className="col-md-6 text-white ms-auto">
                        <div className="row">
                          <div className="col-md-4">
                            <h5 className="fw-bold mb-3">Layanan</h5>
                            <p style={{fontSize: "14px", marginBottom: "8px"}}>Company</p>
                            <p style={{fontSize: "14px", marginBottom: "8px"}}>Blog</p>
                            <p style={{fontSize: "14px", marginBottom: "8px"}}>Careers</p>
                            <p style={{fontSize: "14px", marginBottom: "8px"}}>Pricing</p>
                          </div>

                          <div className="col-md-4">
                            <h5 className="fw-bold mb-3">Resources</h5>
                            <p style={{fontSize: "14px", marginBottom: "8px"}}>Documentation</p>
                            <p style={{fontSize: "14px", marginBottom: "8px"}}>Papers</p>
                            <p style={{fontSize: "14px", marginBottom: "8px"}}>Press Conferences</p>
                          </div>

                          <div className="col-md-4">
                            <h5 className="fw-bold mb-3">Legal</h5>
                            <p style={{fontSize: "14px", marginBottom: "8px"}}>Terms of Service</p>
                            <p style={{fontSize: "14px", marginBottom: "8px"}}>Privacy Policy</p>
                            <p style={{fontSize: "14px", marginBottom: "8px"}}>Cookies Policy</p>
                            <p style={{fontSize: "14px", marginBottom: "8px"}}>Data Processing</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 px-5 text-white">
                        <hr className="mb-3" style={{backgroundColor: "white", opacity: "0.2"}} />
                        <div className="d-flex justify-content-between align-items-center">
                          <p style={{fontSize: "14px", marginBottom: "0"}}>© 2024 WEBPENTAS. All rights reserved.</p>

                          <div className="d-flex gap-3">
                            <a href="#" className="text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                              </svg>
                            </a>
                            <a href="#" className="text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                              </svg>
                            </a>
                            <a href="#" className="text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"/>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </section>
              </footer>
                        
          {/* 
            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      <i className="fas fa-gem me-3"></i>WEBPENTAS
                    </h6>
                    <p>
                      Platform peminjaman fasilitas kampus yang memudahkan mahasiswa untuk melakukan peminjaman secara online.
                    </p>
                  </div>

                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Layanan
                    </h6>
                    <p>
                      <a href="#!" className="text-white">Peminjaman</a>
                    </p>
                    <p>
                      <a href="#!" className="text-white">Fasilitas</a>
                    </p>
                    <p>
                      <a href="#!" className="text-white">Jadwal</a>
                    </p>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Kontak</h6>
                    <p><i className="fas fa-home me-3"></i> Jakarta, Indonesia</p>
                    <p><i className="fas fa-envelope me-3"></i> info@webpentas.com</p>
                    <p><i className="fas fa-phone me-3"></i> + 62 234 567 88</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
              © 2024 Copyright:
              <a className="text-white" href="#"> WEBPENTAS</a>
            </div>
          </footer> */}

    </div>
  )
}
