import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Strings } from '../../lang/strings';
import Globals from '../../Globals';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <header className={css(styles.headerContainer)}>
                {Strings.Home}
            </header>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 10,
        borderBottom: `1px solid ${Globals.colors.frameBorders}`,
        color: 'red'
    }
});