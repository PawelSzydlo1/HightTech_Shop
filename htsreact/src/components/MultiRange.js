import React, {useEffect, useState} from 'react';
import Slider from '@material-ui/core/Slider';
import styled from "styled-components";

export default function MultiRange ({setFilterPrice}) {


    const [value, setValue]=useState([0,19999])

    const handleChange = (event, newValue) => {
        setFilterPrice(newValue)
        setValue(newValue);

    }

    const inputChange = (event) => {
        const val = value;
        val[event.target.name] = event.target.value;
        setValue(val);
        setFilterPrice(val);
    }

    useEffect(() => {
        setFilterPrice(value);
    },[])

        return (
            <MultiRangeWrapper>
                <div className="d-flex justify-content-evenly align-items-center">
                    <input type="text" name="0" className="form-control" value={value[0]}
                           onChange={inputChange}/>
                    <label className="fs-4">-</label>
                    <input type="text" name="1" className="form-control" value={value[1]}
                           onChange={inputChange}/>
                </div>

                <Slider
                    value={value}
                    max={20000}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                />
            </MultiRangeWrapper>
        );
    }


const MultiRangeWrapper = styled.div`
  .form-control {
    width: 5rem;
    text-align: center;
    
  }
`