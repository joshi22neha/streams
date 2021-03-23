##LIVE VIDEO STREAMS- React application using Redux

A react application to create, edit, delete and view live stream videos using OBS with OAuth Sign In


#Pre-requisite to run this in local server:

Start the JSON server from https://github.com/joshi22neha/streams/tree/main/api: npm start

Start the RTMP server from https://github.com/joshi22neha/streams/tree/main/rtmpserver: npm start

STREAM LIST: http://localhost:3000/

  
SIGN IN WITH GOOGLE: EDIT/DELETE stream access is given to user who has created that stream
 
CREATE STREAMS: http://localhost:3000/streams/new – Create Stream option is only displayed when signed in
 
EDIT A STREAM: http://localhost:3000/streams/edit/4   (4 is stream id)
 
DELETE STREAM: http://localhost:3000/streams/delete/4 
 

#Please follow below steps in order to host live streaming video through OBS:

1.	Open OBS studio

2.	Create Scene -> Add Display Capture and Audio Input Capture.

3.	Go to settings -> stream

4.	select custom stream under service

5.	Under Server, write rtmp-server address (rtmp://localhost/live) 

6.	Under Stream Key, give your streaming video id.

7.	Click on start streaming


VIEW STREAM: http://localhost:3000/streams/4
 


