"use client";
// import { useRef } from "react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
// import { makeStore, AppStore } from "@/store";
import { store } from "@/store";

// export default function StoreProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const storeRef = useRef<AppStore | null>(null);
//   if (!storeRef.current) {
//     // storeRef.current = makeStore();
//     storeRef.current = store;

//   }

//   return <Provider store={storeRef.current}>{children}</Provider>;
// }
export default function StoreProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
