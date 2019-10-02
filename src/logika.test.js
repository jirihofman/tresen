import { Location, Trip } from './journey/Journey'
import { generateJourneys, isStep1Valid, getDays } from './logika'

const MAY_THE_FOURTH = '2018-05-04'
const MAY_B_DAY = '2018-05-17'
describe('Generovani cest', () => {
  const KM_45745 = 45745; const KM_300 = 300
  const SPZ_ORG = 'ORG 7798'
  const STEP1_VALID = {
    dateFrom: MAY_THE_FOURTH,
    dateTo: MAY_B_DAY,
    distance: KM_300,
    mileageStart: KM_45745,
    spz: SPZ_ORG,
    startLocation: new Location('Hradec Kralove', 'HK', '50002')
  }
  const TRIPS = [
    new Trip(
      new Location('Hradec Kralove', 'HK', '50002'),
      new Location('Pardubice', 'PCE', '53002'),
      20,
      true
    ),
    new Trip(
      new Location('Hradec Kralove', 'HK', '50002'),
      new Location('Skalička', 'Skalicka', '50303'),
      13,
      true
    )
  ]
  let journeys
  beforeEach(() => {
    journeys = generateJourneys(STEP1_VALID, TRIPS)
  })
  test.each([
    [{ dateFrom: MAY_THE_FOURTH, dateTo: MAY_B_DAY, mileageStart: null, spz: null, startLocation: new Location('Hradec Kralove', 'HK', '50002') }, false],
    [{ dateFrom: MAY_THE_FOURTH, dateTo: MAY_B_DAY, mileageStart: null, spz: null, startLocation: null }, false]
  ])(
    'validni step1 %s - %s',
    (step1, expected) => {
      expect(isStep1Valid(step1)).toBe(expected)
    }
  )

  test('Zadne cesty pokud nejsou vstupni parametry', () => {
    expect(generateJourneys()).toStrictEqual([])
  })
  test('Generovani vytvori aspon 2 cesty', () => {
    expect(journeys.length).toBeGreaterThanOrEqual(2)
  })
  test('Dve cesty, pokud je celkova vzdalenost prilis mala', () => {
    const journeys = generateJourneys({ ...STEP1_VALID, distance: 3 }, TRIPS)
    expect(journeys).toHaveLength(2)
  })
  test('Dve vygenerovane cesty na sebe navazuji', () => {
    expect(journeys[0].location.end).toBe(journeys[1].location.start)
  })
  test('Soucet vzdalenosti jednotlivych cest je stejny nebo vyssi jako rozdil hodometru na zacatku prvni jizdy a konci posledni jizdy', () => {
    const result = journeys.reduce((total, journey) => total + journey.distance, 0)
    expect(result).toBeGreaterThan(STEP1_VALID.distance)
  })
})

describe('Generovani pracovnich dnu', () => {
  test('empty', () => {
    expect(getDays()).toStrictEqual([])
    expect(getDays(null, null)).toStrictEqual([])
    const sameDay = '2019-10-01'
    expect(getDays(sameDay, sameDay)).toStrictEqual([])
  })
  test('4 dny v 1 tydnu', () => {
    expect(getDays('2019-10-01', '2019-10-06')).toHaveLength(4)
  })
  test('May days', () => {
    expect(getDays(MAY_THE_FOURTH, MAY_B_DAY)).toHaveLength(10)
  })
})
