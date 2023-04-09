import styles from "./ChatMessage.module.css";

export default function ChatMessage(props: {type: string, message: string}) {
    const messageStyleType = props.type == "ai" ? styles.ai : styles.self;
    return (
        <p class={`${styles.chatMessages} ${messageStyleType}`}>{props.message}</p>
    );
}