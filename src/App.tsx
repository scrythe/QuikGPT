import { createSignal } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
import TitleBar from "./componets/TitleBar";

function App() {
  const [greetMsg, setGreetMsg] = createSignal("");
  const [name, setName] = createSignal("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name: name() }));
  // }

  return (
    <>
      <TitleBar />
      <div class="container">
        <h1>Welcome to QuikGPT!</h1>
      </div>
    </>
  );
}

export default App;
