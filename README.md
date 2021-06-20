# LabVR !

LabVR is system of web application and VR application which will help students to do their practical sessions virtually with help of VR and the teachers can monitor it. The web application provides the interface for teacher and student to view and evaluate the experiments. You can see the live web-application here, [LabVR](https://labvr.netlify.app). 

 - ***Web Application***
    - https://labvr.netlify.app/
 - ***Backend***
    - https://vrlabserver.herokuapp.com/
 - ***LabVR application***
    - [Drive link](https://drive.google.com/drive/folders/124z4I_-7GTTEyoog91nK8O4m1pg3g9_A?usp=sharing)
 - ***Github***
    - `Frontend` - https://github.com/adarshsuresh07/VRlab-web
    - `Backend` -  https://github.com/adarshsuresh07/VRlab-backend
    - `VR Application` -  https://github.com/AdithyaDRajagopal/LabVR

## Table of Contents

 - [Motivation](https://github.com/adarshsuresh07/VRlab-web#motivation)
 - [Stacks Used](https://github.com/adarshsuresh07/VRlab-web#stacks-used)
 - [Basic concept](https://github.com/adarshsuresh07/VRlab-web#basic-concept)
 - [Features Implemented](https://github.com/adarshsuresh07/VRlab-web#features-implemented)
 - [Future Scopes](https://github.com/adarshsuresh07/VRlab-web#future-scopes)
 - [Contributors](https://github.com/adarshsuresh07/VRlab-web#contributors)

## Motivation

The initial motive behind the idea was to create a virtual space dedicated for higher secondary students to practice and acquire practical experience doing their lab sessions. COVID-19 affected the contact classes and students are restricted with only the resources that they have at their homes. The idea is to simulate higher secondary practical sessions using virtual reality where students can be guided by teachers, which can resemble the real-world laboratories.

## Stacks Used

The whole application is build on the following : 

 - `Reactjs`  front end
 - `MongoDB` database
 - `Nodejs - Express` backend
 - `SendGrid` email communication
 - `Netlify, Heroku` deployment
 - `Unity` VR application
 - `Blender` 3D models

## Basic concept

Lets now familiarise LabVR a bit more clearly. LabVR comprises of two application - Web application and VR application:

 - ***Web application*** : To start and trackdown an experiment for teacher and student.
 - ***VR application*** : To do an experiment virtually.
There are two types lab sessions as of now:
 - ***Simple Pendulum*** : To study variation of time period of a simple pendulum of a given length by taking bobs of same size but different masses and interpret the result
 - ***Hooke's Law*** : To prove Hooke’s law i.e. the extension of the force is directly proportional to the force applied.
 - There will be a ***key*** which will be denoting each lab sessions.
    - Teacher can create new key(new lab session) and share the key to students.
    - Students can use that key to start the lab session and do the experiment.
    - Any number of students can complete their lab sessions under one key.
    - Only one submission per student allowed.
    - If student tried the lab session, pending status will be shown.
    - The lab type is understood from the key entered and VR application will take you there. 

## Features Implemented

 - [x] User(Teacher/ Student) authentication and account verification
 <img src="https://github.com/adarshsuresh07/VRlab-web/blob/master/Screenshots/Signup.png" width="50%"/>
 <img src="https://github.com/adarshsuresh07/VRlab-web/blob/master/Screenshots/Login page.png" width="50%"/>

 - [x] Teacher 
    -  Only access to web application
    -  View and evaluate results of students
    -  Start an experiment, fetch key and share it to students via another medium.

 - [x] Student
    -  Student can do their experiment using VR application. 
    -  Can login, enter key to enter a lab session.
    -  When you enter a lab session, you will have the aparatus and interactive buttons to do the experiment.
    - After completion of observation table on the black board on the left side wall, we can submit the observation
    - Then an MCQ (like a viva) will appear and we have to choosing an option will end your lab session with logging you out.
    -  View the results of their previous sessions via web application.
    -  Filter their experiments on the besis of the status (Submitted/Pending).
     
 

## Future Scopes

 - More experiments may be included in LabVR.
 - An option for the teacher to record the experiment may be developed so that the teacher can give a demonstration for the students.
 - Other laboratories such as chemistry lab, biology lab, etc. may also be included in the virtual platform.
 - LabVR may be evolved to simulate research laboratories, workshops in engineering colleges, etc.
 - LabVR can be improved and deployed as an alternative for actual labs in schools.

## Contributors


[1]: https://github.com/adarshsuresh07
[2]: https://adarshs.is-a.dev
[3]: https://github.com/AdithyaDRajagopals
[5]: https://github.com/ajayduth
[6]: https://github.com/AkhilFrancis


 `Adarsh S `  [![github](https://img.icons8.com/material-sharp/24/000000/github.png)][1]      [![portfolio](https://img.icons8.com/material-sharp/24/000000/domain.png)][2]


`Aditya D Rajagopal` [![github](https://img.icons8.com/material-sharp/24/000000/github.png)][3] 


`Ajay Duth O A` [![github](https://img.icons8.com/material-sharp/24/000000/github.png)][5]  


`Akhil Francis` [![github](https://img.icons8.com/material-sharp/24/000000/github.png)][6]  





## Note to readers..

Thank You ! Have a question or want to reach out?

We'd love to hear from you. If you don’t see the information you need or have a suggestion or feedback, contact us!


<img src="https://img.icons8.com/bubbles/50/000000/filled-like.png"/>
