/**
 * Trida predstavujici jednu cestu z mista A do mista B
 */
export class Journey {
	/**
	 * 
	 * @param {{}} location 
	 * @param {{Location}} location.start Zacatek cesty. Aka [A]
	 * @param {Location} location.end Konec cesty. Aka [B]
	 * @param {*} date 
	 * @param {*} date.start Datum a cas vyjezdu 
	 * @param {*} date.start Datum a cas prijezdu
	 * @param {int} distance Vzdalenost mezi misty [A] a [B] v km
	 * @param {*} note Duvod cesty, poznamka
	 * @param {*} mileage 
	 * @param {*} mileage.start Stav tachometru na zacatku cesty. Tj. v miste [A]
	 * @param {*} mileage.end Stav tachometru na konci cesty. Tj. v miste [B]
	 */
	constructor(location = {}, date = {}, distance, note, mileage = {}) {
		this.location = location;
		this.date = date;
		this.distance = distance;
		this.note = note;
		this.mileage = mileage;
	}
	describe() {
		var description = "The " + this.type + " is a " + this.occasion + "pastry, has a " + this.flavor + " flavor, " + this.levels + " layer(s), and costs " + this.price + ".";
		return description;
	}
}

/**
 * Jedno misto/mesto
 */
export class Location {
	/**
	 * 
	 */
	constructor(name, code, zip) {
		this.name = name;
		this.code = code;
		this.zip = zip;
	}
	describe() {
		return 'Misto [' + this.code + ']: ' + this.name + ', ' + this.zip;
	}
}