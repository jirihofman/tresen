import { Journey, Location } from '../Journey';
describe("Zakladni logika", () => {
	const locationA = new Location('Orgrimmar', 'Org', 'WOW01');
	const locationB = new Location('Crossroads', 'Cross', 'WOW07');
	beforeEach(() => {

	});

	test('TODO', () => {
		const journey = new Journey({ start: locationA, end: locationB }, null, 10, 'Lvl up', { start: 10, end: 20 });
		expect(journey).toBe(1);
	});
	test('Generovani vytvori nejake cesty', () => {
		expect(true).toBe(false);
	});
	test('Dve vygenerovane cesty na sebe navazuji', () => {
		expect(true).toBe(false);
	});
	test('Soucet vzdalenosti jednotlivych cest je stejny jako rozdil hodometru na zacatku prvni jizdy a konci posledni jizdy', () => {
		expect(true).toBe(false);
	});
	test('Konec prvni jizdy je pred zacatkem druhe jizdy', () => {
		expect(true).toBe(false);
	});
	test('Misto vyjezdu prvni jizdy je stejne jako misto prijezdu posledni jizdy ve stejny den', () => {
		expect(true).toBe(false);
	});
})