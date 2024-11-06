# JavaScript eXtras Website
Now this is where JSX's website is.
It's simple. Just text, a download link, that's it.

## Troubleshooting
### Forgot the module?
Now please remember to add the `type="module"` to your script tags (`<script>`).
I forgot and spent in total about 8hours debugging! Only for me to realize that.
It should be like:
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

### Relative issue?
Also, for those relative file pathsk, just add a `/` to the start, so like this:
```JS
import { ver } from "/main.js"
## Your code CONTUINUES into the WOODS...
## Oooh, spooky... GHOST!
```
