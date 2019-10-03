import React,{Component} from 'react';
import './App.css';
import { connect } from 'react-redux';


class App extends Component {
  constructor(props){
    super(props);
  }
  removeHandler = (e) =>{
    /*console.log(e.target.data("id"));*/
  }
  render(){
    const {course} =this.props.course;
    return (
        <div className="App">
          <h1>add classess</h1>
          <div className="box">
            <div className="add-courses">
              <form>
                <input  type="text" placeholder="course name"/>
                <input  type="text" placeholder="course estimate time"/>
                <button type="button">add</button>
              </form>
            </div>
            <div className="card">
              <span className="row">1</span>
              <span className="title">English</span>
              <span className="counter"> 12:15:00 of <span className="total-count">5H</span></span>
              <span className="play">play</span>
              <span className="pause">puse</span>
            </div>
            <div className="detail">
              <ul>
                {course && course.map((item)=>{
                    return <li key={item.id}><span>{item.title}</span><span>{item.time}</span><span data-id={item.id} onClick={this.removeHandler}>X</span></li>
                  })}
              </ul>
              <div className="total-time">5H</div>
            </div>
          </div>
        </div>
    );
  }
}
/*get data from store(I always write this code in another folder name container)*/
const mapStateToProps = (state) => {
  return {
    course: state.Course,
  }
}


export default connect(mapStateToProps)(App);
