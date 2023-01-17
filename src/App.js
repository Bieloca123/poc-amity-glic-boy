import "./styles.css";
import { useState } from "react";

import { AmityUiKitProvider, AmityUiKitSocial } from "@amityco/ui-kit";

import Login from "./Login";

const apiKey = "b3babb0b3a89f4341d31dc1a01091edcd70f8de7b23d697f";

export default function App() {
  const [userId, setUserId] = useState();

  return (
    <div className="App">
      {!userId ? (
        <Login onSubmit={setUserId} />
      ) : (
        <AmityUiKitProvider
          key={userId}
          apiKey={apiKey}
          apiEndPoint="https://api.sg.amity.co"
          userId={userId}
          displayName={userId}
        >
          <AmityUiKitSocial />
        </AmityUiKitProvider>
      )}
    </div>
  );
}
