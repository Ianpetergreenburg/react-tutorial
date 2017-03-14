var axios = require('axios')

function getUserInfo(username){
	return axios.get('https://api.github.com/users/' + username)
}

function getRepos(username){
	return axios.get('https://api.github.com/users/' + username + '/repos' + '?per_page=100')
}

function getTotalStars(repos){
	return repos.data.reduce(function(prev,current){
		return prev + current.stargazers_count
	}, 0)
}

function getPlayerData(player){
	return getRepos(player.login)
		.then(getTotalStars)
		.then(function(totalStars) {
			return {
				followers: player.followers,
				totalStars: totalStars
			}
		})
}

function calculateScores(players){
	return [
		players[0].followers * 3 + players[0].totalStars,
		players[1].followers * 3 + players[1].totalStars,
	]
}

var helpers = {
	getPlayersInfo: function(players){
		return axios.all(players.map(function(username){
			return getUserInfo(username)
		})).then(function(info){
			return info.map(function(user){
				return user.data
			})
		})

	},
	battle: function(players){
		var playerOne = getPlayerData(players[0])
		var playerTwo = getPlayerData(players[1])

		return axios.all([playerOne, playerTwo])
			.then(calculateScores)
			.catch(function(err){console.log('err in getPlayersInfo:', err)})
	}
}

module.exports = helpers
