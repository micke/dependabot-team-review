# dependabot-team-review

> A GitHub App built with [Probot](https://github.com/probot/probot) that A Probot app

## Github actions/workflow

Add .githu/main.workflow

```workflow
workflow "Add reviewers to dependabot Pull Requests" {
  on = "pull_request"
  resolves = "Dependabot Team Review"
}

action "Dependabot Team Review" {
  uses = "micke/dependabot-team-review@master"
  secrets = ["GITHUB_TOKEN"]
}
```

## Contributing

If you have suggestions for how dependabot-team-review could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2019 Micke Lisinge <hi@micke.me> (https://github.com/micke/dependabot-team-review)
