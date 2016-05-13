Go to the IcoMoon app (https://icomoon.io/app).

You can import the current  `selection.json` back to the IcoMoon app using the *Import Icons* input (or via Main Menu → Manage Projects) to retrieve your icon selection. It'll be called "icomoon" even though we're using Font-Awesome. If only IcoMoon icons are shown on the page, scroll down to the link "Add Icons from Library" and choose Font-Awesome ("Add" button).

To select from Font-Awesome, make sure the "select" button at the top of the page is selected (it looks like a mouse arrow in a box, has an invisible name of "select") and click on icons you'd like to add. Selected icons get an orange border and white background. Then go back to your "icomoon" group and *de-select* the whole set, so your new icons are the only selected icons on the whole page. Click the stripey bar (button with the invisible name of "Menu") to show a submenu, and choose "Copy selection to set." Now re-select  *all* the icons in your "icomoon" group (the new ones and the original ones). The sticky menu at the bottom of the screen has a link "Generate Font" which will give you both new font files and a new `selection.json` in a .zip file.

Move the zip file to this directory (/misc/icomoon).

Run `icomover.sh` script with the zip file as the argument.

Update the  icons.md page with the new icon.

Update /scss/_icons.scss with the new styles.
