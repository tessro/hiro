FROM node:24

RUN npm install -g obsidian-headless \
  && npm cache clean --force

WORKDIR /srv/obsidian/vault

CMD ["ob", "sync", "--continuous"]
