#! /bin/bash
git config --global core.editor "vim"
git config --global user.name "infectiouscontent"
git config --global user.email infectiouscontent@icloud.com
git commit --amend --reset-author
sudo apt -y update
sudo apt -y upgrade
sudo apt -y install nodejs npm && echo "installed node version $(node -v)" && echo "installed npm version $(npm -v)"
npm install typescript
npm install --save-dev @types/node
sudo npm install -g http-server
mkdir authentication
vi authentication/openai
npx tsc
http-server
