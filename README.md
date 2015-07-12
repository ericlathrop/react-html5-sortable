# react-html5-sortable
[React](https://facebook.github.io/react/) mixin for drag-and-drop sorting of items in a container

# [Demo](https://ericlathrop.github.io/react-html5-sortable/)

# Example

```javascript
var Sortable = require("react-html5-sortable");

var MyListItem = React.createClass({
	mixins: [Sortable],
	render: function() {
		return <div>{this.props.text}</div>;
	}
});

var MyList = React.createClass({
	render: function() {
		var items = this.props.items.map(function(item) {
			return <MyListItem key={item} reactKey={item} text={item} onMove={this.props.onMove} />;
		}.bind(this));
		return <div>{items}</div>;
	}
});

var items = ["First Item", "Second Item", "Third Item", "Fourth Item", "Fifth Item"];
function move(src, dest) {
	var srcIdx = items.indexOf(src);
	var destIdx = items.indexOf(dest);
	if (srcIdx === -1 || destIdx === -1 || srcIdx === destIdx) {
		return;
	}
	var item = items.splice(srcIdx, 1);
	items.splice(destIdx, 0, item[0]);
	render();
}

function render() {
	React.render(<MyList items={items} onMove={move.bind(this, items)} />, document.getElementById("list-demo"));
}

render();
```

# Installation

```
npm install --save react-html5-sortable
```

# Code of Conduct
Please note that this project is released with a [Contributor Code of Conduct](https://github.com/ericlathrop/react-html5-sortable/blob/master/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
