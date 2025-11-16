How to Use:

1. Save the file
/plugins/tailwind.custom-theme.js

2. Add it to tailwind.config.js

   
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("./plugins/tailwind.custom-theme"),
  ],
};


3. It's now active. Use it like:
   
<div className="card p-6">
  <h3 className="text-lg font-semibold">Hello</h3>
  <p className="text-sm text-muted-foreground">Card content...</p>
</div>

<button className="btn-primary">Click</button>

<input className="input" placeholder="Email" />




This plugin preserves everything from your reference:

✔ Same HSL-based system
✔ Same scales (border, radius, spacing)
✔ Same semantic tokens
✔ Same button & card feel
✔ Works in light & dark modes
