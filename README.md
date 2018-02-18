N.B. This app is work in progress...

# LearnJS - A Serverless AWS Single Page Demo App

## Getting started

To start a local development server that serves the content of the public directory run the following command in the terminal from the worspace root directory:

`./sspa server` or `./sspa liveserver` if you want to install LiveReloadX from command-line, 
and then access to `http://localhost:9292`.

The server action in sspa script launches a simple Python web server that serves static content and if you have chosen to use LiveReload, it automatically reload the web app during development whenever the server detects that a file on the disk has changed.

## Setting up the AWS command-Line Interface

`sudo easy_install pip`
`sudo pip install awscli`

1. Open the AWS console, creating an accont if necessary;
2. Click the Identity & Access Management service under Security & Identity.
3. In the left sidebar, click Users.
4. Click Create New Users to create a user. We'll use this user account to deploy our app.
5. Pick a name for you user and fill in the first row.
6. Ensure that "Generate an access key for each user" ccheck box is checked, and click Create.
7. Download the credentials when prompted.

N.B. You will need to provide a password for this user.

Then run:

`aws configure --profile admin`

```
  AWS Access Key ID [None]: ABCDEFG...
  AWS Secret Acess Key [None]: @Jdwkfdjsjfds9udiso...
  Default region name [None]: eu-west-1
  Default output format [None]:
``` 
Now that you've configured AWS CLI, you should have a new file in your home directory `~/.aws/credentials`.

## Create an S3 Bucket

Run the following to create the S3 bucket

`./sspa create_bucket learnjs.tarantino.io`

and then run

`./sspa deploy_bucket learnjs.tarantino.io`

to deploy the app.

## Test Suite

To run tests we are going to use the Jasmine testing framework.
If you have the app loadeBy visiting `/test/index.html` you should see tge test output and if you are locally using LiveReload this page will automatically reload.

It's important to deploy tests to production so if you have a user who's reporting a problem, a quick way to troubleshoot what is going on can be to ask the user to browse to 'tests' and make sure they all pass.
I not, the user can copy and paste the output and sent it to you. You can then try to reproduce the failing test as a proxy for reproducing the error that the user is reporting.

 
