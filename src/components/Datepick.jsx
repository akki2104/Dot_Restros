import * as React from 'react';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const DatePick=()=>{
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        
        <DemoItem>
          <DatePicker disablePast label={'Select Date'} views={['day']} format='DD/MM/YYYY' maxDate={dayjs('2023-12-25')}  />
        </DemoItem>
        
      
    </LocalizationProvider>
  );
}
 export default DatePick;