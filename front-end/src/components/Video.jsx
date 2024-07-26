import ReactPlayer from "react-player";
import '../styles/Video.css';
import { Link } from "react-router-dom";

const Video = ({url,siguiente,anterior,a,quizz})=>{
  return(
      <div className="video-container">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={url}   
            controls  
            width='100%'
            height='100%' 
            playing="true"

          />
        </div> 
        <div className="btnVideo">
          <Link to={a} className="btn btn-anterior" onClick={anterior} >{"< Anterior"}</Link>
          <Link to={a} className="btn btn-siguiente" onClick={siguiente}>{"Siguiente >"}</Link>
        </div>
      </div>
  );
};

export default Video;