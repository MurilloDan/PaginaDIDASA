import { useState } from 'react'
import './booked.css'

const MONTHS = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
]

const WEEKDAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

/** Disponibilidad del taller: lunes a viernes 4 cupos, sábado 3, domingo cerrado. */
function slotsFor(date) {
  const day = date.getDay()
  if (day === 0) return 0
  if (day === 6) return 3
  return 4
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function BookedCalendar() {
  const today = startOfDay(new Date())
  const [month, setMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1))

  // La cuadrícula arranca en lunes, igual que el calendario original.
  const firstWeekday = (month.getDay() + 6) % 7
  const gridStart = new Date(month.getFullYear(), month.getMonth(), 1 - firstWeekday)

  const weeks = []
  for (let week = 0; week < 6; week += 1) {
    const days = []
    for (let day = 0; day < 7; day += 1) {
      const date = new Date(
        gridStart.getFullYear(),
        gridStart.getMonth(),
        gridStart.getDate() + week * 7 + day,
      )
      days.push(date)
    }
    weeks.push(days)
    const last = days[6]
    if (last.getMonth() !== month.getMonth() && last > month) break
  }

  const shiftMonth = (delta) =>
    setMonth((current) => new Date(current.getFullYear(), current.getMonth() + delta, 1))

  const canGoBack =
    month.getFullYear() > today.getFullYear() ||
    (month.getFullYear() === today.getFullYear() && month.getMonth() > today.getMonth())

  return (
    <div className="booked-calendar-shortcode-wrap">
      <div className="booked-calendar-wrap large">
        <div className="booked-calendar">
          <div className="bc-head">
            <div className="bc-row top">
              {canGoBack && (
                <a
                  href="#calendario"
                  className="page-left"
                  aria-label="Mes anterior"
                  onClick={(event) => {
                    event.preventDefault()
                    shiftMonth(-1)
                  }}
                >
                  ←
                </a>
              )}
              <span className="monthName">
                {MONTHS[month.getMonth()]} {month.getFullYear()}
              </span>
              <a
                href="#calendario"
                className="page-right"
                aria-label="Mes siguiente"
                onClick={(event) => {
                  event.preventDefault()
                  shiftMonth(1)
                }}
              >
                →
              </a>
            </div>
            <div className="bc-row days">
              {WEEKDAYS.map((day) => (
                <div className="bc-col" key={day}>
                  {day}
                </div>
              ))}
            </div>
          </div>

          <div className="bc-body">
            {weeks.map((days) => (
              <div className="bc-row week" key={days[0].toISOString()}>
                {days.map((date) => {
                  const slots = slotsFor(date)
                  const isPast = date < today
                  const unavailable = isPast || slots === 0
                  const classes = ['bc-col']
                  if (date.getMonth() < month.getMonth() || date.getFullYear() < month.getFullYear()) {
                    classes.push('prev-month')
                  }
                  if (date.getMonth() > month.getMonth() || date.getFullYear() > month.getFullYear()) {
                    classes.push('next-month')
                  }
                  if (unavailable) classes.push('prev-date')
                  if (date.getTime() === today.getTime()) classes.push('today')

                  return (
                    <div className={classes.join(' ')} key={date.toISOString()}>
                      <span
                        className="date"
                        title={unavailable ? undefined : `${slots} Disponibles`}
                      >
                        <span className="number">{date.getDate()}</span>
                      </span>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookedCalendar
