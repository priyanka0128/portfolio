# Project Images

Drop screenshots, dashboards, diagrams or mockups for your case studies here.

## How to reference them

In `src/data.js`, under each project, add them to the `images` array:

```js
images: [
  {
    src: "/projects/my-screenshot.png",
    caption: "Landing page mockup"
  },
  {
    src: "/projects/dashboard.jpg",
    caption: "BI dashboard overview"
  }
]
```

## How to add links

Same file — use the `links` array:

```js
links: [
  { label: "Live Demo",       url: "https://mysite.com",       type: "external" },
  { label: "GitHub Repo",     url: "https://github.com/...",  type: "github" },
  { label: "BI Dashboard",    url: "https://lookerstudio...", type: "dashboard" },
  { label: "Read Paper (PDF)", url: "/docs/paper.pdf",        type: "doc" }
]
```

Supported `type` values: `github`, `doc`, `external`, `dashboard`.

## Tips

- Keep images under 500 KB — compress at tinypng.com first
- PNG for screenshots with text, JPG for photos
- Aim for 1600px wide max — larger is wasted
