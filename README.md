# JavaScript eXtras Website
Now this is where JSX's website is.
It's simple. Just text, a download link, that's it.

# The module itself
Ok, you know what the websie is. Now JSX.

## Some code I forgot about


## Troubleshooting
I'm so tired of debugging, I'm ready to bug out. Anyways I'm not a professional programmer, but I'm learning.
### Lost your module?
Oh no! You've lost your module! It's a tragedy! A catastrophe! Don't worry, though. There's a simple solution. Just add the `type="module"` attribute to your script tag. It's like a magic spell that will bring your module back to life. Here it is:
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

### Got an issue with your relative paths?
Oh no!! My paths are broken! What will we do? Ok, ok calm down... just remember to add a little mini `/` (to head to the Website root!) in front of the paths (Tip! It can also be this little midget for one folder back: "../")

```JS
import { ver } from "/main.js"
```

It's like adding a magic wand to your code, guiding it to the right path. Remember, without that slash, your code is lost, wandering aimlessly in the vast expanse of your file system.
However, you can't ask your code a question, honesty.

Now you're out of the woods, hopefully.
