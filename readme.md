# Sean McKenna Chimneys website

Plain static site (HTML, CSS, images). Deployed to AWS with GitHub Actions.

| Environment | Address | Access |
|---|---|---|
| Staging | https://seanmckennachimneys-staging.agharonan.com | Open to anyone with the link, hidden from search engines |
| Production | https://seanmckennachimneys.com | Public |

## Test locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

## Release a change

1. Create a branch, commit your changes, push, and open a PR.
2. To try it on staging before merging: GitHub, **Actions**, **Deploy**, **Run workflow**, choose your branch.
3. Open the staging address above and check it on a phone and a desktop.
4. Merge the PR. The Deploy workflow runs on `main`, updates staging, then waits.
5. In the run, click **Review deployments**, tick **production**, then **Approve and deploy**.
6. Check https://seanmckennachimneys.com. Hard refresh if you still see the old version.

Never approve production from a branch run. Cancel those runs instead (**Cancel workflow** on the run page).

## Staging notes

- There is no password. Staging stays out of Google because CloudFront adds a `noindex` header (policy `staging-noindex`), and the address is not linked anywhere. Don't post the link publicly.
- Staging is a private S3 bucket behind CloudFront.
- Google Analytics only runs on seanmckennachimneys.com, so staging and local visits are not counted.
- To add a password again, attach the `staging-basic-auth` CloudFront Function (viewer request) to the staging distribution. The login is in `~/agharonan-staging-login.txt` on Noel's Mac.
- Naming pattern for other projects: `<project>-staging.agharonan.com`. The certificate covers `*.agharonan.com`.
