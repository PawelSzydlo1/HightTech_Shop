import React, { useState} from "react";
import Title from "./Title";
import styled from 'styled-components';
import MultiRange from "./MultiRange";

export default function Filter()   {


        return (
            <FilterWrapper>
                <Title title="Filter"/>
                <div className="container-lg p-2 justify-content-center">
                    <h3 className="title pl-4">Category</h3>


                </div>
                <div className="form-check form-switch ">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                    />
                    <label className="form-check-label " form="flexSwitchCheckDefault">
                        Phone
                    </label>
                </div>


                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                    />
                    <label className="form-check-label" form="flexSwitchCheckDefault">
                        Disc
                    </label>
                </div>


                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"

                    />
                    <label className="form-check-label" form="flexSwitchCheckDefault">
                        Laptop
                    </label>
                </div>

                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                    />
                    <label className="form-check-label" form="flexSwitchCheckDefault">
                        Computer
                    </label>

                </div>
                <div className="container-lg p-2 justify-content-center">
                    <h3 className="title pl-4 pb-3">Price</h3>
                    <MultiRange/>
                </div>


                <div className="input-group">
                    <div className="form-outline col-12">
                        <input type="search" id="search " className="form-control px-2 " placeholder="Search"/>
                    </div>


                </div>

            </FilterWrapper>
        );
}
const FilterWrapper = styled.div`
  .form-check {
    padding-left: 6rem;
    font-size: 1.2rem;
  }

  .form-range {
    width: 50%;
    height: 2.5rem;
  }

  .form-control {
    height: 2.5rem;
  }
`;
