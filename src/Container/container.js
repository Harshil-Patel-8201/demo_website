import "./container.css";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChartSimple, faComment, faCommentAlt, faComments, faFingerprint, faLayerGroup, faPalette } from "@fortawesome/free-solid-svg-icons";
 
const Container = () => {
  return (
    <div className="containers">
      <div className="box">
        <div className="content">
          <FontAwesomeIcon className="icon" icon={faLayerGroup} />
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet adfkja, asd ad consectetur adipiscing
            elit, sed do eiusmod tempor inci adfkjdad sdv didu
          </p>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <FontAwesomeIcon className="icon" icon={faPalette} />
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet adfkja, asd ad consectetur adipiscing
            elit, sed do eiusmod tempor inci adfkjdad sdv didu
          </p>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <FontAwesomeIcon className="icon" icon={faComments} />
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet adfkja, asd ad consectetur adipiscing
            elit, sed do eiusmod tempor inci adfkjdad sdv didu
          </p>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <FontAwesomeIcon className="icon" icon={faFingerprint} />
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet adfkja, asd ad consectetur adipiscing
            elit, sed do eiusmod tempor inci adfkjdad sdv didu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container;
