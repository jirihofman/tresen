import React from 'react'
import XLSX from 'xlsx'
import { Button, Collapse, Navbar, NavbarBrand, Container, NavItem, NavLink, Nav, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Input, Form, Label, FormFeedback } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

import TripTable from './components/TripTable'
import { Journey, Location, Trip } from './journey/Journey'
import { generateJourneys, isStep1Valid } from './logika'

// TODO moment
// TODO prejmenovat na EasySetup - nastavuje to vsechno
export function handleSetData (year) {
  console.log('Nastavuju rok', year)
  this.setState({
    journeys: [],
    step1: {
      dateFrom: `${year}-01-01`,
      dateTo: `${year}-12-31`,
      distance: 5000,
      mileageStart: 100000,
      spz: 'SPZ0001',
      startLocation: new Location('Hradec Kralove', 'HK', '50002')
    },
    summary: {
      distance: 0,
      odometerEnd: 0,
      odometerStart: 0
    }
  })
}

export class Step1 {
  /** TODO jsdoc */
  constructor (dateFrom, dateTo, distance, mileageStart, spz, startLocation = Location) {
    this.dateFrom = dateFrom
    this.dateTo = dateTo
    this.distance = distance
    this.mileageStart = mileageStart
    this.spz = spz
    this.startLocation = startLocation
  }

  describe () {
    var description = 'STEP1: TODO'
    return description
  }
}

/**
 *
 * @param {{}} step1
 * @param {Journey[]} journeys
 */
export function getSummary (step1 = {}, journeys = []) {
  console.group('Update shrnuti')
  console.log('step1', step1)
  console.log('cesty', journeys)

  /** Celkova vzdalenost vsech jizd dohromady */
  const distance = journeys.reduce((total, journey) => total + journey.distance, 0)

  console.groupEnd()
  return {
    distance: distance,
    odometerStart: Number(step1.mileageStart) || 0,
    odometerEnd: (Number(step1.mileageStart) || 0) + distance
  }
}

