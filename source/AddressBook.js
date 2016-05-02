var React = require('react');
var Person = require ('./person.jsx');
var AddressForm = require ("./AddressForm.jsx")

module.exports = React.createClass({
	getInitialState: function (){
		return {
			people: []
		};
	},
  render: function(){
	  var peopleHTML = [ ];
	  for (var i=0; i < this.state.people.length; i++){
		  peopleHTML.push(<Person
		  name = {this.state.people.length[i].name}
		  number = {this.state.people.length[i].number}
		  />);
	  }
    return (
      <div>
       <AddressForm/>  {peopleHTML}
      </div>
    )
  }
});