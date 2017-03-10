var React = require('react')
var transparentBg = require('../styles/index.js').transparentBg

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
	getInitialState: function () {
		return {
		  username: ''
		}
	},
	onUpdateUser: function(e) {
		this.setState({
			username: e.target.value
		})
	},
	onSubmitUser: function(e){
		e.preventDefault()
		var username = this.state.username
		this.setState({
			username: ''
		})

		if(this.props.routeParams.playerOne){
			this.context.route.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: username
				}
			})
		} else {
			this.context.router.push('/playerTwo/' + username)
		}
	},
	render: function(){
		return(
			<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
				<h1> {this.props.route.header} </h1>
				<form onSubmit={this.onSubmitUser}>
					<div className="form-group">
						<input
							className="form-control"
							placeholder="Github Username"
							onChange={this.onUpdateUser}
							value={this.state.username}
							type="text" />
					</div>
					<div className="form-group col-sm-4 col-sm-offset-4">
						<button
							className="btn btn-block btn-success"
							type="submit">
							Continue
						</button>
					</div>
				</form>
			</div>

		)
	}
})

module.exports = PromptContainer