export default class LogBookApp extends React.Component {
  constructor (props) {
    super(props)

    // TODO unfake
    const LOCATION_HK = new Location('Předměřice n. Labem', 'PnL', '50302')

    this.handleStep1Change = this.handleStep1Change.bind(this)
    this.handleJourneyChange = this.handleJourneyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSetData = handleSetData.bind(this)
    this.generateJourneys = generateJourneys.bind(this)
    this.handleUpdateSummary = this.handleUpdateSummary.bind(this)
    this.state = {
      collapsed: true,
      /** Jednotlive jizdy za dane obdobi */
      journeys: [

      ],
      /** Seznam vsech mist, kam muzu jezdit. TODO - do zaskrtavaciho seznamu a samostatneho souboru */
      trips: [
        new Trip(
          LOCATION_HK,
          new Location('Praha', 'PRG', '10100'),
          120,
          true
        ),
        new Trip(
          LOCATION_HK,
          new Location('Hradec Králové', 'HK', '50002'),
          9,
          true
        )
      ],
      /** Vychozi hodnoty pro generovani jizd */
      step1: {
        dateFrom: '',
        dateTo: '',
        distance: 0,
        mileageStart: '',
        spz: '',
        startLocation: LOCATION_HK
      },
      /** Shrnuti cest za dane obdobi vypocitane z jednotlivych cest */
      summary: {
        kmTraveled: 0,
        mileageEnd: 0
      }
    }
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  /** Kliknuto na Generovat */
  handleSubmit (event) {
    // overit, ze mam vsechny zadany v prvnim kroku
    if (isStep1Valid(this.state.step1)) {
      // vygenerovat
      const journeys = this.generateJourneys(this.state.step1, this.state.trips)
      this.setState({ journeys })

      // rozhodnout jestli mit Journeys nezavisle na dnech, nebo zanorene ve dnech
      // zobrazit shrnuti
      this.handleUpdateSummary()
    } else {
      console.error('Spatne vyplnene vstupni udaje', this.state.step1)
    }
  }

  handleStep1Change (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      step1: { ...this.state.step1, [name]: value }
    })
  }

  handleUpdateSummary () {
    this.setState({
      summary: getSummary(this.state.step1, this.state.journeys)
    })
    console.log('Nove shrnuti: ', this.state.summary)
  }

  /**
    * Zmena udaju v jedne ceste. Zmeni shrnuti. Nutna kontrola konzistence jizd - navazuji kilometry? Mista?
    * @param {*} event
    */
  handleJourneyChange (event) {
    this.setState({
      // unfake
      journeys: [new Journey({}, null, event.target.value, null, null)]
    })
    // zobrazit shrnuti
    this.handleUpdateSummary()
  }

  /***********/
  /* logika  */
  /***********/

  render () {
    const disabledButtons = !isStep1Valid(this.state.step1)
    return (
      <Container>
        <Navbar color='light' light expand='md'>
          <NavbarBrand><span role='img' aria-label='logbook'>🚗🍒</span></NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='https://github.com/reactstrap/reactstrap'>GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Options</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Row>
          <Col>
            <Form className='hidden-print' inline>
              <Input type='text' name='spz' id='spz' placeholder='SPZ vozidla' valid={this.state.step1.spz} invalid={!this.state.step1.spz} required onChange={this.handleStep1Change} value={this.state.step1.spz} />
              <Input type='number' name='mileageStart' id='mileageStart' placeholder='Kilometry' step={100} onChange={this.handleStep1Change} value={this.state.step1.mileageStart} />
              <Button onClick={() => this.handleSetData(new Date().getFullYear() - 1)} color='primary'>{new Date().getFullYear() - 1}</Button>
              <Button onClick={() => this.handleSetData(new Date().getFullYear())} color='primary'>{new Date().getFullYear()}</Button>
              <Button onClick={() => this.handleSetData(new Date().getFullYear() + 1)} color='primary'>{new Date().getFullYear() + 1}</Button>
              <Button onClick={() => this.handleUpdateSummary(this.state.step1, this.state.journeys)} color='danger'>Update summary</Button>
              <Input type='number' name='distance' id='distance' placeholder='dist' step={10} onChange={this.handleStep1Change} value={this.state.step1.distance} />
            </Form>
            <Form className='hidden-print' inline>
              <FormGroup className='mr-1 er bg-light'>
                <Label for='dateFrom' className='p-3'>Od</Label>
                <Input type='date' name='dateFrom' id='dateFrom' placeholder='Od' value={this.state.step1.dateFrom} onChange={this.handleStep1Change} />
              </FormGroup>
              <FormGroup className='mr-1 rder bg-light'>
                <Label for='dateTo' className='p-3'>Do</Label>
                <Input type='date' name='dateTo' id='dateTo' placeholder='Do' value={this.state.step1.dateTo} onChange={this.handleStep1Change} />
                <FormFeedback invalid={0}>Sweet! that name is available</FormFeedback>
              </FormGroup>
              <Button
                onClick={this.handleSubmit} color='primary' style={{ margin: '0.3em' }}
                disabled={disabledButtons}
              > Generuj
              </Button>
              <Button
                disabled={disabledButtons}
                onClick={() => {
                  /* convert state to workbook */
                  var tbl = document.getElementById('journeys')
                  const wb = XLSX.utils.table_to_book(tbl, { raw: true })
                  /* generate XLSX file and send to client */
                  XLSX.writeFile(wb, 'sheetjs.xlsx')
                }}
              > Export XLS
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <TripTable journeys={this.state.journeys} />
        </Row>
        <style>
          {'@media print {.hidden-print{display: none;}}'}
        </style>
        <Row>
          <span>Summary tTodo</span>
        </Row>

      </Container>
    )
  }
}
