# Overlook
#### Mod-2 Solo Project by [Nicole Latifi](GitHub.com/NicoleLatifi)

This project, is a hotel management tool for hotel customers and staff to manage room bookings.

### Learning Goals

* Use OOP to drive the design of the application and the code
* Work with an API to send and receive data
* Solidify the code review process
* Create a robust test suite that thoroughly tests all functionality of a client-side application

### View the app in action!

To login as a admin, enter the username "manager" and password "overlook2020" and click submit. A dashboard is displayed that shows today's number of rooms available,total revenue, and occupancy rate.

<img src="http://g.recordit.co/HFACer1eXi.gif" alt="Login as manager and dashboard is displayed" height=auto width=75%/>

To login as a customer, the username is "customer" and then the customer's id number. In example, enter the username "customer20" and the password "overlook2020" and click submit. A dashboard is displayed that shows the customer's past, current, and upcoming bookings. The customer's reward points, which is the same as their total dollar amount spent, displays at the bottom. A customer can also select a date to see available rooms that can be booked.

<img src="http://g.recordit.co/BjWjfUineb.gif" alt="Login as manager and dashboard is displayed" height=auto width=75%/>

### Setup/Install

* `git clone git@github.com:NicoleLatifi/overlook.git`
* `cd` into the repository and open it in your favorite text editor
* from the root of this directory, run `npm install` to download the dependencies
* to get dependencies for testing with chai-spies, run `npm install chai-spies`
* if you would like to run tests, run `npm test` from the root directory in your terminal
* to launch the application run `npm start` and navigate to `http://localhost:8080/` in your favorite browser


### Wins

* used fetch to both get and post data
* troubleshooted with debugger in DevTools to fix problems in codebase
* auditted the web application with Lighthouse and achieved a score of 100
* built features from start to finish instead of writing all tests and under the hood functionality before hooking anything up to the DOM

### Challenges

* finalizing a class structure when it seemed that there were a few different approachs that could work
* maximizing the benefits of SASS by using variables and functions

### Future Iterations

This app has potential for further features, which could include:

* creation of a more rigorous testing suite, including sad path exploration and more robust `chai-spies` utilization.
* use of `Webpack` to build and deploy the application.