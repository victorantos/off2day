var Hello = React.createClass({
    render: function () {
        return (<div>so it works fne</div>);
    }
});

React.render( <Hello />,
            document.getElementById('example')
          );