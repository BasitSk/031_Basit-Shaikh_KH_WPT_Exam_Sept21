import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <Mycomponent />
    </div>
  );
}

export default App;

function Mycomponent() {
  let appName = "MyChatApp";
  let studentName = "Basit Shaikh";
  let studuntRollNo = "210940320031";
  let [input1, setInput1] = useState("");
  let [list, setList] = useState([]);

  let addMessage = (e) => {
    let msg = e.target.value;
    setInput1(msg);
  };

  let send = () => {
    let msg = {
      messsage: input1,
    };
    let newList = [input1, ...list];
    setList(newList);
    setInput1("");
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="row bg-success text-light p-2">
          <div className="col-2">
            <h1>{appName}</h1>
          </div>
          <div className="col-3 mt-4">
            <h5>
              by {studentName}_{studuntRollNo}
            </h5>
          </div>
        </div>

        <div className="row" height="100px">
          <div className="col-9 mt-5 m-3 ">
            <input
              type="text"
              value={input1}
              placeholder="Lets chat here.."
              className="w-100 rounded hgt"
              onChange={addMessage}
            />
          </div>
          <div className="col-2 mt-5">
            <button
              className="btn-lg btn-success w-100 rounded "
              onClick={send}
            >
              SEND
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-11 mt-1 m-4 alert alert-success">
            <h3>hello</h3>
          </div>
        </div>

        {list.map((item, index) => (
          <div className="row">
            <div className="col-11 mt-1 m-4 text-end  alert alert-success">
              <h3>
                <div key={index}>{item}</div>
              </h3>
            </div>
          </div>
        ))}
        <div className="row">
          <div className="col-11 mt-1 m-4 alert alert-success">
            <h3>how are you</h3>
          </div>
        </div>
      </div>
    </>
  );
}
