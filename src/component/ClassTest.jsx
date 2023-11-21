
import React from "react";

import { useParams } from 'react-router-dom';




export default class Car extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
      return <h2>Hi, I am a {this.props.name}</h2>;
    }
  }

  class area{
      constructor(lenght ,breadth){
          this.lenght=lenght
          this.breadth = breadth
      }

      areas (){
          return (this.length * this.breadth)
      }
  }

  const rectangleArea = new area(5,10)

  console.log(rectangleArea.areas)
  

  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
    *getSides() {
      yield this.height;
      yield this.width;
      yield this.height;
      yield this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100
  console.log([...square.getSides()]); // [10, 10, 10, 10]