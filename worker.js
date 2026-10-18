// Serves every page in the theme the visitor picked, saved in a cookie my photo site shares,
// so the choice follows them across both sites. With no choice saved, pages follow the device.
// Fonts, the resume, and other files come straight from the built site, without running this.

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const choice = url.pathname.match(/^\/theme\/(light|dark)$/);
    if (choice) return saveTheme(choice[1], url);

    // Asks by path alone, so a browser's "is my copy still current?" never gets a page in the old theme
    const page = await env.ASSETS.fetch(url.origin + url.pathname);
    if (!(page.headers.get("Content-Type") || "").startsWith("text/html")) return page;
    return new Response(withTheme(await page.text(), request.headers.get("Cookie")), {
      status: page.status,
      headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" },
    });
  },
};

// Saves the visitor's theme for a year and sends them back to the page they were on, like my photo site does.
function saveTheme(theme, url) {
  const back = url.searchParams.get("back") || "/";
  const location = back.startsWith("/") && !back.startsWith("//") ? back : "/"; // Never another site
  // The cookie also covers my photo site, which shares the domain
  const domain = url.hostname.endsWith("cameronwright.dev") ? "; Domain=cameronwright.dev" : "";
  return new Response(null, {
    status: 303,
    headers: {
      Location: location,
      "Set-Cookie": `theme=${theme}; Path=/; Max-Age=31536000; SameSite=Lax; Secure; HttpOnly${domain}`,
      "Cache-Control": "no-store",
    },
  });
}

// Marks the saved theme on <html>, where the stylesheet looks for it.
function withTheme(html, cookie) {
  const theme = /(?:^|;\s*)theme=(light|dark)/.exec(cookie || "")?.[1];
  return theme ? html.replace('<html lang="en">', `<html lang="en" data-theme="${theme}">`) : html;
}
