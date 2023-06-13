import React from 'react'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const Timepick = (props) => {


    const callNext=(v)=>{
        props.forValue(v);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>


            
                <TimePicker onChange={callNext} defaultValue={dayjs('2022-04-17T15:30')} />
           

        </LocalizationProvider>
    )
}

export default Timepick