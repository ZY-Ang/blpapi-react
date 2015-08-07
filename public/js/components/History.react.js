var React = require('react');
var HistoryEvent = require('./HistoryEvent.react');

var History = React.createClass({
	getInitialState: function(){
		return{
			historyDisplay: {display:'none'}
		};
	},
	toggleHistory: function() {
		if(this.state.historyDisplay.display === 'none'){
			this.setState({historyDisplay: {display:'block'}});
		}else{
			this.setState({historyDisplay: {display:'none'}});
		}
	},
	render: function(){
		var response = this.props.response;
		var button;
		var events = [];
		if(response[0]){
			button = <a id="historyButton" onClick={this.toggleHistory}>History</a>;
			response.forEach(function (res, index){
				events.push(<HistoryEvent response={res} key={res[1].toUTCString()} />)
				if(index != response.length - 1){
					events.push(<hr key={index} />)
				}
			})			
		}
		return(
			<div>
				{button}
				<p style={this.state.historyDisplay} id="history">{events}</p>
			</div>
		);
	}
});

module.exports = History;