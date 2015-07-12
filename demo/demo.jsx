"use strict";

var React = require("react");
var Sortable = require("..");

var MyListItem = React.createClass({
	mixins: [Sortable],
	render: function() {
		return <div className="my-list-item">{this.props.text}</div>;
	}
});

var MyList = React.createClass({
	render: function() {
		var items = this.props.items.map(function(item) {
			return <MyListItem key={item} reactKey={item} text={item} onMove={this.props.onMove} />;
		}.bind(this));
		return <div className="my-list">{items}</div>;
	}
});

var MyDragHandleListItem = React.createClass({
	mixins: [Sortable],
	render: function() {
		return (
			<div className="my-list-item">
				<span className="drag-handle" ref="dragHandle">[handle]</span>
				{this.props.text}
			</div>
		);
	}
});

var MyDragHandleList = React.createClass({
	render: function() {
		var items = this.props.items.map(function(item) {
			return <MyDragHandleListItem key={item} reactKey={item} text={item} onMove={this.props.onMove} />;
		}.bind(this));
		return <div className="my-list">{items}</div>;
	}
});

var items = ["First Item", "Second Item", "Third Item", "Fourth Item", "Fifth Item"];

function move(arr, src, dest) {
	var srcIdx = arr.indexOf(src);
	var destIdx = arr.indexOf(dest);
	if (srcIdx === -1 || destIdx === -1 || srcIdx === destIdx) {
		return;
	}
	var item = arr.splice(srcIdx, 1);
	arr.splice(destIdx, 0, item[0]);
	render(); // eslint-disable-line no-use-before-define
}

function render() {
	React.render(<MyList items={items} onMove={move.bind(this, items)} />, document.getElementById("list-demo"));
	React.render(<MyDragHandleList items={items} onMove={move.bind(this, items)} />, document.getElementById("drag-handle-demo"));
}

render();
