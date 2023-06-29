import { useState } from "react";

export default function addProgram() {
  const [getSum, setSum] = useState({ Hindi: '', English: '', Mathes: '' });
  const [getResult, setResult] = useState("");




  const handleInput = function (e) {
    setSum({
      ...getSum, [e.target.name]: e.target.value
    });
  }

  const add = function () {
    const { textbox1, textbox2, textbox3 } = getSum;
    setResult(Number(textbox1) + Number(textbox2) + Number(textbox3));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2 className="text-center">Student Marks Sum</h2>
          <dl>
            <dt className="text-center">Hindi Marks</dt>
            <dd>
              <input type="number" name="textbox1" value={getSum.textbox1} className="form-control" onChange={handleInput} />
            </dd>

            <dt className="text-center">English Marks</dt>
            <dt>
              <input type="number" name="textbox2" value={getSum.textbox2} className="form-control" onChange={handleInput} />
            </dt>

            <dt className="text-center">Mathes Marks</dt>
            <dt>
              <input type="number" name="textbox3" value={getSum.textbox3} className="form-control" onChange={handleInput} />
            </dt>
          </dl>

          <button className="btn btn-success w-100" onClick={add}>Add</button>
        </div>

        <div className="col-6">
          <h3 className="text-center">Result</h3>
          <dl>


            <dt>Total Is</dt>
            <dd>{getResult}</dd>
          </dl>
        </div>
      </div>
    </div>
  )
}