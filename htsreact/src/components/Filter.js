import React, { Component } from "react";
import Title from "./Title";
import styled from 'styled-components';

export default class Filter extends Component {
  render() {
    return (
      <FilterWrapper>
        <Title title="Filter" />
          <div className="container-lg p-2 justify-content-center">
              <h3 className="title pl-4">Category</h3>


          </div>
        <div class="form-check form-switch ">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label " for="flexSwitchCheckDefault">
              Phone
          </label>
        </div>


        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Dysk
          </label>
        </div>

        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Laptop
          </label>
        </div>

        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Computer
          </label>

        </div>
        <div className="container-lg p-2 justify-content-center">
          <h3 className="title pl-4">Price</h3>
          <div className="d-flex justify-content-evenly ">
              <input type="text" className="form-control " placeholder="0"/>
              <input type="range" className="form-range px-2" min="0" max="2000" id="customRange2"/>
              <input type="text" className="form-control " placeholder="2000"/>
          </div>
        </div>

      </FilterWrapper>
    );
  }



}
const FilterWrapper=styled.div`
  .form-check{
    padding-left: 6rem;
    font-size:1.2rem;
  }
  .form-range{
    width: 50%;
    height: 2.5rem;
  }
  
  .form-control{
    width: 4rem;
    height: 2.5rem;
  }
    
  
  
`;
