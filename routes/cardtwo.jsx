import React from 'react';
import './cardtwo.css';

export default function CardTwo () {

  return (
    <div className = 'page'>
      <h1 className = 'page-title'> Python Terminal Chat Program</h1>
      <h2>1. Sockets</h2>
        <p>
            This program represents the first instance in which I developed the code for a complete client-server interaction. Initially, I wrote code for the client endpoint to gather data, which is then transmitted to a server.
            On the server side, I also managed the endpoint and implemented code to relay the data to other clients. This project significantly enhanced my understanding of data transmission within a program and the process of sending
            data to multiple clients. Creating the socket was straightforward, thanks to the examples provided in the Python socket library manual. My knowledge of IP addresses and ports, gained from academic coursework and hands-on experience
            with self-hosted services, made configuring the port and specifying the correct IP address relatively simple. Additionally, writing the server-side code to receive data involved creating a socket, binding it to a port, and setting it
            to listen for incoming data. This experience greatly improved my comprehension of data transmission across different computers and deepened my understanding of software development.
        </p>
      <h2>2. Threading</h2>
        <p>
            To make the program functional, I had to learn and understand how threads operate in programming. I discovered that a new thread was required for each client connected to the socket. Upon creating a new thread, the program would
            invoke a function responsible for managing user creation and handling messages received from the user. Additionally, I implemented a function to broadcast messages to other users and to close the socket and disconnect the user under
            certain conditions.
        </p>
      <h2>3. Logic Behind Application</h2>
      <p>
            The logic behind the program was relatively straightforward. I created a new thread to handle message reception, which involved a function running a while loop that continuously checked for incoming messages from the server.
            Concurrently, the main program executed a separate while loop to monitor user input and transmit this information to the server. The server-side logic was similarly simple. It featured a while loop that persistently accepted
            connections from the socket, added each new user to an array, and created a new thread to handle that user's messages. This array facilitated the broadcasting of messages, allowing the server to send updates to all connected
            users except the one who originally sent the message.
      </p>
      <h2>4. Conclusion</h2>
            In conclusion, this project provided valuable insights into several key aspects of programming, including multi-threading, client-server interactions, and data broadcasting. I gained hands-on experience with creating and managing
            threads to handle concurrent user connections and message processing. By developing both client and server components, I deepened my understanding of how data is transmitted and synchronized across different systems. Additionally,
            implementing socket programming enhanced my knowledge of network communication, including the use of IP addresses and ports. Overall, this experience has significantly enriched my understanding of software development principles
            and has equipped me with practical skills for building robust, scalable applications.
      <div className='button-wrapper'>
        <a href="https://github.com/Serg-Ruiz/python-chat" target="_blank" rel="noopener noreferrer" className="code-repo-button">
          Code Repository
        </a>
      </div>
    </div>
  );
}     
