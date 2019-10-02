import _isEmpty from 'lodash/isEmpty'
import _shuffle from 'lodash/shuffle'
import _sample from 'lodash/sample'
import { Step1 } from './App'
import { Journey } from './journey/Journey'

export const MAX_KM_DAY = 360

/** Generovani */
export const generateJourneys = (step1 = Step1, trips = []) => {
  console.group('Generovani cest')
  const journeys = []
  console.log('obdobi')
  console.log('vychozi lokace', step1.startLocation)
  console.log('celkova vzdalenost', step1.distance)
  console.log('mozna mista cesty', trips)
  if (!isStep1Valid(step1) || _isEmpty(trips)) {
    console.error('nemam data')
    return journeys
  }

  // dostanu pole vsech pracovnich dnu
  let workDays = getDays(step1.dateFrom, step1.dateTo)
  if (_isEmpty(workDays)) {
    console.error('nemam pracovni dny')
    return journeys
  }

  // pokud by melo byt najeto vice nez 360km/den, nedovolime to
  if (MAX_KM_DAY < step1.distance / trips.length) {
    console.error('Moc velka vzdalenost na %s dnu', step1.distance)
  } else {
    console.log('KM denne', step1.distance / workDays.length)
  }

  // zamicham pole pracovnich dnu
  workDays = _shuffle(workDays)

  workDays.forEach((date, i) => {
    console.group('Workday', date)
    // Pro kazdy den
    // zkontroluju, ze jsme nepresahli zadany pocet km
    const journeysKm = _isEmpty(journeys) ? 0 : journeys.reduce((previousValue = 0, currentValue) => previousValue + currentValue.distance, 0)
    console.log('celkem zatim najeto', journeysKm)

    const note = getNote()

    if (journeysKm < step1.distance) {
      const randomTrip = _sample(trips)
      // pokud ne, vyberu random trip a udelam z nej Journey
      console.log('trip', randomTrip.describe())
      journeys.push(
        new Journey(
          { start: randomTrip.start, end: randomTrip.end },
          new Date(date),
          randomTrip.distance,
          note
        )
      )
      if (randomTrip.roundTrip) {
        journeys.push(
          new Journey(
            { start: randomTrip.end, end: randomTrip.start },
            new Date(date),
            randomTrip.distance,
            note
          )
        )
      }
    } else {
      console.log('Dosazeno cilove vzdalenosti, koncime. Celkem mame %i cest', journeys.length)
    }

    console.groupEnd()
  })

  console.log('radime zaznamy chronologicky')
  journeys.sort((a, b) => a.date - b.date)
  // TODO: pridat stav hodometeru??

  console.groupEnd()

  return journeys
}

/**
 * Jsou data v prvnim kroku zadana tak, ze muzeme vygeberovat summary? Potrebujeme vyplnena vsechna pole
 * @param {object} step1 Data z prvniho kroku
 */
export function isStep1Valid (step1 = Step1) {
  return Boolean(step1 && step1.dateFrom && step1.dateTo && step1.startLocation && step1.dateFrom.valueOf() <= step1.dateTo.valueOf() && step1.distance && step1.distance > 0)
}

/* TODO: prazdniny */
/* TODO: Moment, moment-range */
export function getDays (dateFromString, dateToString, holidays) {
  if (!dateFromString || !dateToString || dateFromString === dateToString) {
    console.error('Neplatne parametry pro zjisteni pracovnich dnu')
    return []
  }
  if (dateFromString > dateToString) {
    console.error('Datum zacatku je po datumu konce', dateFromString, dateToString)
    return []
  }

  let arr = []
  const dateFrom = new Date(dateFromString)
  const dateTo = new Date(dateToString)
  const dt = dateFrom
  for (arr = []; dt <= dateTo; dt.setDate(dt.getDate() + 1)) {
    if (dt.getDay() !== 0 && dt.getDay() !== 6) {
      arr.push(new Date(dt))
    }
  }
  return arr
}

export function getNote () {
  return _sample(['Služební cesta', 'Nákup materiálu', 'Schůzka s klientem'])
}
