import React, { Component } from "react";
import Photo from "./Photo";

class Photowall extends Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((posts, index) => (//will display the photos in the Main.js
          <Photo key={index}post={posts} />
        ))}
      </div>
    );
  }
}

export default Photowall;
