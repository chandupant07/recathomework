
import { useState } from "react";
import { useEffect } from "react";


export default function DataBindinAPI() {

  const [mars, setMars] = useState();
  useEffect(() => {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
      .then(response => response.json())
      .then(data => {
        setMars(data);
      })

  }, []);

  return (
    <div className="container">
      <h2>Mars Photos</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Photo Id</th>
            <th>Camera Name</th>
            <th>Rover Name</th>
            <th>Privew</th>
          </tr>
        </thead>


      </table>
    </div>
  )
}