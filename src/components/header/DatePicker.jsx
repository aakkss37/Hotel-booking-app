import React, { useState } from 'react'
import { DateRange } from 'react-date-range'; // --> for Date Picker
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './datePicker.css'
import {format} from 'date-fns' // --> To transform the date into a readable String
const DatePicker = (props) => {

        const [showDatePicker, setShowDatePicker] = useState(false)        
        const [date, setDate] = useState([
                {
                        startDate: new Date(),
                        endDate: new Date(),
                        key: 'selection'
                }
        ]);

        props.onAddDate(date)
        
        return (
                <>
                        <span className="headerSearchText" onClick={() => { setShowDatePicker(!showDatePicker) }}>
                                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                        </span>
                        {
                        showDatePicker &&
                        <div className='date'>
                                <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                />
                        </div>
                        }
                </>
        );
}

export default DatePicker;
