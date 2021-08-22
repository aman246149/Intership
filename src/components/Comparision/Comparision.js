import React, { useState } from "react";
import "./Comparision.css";

const Comparision = () => {
  const [list1, setList1] = useState("");
  const [list2, setList2] = useState("");
  const [common, setCommon] = useState([]);
  const [unique, setUnique] = useState([]);

  const handleClickData = () => {
    if (list1 === "") {
      alert("please enter data for list1");
      return;
    }

    if (list2 === "") {
      alert("please enter data for list 2");
      return;
    }

    let sarray = list1.split(" ");
    let str2array = list2.split(" ");
   
    let common = [];
    sarray.forEach((s1) => {
      str2array.forEach((s2) => {
        if (s1 === s2) {
          common.push(s1);
        }
      });
    });

    setCommon(common);

    let unique1 = sarray.filter((o) => str2array.indexOf(o) === -1);
    let unique2 = str2array.filter((o) => sarray.indexOf(o) === -1);


    const unique = unique1.concat(unique2);

    console.log(unique);

    setUnique(unique);
  };

  return (
    <div className="container">
      <div className="leftbox">
        <textarea
          required
          name="leftarea"
          cols="80"
          rows="10"
          placeholder="please enter list  data"
          onChange={(e) => setList1(e.target.value)}
        ></textarea>
        <h2 style={{ textAlign: "center" }}>LIST ONE</h2>
      </div>
      <div className="rightbox">
        <textarea
          required
          name="rightarea"
          cols="80"
          rows="10"
          placeholder="please enter list  data"
          onChange={(e) => setList2(e.target.value)}
        ></textarea>
        <h2 style={{ textAlign: "center" }}>LIST TWO</h2>
      </div>

      <button onClick={handleClickData}>COMPUTE</button>

      <div className="answer">
        <div className="leftpart">
            <ul className="answerul">
            {list1 ==="" || list2==="" ?"":<li style={{color:"red",fontWeight:"500"}}>Common Elements</li>}
             <li> {common.map((data,index)=><p key={index+21}>{`${data+""}`} </p>)}</li>
            </ul>
          
        </div>

        <div className="rightpart">
            {list1 ==="" || list2==="" ?"":<li style={{color:"red",fontWeight:"500" }}>Unique Elements</li>}
        <ul className="answerul">
             <li> {unique.map((data,index)=><p key={index+201}>{`${data+""}`} </p>)}</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Comparision;
