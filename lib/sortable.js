"use strict";

module.exports = {
	componentDidMount: function() {
		var handle = this.getDragHandle();
		handle.draggable = true;
		handle.addEventListener("dragstart", this.dragStart);

		var elem = this.getDOMNode();
		elem.addEventListener("dragover", this.dragOver);
		elem.addEventListener("drop", this.drop);
	},
	componentWillUnmount: function() {
		var handle = this.getDragHandle();
		handle.removeEventListener("dragstart", this.dragStart);

		var elem = this.getDOMNode();
		elem.removeEventListener("dragover", this.dragOver);
		elem.removeEventListener("drop", this.drop);
	},
	dragStart: function(e) {
		e.dataTransfer.addElement(this.getDOMNode());
		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.setData("text", this.props.reactKey);
	},
	dragOver: function(e) {
		e.preventDefault();
		e.stopPropagation();
		var src = e.dataTransfer.getData("text");
		this.props.onMove(src, this.props.reactKey.toString());
	},
	drop: function(e) {
		e.preventDefault();
	},
	getDragHandle: function() {
		return (this.refs.dragHandle || this).getDOMNode();
	}
};
