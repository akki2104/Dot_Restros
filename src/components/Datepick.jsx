import React from 'react';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const DatePick = (props) => {


  // const today = new Date();
  // const [varDate, setDate] = useState(today)
  

  const callNext = (v) => {
    props.forValue(v)
  }



  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>


      <DemoItem>
        <DatePicker onChange={callNext} disablePast label={'Select Date'} views={['day']} format='DD/MM/YYYY' maxDate={dayjs('2023-12-25')} />
      </DemoItem>


    </LocalizationProvider>
  );
}
export default DatePick;