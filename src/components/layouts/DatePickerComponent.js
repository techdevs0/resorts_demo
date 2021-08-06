import React, {useEffect} from 'react';
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import $ from "jquery";
import { ThemeProvider } from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core";

const materialUiTheme = createMuiTheme({
    overrides:{
        MuiPickersDay: {
            day: {
                color: "white",
            },
            daySelected: {
                backgroundColor: "#be8a7d",
                color:"white !important",
                "&:hover":{
                    backgroundColor: "#deb3aa"
                }
            },
            dayDisabled: {
                color: "red",
            },
            current: {
                color: "red",
            },
        },
        MuiInput:{
            underline:{
                "&:after":{
                    borderBottom:"2px solid #be8a7d"
                }
            }
        }
    }
})

// #be8a7d
const DatePickerComponent = (props) => {
    let {value, placeholder, minDate, onChange,open,disablePast,id,onOpen,onClose} = props;

    useEffect(()=>{
        $(document).ready(()=>{
            $(`#${id}`).on("click",()=>{
                onOpen()
            })
        })
    },[])

    const handleChange = (val) => {
        onChange(val)
    }

    return (
        <ThemeProvider theme={materialUiTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM-dd-yyyy"
                margin="none"
                id={id}
                value={value}
                className="form-control"
                placeholder={placeholder}
                minDate={minDate}
                onChange={handleChange}
                allowKeyboardControl={true}
                autoOk={true}
                onOpen={onOpen}
                onClose={onClose}
                disablePast={disablePast}
                open={open}
                color="black"
            />
        </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
};

export default DatePickerComponent;