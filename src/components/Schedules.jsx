"use client"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
    add,
    addMinutes,
    addHours,
    subHours,
    eachHourOfInterval,
    endOfMonth,
    format,
    getDay,
    getWeek,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfDay,
    startOfToday,
    startOfMonth,
    startOfYear,
    endOfYear,
    isSameHour,
} from 'date-fns'
import { fr } from 'date-fns/locale';
import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';





function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Plan() {
    
    const [meetings, setMeetings] = useState([]);
    const getMeetings = async () => {
        const response = await fetch(`/api/orders`).then((response) => response.json());
        setMeetings(response);
    }
    useEffect(() => {
      getMeetings()
    }, [])


    const [scheduler, setScheduler] = useState([])
    const getScheduler = async () => {
        const response = await fetch(`/api/scheduler`).then((response) => response.json());
        setScheduler(response);
    }
    useEffect(() => {
        getScheduler()
    }, [])
    
    let today = startOfToday()
    let [selectedDay, setSelectedDay] = useState(today)
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

    let thisweek = eachDayOfInterval({
        start: startOfWeek(today),
        end: endOfWeek(today)
    })
    
    let thismonth = eachDayOfInterval({
        start: startOfMonth(today),
        end: endOfMonth(today)
    })

    let thisyear = eachDayOfInterval({
        start: startOfYear(today),
        end: endOfYear(today)
    })

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }
    let selectedDayMeetings =
        meetings.filter((meeting) =>
            isSameDay(parseISO(meeting.date), selectedDay)
        )

    const [schedule, setSchedule] = useState("today")
    const [coiffeur, setCoiffeur] = useState("Badjine")
    const [coiffeurPlan, setCoiffeurPlan] = useState("all")

    let PlanTable
    let CoiffeurTable

    if (coiffeurPlan != "all") {
        selectedDayMeetings =
            meetings.filter((meeting) =>
                isSameDay(parseISO(meeting.date), selectedDay)
            )
        CoiffeurTable = 
        <div className='text-center font-semibold'>
            <h2>{coiffeurPlan}</h2>
        </div>

        PlanTable = 
        <div className='grid grid-rows-16 col-start-3 col-end-13 '>
            {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meet) => (
                    <div className={classHour(meet.date, meet.endDatetime)}>
                        <DrawMeeting meeting={meet} key={meet.id} />
                    </div>
                ))
            ) : (
                <p className='col-start-1 col-end-4 text-center StartRow-1 EndRow-17 self-center'>Pas de rendez-vous ce jour.</p>
            )}
        </div>
    }
    if (coiffeurPlan == "all") {

        CoiffeurTable =
            <div className='grid grid-cols-3 text-center font-semibold'>
                <h2 className='col-start-1 col-end-2'>Badjine</h2>
                <h2 className='col-start-2 col-end-3'>Benitos</h2>
                <h2 className='col-start-3 col-end-4'>Idriss</h2>
            </div>
        PlanTable = 
            <div className='grid grid-rows-16 grid-cols-3 col-start-3 col-end-13 '>
                {selectedDayMeetings.length > 0 ? (
                    selectedDayMeetings.filter(m => m.coiffeur == "Badjine").map((meet) => (
                        <div className={classHour(meet.startDatetime, meet.endDatetime) + "col-start-1 col-end-2"}>
                            <DrawMeeting meeting={meet} key={meet.id} />
                        </div>
                    ))
                ) : (
                    <p className='col-start-1 col-end-4 text-center StartRow-1 EndRow-17 self-center'>Pas de rendez-vous ce jour.</p>
                )}
                {selectedDayMeetings.length > 0 ? (
                    selectedDayMeetings.filter(m => m.coiffeur == "Benitos").map((meet) => (
                        <div className={classHour(meet.startDatetime, meet.endDatetime) + "col-start-2 col-end-3"}>
                            <DrawMeeting meeting={meet} key={meet.id} />
                        </div>
                    ))
                ) : (
                    <p className='col-start-1 col-end-4 text-center StartRow-1 EndRow-17 self-center'>Pas de rendez-vous ce jour.</p>
                )}
                {selectedDayMeetings.length > 0 ? (
                    selectedDayMeetings.filter(m => m.coiffeur == "Idriss").map((meet) => (
                        <div className={classHour(meet.startDatetime, meet.endDatetime) + "col-start-3 col-end-4"}>
                            <DrawMeeting meeting={meet} key={meet.id} />
                        </div>
                    ))
                ) : (
                    <p className='col-start-1 col-end-4 text-center StartRow-1 EndRow-17 self-center'>Pas de rendez-vous ce jour.</p>
                )}
            </div>
    }
    

    const router = useRouter();
    const refreshData = () => {
        router.refresh(router.asPathName)
    }

    function generateUID() {
        // I generate the UID from two parts here 
        // to ensure the random number provide enough bits.
        var firstPart = (Math.random() * 46656) | 0;
        var secondPart = (Math.random() * 46656) | 0;
        return firstPart + secondPart;
    }

    function addScheduler(name, date){
        const newScheduler = {
            id: generateUID(),
            name: name,
            date: date
        }
        scheduler.push(newScheduler)
        refreshData()
    }

    function delScheduler(name, date){
        const index = scheduler.find((e) => e.date === date && e.name === name)
        const getIndex = scheduler.indexOf(index)
        console.log(getIndex)
        scheduler.splice(getIndex, 1)
        refreshData()
    }

    function upScheduler(name, date){
        if(scheduler.some(e => e.date === date)){
            if (scheduler.some(e => e.name === name)){
                delScheduler(name, date)
                console.log(scheduler, "deleted")
            }
            else{
                addScheduler(name, date)
                console.log(scheduler, "created")
            }
        }
        else{
            addScheduler(name, date)
            console.log(scheduler, "created")
        }
        
    }
    
    const plan = () => {
        if (schedule == "today"){
            return(
                <div className='flex flex-row sm:flex-col maxi:flex-row justify-center gap-2 pt-5 w-full items-center'>
                    <div className='flex flex-col sm:flex-row gap-2'>
                        {mornings.map((morning, idx) => (
                            <div
                                key={morning.toString()}
                                className='py-2'
                            >
                                <label
                                    type="button"
                                    for={morning}
                                    className={classNames(
                                        'btn btn-sm text-white bg-white border-black hover:bg-petrole font-semibold rounded-md',
                                    )}
                                    
                                    
                                >
                                    <time dateTime={format(morning, 'dd-MM-yyyy')} className='text-black'>
                                        {format(morning, 'HH:mm')}
                                    </time>
                                    <input key={idx} type="checkbox" className='checked:bg-petrole' id={morning} onChange={() => upScheduler(coiffeur, format(morning, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))} checked={!scheduler.some(e => (e.date === format(morning, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") && e.name === coiffeur))} />
                                </label>
                            
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2'>
                        {afternoons.map((afternoon) => (
                            <div
                                key={afternoon.toString()}
                                className='py-2'

                            >
                                <label
                                    type="button"
                                    for={afternoon}
                                    className={classNames(
                                        'btn btn-sm text-white bg-white border-black hover:bg-petrole font-semibold rounded-md',

                                    )}
                                >
                                    <time dateTime={format(afternoon, 'dd-MM-yyyy')} className='text-black'>
                                        {format(afternoon, 'HH:mm')}
                                    </time>
                                    <input type="checkbox" id={afternoon} onChange={() =>upScheduler(coiffeur, format(afternoon, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))} checked={!scheduler.some(e => e.date === format(afternoon, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") && e.name === coiffeur)} />
                                </label>

                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2'>
                        {evenings.map((evening) => (
                            <div
                                key={evening.toString()}
                                className='py-2'

                            >
                                <label
                                    type="button"
                                    for={evening}
                                    className={classNames(
                                        'btn btn-sm text-white bg-white border-black hover:bg-petrole font-semibold rounded-md',

                                    )}
                                >
                                    <time dateTime={format(evening, 'dd-MM-yyyy')} className='text-black'>
                                        {format(evening, 'HH:mm')}
                                    </time>
                                    <input type="checkbox" id={evening} onChange={() => upScheduler(coiffeur, format(evening, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))} checked={!scheduler.some(e => e.date === format(evening, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") && e.name === coiffeur)}/>
                                </label>

                            </div>
                        ))}
                    </div>
                </div>

            )
        }
        if(schedule == "week"){
            const hoursWeek = []
            function createHoursWeek(day){
                let morningss = eachHourOfInterval({
                    start: addHours(day, 10),
                    end: addHours(day, 12),
                })
                morningss.forEach((morning) => morningss.push(addMinutes(morning, 30)))
                morningss.sort()

                let afternoonss = eachHourOfInterval({
                    start: addHours(day, 14),
                    end: addHours(day, 16),
                })
                afternoonss.forEach((afternoon) => afternoonss.push(addMinutes(afternoon, 30)))
                afternoonss.sort()

                let eveningss = eachHourOfInterval({
                    start: addHours(day, 17),
                    end: addHours(day, 18),
                })
                eveningss.forEach((evening) => eveningss.push(addMinutes(evening, 30)))
                eveningss.sort()

                const newHoursWeek = {
                    mornings: morningss,
                    afternoons: afternoonss,
                    evenings: eveningss
                }

                hoursWeek.push(newHoursWeek)
            }
            thisweek.map((day) => (
                createHoursWeek(day)
            ))

            return(
                <div className='flex flex-col pt-5 gap-3'>
                    {thisweek.map((day, idx)=>(
                        <>
                            <time dateTime={format(day, 'yyyy-MM-dd')}>
                                {format(day, 'dd MMM, yyy', { locale: fr })}
                            </time>
                            <div className='flex flex-row sm:flex-col maxi:flex-row justify-center gap-2 pt-5 w-full'>
                                <div className='flex flex-col sm:flex-row gap-2'>
                                    {hoursWeek[idx].mornings.map((morning) => (
                                        <div
                                            key={morning.toString()}
                                            className='py-2'
                                        >
                                            <label
                                                type="button"
                                                for={morning}
                                                className={classNames(
                                                    'btn btn-sm text-white bg-white border-black hover:bg-petrole font-semibold rounded-md',

                                                )}


                                            >
                                                <time dateTime={format(morning, 'dd-MM-yyyy')} className='text-black'>
                                                    {format(morning, 'HH:mm')}
                                                </time>
                                                <input type="checkbox" id={morning} onChange={() => upScheduler(coiffeur, format(morning, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))} checked={!scheduler.some(e => (e.date === format(morning, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") && e.name === coiffeur))} />
                                            </label>

                                        </div>
                                    ))}
                                </div>
                                <div className='flex flex-col sm:flex-row gap-2'>
                                    {hoursWeek[idx].afternoons.map((afternoon) => (
                                        <div
                                            key={afternoon.toString()}
                                            className='py-2'

                                        >
                                            <label
                                                type="button"
                                                for={afternoon}
                                                className={classNames(
                                                    'btn btn-sm text-white bg-white border-black hover:bg-petrole font-semibold rounded-md',

                                                )}
                                            >
                                                <time dateTime={format(afternoon, 'dd-MM-yyyy')} className='text-black'>
                                                    {format(afternoon, 'HH:mm')}
                                                </time>
                                                <input type="checkbox" id={afternoon} onChange={() => upScheduler(coiffeur, format(afternoon, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))} checked={!scheduler.some(e => e.date === format(afternoon, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") && e.name === coiffeur)} />
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex flex-col sm:flex-row gap-2'>
                                    {hoursWeek[idx].evenings.map((evening) => (
                                        <div
                                            key={evening.toString()}
                                            className='py-2'

                                        >
                                            <label
                                                type="button"
                                                for={evening}
                                                className={classNames(
                                                    'btn btn-sm text-white bg-white border-black hover:bg-petrole font-semibold rounded-md',

                                                )}
                                            >
                                                <time dateTime={format(evening, 'dd-MM-yyyy')} className='text-black'>
                                                    {format(evening, 'HH:mm')}
                                                </time>
                                                <input type="checkbox" id={evening} onChange={() => upScheduler(coiffeur, format(evening, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))} checked={!scheduler.some(e => e.date === format(evening, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") && e.name === coiffeur)} />
                                            </label>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            )
        }
        if (schedule == "month") {
            const hoursWeek = []
            function createHoursWeek(day) {
                let morningss = eachHourOfInterval({
                    start: addHours(day, 10),
                    end: addHours(day, 12),
                })
                morningss.forEach((morning) => morningss.push(addMinutes(morning, 30)))
                morningss.sort()

                let afternoonss = eachHourOfInterval({
                    start: addHours(day, 14),
                    end: addHours(day, 16),
                })
                afternoonss.forEach((afternoon) => afternoonss.push(addMinutes(afternoon, 30)))
                afternoonss.sort()

                let eveningss = eachHourOfInterval({
                    start: addHours(day, 17),
                    end: addHours(day, 18),
                })
                eveningss.forEach((evening) => eveningss.push(addMinutes(evening, 30)))
                eveningss.sort()

                const newHoursWeek = {
                    mornings: morningss,
                    afternoons: afternoonss,
                    evenings: eveningss
                }

                hoursWeek.push(newHoursWeek)
            }
            thismonth.map((day) => (
                createHoursWeek(day)
            ))
            
            return (
                <div className='flex flex-col pt-5'>
                    {thismonth.map((day, idx) => (
                        <>
                            <time dateTime={format(day, 'yyyy-MM-dd')}>
                                {format(day, 'dd MMM, yyy', { locale: fr })}
                            </time>
                            <div className='flex flex-row sm:flex-col maxi:flex-row justify-center gap-2 pt-5 w-full'>
                                <div className='flex flex-col sm:flex-row gap-2'>
                                    {hoursWeek[idx].mornings.map((morning) => (
                                        <div
                                            key={morning.toString()}
                                            className='py-2'
                                        >
                                            <label
                                                type="button"
                                                for={morning}
                                                className={classNames(
                                                    'btn btn-sm text-white bg-white border-black hover:bg-petrole font-semibold rounded-md',

                                                )}


                                            >
                                                <time dateTime={format(morning, 'dd-MM-yyyy')} className='text-black'>
                                                    {format(morning, 'HH:mm')}
                                                </time>
                                                <input type="checkbox" id={morning} onChange={() => upScheduler(coiffeur, format(morning, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))} checked={!scheduler.some(e => (e.date === format(morning, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") && e.name === coiffeur))} />
                                            </label>

                                        </div>
                                    ))}
                                </div>
                                <div className='flex flex-col sm:flex-row gap-2'>
                                    {hoursWeek[idx].afternoons.map((afternoon) => (
                                        <div
                                            key={afternoon.toString()}
                                            className='py-2'

                                        >
                                            <label
                                                type="button"
                                                for={afternoon}
                                                className={classNames(
                                                    'btn btn-sm text-white bg-white border-black hover:bg-petrole font-semibold rounded-md',

                                                )}
                                            >
                                                <time dateTime={format(afternoon, 'dd-MM-yyyy')} className='text-black'>
                                                    {format(afternoon, 'HH:mm')}
                                                </time>
                                                <input type="checkbox" id={afternoon} onChange={() => upScheduler(coiffeur, format(afternoon, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))} checked={!scheduler.some(e => e.date === format(afternoon, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") && e.name === coiffeur)} />
                                            </label>

                                        </div>
                                    ))}
                                </div>
                                <div className='flex flex-col sm:flex-row gap-2'>
                                    {hoursWeek[idx].evenings.map((evening) => (
                                        <div
                                            key={evening.toString()}
                                            className='py-2'

                                        >
                                            <label
                                                type="button"
                                                for={evening}
                                                className={classNames(
                                                    'btn btn-sm text-white bg-white border-black hover:bg-petrole font-semibold rounded-md',

                                                )}
                                            >
                                                <time dateTime={format(evening, 'dd-MM-yyyy')} className='text-black'>
                                                    {format(evening, 'HH:mm')}
                                                </time>
                                                <input type="checkbox" id={evening} onChange={() => upScheduler(coiffeur, format(evening, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))} checked={!scheduler.some(e => e.date === format(evening, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") && e.name === coiffeur)} />
                                            </label>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            )
        }
        if (schedule == "year") {
            const hoursWeek = []
            function createHoursWeek(day) {
                let morningss = eachHourOfInterval({
                    start: addHours(day, 10),
                    end: addHours(day, 12),
                })
                morningss.forEach((morning) => morningss.push(addMinutes(morning, 30)))
                morningss.sort()

                let afternoonss = eachHourOfInterval({
                    start: addHours(day, 14),
                    end: addHours(day, 16),
                })
                afternoonss.forEach((afternoon) => afternoonss.push(addMinutes(afternoon, 30)))
                afternoonss.sort()

                let eveningss = eachHourOfInterval({
                    start: addHours(day, 17),
                    end: addHours(day, 18),
                })
                eveningss.forEach((evening) => eveningss.push(addMinutes(evening, 30)))
                eveningss.sort()

                const newHoursWeek = {
                    mornings: morningss,
                    afternoons: afternoonss,
                    evenings: eveningss
                }

                hoursWeek.push(newHoursWeek)
            }
            thisyear.map((day) => (
                createHoursWeek(day)
            ))
            return (
                <div className='flex flex-col pt-5'>
                    {thisyear.map((day, idx) => (
                        <>
                            <time dateTime={format(day, 'yyyy-MM-dd')}>
                                {format(day, 'dd MMM, yyy', { locale: fr })}
                            </time>
                            <div className='flex flex-row sm:flex-col maxi:flex-row justify-center gap-2 pt-5 w-full'>
                                <div className='flex flex-col sm:flex-row gap-2'>
                                    {hoursWeek[idx].mornings.map((morning) => (
                                        <div
                                            key={morning.toString()}
                                            className='py-2'
                                        >
                                            <label
                                                type="button"
                                                for={morning}
                                                className={classNames(
                                                    'btn btn-sm text-white bg-white border-black hover:bg-petrole font-semibold rounded-md',

                                                )}


                                            >
                                                <time dateTime={format(morning, 'dd-MM-yyyy')} className='text-black'>
                                                    {format(morning, 'HH:mm')}
                                                </time>
                                                <input type="checkbox" id={morning} onChange={() => upScheduler(coiffeur, format(morning, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))} checked={!scheduler.some(e => (e.date === format(morning, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") && e.name === coiffeur))} />
                                            </label>

                                        </div>
                                    ))}
                                </div>
                                <div className='flex flex-col sm:flex-row gap-2'>
                                    {hoursWeek[idx].afternoons.map((afternoon) => (
                                        <div
                                            key={afternoon.toString()}
                                            className='py-2'

                                        >
                                            <label
                                                type="button"
                                                for={afternoon}
                                                className={classNames(
                                                    'btn btn-sm text-white bg-white border-black hover:bg-petrole font-semibold rounded-md',

                                                )}
                                            >
                                                <time dateTime={format(afternoon, 'dd-MM-yyyy')} className='text-black'>
                                                    {format(afternoon, 'HH:mm')}
                                                </time>
                                                <input type="checkbox" id={afternoon} onChange={() => upScheduler(coiffeur, format(afternoon, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))} checked={!scheduler.some(e => e.date === format(afternoon, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") && e.name === coiffeur)} />
                                            </label>

                                        </div>
                                    ))}
                                </div>
                                <div className='flex flex-col sm:flex-row gap-2'>
                                    {hoursWeek[idx].evenings.map((evening) => (
                                        <div
                                            key={evening.toString()}
                                            className='py-2'

                                        >
                                            <label
                                                type="button"
                                                for={evening}
                                                className={classNames(
                                                    'btn btn-sm text-white bg-white border-black hover:bg-petrole font-semibold rounded-md',

                                                )}
                                            >
                                                <time dateTime={format(evening, 'dd-MM-yyyy')} className='text-black'>
                                                    {format(evening, 'HH:mm')}
                                                </time>
                                                <input type="checkbox" id={evening} onChange={() => upScheduler(coiffeur, format(evening, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))} checked={!scheduler.some(e => e.date === format(evening, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") && e.name === coiffeur)} />
                                            </label>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            )
        }

    }
    
    const submitPostSch = async () => {

        let body = {
            scheduler
        }
        try {
            await fetch(`/api/scheduler/update`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            })
            handleOpen()
        } catch (error) {
            console.error(error)
        }
    }
    const [open, setOpen] = useState("https://img.icons8.com/?size=100&id=11695&format=png&color=fafafa");
    const handleOpen = () => {
        setOpen("https://img.icons8.com/?size=100&id=11695&format=png&color=3DC451")
    }

    if (open == "https://img.icons8.com/?size=100&id=11695&format=png&color=3DC451") {
        setTimeout(() => {
            setOpen("https://img.icons8.com/?size=100&id=11695&format=png&color=fafafa");
        }, 2000)
    }

    function classHour(time, end){
    var d = new Date(time)
    var h = d.getHours()
    var m = d.getMinutes()
    let res = ""
    if(m < 10){
         res = h + ":" + m + "0"

    }else{
         res = h + ":" + m
    }

    var d2 = new Date(end)
    var h2 = d2.getHours()
    var m2 = d2.getMinutes()
    let res2 = ""
    if(m2 < 10){
         res2 = h2 + ":" + m2 + "0"

    }else{
         res2 = h2 + ":" + m2
    }

        var timing = []
        mornings.forEach((morning) => (timing.push(format(morning, 'HH:mm'))))
        afternoons.forEach((afternoon) => (timing.push(format(afternoon, 'HH:mm'))))
        evenings.forEach((evening) => (timing.push(format(evening, 'HH:mm'))))

        var ind = timing.indexOf(res)
        var ind2 = timing.indexOf(res2)

        return `StartRow-${ind + 1} EndRow-${ind2 + 1}`
    }

    return (
        <div className=" h-full content-center text-black px-3 lg:px-36 max-w-screen bg-white rounded-tl-lg">
            <div className="w-full mx-auto Shadow rounded-lg p-5 mt-12 lg:mt-0">
                <div className='hidden lg:flex w-full justify-end pb-5'>
                    
                </div>
                <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
                    <div className="md:pr-14">
                        <div className="flex items-center">
                            <h2 className="flex-auto font-semibold text-gray-900">
                                {format(firstDayCurrentMonth, 'MMMM yyyy', {locale: fr})}
                            </h2>
                            <button
                                type="button"
                                onClick={previousMonth}
                                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Previous month</span>
                                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
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
                            <div>D</div>
                            <div>L</div>
                            <div>M</div>
                            <div>M</div>
                            <div>J</div>
                            <div>V</div>
                            <div>S</div>
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
                                            isEqual(day, selectedDay) && 'text-white bg-blue-600',
                                            !isEqual(day, selectedDay) &&
                                            isToday(day) &&
                                            'text-blue-500',
                                            !isEqual(day, selectedDay) &&
                                            !isToday(day) &&
                                            isSameMonth(day, firstDayCurrentMonth) &&
                                            'text-gray-900',
                                            !isEqual(day, selectedDay) &&
                                            !isToday(day) &&
                                            !isSameMonth(day, firstDayCurrentMonth) &&
                                            'text-gray-400',
                                            isEqual(day, selectedDay) && isToday(day) && 'bg-blue-500',
                                            isEqual(day, selectedDay) &&
                                            !isToday(day) &&
                                            'bg-blue-600',
                                            !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                                            (isEqual(day, selectedDay) || isToday(day)) &&
                                            'font-semibold',
                                            'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                                        )}
                                    >
                                        <time dateTime={format(day, 'yyyy-MM-dd')}>
                                            {format(day, 'd')}
                                        </time>
                                    </button>

                                    <div className="w-1 h-1 mx-auto mt-1">
                                        {meetings.some((meeting) =>
                                            isSameDay(parseISO(meeting.date), day)
                                        ) && (
                                                <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                                            )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <section className="mt-12 md:mt-0 md:pl-14 h-fit">
                        <h2 className="font-semibold text-black text-center lg:pb-5">
                            Rendez-vous pour le{' '}
                            <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                                {format(selectedDay, 'dd MMM, yyy', {locale: fr})}
                            </time>
                        </h2>
                        <ol className=" space-y-1 text-sm leading-6 text-gray-500">
                            <div className='grid grid-cols-12 pt-5'>
                                <div className='grid grid-rows-16 col-start-1 col-end-3 h-full'>
                                    {mornings.map((morning, idx) => (
                                        <p className={`row-start-${idx+1} row-end-${idx+2} border-b text-center `}>{format(morning, 'HH:mm' )}</p>
                                    ))}
                                    {afternoons.map((afternoon, idx) => (
                                        <p className={`row-start-${idx+7} row-end-${idx+8} border-b text-center`}>{format(afternoon, 'HH:mm' )}</p>
                                    ))}
                                    {evenings.map((evening, idx) => (
                                        <p className={`row-start-${idx+13} row-end-${idx+14} border-b text-center`}>{format(evening, 'HH:mm' )}</p>
                                    ))}
                                </div>
                                    {PlanTable}
                                
                            </div>
                        </ol>
                    </section> */}
                    <div className='py-12'>
                        <div className='rounded-lg Shadow flex flex-col w-full mt-5'>
                            <div className='flex flex-row gap-5'>
                                <select name="" id="" onChange={(e) => setSchedule(e.target.value)} className='w-fit bg-white' >
                                    <option value="today">
                                        <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                                            {format(selectedDay, 'dd MMM, yyy', { locale: fr })}
                                        </time>
                                    </option>
                                    <option value="week">cette semaine</option>
                                    <option value="month">ce mois</option>
                                    <option value="year">cette année</option>
                                </select>
                                
                            </div>
                            {plan()}
                            <div className='pt-5 w-full flex justify-end'>
                                <div className='flex align-center'>
                                    <img width="30" height="30" src={open} alt="checked--v1" className='h-fit self-center mr-5' />
                                </div>
                                <button className='btn hover:bg-white hover:border-blue-600 bg-blue-600 hover:text-blue-600 border-none text-white' onClick={() => submitPostSch()}>Valider</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='py-12'>
                <h2 className='text-xl font-semibold'>Mes Horraires</h2>
                <div className='rounded-lg Shadow p-5 flex flex-col w-full mt-5'>
                    <div className='flex flex-row gap-5'>
                        <select name="" id="" onChange={(e) => setSchedule(e.target.value)} className='w-fit bg-white' >
                            <option value="today">
                                <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                                    {format(selectedDay, 'dd MMM, yyy', { locale: fr })}
                                </time>
                            </option>
                            <option value="week">cette semaine</option>
                            <option value="month">ce mois</option>
                            <option value="year">cette année</option>
                        </select>
                        
                    </div>
                    {plan()}
                    <div className='pt-5 w-full flex justify-end'>
                        <div className='flex align-center'>
                            <img width="30" height="30" src={open} alt="checked--v1" className='h-fit self-center mr-5' />
                        </div>
                        <button className='btn hover:bg-white hover:border-petrole bg-petrole hover:text-petrole text-white' onClick={() => submitPostSch()}>Valider</button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

function DrawMeeting({ meeting }) {
    let startDateTime = parseISO(meeting.startDatetime)
    let endDateTime = parseISO(meeting.endDatetime)
    const deletePost = async (id) => {
            await fetch(`/api/meetings/delete`, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(id)
            })
        

    }
    const updatePost = async (id) => {
        await fetch(`/api/meetings/valide`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(id)
        })


    }
    const submitPost = async (Date, Price, Name, meetId) => {

        let body = {
            date: Date,
            price: Price,
            forfait: Name,
            meetId: meetId

        }
        try {
            await fetch(`/api/compta/post`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <li className="flex items-center h-full">
            <button className="btn w-full h-full flex flex-col rounded-lg bg-petrole border-petrole text-white hover:bg-white hover:text-petrole hover:border-petrole hover:border" onClick={() => document.getElementById(meeting.id).showModal()}>
                {meeting.name}
                <time className='hidden lg:flex'>
                    {format(startDateTime, "HH:mm")} - {format(endDateTime, "HH:mm")}
                </time>
                <time className='lg:hidden flex'>
                    {format(startDateTime, "HH:mm")}
                </time>
            </button>
            <dialog id={meeting.id} className="modal">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg">Informations :</h3>
                    <p className="py-4 text-xl">Nom: {meeting.name}<br /><br />Tel: {meeting.phone}<br /><br />Forfait: {meeting.forfait}<br /><br />Prix: {meeting.price}€</p>
                    <div className="modal-action justify-between align-center">
                        {meeting.valide === false ? (
                            <></>
                        ):(
                            <div className='self-center'>
                                <img src="https://img.icons8.com/?size=100&id=11695&format=png&color=3DC451" width={30} alt="" />
                            </div>
                        )}
                            
                            <button className='btn bg-red border-red text-white' onClick={() => deletePost(meeting.id)}>Supprimer</button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </li>
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
