import React, { Component, Fragment } from 'react';
import './public/css/main.css';
import './public/css/style.css';

var blackCover = {
  backgroundColor : 'rgba(0,0,0,0.5)',
  zIndex: '1',
  height: '100%',
  width: '100%',
  display: 'table'
}
class intro extends Component {
  render() {
    return (
      <Fragment>

          <div class="main">
            <div style={blackCover}>
              <div id="intro">
                <p class="popout">
                  <span>D</span>
                  <span>E</span>
                  <span>V</span>
                  <span>E</span>
                  <span>L</span>
                  <span>O</span>
                  <span>P</span>
                  <span>E</span>
                  <span>R</span><br/>
                  <span>L</span>
                  <span>E</span>
                  <span class="space">E</span>
                  <span>N</span>
                  <span class="space">A</span>
                  <span>H</span>
                  <span>Y</span>
                  <span>U</span>
                  <span class="space">N</span><br/>
                  <span>P</span>
                  <span>O</span>
                  <span>R</span>
                  <span>T</span>
                  <span>F</span>
                  <span>O</span>
                  <span>L</span>
                  <span>I</span>
                  <span>O</span>                 
                </p>
              </div>
            </div>
          </div>
      </Fragment>
    );
  }
}

export default intro;