import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

const swapTeam = {
  blue: 'RED',
  red: 'BLUE'
}

const style = {
  "background-color": "rgba(0,100,40,.5)"
}

const GameOverModal = props => {
  return (
    <Modal
      open={props.openModal}
      onClose={props.closeModal}
      basic
      size='large'
      centered
      style={style}
    >
      <Modal.Content>
        <h2 align='center'>{props.logMessage}</h2>
        <h1 align='center'>
          Team {props.activeTeam.toUpperCase()}, you picked the assassin.
          <br />
          That means you die and {swapTeam[props.activeTeam]} is awarded the win.
          <br />
          Better luck next time!
        </h1>
      </Modal.Content>
      <Modal.Actions>
        <Button color='white' onClick={props.closeModal} inverted>
          <Icon name='user secret' /> View board
        </Button>
        <Button color='white' onClick={props.startNewGame} inverted>
          <Icon name='gamepad' /> Start new game
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default GameOverModal
