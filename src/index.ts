import { Application } from "probot" // eslint-disable-line no-unused-vars

interface Config {
  teams: string[]
}

export = (app: Application) => {
  app.on("pull_request.opened", async (context) => {
    let config: Config | null
    config = await context.config<Config | null>("dependabot-team-review.yml")

    if (!config || config.teams.length == 0) {
      throw new Error("loading config failed")
    }

    if (config.teams.length == 0) {
      throw new Error("no teams configured")
    }

    const author = context.payload.pull_request.user.login

    if (author != "dependabot") {
      return
    }
    try {
      let result = await context.github.pullRequests.createReviewRequest(context.issue({
        reviewers: [],
        team_reviewers: config.teams
      }))
      context.log(result)
    } catch (error) {
      context.log(error)
    }
  })
}
