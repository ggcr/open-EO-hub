import { useState } from 'react';

export default function DatePicker() {
    const [today, setToday] = useState(new Date())

    const [from, setFrom] = useState({d: ('0' + today.getDate()).slice(-2), m: ('0' + (today.getMonth() + 1)).slice(-2), y: today.getFullYear() - 1})
    const [until, setUntil] = useState({d: ('0' + today.getDate()).slice(-2), m: ('0' + (today.getMonth() + 1)).slice(-2), y: today.getFullYear() + 0})

    const [check, setCheck] = useState(false)

    const handleChange = () => {
        setCheck(!check);
      };

    return (

        <div className="flex -space-x-px w-72 z-[2000] mb-3.5">

            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2.5 mr-2 stroke-slate-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg> */}

            <input checked={check} onChange={handleChange} id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="1" className="w-4 h-4 mt-3.5 mr-2.5 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-0" />

            { (check)
                ?
                <div className="flex">
                    <div className="w-1/2 min-w-0 flex-1 py-1">
                        <label htmlFor="card-expiration-date" className="sr-only">
                            Expiration date
                        </label>
                        <input
                            type="text"
                            name="card-expiration-date"
                            id="card-expiration-date"
                            className="relative block w-full rounded-none rounded-l-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="DD/MM/YYYY"
                            value={"".concat(from.d, ' / ', from.m, ' / ', from.y)}
                        />
                    </div>
                    <div className="min-w-0 flex-1 py-1">
                        <label htmlFor="card-cvc" className="sr-only">
                            CVC
                        </label>
                        <input
                            type="text"
                            name="card-cvc"
                            id="card-cvc"
                            className="relative block w-full rounded-none rounded-r-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="DD/MM/YYYY"
                            value={"".concat(until.d, ' / ', until.m, ' / ', until.y)}
                        />
                    </div>
                </div>
                :
                <div className="flex w-64">
                <div className="w-1/2 min-w-0 flex-1 py-1">
                        <label htmlFor="card-expiration-date" className="sr-only">
                            Expiration date
                        </label>
                        <input
                            type="text"
                            name="card-expiration-date"
                            id="card-expiration-date"
                            className="relative block w-full rounded-none rounded-l-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="From Date"
                            value={""}
                        />
                    </div>
                    <div className="min-w-0 flex-1 py-1">
                        <label htmlFor="card-cvc" className="sr-only">
                            CVC
                        </label>
                        <input
                            type="text"
                            name="card-cvc"
                            id="card-cvc"
                            className="relative block w-full rounded-none rounded-r-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Until Date"
                            value={""}
                        />
                    </div>
                </div>
            }
          </div>
    )
}