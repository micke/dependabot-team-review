FROM node:10

LABEL "com.github.actions.name"="Dependabot Team Review"
LABEL "com.github.actions.description"="Add teams as reviewers to pull requests when created by dependabot."
LABEL "com.github.actions.icon"="user-plus"
LABEL "com.github.actions.color"="blue"

LABEL "repository"="https://github.com/micke/dependabot-team-review"
LABEL "homepage"="https://github.com/micke/dependabot-team-review"
LABEL "maintainer"="Micke Lisinge"

ENV PATH=$PATH:/app/node_modules/.bin
WORKDIR /app
COPY . .
RUN npm install --production && npm run build

ENTRYPOINT ["probot", "receive"]
CMD ["/app/lib/index.js"]
