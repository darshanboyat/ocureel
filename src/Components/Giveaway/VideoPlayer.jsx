import React from 'react';
import Vimeo from '@vimeo/player';
import "./style.css"

class VimeoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.vimeoPlayer = React.createRef();
    this.state = {
      playing: false,
    }
  }

  componentDidMount() {
    const options = {
      id: this.props.videoId,
      width: 500,
      height: 540,
      title: false,
      badge: false,
      autoplay: false,
      portrait: true,
    };
    this.player = new Vimeo(this.vimeoPlayer.current, options);
  }

  render() {
    return (
      <div className='relative'>
        <div ref={this.vimeoPlayer} className="giveaway__player" onClick={()=>{
            this.setState({playing: true})
        }}/>
        <div className={`giveaway__new__cards ${this.props.place%2 ? "position__even" : "position__odd" }`}>{this.props.cardTitle}</div>
      </div>
    );
  }
}

export default VimeoPlayer;
