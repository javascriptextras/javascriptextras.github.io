# JavaScript eXtras Website
Now this is where JSX's website is.
It's simple. Just text, a download link, that's it.

## Troubleshooting
### Lost your module?
Here, you will need a good memory so remember this for ***all of your code***, please remember to add the `type="module"` to your script tags (`<script>`).
I forgot and spent in total about 8hours debugging! Only for me to realize that...
it should be like:
```HTML
<!DOCTYPE html>
<html>
  <head>
    <!-- Your head stuff here! -->
  </head>
  <body>
    <!-- Body stuff, please enter in this gate! -->
    <script src="whatever_filename_you_can_think_of.js" type=module></script>
  </body>
</html>
```

### Got an issue with your relatives?
Also, for those relative file paths, just add a `/` to the start, so like this:
```JS
import { ver } from "/main.js"
## Your code shall continue into the woods...
## Oooh, spooky... GHOST!
## Not giving you anymore code.
## Why?
## BECAUSE I DON'T WANT TO STEAL IT ALL!!
## fine... ):
```
