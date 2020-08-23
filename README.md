1)Dependency to install :- npm install axios@0.20.0 --save npm install react-calendar@3.1.0 --save npm install -D json-server concurrently --save

2)I have used css modules for this use:- npm eject and press yes tweak .css in both webpack.config.dev.js and webpack.config.prod.js include this two lines of code :- modules: true, localIdentName: '[name][local][hash:base64:5]'

3)use npm run dev to run application

4)Once activity modal will be open. one can close is by clicking on backdrop or cancel button provided on modal

5)As mentioned in json provided, activity status for Feb 1 2020 , Mar 1 2020 and Mar 16 2020 will be available and for rest date it will show "No activity".

As instructed by default Today's day activity details will be shown