# CFG TEAM 66

## Read the following first:
- https://www.conventionalcommits.org/en/v1.0.0/

- https://chris.beams.io/posts/git-commit/ **Point 5**

## Before commiting a change to version control:

- Run `$ yarn format` and fix all the errors and for formatting the code
- Before pushing the commit, run `$yarn prepush`

This will help in keeping the code formatted and understandable.

## Prerequisites

- [yarn](https://yarnpkg.com/)
- node

## IMPORTANT

- Avoid using `npm install` anywhere. Use [yarn](https://yarnpkg.com/) instead. npm is very slow and installing dependencies will take forever especially on hostel wifi.

- Always work on a separate branch with either `backend` or `frontend` [group name](https://stackoverflow.com/questions/273695/what-are-some-examples-of-commonly-used-practices-for-naming-git-branches). 

- Always `git pull` before `git push`

## Starting this project

- `$ yarn install`

- `$ yarn start`

- Open a new terminal

- `$ cd client && yarn install`

- `$ yarn start`

> This should run parallely. On `localhost:5000/express_backend`, you should get a message saying `Backend Connected` as the receiving message which shows the temporary connection between the front-end and back-end.

