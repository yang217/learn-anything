# Contributing to Learn Anything
There are many ways you can contribute. You can:
- Improve the website by using it and adding resources you liked to relevant topics.
- Improve our [curated lists on various topics](https://github.com/learn-anything/curated-lists#readme). Instructions for how to improve them can be found on each of the lists.
- Submit [issues](../../issues/) with feature requests or bug reports. **Please give as many details as possible**. If you can (and want to) fix the issue, please tell us in the issue.
- Contribute to the website via [Pull Requests]([issues](../../pulls/)). Instructions below will provide all necessary information on how you can do that from setting up the website to run locally to how you can add and contribute changes to the code base.
- Ask questions on [Discord](https://discord.gg/KKYdWjt) and discuss ideas and share thoughts about the project.

<!-- TODO: -->
<!-- # Code Organisation -->

## Setting Up the project locally
These instructions will allow you to set up your own instance of Learn Anything to develop with.

### Install dependencies
1. [node.js](https://nodejs.org)
2. [DynamoDB](https://aws.amazon.com/dynamodb/). Is a database used to manage and store maps. You can install and run it with:

```Bash
wget https://s3-us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.zip
unzip -a dynamodb_local_latest.zip
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```

3. [Elasticsearch](https://www.elastic.co). Is needed for fetching maps and suggestions on the website. You can install and run it with:

```Bash
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.5.2.tar.gz
tar -zxf elasticsearch-5.5.2.tar.gz
./elasticsearch-5.5.2/bin/elasticsearch
```

### Run the project
1. [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your fork:

```Bash
# Clone your fork
git clone https://github.com/<your-username>/learn-anything.git

# Navigate to the newly cloned directory
cd learn-anything
```

2. `npm install` to install dependencies.
3. `npm run setup` to initialise DynamoDB and Elasticsearch.
3. `npm start` to start the app.
4. Connect to [localhost:3000](http://localhost:3000).

The first time it may take a while, as all maps will be added to Elasticsearch.
After that only `npm start` will be needed.

<!-- > Tip: Keep your `master` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/learn-anything/learn-anything.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a "remote" called "upstream,"
> Then fetch the git information from that remote, then set your local `master`
> branch to use the upstream master branch whenever you run `git pull`.
> Then you can make all of your pull request branches based on this `master`
> branch. Whenever you want to update your version of `master`, do a regular
> `git pull`.
 -->
<!-- ### Testing -->
<!-- TODO: make tests work -->
<!-- Also, make sure to run the tests before you commit your changes.

```
npm run test
```

Currently the test suite does not cover everything.
 -->

## Submitting a Pull Request
Please go through [existing issues](../../issues/) and [pull requests](../../pulls/) to check if somebody else is already working on the issue.

#### Thank you for taking the time to contribute! 💜