var React = require('react')
var ConfirmBattle = require('../components/ConfirmBattle')
var githubHelpers = require('../utils/githubHelpers')

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentDidMount: function(){
    query = this.props.location.query
    var players = githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players){
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    }.bind(this))
  },
  getInitialState: function () {
    return {
      playersInfo: [],
      isLoading: true
    }
  },
  handleInitiateBattle: function(e){
    this.context.router.push(
      path: '/results',
      state: playersInfo
      )
  },
  render: function(){
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        initiateBattle={this.handleInitiateBattle}
      />
    )
  }
})

module.exports = ConfirmBattleContainer
