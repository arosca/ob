import React from 'react';
import './header.scss';

module.exports = class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <img src="https://github-jobs.s3.amazonaws.com/277fc170-b29f-11e2-8ed8-8c6282d7f182.jpg" />
                    Bucharest
                </div>
            </header>
        );
    }
}