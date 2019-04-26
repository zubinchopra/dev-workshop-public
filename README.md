# Dev Workshop

### Instruction on how to get the project up and running

### Viewing the code on GitHub (recommended):
* I would highly recommend just viewing the code on GitHub instead of cloning it down in order to force yourself to write code. That contributes to better learning. To view the code online and identity the bugs in your own code, just select the appropraite branch from the ```Branch``` dropdown above. For example selecting the branch ```week-2``` will show you that week's code.

### Pulling down the code to your own machine:

#### Cloning and navigating to correct directory:

* Clone the repository into any folder of your choice by running ```git clone <LINK TO THE REPO>``` on terminal. (this link to the repo can be found by clicking on the "Clone or download" button).
* Next go into the project folder by running the command ```cd dev-workshop-public``` on terminal. Running the command ```git branch``` will give you the branch that you are currently on. By default, that would be the ```master``` branch.
* To change to an appropriate branch, run the command ```git checkout week-2``` on terminal. In this case, the week-2 branch will contain week 2's code.
* Next go into server folder ```cd server``` on the terminal.

#### Installing packages:

* Before we do anything else, we need to install all our node dependencies for the project. This goes back to the point of installing node modules through ```package.json```. Make sure that you are in the server folder and then run the command ```npm install``` on terminal. This will install all the dependencies.

#### Code Changes:
* There is a code change that you would need to make in order to connect to your MongoDB. Open server.js file and change the value of ```const dbConnectString``` to your MongoDB connection string.

#### Running the server:

* Make sure that you are in the server folder. Run the command ```node server.js``` to actually run the server. If everything goes well, then you should see the message ```Listening on port 3000``` on your console.

