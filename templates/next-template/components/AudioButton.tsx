// AudioComponent.tsx
"use client"

import React, { Component } from "react";
import "@/styles/styles.scss";

interface AudioButtonProps {
  url: string;
}

interface AudioButtonState {
  playing: boolean;
}

class AudioButton extends Component<AudioButtonProps, AudioButtonState> {
  audioEl: HTMLAudioElement | null = null;

  constructor(props: AudioButtonProps) {
    super(props);
    this.state = {
      playing: false
    };
  }

  componentDidMount() {
    if (this.audioEl) {
      this.audioEl.addEventListener("play", this.onPlay);
      this.audioEl.addEventListener("pause", this.onPause);
      this.audioEl.addEventListener("ended", this.onEnded);
    }
  }

  componentWillUnmount() {
    if (this.audioEl) {
      this.audioEl.removeEventListener("play", this.onPlay);
      this.audioEl.removeEventListener("pause", this.onPause);
      this.audioEl.removeEventListener("ended", this.onEnded);
    }
  }

  onPlay = () => {
    this.setState({ playing: true });
  };

  onPause = () => {
    this.setState({ playing: false });
  };

  onEnded = () => {
    this.setState({ playing: false });
  };

  togglePlay = () => {
    if (this.audioEl) {
      if (this.state.playing) {
        this.audioEl.pause();
      } else {
        this.audioEl.play();
      }
    }
  };

  render() {
    const { playing } = this.state;
    const notSupportedMsg = "Your browser does not support the audio element.";

    return (
      <>
        <button onClick={this.togglePlay}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <audio
          src={this.props.url}
          ref={(ref) => {
            this.audioEl = ref;
          }}
        >
          {notSupportedMsg}
        </audio>
      </>
    );
  }
}

export default AudioButton;
