import React, { useEffect, useState } from "react";
import axios from "axios";
import boy from '../../../img/boy4.png'
import girl from '../../../img/female.png'
import './Chat.css'
import boyanim from '../../../lottie/boyanim.json'
import helicaptor from '../../../lottie/helicaptor.json'
import Lottie from "lottie-react"
function Chat() {
  const [chat, setChat] = useState("");
  const [response, setResponse] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("https://server-khaki-kappa.vercel.app/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chat }),
    }).then((res) => res.text());

    setResponse(response);
  }

  return (
    <div className="chat-bg">
      <form onSubmit={handleSubmit}>
        <div className=' w-72'>
          <Lottie animationData={helicaptor} />
        </div>
        <div className="pt-72 ml-12 grid grid-cols-2">
          <section className="flex">
            <img className="w-20" src={girl} alt="" />
            <div className="chat chat-start">
              <div className="chat-bubble">{response}</div>
            </div>
          </section>
          {/*  */}

          <section className="flex">
            <img className="w-20" src={boy} alt="" />

            <div className="chat chat-start">
              <div className="chat-bubble">
                <div>
                  <input
                    className=""
                    type="text"
                    value={chat}
                    onChange={(event) => setChat(event.target.value)}
                    style={{ backgroundColor: "transparent", border: "none", outline: "none" }}
                  />
                </div>


                <button type="submit"></button>
              </div>
            </div>
          </section>

        </div>
      </form>
    </div>
  );
}

export default Chat;
