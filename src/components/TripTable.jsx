import React, { Component } from 'react';
import { Table } from 'reactstrap';

class TripTable extends Component {

	renderTableRow() {
		return <tbody>
			<tr>
				<th scope="row">1</th>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
			</tr>
			<tr>
				<th scope="row">2</th>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
			</tr>
			<tr>
				<th scope="row">3</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
			</tr>
		</tbody>;
	}

	render() {
		const intervals = this.props.intervals;

		return (
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
					</tr>
				</thead>
				{this.renderTableRow()}
			</Table>
		);
	}
}

export default TripTable;
