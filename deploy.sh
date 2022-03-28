#!/bin/bash

git add .

git status

git commit -m "auto deploy"

git config --global user.email "habdig7oficial"

git push "https://github.com/habdig7oficial/ac1-ti.git"
