# Upload to s3 bucket instructions

## Location

/home/nmk/dev/web/chimneysite/dev

## Test locally

~/dev/web/chimneysite/dev $  ```python -m http.server 8080```

## Add and commit changes in git

```git add```
```git commit -m "message"```

## To upload to Amazon s3

```aws s3 sync --dryrun --exclude '.git/*' --exclude '.gitignore' --exclude '.idea/*' --exclude 'readme*' . s3://seanmckennachimneys.com```

```aws s3 sync --exclude '.git/*' --exclude '.gitignore' --exclude '.idea/*' --exclude 'readme*' . s3://seanmckennachimneys.com```

## To ensure changes get pushed out - cloudfront invalidation

```bash
CDN_DISTRIBUTION_ID=E34826E0PUSE12
aws cloudfront create-invalidation --distribution-id $CDN_DISTRIBUTION_ID --paths "/areasCovered.html"
aws cloudfront create-invalidation --distribution-id $CDN_DISTRIBUTION_ID --paths "/index.html"
```
