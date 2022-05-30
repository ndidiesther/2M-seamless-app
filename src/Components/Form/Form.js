import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../../Styles/styles.css";
import { ButtonContainer } from "../Shared/ButtonComponent";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const PickUpLocation = () => {
  return (
    <div className="fabric_pickup">
      <p>Fabric PickUp Address</p>
      <textarea></textarea>
    </div>
  );
};
const DeliveryLocation = () => {
  return (
    <div className="fabric_pickup">
      <p>Oufit Delivery Address</p>
      <textarea></textarea>
    </div>
  );
};
const SelectSize = () => {
  const [size, setSize] = React.useState('');

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  return(
    <div className="select_size">
       <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Select Size"
          onChange={handleChange}
        >
          <MenuItem value={1}>US 4/ UK 8</MenuItem>
          <MenuItem value={2}>US 6/ UK 10</MenuItem>
          <MenuItem value={3}>US 8/ UK 12</MenuItem>
          <MenuItem value={4}>US 10/ UK 14</MenuItem>
          <MenuItem value={5}>US 12/ UK 16</MenuItem>
          <MenuItem value={6}>US 14/ UK 18</MenuItem>
          <MenuItem value={7}>US 16/ UK 20</MenuItem>
        </Select>
      </FormControl>
      <button className="size_btn">View Size Chart</button>
    </Box>
    </div>
  )
};
const InputMeasurement = () => {
  return(
    <>
    </>
  )
};

const Form = () => {
  const [yesFabric, setyesFabric] = useState(false);
  const [noFabric, setnoFabric] = useState(false);

  const [yesMeasurement, setyesMeasurement] = useState(false);
  const [noMeasurement, setnoMeasurement] = useState(false);

  return (
    <>
      <div className="fabric_radio">
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            className="form_label"
          >
            Do you have your fabric?
          </FormLabel>
          <RadioGroup
            className="label_class"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              control={<Radio />}
              label="Yes I do"
              checked={!!noFabric}
              onChange={(e) => {
                setyesFabric(e.target.value);
                setnoFabric(!e.target.value);
              }}
            />
            <FormControlLabel
              control={<Radio />}
              label="No I don't"
              checked={!!yesFabric}
              onChange={(e) => {
                setnoFabric(e.target.value);
                setyesFabric(!e.target.value);
              }}
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="measurement_radio">
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            className="form_label"
          >
            Do you have your measurement?
          </FormLabel>
          <RadioGroup
            className="label_class"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              control={<Radio />}
              label="Yes I do"
              checked={!!noMeasurement}
              onChange={(e) => {
                setyesMeasurement(e.target.value);
                setnoMeasurement(!e.target.value);
              }}
            />
            <FormControlLabel
              control={<Radio />}
              label="No I don't"
              checked={!!yesMeasurement}
              onChange={(e) => {
                setnoMeasurement(e.target.value);
                setyesMeasurement(!e.target.value);
              }}
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        {yesFabric && (
          <>
            <PickUpLocation />
            <DeliveryLocation />
          </>
        )}
        {noFabric && <DeliveryLocation />}
      </div>
      <div>
        {yesMeasurement && (
          <>
            <InputMeasurement />
          </>
        )}
        {noMeasurement && <SelectSize />}
      </div>
      <div className="form_button">
        <ButtonContainer>Proceed</ButtonContainer>
      </div>
    </>
  );
};
export default Form;