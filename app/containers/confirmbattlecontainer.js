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
       console.log('setting state')
      this.setState({
        isLoading: false,
        playerInfo: [players[0], players[1]]
      })
      console.log('state set', this.state)
    }.bind(this))
  },
  getInitialState: function () {
    return {
      playerInfo: [],
      isLoading: true
    }
  },
  handleInitiateBattle: function(e){
    this.context.router.push(
      path: '/results',
      state: playerInfo
      )
  },
  render: function(){
    return(
      <ConfirmBattle 
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo}
        initiateBattle={this.handleInitiateBattle}
      />
    )
  }
})

module.exports = ConfirmBattleContainer