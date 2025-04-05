
import chatWidget2 from "../images/chatWidget2.png"; 

const TelegramWidget = () => {
  return (
    <a
      href="https://t.me/cybersecurityhelpcenter"
      target="_blank"
      rel="noopener noreferrer"
      className="telegram-float"
    >
      <img src={chatWidget2} alt="Telegram Chat" />
    </a>
  );
};

export default TelegramWidget;