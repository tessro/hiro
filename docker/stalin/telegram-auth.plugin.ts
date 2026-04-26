import type ProxyPlugin from "../../../stalin/plugins/proxy";

const dummyPrefix = "/botdummy-telegram-token/";

const plugin: ProxyPlugin = {
  async onRequestHeaders(req, ctx) {
    if (req.url.scheme !== "https" || req.url.host !== "api.telegram.org") {
      return { action: "continue" };
    }
    if (!req.url.path.startsWith(dummyPrefix)) {
      return { action: "continue" };
    }

    const realToken = await proxy.secrets.get("telegram_bot_token");
    const rewrittenPath = `/bot${await realToken.text()}/${req.url.path.slice(dummyPrefix.length)}`;
    const upstream = req.url.full.replace(req.url.path, rewrittenPath);

    await proxy.audit.write({
      type: "auth.swap",
      message: "Replacing placeholder Telegram bot token in request path",
      fields: {
        host: req.url.host,
        requestId: ctx.requestId,
      },
    });

    return {
      action: "route",
      upstream,
    };
  },
};

export default plugin;
