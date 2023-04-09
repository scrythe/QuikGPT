import styles from "./ChatContainer.module.css"
import ChatMessage from "./ChatMessage";
import { For } from "solid-js";

export default function ChatContainer() {
    const chatMessages = [{type: "ai", message: "Helo There"}, {type: "self", message: "Helo There"},
    {type: "ai", message: "What do you want to do?"}, {type: "self", message: "Nothing lol, I am just testing stuff out. Random Words test test test tes. Random Words test test test test"}];
    return (
        <section class={styles.chatContainer}>
            <h1 class={styles.header}>Welcome to QuikGPT!</h1>
            <section class={styles.chatMessagesContainer}>
                <For each={chatMessages}>
                    {(chatMessage) => <ChatMessage type={chatMessage.type} message={chatMessage.message} />}
                </For>
            </section>
            <input class={styles.chatInput} placeholder="Enter a name..." />        
        </section>
    );
}