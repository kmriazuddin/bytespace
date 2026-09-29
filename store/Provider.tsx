"use client";

import { Provider } from "react-redux";
import { ReactNode, useState } from "react";
import { makeStore } from "./store";

export default function StoreProvider({ children }: { children: ReactNode }) {
  const [store] = useState(() => makeStore());

  return <Provider store={store}>{children}</Provider>;
}
