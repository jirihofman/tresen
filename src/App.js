import React from 'react';
import { Button, NavbarToggler, Collapse, Navbar, NavbarBrand, Container, NavItem, NavLink, Nav, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Input, Form, Label, FormFeedback, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import TripTable from './components/TripTable';
import { Journey } from './journey/Journey';

export function setMonth(index) {
	console.log('Nastavuju mesic', index);
	this.setState({
		journeys: [],
		step1: {
			dateFrom: '2019-05-01',
			dateTo: '2019-05-31'
		},
		summary: {
			distance: 0,
			odometerEnd: 0,
			odometerStart: 0
		}
	});
}

/**
 * 
 * @param {{}} step1 
 * @param {Journey[]} journeys
 */
export function getSummary(step1 = {}, journeys = []) {
	console.group('Update shrnuti');
	console.log('step1', step1);
	console.log('cesty', journeys);

	/** Celkova vzdalenost vsech jizd dohromady */
	const distance = journeys.reduce((total, journey) => total + journey.distance, 0)

	console.groupEnd();
	return {
		distance: distance,
		odometerStart: step1.mileageStart || 0,
		odometerEnd: (step1.mileageStart || 0) + distance
	}
}

export default class LogBookApp extends React.Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.handleStep1Change = this.handleStep1Change.bind(this);
		this.handleJourneyChange = this.handleJourneyChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.setMonth = setMonth.bind(this);
		this.handleUpdateSummary = this.handleUpdateSummary.bind(this);
		this.state = {
			collapsed: true,
			/** Jednotlive jizdy za dane obdobi */
			journeys: [
				// unfake
				new Journey(null, null, 33, null, null)
			],
			/** Vychozi hodnoty pro generovani jizd */
			step1: {
				dateFrom: '',
				dateTo: '',
				mileageStart: '',
				spz: ''
			},
			/** Shrnuti cest za dane obdobi vypocitane z jednotlivych cest */
			summary: {
				kmTraveled: 0,
				mileageEnd: 0
			}
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	handleSubmit(event) {
		console.log('Prepocitavam ...', arguments);
		// overit, ze mam vsechny zadany v prvnim kroku

		// vygenerovat

		// zobrazit shrnuti
		this.handleUpdateSummary();
	}

	handleStep1Change(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			step1: { [name]: value }
		});
	}

	handleUpdateSummary() {
		this.setState({
			summary: getSummary(this.state.step1, this.state.journeys)
		});
		console.log('Nove shrnuti: ', this.state.summary);
		
	}

	/**
	 * Zmena udaju v jedne ceste. Zmeni shrnuti. Nutna kontrola konzistence jizd - navazuji kilometry? Mista?
	 * @param {*} event 
	 */
	handleJourneyChange(event) {
		this.setState({
			// unfake
			journeys: [new Journey({}, null, event.target.value, null, null)]
		});
		// zobrazit shrnuti
		this.handleUpdateSummary();
	}

	/***********/
	/* logika  */
	/***********/

	render() {
		return (
			<Container>
				<Navbar color="light" light expand="md">
					<NavbarBrand><span role='img' aria-label='logbook'>🚗🍒</span></NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
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
							<Input type="text" name="spz" id="spz" placeholder="SPZ vozidla" required onChange={this.handleStep1Change} value={this.state.step1.spz} />
							<Input type="number" name="mileageStart" id="mileageStart" placeholder="Kilometry" step={100} onChange={this.handleStep1Change} value={this.state.step1.mileageStart} />
							<Button onClick={this.setMonth} color="primary">{'Kveten'}</Button>
							<Button onClick={() => this.handleUpdateSummary(this.state.step1, this.state.journeys)} color="danger">{'Update summary'}</Button>
							<Input type="number" name="distance" id="distance-fake" placeholder="dist-fake" step={10} onChange={this.handleJourneyChange} value={this.state.journeys[0] && this.state.journeys[0].distance} />
						</Form>
						<Form className='hidden-print' inline>
							<FormGroup className='mr-1 er bg-light'>
								<Label for="dateFrom" className='p-3' >Od</Label>
								<Input type="date" name="dateFrom" id="dateFrom" placeholder="Od" value={this.state.step1.dateFrom} onChange={this.handleStep1Change} />
							</FormGroup>
							<FormGroup className='mr-1 rder bg-light'>
								<Label for="dateTo" className='p-3' >Do</Label>
								<Input type="date" name="dateTo" id="dateTo" placeholder="Do" value={this.state.step1.dateTo} onChange={this.handleStep1Change} />
								<FormFeedback invalid={0}>Sweet! that name is available</FormFeedback>
							</FormGroup>
							<FormGroup>
								<Label for="exampleEmail">Valid input</Label>
								<Input invalid={true} />
								<FormFeedback invalid={true}>Sweet! that name is available</FormFeedback>
								<FormText>Example help text that remains unchanged.</FormText>
							</FormGroup>
						</Form>
					</Col>
				</Row>
				<Row>
					<TripTable />
				</Row>
				<Row>
					<Button onClick={this.handleSubmit} color="primary" style={{ 'margin': '0.3em' }}
						//disabled={this.isCalcDisabled()} 
						title={'asdasdasda'}>{'GOOOO'}</Button>
				</Row>

			</Container>
		);
	}
}
