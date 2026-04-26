FROM node:latest

RUN npm install -g obsidian-headless \
  && npm cache clean --force

COPY docker/obsidian-sync/entrypoint.sh /usr/local/bin/obsidian-sync-entrypoint.sh
RUN chmod 0755 /usr/local/bin/obsidian-sync-entrypoint.sh

WORKDIR /srv/obsidian/vault

ENTRYPOINT ["/usr/local/bin/obsidian-sync-entrypoint.sh"]
