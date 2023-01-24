import "./styles.css";
import { useState } from "react";

import { AmityUiKitProvider, AmityUiKitSocial } from "@amityco/ui-kit";

import Login from "./Login";

import AmityClient, { ApiRegion } from "@amityco/js-sdk";

const apiKey = "b0efeb583a88f0614f33891a5b0a168884008eb4e9346e2b";


export default function App() {
  return (
    <div className="App">
        <AmityUiKitProvider
          key="123"
          apiKey={apiKey}
          apiEndpoint="https://api.us.amity.co"
          apiRegion="https://api.us.amity.co"
          userId="123"
          displayName="Jonathan"
        >
          <AmityUiKitSocial />
        </AmityUiKitProvider>
    </div>
  );
}
