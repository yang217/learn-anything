# Contributing to Learn Anything
There are many ways you can contribute. You can:
- Improve the website by using it and adding resources you liked to relevant topics.
- Improve our [curated lists on various topics](https://github.com/learn-anything/curated-lists#readme). Instructions for how to improve them can be found on each of the lists.
- Submit [issues](../../issues/) with feature requests or bug reports. **Please give as many details as possible**. If you can (and want to) fix the issue, please tell us in the issue.
- Contribute to the website via [Pull Requests]([issues](../../pulls/)). Instructions below will provide all necessary information on how you can do that from setting up the website to run locally to how you can add and contribute changes to the code base.
- Ask questions on [Discord](https://discord.gg/KKYdWjt) and discuss ideas and share thoughts about the project.

## Run the project
1. [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your fork:

```Bash
# Clone your fork
git clone https://github.com/<your-username>/learn-anything.git

# Navigate to the newly cloned directory
cd learn-anything
```

2. Switch to `neo4j` branch with `git checkout neo4j`.
3. Inside [api](https://github.com/learn-anything/learn-anything/tree/neo4j/api) dir. Run `npm install` to install dependencies. After it is done, run `npm start` to start [Elasticsearch](https://www.elastic.co) & [neo4j](https://neo4j.com).
4. In another terminal. Inside [app](https://github.com/learn-anything/learn-anything/tree/neo4j/app) dir. Run `npm install`. Then run `npm start` to start the app.
5. Connect to [localhost:3000](http://localhost:3000).

<!-- ## Testing -->
<!-- TODO: make tests work -->
<!-- Also, make sure to run the tests before you commit your changes. Travis.

```
npm run test
```
 -->

## Submitting a Pull Request
Please go through [existing issues](../../issues/) and [pull requests](../../pulls/) to check if somebody else is already working on the issue.

#### Thank you for taking the time to contribute! 💜