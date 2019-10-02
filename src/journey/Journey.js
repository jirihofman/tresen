/**
 * Trida predstavujici jednu cestu (jeden Trip) z mista A do mista B v konkretnim case.
 */
export class Journey {
  /**
     *
     * @param {{}} location
     * @param {{Location}} location.start Zacatek cesty. Aka [A]
     * @param {Location} location.end Konec cesty. Aka [B]
     * @param {*} date
     * @param {*} date.start Datum a cas vyjezdu
     * @param {*} date.end Datum a cas prijezdu
     * @param {int} distance Vzdalenost mezi misty [A] a [B] v km
     * @param {*} note Duvod cesty, poznamka
     * @param {*} mileage
     * @param {*} mileage.start Stav tachometru na zacatku cesty. Tj. v miste [A]
     * @param {*} mileage.end Stav tachometru na konci cesty. Tj. v miste [B]
     */
  constructor (location = {}, date = {}, distance, note, mileage = {}) {
    this.location = location
    this.date = date
    this.distance = distance
    this.note = note
    this.mileage = mileage
  }

  describe () {
    var description = 'The ' + this.type + ' is a ' + this.occasion + 'pastry, has a ' + this.flavor + ' flavor, ' + this.levels + ' layer(s), and costs ' + this.price + '.'
    return description
  }
}

/**
 * Jedno misto/mesto
 */
export class Location {
  /**
     *
     */
  constructor (name, code, zip, insideDistance) {
    this.code = code
    this.insideDistance = this.insideDistance
    this.name = name
    this.zip = zip
  }

  describe () {
    return 'Misto [' + this.code + ']: ' + this.name + ', ' + this.zip + '; Povolena jizda: ' + this.insideDistance
  }
}
/**
 * Definice cesty mezi dvema body
  * @param {{Location}} start Zacatek cesty. Aka [A]
  * @param {Location} end Konec cesty. Aka [B]
 */

export class Trip {
  /**
     *
     */
  constructor (start = Location, end = Location, distance = 0, roundTrip = false) {
    this.start = start
    this.end = end
    this.distance = distance
    this.roundTrip = roundTrip
  }

  describe () {
    return 'Cesta [' + this.start.code + '] - [' + this.end.code + ']'
  }
}

export class Distance {
  constructor ({ from, to, distance }) {
    this.from = from
    this.to = to
    this.distance = distance
  }

  describe () {
    return 'Vzdalenost mezi [' + this.from.name + '] a [' + this.to.name + '] je: ' + this.distance
  }
}
