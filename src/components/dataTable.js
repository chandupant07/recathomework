export function Tabledata() {
  var products = [
    {
      Name: 'Samsung Tv', Price: 20000
    },
    {
      Name: 'Phone', Price: 4000
    }
  ];

  return (
    <div className="container">
      <h2>Product Name</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {
            products.map(product =>
              <tr>
                <td>{product.Name}</td>
                <td>{product.Price}</td>
              </tr>

            )
          }
        </tbody>
      </table>
    </div>
  )
}