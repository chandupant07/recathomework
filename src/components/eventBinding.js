

import { useState, useEffect } from "react";

export default function EventBinding() {

  const [getUser, SetUser] = useState();

  function handleUserName(e) {
    SetUser(e.target.value);
  }

  return (
    <div className="container">
      <dl>
        <dt>User Name</dt>
        <dd>
          <input type="text" value={getUser} onChange={handleUserName} />
        </dd>
      </dl>
      <h3>
        hello!{getUser}
      </h3>
    </div>
  )
}