import React, { useState } from 'react'
import { DateRange } from 'react-date-range'; // --> for Date Picker
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './datePicker.css'
import {format} from 'date-fns' // --> To transform the date into a readable String
const DatePicker = (props) => {

        const [showDatePicker, setShowDatePicker] = useState(false)        
        const [data, setDate] = useState([
                {
                        startDate: new Date(),
                        endDate: new Date(),
                        key: 'selection'
                }
        ]);

        
        return (
                <>
                        <span className="headerSearchText" onClick={() => { setShowDatePicker(!showDatePicker) }}>
                                {`${format(data[0].startDate, "dd/MM/yyyy")} to ${format(data[0].endDate, "dd/MM/yyyy")}`}
                        </span>
                        {showDatePicker &&
                        <div className='date'>
                                <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={data}
                                />
                        </div>
                        }
                </>
        );
}

export default DatePicker;
