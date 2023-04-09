import ChatSidebar from "./ChatSidebar";
import ChatContainer from "./ChatContainer";
import styles from "./Container.module.css"

export default function Container() {
    return (
        <section class={styles.container}>
            <ChatSidebar />
            <ChatContainer />
      </section>
    );
} 