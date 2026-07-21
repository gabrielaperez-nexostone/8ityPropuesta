export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;
    const cleanPath = url.pathname.replace(/\/$/, "");
    response = await env.ASSETS.fetch(new Request(new URL(cleanPath + "/index.html", request.url), request));
    if (response.status !== 404) return response;
    return env.ASSETS.fetch(new Request(new URL("/404.html", request.url), request));
  }
};
