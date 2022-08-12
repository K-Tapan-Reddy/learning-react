import React, { Component } from "react";
import Person from "../Person/Person";
import "../Person/Person.css";
import propTypes from "prop-types";

class Practise extends Component {
  constructor(props) {
    super(props);
    console.log("[Practise.js] Inside constructor", props);
  }
  componentWillMount() {
    console.log("[Practise.js] inside componentWillMount");
  }
  componentDidMount() {
    console.log("[Practise.js] inside componentDidMount");
  }
  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Pactise.js] inside componentWillReceiveProps",
      nextProps
    );
  }
  state = {
    students: [
      { id: "iuhdf", name: "abc", age: 21 },
      { id: "gdyua", name: "def", age: 22 },
      { id: "gdjsu", name: "xyz", age: 23 },
    ],
    showStudents: true,
  };

  switchNameHandler = (newName) => {
    this.setState({
      students: [
        { name: "abc", age: 21 },
        { name: newName, age: 22 },
        { name: "xyz", age: 23 },
      ],
    });
  };

  nameChangeHandler = (event, id) => {
    const studentIndex = this.state.students.findIndex((student) => {
      return student.id === id;
    });
    const student = {
      ...this.state.students[studentIndex],
    };
    student.name = event.target.value;
    const students = [...this.state.students];
    students[studentIndex] = student;

    this.setState({ students: [...students] });
  };

  toggleStudentHandler = () => {
    const doesShow = this.state.showStudents;
    this.setState({ showStudents: !doesShow });
  };

  deletePersonHandler = (studentIndex) => {
    const students = this.state.students;
    students.splice(studentIndex, 1);
    this.setState({ students: students });
  };

  render() {
    console.log("[Practise.js] inside render");
    let students = null;

    if (this.state.showStudents) {
      students = (
        <div>
          {this.state.students.map((student, index) => {
            return (
              <Person
                Name={student.name}
                Age={student.age}
                key={student.id}
                clicked={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangeHandler(event, student.id)}
              />
            );
          })}
        </div>
      );
    }

    const assignedclasses = [];
    if (this.state.students.length <= 2) {
      assignedclasses.push("red");
    }
    if (this.state.students.length <= 1) {
      assignedclasses.push("bold");
    }

    return (
      <div className="App">
        <h1>hi i am react App</h1>
        <p className={assignedclasses.join(" ")}>this is really working</p>
        <button className="button" onClick={this.toggleStudentHandler}>
          togglename
        </button>
        <br></br>
        <button
          className="button"
          onClick={this.switchNameHandler.bind(this, "gfugkfuuf")}
        >
          switchname
        </button>
        {students}
      </div>
    );
  }
}

Practise.propTypes = {
  clicked: propTypes.func,
  Name: propTypes.string,
  Age: propTypes.number,
  changed: propTypes.func,
};

export default Practise;
