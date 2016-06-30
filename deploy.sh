#!/bin/sh

pm2 restart pm2.json
rm -f ~/.git/index.lock
git add .
git commit -am "Pre-deploy automatic commit"
git push origin master
git push github master