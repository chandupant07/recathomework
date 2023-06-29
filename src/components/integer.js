
export function Databinddrop() {
  var dd = ["a", "s", "d"]

  return (

    <div className="container">
      <h4>selct one</h4>
      <select>

        {
          dd.map(ddlist =>
            <option value={ddlist}>{ddlist}</option>
          )
        }
      </select>
    </div>
  )
}