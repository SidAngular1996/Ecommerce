# MERN E-COMMERCE TUTORIAL

Hi! My name is **Abhishek Singh**, I have created this tutorial to teach MERN Stack for free on YouTube.

# Prerequisite

1.  Must have basic knowledge of **Node**, **React**, **Express**, **MongoDB** . _I have made tutorial on each technology on YouTube , make sure to check it out_. **Links are Below respectively**
2.  Node - https://youtu.be/BSO9C8Z-YV8
3.  React - https://youtu.be/99kgUCIMboY
4.  Express - https://youtu.be/teipbke8c4A\
5.  MongoDB - https://youtu.be/AYDP1S5BbTo
6.  RestApi - https://youtu.be/AhCSfuG9Jxw _(optional)_

# Install Dependencies

**For Backend** - `npm i`

**For Frontend** - `cd frontend` ` npm i`

## Env Variables

Make Sure to Create a config.env file in backend/config directory and add appropriate variables in order to use the app.

**Essential Variables**
PORT=
DB_URI =
STRIPE_API_KEY=
STRIPE_SECRET_KEY=
JWT_SECRET=
JWT_EXPIRE=
COOKIE_EXPIRE=
SMPT_SERVICE =
SMPT_MAIL=
SMPT_PASSWORD=
SMPT_HOST=
SMPT_PORT=
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
_fill each filed with your info respectively_

## Author

Siddharth Tiwari
**Instagram** Click [Here](https://www.instagram.com/i.am.sid17)






// DEPLOYMENT 

we can delete build folder in frontend as when we deploy on heroku we give post build command in configuration
which automatically takes care of build in frontend check root folder package file
        
        "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false && npm install --prefix frontend && npm run build --prefix frontend"
NPM_CONFIG_PRODUCTION=false - install dependencies
npm install --prefix frontend - install frontend dependencies
npm run build --prefix frontend - run build frontend path is given for same in backend 