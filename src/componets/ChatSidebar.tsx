import styles from "./ChatSidebar.module.css";
import { For } from "solid-js";

export default function ChatSidebar() {
    const allChats = ["Chat 1", "Chat 2", "Chat 3"]
    return (
        <section class={styles.chatSidebar}>
            <button class={styles.newChatBtn}>Open New Chat</button>
            <button class={`${styles.openChatBtn} ${styles.selected}`}>Chat Selected</button>
            <For each={allChats}>
                {(chat) => <button class={styles.openChatBtn}>{chat}</button>}
            </For>
        </section>
    );
}