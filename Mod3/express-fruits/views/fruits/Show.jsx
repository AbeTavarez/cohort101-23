const React = require('react');

function Show(props) {
    const {fruit} = props;

    return (
        <main>
            <h1>Show Page</h1>

            The {fruit.name} is {fruit.color}
            {fruit.readyToEat ? ' Its ready to eat!' : ' It is not ready to eat... Cant touch this'}
        </main>
    );
}


module.exports = Show;
