import React from 'react';
import Button from '../../ButtonComponent';
import Background from '../WelcomePage/img/croppedBoard.png';
import PlayerIcon from '../PlayerIcon/PlayerIcon';

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
    marginTop: '2vh',
  },
  button: {
    width: '10vw',
    text: '10px',
  },
};


const setup = [
  "Welcome to the game of rent! You will now take on the role of a person in [CITY] searching for affordable housing. It is your job to find the best housing for you and your family considering all your circumstances. Let's find out more about your character. Click on the yellow card to discover your occupation!",
  "Now that you have your occupation, it's time to determine your household! Click on the die to roll for the number of family members.",
  "That means you have X other family members in your household. Draw a household card and an occupation card if that family members is of working age.",
  "Everyone has unforseen circumstances arise in their lives. Draw a life card for each adult in your household including yourself!",
  "Your household is finally set! Now click on the calculator icon to find out your monthly housing allowance. This is how much you can afford to spending on housing each month.",
];



class PlayerSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setupLocation: 0,
    };
  }

  nextStep() {
    this.setState({
      setupLocation: this.state.setupLocation + 1,
    });
  }

  render() {
    return (

      <div
        style={{ backgroundColor: 'gray' }}
      >
        <p>{setup[this.state.setupLocation].replace("[CITY]", this.props.city || "Nashville")}</p>
      <div style={styles.mapBackground}>
        <div style={styles.playerSetup}>
          <h1>{setup[this.state.setupLocation]}</h1>
          <div style={styles.textGrid}>

            <div style={styles.fields}>
              <h2>Enter a name for your player</h2>
              <input type="text" style={styles.textBox} />
            </div>

            <div style={styles.fields}>
              <h2>Choose an avatar for your player</h2>
              <div style={styles.avatarSection}>
                <PlayerIcon num="0" style={styles.playerAvatar} />
                <PlayerIcon num="1" style={styles.playerAvatar} />
                <PlayerIcon num="2" style={styles.playerAvatar} />
                <PlayerIcon num="3" style={styles.playerAvatar} />
                <PlayerIcon num="4" style={styles.playerAvatar} />
                <PlayerIcon num="5" style={styles.playerAvatar} />
              </div>


            </div>

            <Button style={styles.button}/>
          </div>


        </div>

      </div>
    );
  }
}

export default PlayerSetup;
