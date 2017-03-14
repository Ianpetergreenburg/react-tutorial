var React = require('react')
var Results = require('../components/results')
var githubHelpers = require('../utils/githubHelpers')

var ResultsContainer = React.createClass({
  getInitialState: function(){
    return {
        isLoading: true,
        playersInfo: [],
        scores: []
      }
  },
  componentDidMount: function(){
    githubHelpers.battle(this.props.location.state)
      .then(function(scores){
        this.setState({
          scores: scores,
          isLoading: false
        })
      }.bind(this))
  },
  render: function(){
    return(
        <div>
          <Results
            isLoading={this.state.isLoading}
            scores={this.state.scores}
            playersInfo={this.props.location.state}/>
        </div>
      )
  }
})

module.exports = ResultsContainer
