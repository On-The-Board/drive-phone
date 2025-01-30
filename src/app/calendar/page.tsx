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
    subMinutes,
} from 'date-fns'
import {fr} from 'date-fns/locale';
import { Fragment, useState, useEffect } from 'react'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Calendar(){
    const [meetings, setMeetings] = useState<any>([]);
    const getMeetings = async () => {
        const response = await fetch(`/api/orders`).then((response) => response.json());
        setMeetings(response);
    }
    useEffect(() => {
        getMeetings()
    }, [])

    let today = startOfToday()
    let [selectedDay, setSelectedDay] = useState(today)
    let [selectedMeet, setSelectedMeet] = useState<Date>(new Date("05 October 2011 14:48 UTC"))
    let [endMeet, setEndMeet] = useState(addMinutes(selectedDay, 30))
    let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
    let now = new Date

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
        end: addHours(selectedDay, 17),
    })
    afternoons.forEach((afternoon) => afternoons.push(addMinutes(afternoon, 30)))
    afternoons.sort()
    let evenings = eachHourOfInterval({
        start: addHours(selectedDay, 18),
        end: addHours(selectedDay, 22),
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
            <main className='px-10 pt-16 w-screen h-screen lg:w-[60vw] lg:mx-auto content-center'>
                <div className="flex flex-col lg:mx-[15vw]">
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
                            {format(firstDayCurrentMonth, 'MMMM yyyy', {locale: fr})}
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
                            
                        <section className=" pt-5 pb-16 ">
                            <div className='flex w-full justify-center'>
                                    <div className="grid grid-cols-3 gap-10 lg:gap-36 w-full">
                                        <div className=''>
                                            {mornings.map((morning) => morning < now ? null : (
                                                
                                                <div
                                                    key={morning.toString()}
                                                    className='py-2 flex'
                                                
                                                >
                                                    {
                                                        meetings.some((e: { date: string; }) => e.date === format((morning), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") || format(parseISO(e.date), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") === format(addMinutes((morning), 30), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") || format(e.date, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") === format(addMinutes(morning, 90), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")) ? (
                                                            <button
                                                                type="button"
                                                                onClick={() => setMeetHours(morning)}
                                                                className="btn btn-sm disabled:bg-white rounded-md line-through disabled:text-gray lg:px-10"
                                                                disabled
                                                            >
                                                                <time dateTime={format(morning, 'dd-MM-yyyy')}>
                                                                    {format(morning, 'h:mm')}
                                                                </time>
                                                            </button>
                                                        ) : (
                                                        <button
                                                        type="button"
                                                        onClick={() => setMeetHours(morning) }
                                                        className={classNames(
                                                            isEqual(morning, selectedMeet) ? ('btn btn-sm text-white bg-blue-600  hover:bg-blue-600 hover:text-white  border-none font-semibold rounded-md lg:px-10 self-center w-full'):
                                                            ('btn btn-sm rounded-md text-black bg-white Shadow hover:bg-gray-200 border-none lg:px-10 self-center w-full font-normal')
                                                            
                                                        )}
                                                    >
                                                        <time dateTime={format(morning, 'dd-MM-yyyy')}>
                                                            {format(morning, 'h:mm')}
                                                        </time>
                                                    </button>
                                                    )}
                                                    
                                                </div>
                                            ))}
                                        </div>
                                        <div className=''>
                                            {afternoons.map((afternoon) => afternoon < now ? null : (
                                                <div
                                                    key={afternoon.toString()}
                                                    className='py-2'

                                                >
                                                    {
                                                        meetings.some((e: { date: string; }) => e.date === format((afternoon), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") || format(parseISO(e.date), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") === format(addMinutes((afternoon), 30), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") || format(e.date, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") === format(addMinutes(afternoon, 90), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")) ? (
                                                            <button
                                                                type="button"
                                                                onClick={() => setMeetHours(afternoon)}
                                                                className="btn btn-sm disabled:bg-white rounded-md line-through disabled:text-gray lg:px-10"
                                                                disabled
                                                            >
                                                                <time dateTime={format(afternoon, 'dd-MM-yyyy')}>
                                                                    {format(afternoon, 'h:mm')}
                                                                </time>
                                                            </button>
                                                        ) : (
                                                        <button
                                                            type="button"
                                                            onClick={() => setMeetHours(afternoon)}
                                                            className={classNames(
                                                                isEqual(afternoon, selectedMeet) ? ('btn btn-sm text-white bg-blue-600  hover:bg-blue-600 hover:text-white  border-none font-semibold rounded-md lg:px-10 self-center w-full'):
                                                                ('btn btn-sm rounded-md text-black bg-white Shadow hover:bg-gray-200 border-none lg:px-10 self-center w-full font-normal')

                                                            )}
                                                        >
                                                            <time dateTime={format(afternoon, 'dd-MM-yyyy')}>
                                                                {format(afternoon, 'HH:mm')}
                                                            </time>
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                        <div className=''>
                                            {evenings.map((evening) => evening < now ? null :(
                                                <div
                                                    key={evening.toString()}
                                                    className='py-2'

                                                >
                                                    {
                                                        meetings.some((e: { date: string; }) => e.date === format((evening), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") || format(parseISO(e.date), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") === format(addMinutes((evening), 30), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") || format(e.date, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") === format(addMinutes(evening, 90), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")) ? (
                                                            <button
                                                                type="button"
                                                                onClick={() => setMeetHours(evening)}
                                                                className="btn btn-sm disabled:bg-white rounded-md line-through disabled:text-gray lg:px-10"
                                                                disabled
                                                            >
                                                                <time dateTime={format(evening, 'dd-MM-yyyy')}>
                                                                    {format(evening, 'h:mm')}
                                                                </time>
                                                            </button>
                                                        ) : (
                                                        <button
                                                            type="button"
                                                            onClick={() => setMeetHours(evening)}
                                                            className={classNames(
                                                                isEqual(evening, selectedMeet) ? ('btn btn-sm text-white bg-blue-600 hover:bg-blue-600 hover:text-white border-none font-semibold rounded-md lg:px-10 self-center w-full'):
                                                                ('btn btn-sm rounded-md text-black bg-white Shadow hover:bg-gray-200 border-none lg:px-10 self-center w-full font-normal')

                                                            )}
                                                        >
                                                            <time dateTime={format(evening, 'dd-MM-yyyy')}>
                                                                {format(evening, 'HH:mm')}
                                                            </time>
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                            </div>
                            
                        </section>
                        )}
                    <div className='w-full flex justify-center items-center pt-14 fixed bottom-[5vh] bg-white left-0'>
                        <a href={`/gps`} className={selectedMeet.toISOString() == "2011-10-05T14:48:00.000Z" ? ("text-gray-500 self-center align-middle flex text-lg font-semibold"):("text-blue-600 self-center align-middle flex text-lg font-semibold")}>
                            <button disabled={selectedMeet.toISOString() == "2011-10-05T14:48:00.000Z" ? (true) : (false)} onClick={() => localStorage.setItem("dateRes", selectedMeet.toISOString())}>
                                Valider
                            </button>
                        </a>
                    </div>
                    <div className='w-full bg-white fixed bottom-0 left-0 h-[5vh]'>

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