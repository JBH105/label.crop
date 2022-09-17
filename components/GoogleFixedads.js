import React, { Component } from 'react';

class GoogleFixedads extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
                <ins className="adsbygoogle"
                    style={this.props.style}
                    data-ad-client="ca-pub-2451180821646832"
                >
                </ins>
        );
    }
}

export default GoogleFixedads;