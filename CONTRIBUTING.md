# Contributing
There are many ways you can contribute to Learn Anything.
- Improve the website by using it and adding resources you liked to relevant topics.
- Improve our [curated lists on various topics](https://github.com/learn-anything/learn-anything/wiki/Curated-Lists). Instructions for how to improve them can be found on each of the lists.
- Talk with others on our [Slack](https://join.slack.com/t/learnanythingxyz/shared_invite/enQtMjg1MTcxMjA4NDg2LWU0YjgxZTZmZGY5MTRlMWI3ZWJjYzNhYTg4MmE1OTRjNTQ2MjUwYWI3ZGZlZjg1MDA0OTc3ZDY3ZmMzZDc4N2I)
- Submit [issues](../../issues/) with feature requests or bug reports. **Please give as many details as possible**. If you can (and want to) fix the issue, please tell us in the issue.
- Contribute to the website via [Pull Requests]([issues](../../pulls/)). Instructions below will provide all necessary information on how you can do that from setting up the website to run locally to how you can add and contribute changes to the code base.

## Code Organisation

## Setting Up the project locally
These instructions will allow you to set up your own instance of Learn Anything
to develop with.

To install the project you need to have [yarn](https://github.com/yarnpkg/yarn), [node](https://github.com/nodejs/node), [DynamoDB]() and [Elasticsearch]().

### Install dependencies
1. [yarn](https://github.com/yarnpkg/yarn) or [npm](https://github.com/npm/npm).
2. [node.js](https://github.com/nodejs/node)
3. [DynamoDB](https://aws.amazon.com/dynamodb/). DynamoDB is a database used to manage and store maps. You can install and run it with:

```Bash
wget https://s3-us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.zip
unzip -a dynamodb_local_latest.zip
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```

4. [Elasticsearch](https://www.elastic.co). Elasticsearch is needed for fetching maps and suggestions on the website. You can install and run it with:

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

2. `yarn` to install dependencies.
3. `yarn run setup`
3. `yarn start` to start the app.
4. Connect to [localhost:3000](http://localhost:3000).

The first time it may take a while, as all maps will be added to Elasticsearch.
After that only `yarn start` will be needed.

### Testing

> Tip: Keep your `master` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/CompuIves/codesandbox-client.git
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

## Submitting a Pull Request
Please go through [existing issues](https://github.com/learn-anything/learn-anything/issues) and [pull requests](https://github.com/learn-anything/learn-anything/pulls) to check if somebody else is already working on the issue.

Also, make sure to run the tests before you commit your changes.

```
yarn test
```

Currently the test suite does not cover everything.

Thank you for taking the time to contribute! 💜