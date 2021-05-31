import React, {Component} from 'react'
import styled from "styled-components";

export default class Service extends Component {
    render() {
        return (
            <ServiceWrapper>
                <section className="section services-section" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>What we offer!</h2>
                                    <p>As a service, we offer quick and careful repairs. You will be satisfied with.</p>

                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-sm-6 col-lg-4">
                                <div className="feature-box-1">
                                    <div className="icon">
                                        <i className="fa fa-desktop"/>
                                    </div>
                                    <div className="feature-content">
                                        <h5>Laptop problems</h5>
                                        <p>
                                             - Laptop się nie włącza?<br/>
                                             - Masz czarne pixele na ekranie?<br/>
                                             Zadzwoń do nas a my ci pomożemy!

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <div className="feature-box-1">
                                    <div className="icon">
                                        <i className="fa fa-phone"/>
                                    </div>
                                    <div className="feature-content">
                                        <h5>Phone problems</h5>
                                        <p>
                                            - Potrzebujesz nowej szybki albo folijki? <br/>
                                            - Zarysował Ci się telefon i potrzebujesz wymiany ekranu? <br/>
                                            Zadzwoń do nas a my ci pomożemy!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <div className="feature-box-1">
                                    <div className="icon">
                                        <i className="fa fa-comment"/>
                                    </div>
                                    <div className="feature-content">
                                        <h5>Technical Support</h5>
                                        <p>
                                            - Zepsuł Ci się kabel do ładowania? <br/>
                                            - Potrzebujesz nowego dysku lub procesora a nie wiesz jaki jest dobry? <br/>
                                             Zadzwoń do nas a my ci pomożemy!

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <div className="feature-box-1">
                                    <div className="icon">
                                        <i className="fa fa-address-card"/>
                                    </div>
                                    <div className="feature-content">
                                        <h5>Contact</h5>
                                        <p>
                                            Adres:ul. Podmokła 12 Kraków   <br/>
                                            Telefon: 500 800 500  <br/>
                                            Email: HTShop@gmail.com





                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </ServiceWrapper>
        )
    }
}

const ServiceWrapper = styled.div`

  .feature-box-1 {
    padding: 32px;
    box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
    margin: 15px 0;
    position: relative;
    z-index: 1;
    border-radius: 10px;
    overflow: hidden;
    -moz-transition: ease all 0.35s;
    -o-transition: ease all 0.35s;
    -webkit-transition: ease all 0.35s;
    transition: ease all 0.35s;
    top: 0;
  }

  .feature-box-1 * {
    -moz-transition: ease all 0.35s;
    -o-transition: ease all 0.35s;
    -webkit-transition: ease all 0.35s;
    transition: ease all 0.35s;
  }

  .feature-box-1 .icon {
    width: 70px;
    height: 70px;
    line-height: 70px;
    background: var(--lightBlue);
    color: #ffffff;
    text-align: center;
    border-radius: 50%;
    margin-bottom: 22px;
    font-size: 27px;
  }

  .feature-box-1 .icon i {
    line-height: 70px;
  }

  .feature-box-1 h5 {
    color: var(--mainBlue);
    font-weight: 600;
  }

  .feature-box-1 p {
    margin: 0;
  }

  .feature-box-1:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: auto;
    right: 0;
    border-radius: 10px;
    width: 0;
    background: var(--mainBlue);
    z-index: -1;
    -moz-transition: ease all 0.35s;
    -o-transition: ease all 0.35s;
    -webkit-transition: ease all 0.35s;
    transition: ease all 0.35s;
  }

  .feature-box-1:hover {
    top: -5px;
  }

  .feature-box-1:hover h5 {
    color: #ffffff;
  }

  .feature-box-1:hover p {
    color: rgba(255, 255, 255, 0.8);
  }

  .feature-box-1:hover:after {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    left: 0;
    right: auto;
  }

  .section {
    padding: 100px 0;
    position: relative;
  }

  .section-title {
    padding-bottom: 45px;
  }

  .section-title h2 {
    font-weight: 700;
    color: var(--mainBlue);
    font-size: 45px;
    margin: 0 0 15px;
    border-left: 5px solid var(--lightBlue);
    padding-left: 15px;
  }


`