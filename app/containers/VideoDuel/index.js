import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { OTPublisher, OTSubscriber, createSession } from 'opentok-react';

import { getOpentokSessionRequest, cleanOpentokSession } from 'pages/VideoDuelPage/actions';
import { makeSelectOpentokData } from 'pages/VideoDuelPage/selectors';

import opentokConfig from './opentokConfig';

export class VideoDuel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      streams: [],
    };
    this.publisherProperties = {
      audioFallbackEnabled: false,
      showControls: false,
    };
  }

  componentWillMount() {
    this.props.getOpentokSessionRequest(this.props.duelId);
  }

  componentWillUnmount() {
    if (this.sessionHelper) {
      this.sessionHelper.disconnect();
    }

    this.props.cleanOpentokSession();
  }


  render() {
    if (this.props.opentok === undefined) {
      return (
        <p>Подключаемся...</p>
      );
    }

    this.sessionHelper = createSession({
      apiKey: opentokConfig.API_KEY,
      sessionId: this.props.opentok.session_id,
      token: this.props.opentok.token,
      onStreamsUpdated: (streams) => {
        this.setState({ streams });
      },
    });

    return (
      <div>
        <button>Пауза</button>

        <OTPublisher session={this.sessionHelper.session} properties={this.publisherProperties} />
        {this.state.streams.map((stream) => {
          return (
            <OTSubscriber
              key={stream.id}
              session={this.sessionHelper.session}
              stream={stream}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  opentok: makeSelectOpentokData(),
});

export default connect(mapStateToProps, { getOpentokSessionRequest, cleanOpentokSession })(VideoDuel);
