export function DropDown() {
  var Data = ["Delhi", "Goa", "chandighar", "nepal"];

  return (
    <ol>
      {
        Data.map(function (setdata) {
          return (
            <li>
              {setdata}
            </li>
          );
        })
      }
    </ol>
  )
}

