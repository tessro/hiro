FROM nousresearch/hermes-agent:latest

COPY docker/hermes/entrypoint.sh /usr/local/bin/hermes-entrypoint.sh
RUN chmod 0755 /usr/local/bin/hermes-entrypoint.sh

ENTRYPOINT ["/usr/bin/tini", "-g", "--", "/usr/local/bin/hermes-entrypoint.sh"]
