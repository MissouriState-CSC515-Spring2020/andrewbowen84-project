import React, {Component} from 'react';

const API = 'AIzaSyCpTW0vlhmoDco23NSKchig-odJgKkJHUc';
const result = 5;
const channelID = 'UCItHdUEqlpfvDlcCeyZwH6w'//MotW Channel Id
var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`


class Youtube extends Component {
     constructor(props){
        super(props);
        this.state = {
          resultyt: []
        };
        this.clicked = this.clicked.bind(this);
      }
    clicked(){
      fetch(finalURL)
          .then((res) => res.json())
          .then((resJson) => {
            const resultyt = resJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
            this.setState({resultyt});
          })
          .catch((err) => {
            console.error(err);
          });
    }
    render(){
        console.log(this.state.resultyt);
    
        return(
          <div>
            <button onClick={this.clicked}>Get youtube videos</button>
              {
                this.state.resultyt.map((link, i) => {
                  console.log(link);
                  var frame = <div key={i} className="youtube"><iframe title="test" width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
                  return frame;
                })
              }
              {this.frame}
    
    
        </div>
        );
      }
    }
    
    export default Youtube;
    /**
     * <div className="Youtube">
            <iframe title="test" width="560" height="315" 
              src="https://www.youtube.com/embed/1KroVEOqrBU" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
              </iframe>
          </div>
     */