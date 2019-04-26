# Dev Workshop

### Instruction on how to get the project up and running

#### Cloning and navigating to correct directory:

* Clone the repository into any folder of your choice using ```git clone <LINK TO THE REPO>``` on terminal. (this link to the repo can be found by clicking on the "Clone or download" button).
* Next go into the project folder and then server folder inside it by running the commands ```cd dev-workshop-public``` and ```cd server``` respectively on the terminal. These two commands can be combined into one using forward slash or back slash depending on whether you are using MacOS or Windows.

#### Installing packages:

* Before we do anything else, we need to install all our node dependencies for the project. This goes back to the point of installing node modules through ```package.json```. Make sure that you are in the server folder and then run the command ```npm install``` on terminal. This will install all the dependencies.

#### Code Changes:
* There is a code change that you would need to make in order to connect to your MongoDB. Open server.js file and change the value of ```const dbConnectString``` to your MongoDB connection string.

#### Running the server:

* Make sure that you are in the server folder. Run the command ```node server.js``` to actually run the server. If everything goes well, then you should see the message ```Listening on port 3000``` on your console.

