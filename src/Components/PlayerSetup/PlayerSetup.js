import React from 'react';
import Button from '@material-ui/core/Button';
import Background from '../WelcomePage/img/croppedBoard.png';
import PlayerIcon from '../PlayerIcon/PlayerIcon';
import './PlayerSetup.css';
import { RadioGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';

import { connect } from 'react-redux';
import { addPlayer } from '../../actions/index';

function select(dispatch) {
  return {
    addPlayer: player => dispatch(addPlayer(player))
  };
}

const setup = ['Player 1', 'Player 2', '...'];

const styles = {
  mapBackground: {
    width: '100vw',
    height: 'auto',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  playerSetup: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textGrid: {
    backgroundColor: '#000000aa',
    borderRadius: '1em',
    width: '60vw',
    height: '70vh',
    padding: '2%',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '50vh'
  },
  textBox: {
    border: 0,
    width: '30vw',
    height: '5vh',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: '20px',
  },
  avatarSection: {

    width: '50vw',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    marginTop: '2vh',
    alignItems: 'center'

  },
  avatarIcons: {

    width: '50vw',
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '2vh',

  },
  playerAvatar: {
    cursor: 'pointer',
  },
};


class ConnectedPlayerSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      setupLocation: 0,
      playerName: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { playerName } = this.state;
    this.props.addPlayer({ playerName });
    this.setState({ playerName: '' });
  }

  nextStep() {
    this.setState({
      setupLocation: this.state.setupLocation + 1,
    });
  }

  render() {
    const { playerName } = this.state;
    return (
      <div style={{ backgroundColor: 'gray' }}>
        <div style={styles.mapBackground}>
          <div style={styles.playerSetup}>
            <div style={styles.textGrid}>

              <h1>{setup[this.state.setupLocation]}</h1>

              <form onSubmit={this.handleSubmit}>
                <div style={styles.fields}>

                  <label htmlFor="playerName">Player Name</label>
                  <input
                      type="text"
                      id="playerName"
                      value={playerName}
                      onChange={this.handleChange}
                      style={styles.textBox}
                  />


                  <div style={styles.avatarSection}>
                    <h2>Choose an avatar for your player</h2>
                    <div style={styles.avatarIcons}>
                      <PlayerIcon num="0"  />
                      <PlayerIcon num="1"  />
                      <PlayerIcon num="2"  />
                      <PlayerIcon num="3"  />
                      <PlayerIcon num="4"  />
                      <PlayerIcon num="5"  />
                    </div>
                  </div>

                  <div className={'buttonSection'}>
                    <Button type='submit' variant="contained">
                      Next
                    </Button>

                    {/*<Button type='submit' variant="contained" href="/board">*/}
                    {/*  Finish*/}
                    {/*</Button>*/}
                  </div>


                </div>
              </form>
            </div>
            </div>
          </div>
        </div>


    );
  }
}

const PlayerSetup = connect(
    null,
    select
)(ConnectedPlayerSetup);


export default PlayerSetup;
