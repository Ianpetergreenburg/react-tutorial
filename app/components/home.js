var React = require('react')
var transparentBg = require('../styles/index.js').transparentBg
var ReactRouter = require('react-router')
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function() {
		return (
			<div className='jumbotron col-sm-12 text-center' style={transparentBg}>
				<h1> Github Battle </h1>
				<p className='lead'> Some motto </p>
				<Link to='/playerOne'>
					<button className='btn btn-lg btn-success'>Get Started</button>
				</Link>
			</div>
			)
	}
})

module.exports = Home;