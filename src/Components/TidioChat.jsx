import { useEffect } from "react";

const TidioChat = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//code.tidio.co/YOUR_TIDIO_SCRIPT.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return null; 
};

export default TidioChat;