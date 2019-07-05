import React from 'react';
import ReactDOM from 'react-dom';
import App, { getSummary } from './App';
import { Journey } from './journey/Journey';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe.only("Summary", () => {
    const KM_45745 = 45745, KM_100 = 100, KM_200 = 200, KM_300 = 300;
    const STATE_STEP1 = {
        mileageStart: KM_45745
    }
    beforeEach(() => { });
    test('Nulove, pokud neni nic vyplneno', () => {
        const journeys = [];
        const expected = {
            distance: 0,
            odometerEnd: 0,
            odometerStart: 0
        };
        expect(getSummary({
            distance: 0,
            odometerEnd: 0,
            odometerStart: 0
        }, journeys)).toStrictEqual(expected);
    });
    test('Prevezme hodnoty hodometru, i kdyz se nikam nejelo', () => {
        const journeys = [];
        const expected = {
            distance: 0,
            odometerEnd: KM_45745,
            odometerStart: KM_45745
        };
        expect(getSummary(STATE_STEP1, journeys)).toStrictEqual(expected);
    });
    test('Jedna jizda - 100km', () => {
        const journeys = [new Journey({}, null, KM_100, null, KM_45745)];
        const expected = {
            distance: KM_100,
            odometerEnd: KM_45745 + KM_100,
            odometerStart: KM_45745
        };
        expect(getSummary(STATE_STEP1, journeys)).toStrictEqual(expected);
    });
    test('Dve jizdy - 200km', () => {
        const journeys = [
            new Journey({}, null, KM_100, null, KM_45745),
            new Journey({}, null, KM_100, null, KM_45745+KM_100)
        ];
        const expected = {
            distance: KM_200,
            odometerEnd: KM_45745 + KM_200,
            odometerStart: KM_45745
        };
        expect(getSummary(STATE_STEP1, journeys)).toStrictEqual(expected);
    });
    test('Tri jizdy - 300km', () => {
        const journeys = [
            new Journey({}, null, KM_100, null, null),
            new Journey({}, null, KM_100, null, null),
            new Journey({}, null, KM_100, null, null)
        ];
        const expected = {
            distance: KM_300,
            odometerEnd: KM_45745 + KM_300,
            odometerStart: KM_45745
        };
        expect(getSummary(STATE_STEP1, journeys)).toStrictEqual(expected);
    });

});

