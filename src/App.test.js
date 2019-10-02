
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App, { getSummary } from './App'
import { Journey, Location } from './journey/Journey'
import { isStep1Valid } from './logika'

const SPZ_ORG = 'ORG 7798'
const KM_45745 = 45745; const KM_100 = 100; const KM_200 = 200; const KM_300 = 300
const STEP1_VALID = { dateFrom: new Date(), dateTo: new Date(), distance: KM_300, mileageStart: KM_45745, spz: SPZ_ORG, startLocation: new Location('Hradec Kralove', 'HK', '50002') }
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

describe('Step1', () => {
  beforeEach(() => { })
  test.each([
    [{}, false],
    [{ dateFrom: null, dateTo: null, mileageStart: null, spz: null, startLocation: null }, false],
    [{ dateFrom: new Date(), dateTo: null, mileageStart: null, spz: null, startLocation: null }, false],
    [{ dateFrom: null, dateTo: new Date(), mileageStart: null, spz: null, startLocation: null }, false],
    [{ dateFrom: null, dateTo: null, mileageStart: null, spz: SPZ_ORG, startLocation: null }, false],
    [STEP1_VALID, true],
    [{ dateFrom: null, dateTo: null, mileageStart: null, spz: null, startLocation: new Location('Hradec Kralove', 'HK', '50002') }, false]
  ])(
    'validni step1 %s - %s',
    (step1, expected) => {
      expect(isStep1Valid(step1)).toBe(expected)
    }
  )

  test('nevalidni step1 pokud datumy obdobi nejsou po sobe', () => {
    expect(isStep1Valid({ ...STEP1_VALID, dateFrom: new Date('2018-05-05'), dateTo: new Date('2017-05-05') })).toBe(false)
  })
  test('nevalidni step1 pokud zadana nulova vzdalenost za obdobi', () => {
    expect(isStep1Valid({ ...STEP1_VALID, distance: 0 })).toBe(false)
  })
})
describe('Summary', () => {
  const KM_45745 = 45745; const KM_300 = 300
  const STATE_STEP1 = {
    mileageStart: KM_45745
  }
  beforeEach(() => { })
  test('Nulove, pokud neni nic vyplneno', () => {
    const journeys = []
    const expected = {
      distance: 0,
      odometerEnd: 0,
      odometerStart: 0
    }
    expect(getSummary({
      distance: 0,
      odometerEnd: 0,
      odometerStart: 0
    }, journeys)).toStrictEqual(expected)
  })
  test('Prevezme hodnoty hodometru, i kdyz se nikam nejelo', () => {
    const journeys = []
    const expected = {
      distance: 0,
      odometerEnd: KM_45745,
      odometerStart: KM_45745
    }
    expect(getSummary(STATE_STEP1, journeys)).toStrictEqual(expected)
  })
  test('Jedna jizda - 100km', () => {
    const journeys = [new Journey({}, null, KM_100, null, KM_45745)]
    const expected = {
      distance: KM_100,
      odometerEnd: KM_45745 + KM_100,
      odometerStart: KM_45745
    }
    expect(getSummary(STATE_STEP1, journeys)).toStrictEqual(expected)
  })
  test('Dve jizdy - 200km', () => {
    const journeys = [
      new Journey({}, null, KM_100, null, KM_45745),
      new Journey({}, null, KM_100, null, KM_45745 + KM_100)
    ]
    const expected = {
      distance: KM_200,
      odometerEnd: KM_45745 + KM_200,
      odometerStart: KM_45745
    }
    expect(getSummary(STATE_STEP1, journeys)).toStrictEqual(expected)
  })
  test('Tri jizdy - 300km', () => {
    const journeys = [
      new Journey({}, null, KM_100, null, null),
      new Journey({}, null, KM_100, null, null),
      new Journey({}, null, KM_100, null, null)
    ]
    const expected = {
      distance: KM_300,
      odometerEnd: KM_45745 + KM_300,
      odometerStart: KM_45745
    }
    expect(getSummary(STATE_STEP1, journeys)).toStrictEqual(expected)
  })

  describe('Submit', () => {
    const wrapper = shallow(<App />)
    beforeEach(() => {
      wrapper.instance().handleUpdateSummary = jest.fn()
    })
    test('Nezavola update summary, pokud nemam vsechna data v prvnim kroku (step1)', () => {
      const expected = 0
      wrapper.instance().handleSubmit()
      expect(wrapper.instance().handleUpdateSummary.mock.calls.length).toStrictEqual(expected)
    })
    test.skip('TODO', () => {
      const expected = 0
      const wrapper = shallow(<App />)
      wrapper.instance().generateJourneys = jest.fn()
      wrapper.instance().setState({ step1: STEP1_VALID })
      wrapper.instance().handleSubmit()
      expect(wrapper.instance().generateJourneys).toHaveBeenCalledTimes(expected)
    })
  })
})
