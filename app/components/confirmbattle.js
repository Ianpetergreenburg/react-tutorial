var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <div> loading </div>
    : <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h1>Confirm Players</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-6">
          <p className="lead">Player 1</p>
          {puke(props.playerInfo[0])}
        </div>
        <div className="col-sm-6">
          <p className="lead">Player 2</p>
          {puke(props.playerInfo[1])}
        </div>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <button
          className="btn btn-block btn-success"
          type="submit">
            Initiate Battle
        </button>
        <button
          className="btn btn-block btn-success"
          type="submit">
            Reset Battle
        </button>
      </div>
    </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playerInfo: PropTypes.array.isRequired,
  initiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
