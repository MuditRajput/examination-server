# **HOW A REQUEST GETS SERVED?**

**When a client sends a request *(suppose that the request is sent by a browser)* the following steps will show how the whole process is completed:**


1. So to get access to the website client enters the Domain name in the browser. Then the browser gets the real address of the server from DNS *(Domain Name System)*.

2. By using the real address browser sends a request for the files of the website. All the requests are shared between client and server by using TCP/IP *(Transmission Control Protocol/Internet Protocol)*.

3. After the request gets to the server it checks whether the request is valid or not. If the request is valid then the server approves the request and starts sending the website's files to the client in the form of data packets.

4. When the packets reach the browser it collects all packets and combines them to make a webpage that will be accessible to the Client.