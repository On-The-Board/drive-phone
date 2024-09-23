"use client"
import Navbar from '@/components/navbar/navbar';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
    add,
    subHours,
    addHours,
    addMinutes,
    eachDayOfInterval,
    eachHourOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfToday,
    isSunday,
    isMonday,
} from 'date-fns'
import {fr} from 'date-fns/locale';
import { Fragment, useState, useEffect } from 'react'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Calendar(){
    let today = startOfToday()
    let [selectedDay, setSelectedDay] = useState(today)
    let [selectedMeet, setSelectedMeet] = useState<Date>(new Date("05 October 2011 14:48 UTC"))
    console.log(selectedMeet.toISOString())
    let [endMeet, setEndMeet] = useState(addMinutes(selectedDay, 30))
    let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
    
    let days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    })
    let mornings = eachHourOfInterval({
        start: addHours(selectedDay, 10),
        end: addHours(selectedDay, 12),
    })
    mornings.forEach((morning) => mornings.push(addMinutes(morning, 30)))
    mornings.sort()
    let afternoons = eachHourOfInterval({
        start: addHours(selectedDay, 14),
        end: addHours(selectedDay, 16),
    })
    afternoons.forEach((afternoon) => afternoons.push(addMinutes(afternoon, 30)))
    afternoons.sort()
    let evenings = eachHourOfInterval({
        start: addHours(selectedDay, 17),
        end: addHours(selectedDay, 18),
    })
    evenings.forEach((evening) => evenings.push(addMinutes(evening, 30)))
    evenings.sort()

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    function setMeetHours(time: any){
        setSelectedMeet(time)
        setEndMeet(addMinutes(time, 90))
    }
    return(
        <>
            <Navbar back={true}/>
            <main className='px-10 w-full h-screen content-center'>
                <div className="flex flex-col">
                    <div className="flex items-center ">
                        <button
                            type="button"
                            onClick={previousMonth}
                            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Previous month</span>
                            <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                        </button>
                        <h2 className="flex-auto font-semibold text-black text-center">
                            {format(firstDayCurrentMonth, 'MMMM', {locale: fr})}
                        </h2>
                        <button
                            onClick={nextMonth}
                            type="button"
                            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Next month</span>
                            <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                        <div>Dim</div>
                        <div>Lun</div>
                        <div>Mar</div>
                        <div>Mer</div>
                        <div>Jeu</div>
                        <div>Ven</div>
                        <div>Sam</div>
                    </div>
                    <div className="grid grid-cols-7 mt-2 text-sm">
                        {days.map((day, dayIdx) => (
                            <div
                                key={day.toString()}
                                className={classNames(
                                    dayIdx === 0 && colStartClasses[getDay(day)],
                                    'py-1.5'
                                )}
                            >
                                <button
                                    type="button"
                                    onClick={() => setSelectedDay(day)}
                                    className={classNames(
                                        isEqual(day, selectedDay) && 'text-white bg-petrole',
                                        !isEqual(day, selectedDay) &&
                                        isToday(day) &&
                                        'font-semibold text-black',
                                        !isEqual(day, selectedDay) &&
                                        !isToday(day) &&
                                        isSameMonth(day, firstDayCurrentMonth) &&
                                        'text-black font-normal',
                                        !isEqual(day, selectedDay) &&
                                        !isToday(day) &&
                                        !isSameMonth(day, firstDayCurrentMonth) &&
                                        'text-gray-400',
                                        isEqual(day, selectedDay) && isToday(day) && 'bg-blue-600',
                                        isEqual(day, selectedDay) &&
                                        !isToday(day) &&
                                        'bg-blue-600',
                                        !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                                        (isEqual(day, selectedDay) || isToday(day)) &&
                                        'font-semibold',
                                        'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                                    )}
                                >
                                    <time dateTime={format(day, 'dd-MM-yyyy')}>
                                        {format(day, 'd')}
                                    </time>
                                </button>
                            </div>
                        ))}
                    </div>
                    {selectedDay < today?(<></>):(
                            isMonday(selectedDay)?(<p className='font-semibold text-petrole text-center'>fermé le Lundi</p>):(
                            isSunday(selectedDay)?(<p className='font-semibold text-petrole text-center'>fermé le Dimanche</p>):(
                        <section className=" pt-5 pb-16 ">
                            <div className='flex w-full justify-center'>
                                    <div className="grid grid-cols-3 gap-10 lg:gap-36 w-full">
                                        <div className=''>
                                            {mornings.map((morning) => (
                                                <div
                                                    key={morning.toString()}
                                                    className='py-2 flex'
                                                
                                                >
                                                    {
                                                        <button
                                                        type="button"
                                                        onClick={() => setMeetHours(morning) }
                                                        className={classNames(
                                                            isEqual(morning, selectedMeet) ? ('btn btn-sm text-white bg-blue-600 border-none font-semibold rounded-md lg:px-10 self-center w-full'):
                                                            ('btn btn-sm rounded-md text-black bg-white Shadow hover:text-white border-none lg:px-10 self-center w-full font-normal')
                                                            
                                                        )}
                                                    >
                                                        <time dateTime={format(morning, 'dd-MM-yyyy')}>
                                                            {format(morning, 'h:mm')}
                                                        </time>
                                                    </button>
                                                    }
                                                    
                                                </div>
                                            ))}
                                        </div>
                                        <div className=''>
                                            {afternoons.map((afternoon) => (
                                                <div
                                                    key={afternoon.toString()}
                                                    className='py-2'

                                                >
                                                    {
                                                        <button
                                                            type="button"
                                                            onClick={() => setMeetHours(afternoon)}
                                                            className={classNames(
                                                                isEqual(afternoon, selectedMeet) ? ('btn btn-sm text-white bg-blue-600 border-none font-semibold rounded-md lg:px-10 self-center w-full'):
                                                                ('btn btn-sm rounded-md text-black bg-white Shadow hover:text-white border-none lg:px-10 self-center w-full font-normal')

                                                            )}
                                                        >
                                                            <time dateTime={format(afternoon, 'dd-MM-yyyy')}>
                                                                {format(afternoon, 'HH:mm')}
                                                            </time>
                                                        </button>
                                                    }
                                                </div>
                                            ))}
                                        </div>
                                        <div className=''>
                                            {evenings.map((evening) => (
                                                <div
                                                    key={evening.toString()}
                                                    className='py-2'

                                                >
                                                    {
                                                        <button
                                                            type="button"
                                                            onClick={() => setMeetHours(evening)}
                                                            className={classNames(
                                                                isEqual(evening, selectedMeet) ? ('btn btn-sm text-white bg-blue-600 border-none font-semibold rounded-md lg:px-10 self-center w-full'):
                                                                ('btn btn-sm rounded-md text-black bg-white Shadow hover:text-white border-none lg:px-10 self-center w-full font-normal')

                                                            )}
                                                        >
                                                            <time dateTime={format(evening, 'dd-MM-yyyy')}>
                                                                {format(evening, 'HH:mm')}
                                                            </time>
                                                        </button>
                                                    }
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                            </div>
                            
                        </section>
                        )))}
                    <div className='w-full flex justify-center items-center pt-16 fixed bottom-16 left-0'>
                        <a href={`/gps`} className={selectedMeet.toISOString() == "2011-10-05T14:48:00.000Z" ? ("text-gray-500 self-center align-middle flex text-lg font-semibold"):("text-blue-600 self-center align-middle flex text-lg font-semibold")}>
                            <button disabled={selectedMeet.toISOString() == "2011-10-05T14:48:00.000Z" ? (true) : (false)} onClick={() => localStorage.setItem("dateRes", selectedMeet.toISOString())}>
                                Valider
                                <img src="/icons/arrow_left.png" alt="" />
                            </button>
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}

let colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
]