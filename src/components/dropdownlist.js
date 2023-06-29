export function Datashow() {
  var listcity = ["delhi", "goa", "nainital"]

  return (
    <div className="container">
      <h3>Select One</h3>
      <select>
        {
          listcity.map(dd =>
            <option value={dd}>{dd}</option>
          )


        }
      </select>
    </div>
  );


}