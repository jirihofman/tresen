import React, { Component } from 'react'
import { Table } from 'reactstrap'

class TripTable extends Component {
  renderTableRow (journeys) {
    console.log('renderuju radky:', journeys)
    return journeys.map((journey, i) => {
      return (
        <tr key={`j-${i}`}>
          <td>{journey.date.toLocaleDateString()}</td>
          <td>{journey.location.start.name}</td>
          <td>{journey.location.end.name}</td>
          <td>{journey.distance}</td>
          <td>{journey.note}</td>
        </tr>
      )
    })
  }

  render () {
    return (
      <Table id='journeys'>
        <thead>
          <tr>
            <th>Datum</th>
            <th>Odkud</th>
            <th>Kam</th>
            <th>Vzdálenost v km</th>
            <th>Důvod cesty</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTableRow(this.props.journeys)}
        </tbody>
      </Table>
    )
  }
}

// TODO PropTypes

export default TripTable
