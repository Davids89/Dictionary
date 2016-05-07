var React = require('react-native');

var styles = React.StyleSheet.create({

    // For the container View
    parent: {
        padding: 16
    },

    // For the Text label
    englishLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },

    // For the Text meaning
    englishWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic'
    }
});

var Dictionary = React.createClass({

    render : function() {
        var layout =
            <React.View style={ styles.parent }>

                <React.Text>
                    Escribe algo en español:
                </React.Text>

                <React.TextInput />

                <React.Text style={ styles.englishLabel }>
                    La traducción inglesa es:
                </React.Text>

                <React.Text style={ styles.englishWord }>
                </React.Text>

            </React.View>;

        return layout;
    }

});

React.AppRegistry.registerComponent('Dictionary', () => Dictionary);
