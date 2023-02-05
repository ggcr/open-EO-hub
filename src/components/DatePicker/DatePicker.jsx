import { useState, useRef, useEffect } from 'react';
import DateEmpty from './DateEmpty';
import DateSingle from './DateSingle';

export default function DatePicker({setDateFilter}) {

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const [check, setCheck] = useState(false)

    const handleChange = (e) => {
        setCheck(!check)
    }

    useEffect(() => {
        console.log("start date: ", startDate, " end date: ", endDate)
        if(startDate !== null && endDate !== null) {
            setDateFilter({startDate: startDate, endDate: endDate})
        }
    }, [startDate, endDate])

    return (

        <div className="flex -space-x-px w-72 z-[2000] mb-3.5">

            <input checked={check} onChange={handleChange} id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="1" className="w-4 h-4 mt-[0.68rem] mr-2.5 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-0" />

            { (check)
                ?
                <div className="flex">
                    <DateSingle order={1} setDate={setStartDate} />
                    <DateSingle order={2} setDate={setEndDate} />
                </div>
                :
                <div className="flex">
                    <DateEmpty order={1}/>
                    <DateEmpty order={2}/>
                </div>
            }
          </div>
    )
}