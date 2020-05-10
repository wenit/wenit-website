#!/usr/bin/env bash

# 功能说明	：生成上传文件
# 作者		：远夕
# 创建时间	：2020年5月10日

echo [`date`] 开始生成部署文件.
rm -rf _deploy
mkdir _deploy

mv index.html _deploy
mv 404.html _deploy
mv zh-cn _deploy
mv en-us _deploy
mv build _deploy
mv img _deploy

echo [`date`] 生成部署文件完成.