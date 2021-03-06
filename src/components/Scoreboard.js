import React from 'react'
import { Table } from 'semantic-ui-react'

const Scoreboard = props => (
  <Table fixed celled basic='very' textAlign='center' verticalAlign='middle'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={1} />
        <Table.HeaderCell width={1}>Score</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <img
            src={require('../img/team_red.jpg')}
            width='33px'
            height='33px'
            alt='Red team icon'
          />
        </Table.Cell>
        <Table.Cell>
          <h2>{props.scores.red}</h2>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <img
            src={require('../img/team_blue.jpg')}
            width='33px'
            height='33px'
            alt='Blue team icon'
          />
        </Table.Cell>
        <Table.Cell>
          <h2>{props.scores.blue}</h2>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default Scoreboard
