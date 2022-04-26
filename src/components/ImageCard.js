import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  /*to early for accesing height
  componentDidMount(){
    console.log(this.imageRef.current.clientHeight);
  }*/

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans); //whenever image will get load properly
  }

  //this'value is not bounded in normal function so arrow function is used
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
