import React, {Component, useState} from 'react';
import Slider from '@material-ui/core/Slider';
import styled from "styled-components";

class MultiRange extends Component {

    value = [0, 1500];
    handleChange = (event, newValue) => {
        this.setState(this.value = newValue);
    }

    inputChange = (event) => {
        const val = this.value;
        val[event.target.name] = event.target.value;
        this.setState(val);
    }

    render() {
        return (
            <MultiRangeWrapper>
                <div className="d-flex justify-content-evenly align-items-center">
                    <input type="text" name="0" className="form-control" value={this.value[0]}
                           onChange={this.inputChange}/>
                    <label className="fs-4">-</label>
                    <input type="text" name="1" className="form-control" value={this.value[1]}
                           onChange={this.inputChange}/>
                </div>

                <Slider
                    value={this.value}
                    max={2000}
                    onChange={this.handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                />
            </MultiRangeWrapper>
        );
    }
}

export default MultiRange;

const MultiRangeWrapper = styled.div`
  .form-control {
    width: 5rem;
    text-align: center;
    
  }
`