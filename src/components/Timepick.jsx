import React from 'react'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Hotellist from './Hotellist';
import { useParams } from 'react-router-dom';

const Timepick = (props) => {


    const callNext = (v) => {
        props.forValue(v);
    }

    const { id } = useParams()
    const hotel = Hotellist.find((h) => {
        return String(h.id) === id
    })
    const min = dayjs().set('hour', hotel.openhr).startOf('hour');
    const max = dayjs().set('hour', hotel.closehr).startOf('hour');

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>



            <TimePicker minTime={min} maxTime={max} onChange={callNext} label={'Select time'} />


        </LocalizationProvider>
    )
}

export default Timepick