import React, { Component } from 'react'

class SumBox extends Component {
  constructor (props) {
    super(props)

    // this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    }
  }

  renderTableRow (interval) {
    if (!interval) {
      return null
    } else {
      return <div>{interval.monthStart}. - {interval.monthEnd}. {i18n.t('calculation-month')} = {interval.payment} {i18n.t('czk')}</div>
    }
  }

  render () {
    console.log('SumBox props:', this.props)

    const intervals = this.props.intervals

    if (!intervals || intervals.length === 0) {
      return null
    }
    return (
      <Grid fluid>
        <h1>{i18n.t('calculation-results')}</h1>
        {intervals.map((interval, idx) => {
          return <Row key={idx}>
            {this.renderTableRow(interval)}
                 </Row>
        })}
      </Grid>
    )
  }
}

export default SumBox
