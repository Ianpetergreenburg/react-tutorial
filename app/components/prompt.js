var React = require('react')
var transparentBg = require('../styles/index.js').transparentBg
var PropTypes = React.PropTypes
var MainContainer = require('./MainContainer')

var Prompt = React.createClass({
	propTypes: {
		header: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		onSubmitUser: PropTypes.func.isRequired,
		onUpdateUser: PropTypes.func.isRequired
	},
	render: function(){
		return (
			<MainContainer>
				<h1> {this.props.header} </h1>
				<form onSubmit={this.props.onSubmitUser}>
					<div className="form-group">
						<input
							className="form-control"
							placeholder="Github Username"
							onChange={this.props.onUpdateUser}
							value={this.props.username}
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
			</MainContainer>
			)}
	})

module.exports = Prompt
