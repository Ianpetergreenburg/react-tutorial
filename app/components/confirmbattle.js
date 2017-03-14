var React = require('react');
var Link = require('react-router').Link
var PropTypes = React.PropTypes;
var space = require('../styles/index.js').space;
var UserDetails = require('./UserDetails')
var UserDetailsWrapper = require('./UserDetailsWrapper')
var MainContainer = require('./MainContainer')
var Loading = require('./loading')

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <Loading />
    : <MainContainer>
      <h1>Confirm Players</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Player 1">
          <UserDetails info={props.playersInfo[0]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Player 2'>
          <UserDetails info={props.playersInfo[1]} />
        </ UserDetailsWrapper>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <button
          className="btn btn-lg btn-block btn-success"
          type="submit"
          onClick={props.initiateBattle}
          style={space}>
            Initiate Battle
        </button>
        <Link to="/playerOne">
          <button
            className="btn btn-lg btn-block btn-danger"
            type="submit"
            style={space}>
              Reselect Players
          </button>
        </Link>
      </div>
    </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  initiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
