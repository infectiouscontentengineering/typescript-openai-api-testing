#! /bin/bash
sudo apt -y update
sudo apt -y upgrade
sudo apt -y install nodejs npm && echo "installed node version $(node -v)" && echo "installed npm version $(npm -v)"
npm install typescript
npm install --save-dev @types/node
sudo npm install -g http-server
npx tsc
http-server
