FROM node:latest

RUN npm install -g obsidian-headless \
  && npm cache clean --force

WORKDIR /srv/vaults

CMD ["ob", "sync", "--continuous"]
