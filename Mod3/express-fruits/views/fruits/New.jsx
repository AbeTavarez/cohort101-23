const React = require('react');



function New() {
    return (
        <main>
            <h1>New Page</h1>

            <form action="/fruits" method="POST">
                Name: <input type="text" name="name" required/>
                <br />

                Color: <input type="text" name="color" required/>
                <br />

                Is ready to eat: <input type="checkbox" name="readyToEat"/>
                <br />

                <input type="submit" value="Create Fruit"/>
            </form>
        </main>
    );
}

module.exports = New;