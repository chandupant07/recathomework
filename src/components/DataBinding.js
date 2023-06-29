


export function DataBindingComponent() {
  var category = ["All", "Apple", "ABC"]


  return (

    <div className="container">
      <h2>category</h2>
      <ol>
        {
          category.map(function (cat) {
            return (
              <li>{cat}</li>
            );
          })
        }
      </ol>
      <h2>category</h2>
      <select>
        {
          category.map(cat =>
            <option value={cat}>{cat}</option>
          )
        }
      </select>
    </div>



  );
}
