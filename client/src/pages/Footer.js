import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks</span>
        </div>

        <div>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="whatsapp" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                Hakunia
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Technology</h6>
              <p>
                <a href='/category/technology' className='text-reset'>
                  Technology
                </a>
              </p>
              <p>
                <a href='/category/phones' className='text-reset'>
                  Phones
                </a>
              </p>
              <p>
                <a href='/category/laptops' className='text-reset'>
                  Laptops
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Fashion</h6>
              <p>
                <a href='/category/girls' className='text-reset'>
                  Girls
                </a>
              </p>
              <p>
                <a href='/category/boys' className='text-reset'>
                  Boys
                </a>
              </p>
              <p>
                <a href='/category/kids' className='text-reset'>
                  Kids
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Indonesia
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                hakunia@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 62 823 2382 8238
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='/'>
          Hakunia
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer