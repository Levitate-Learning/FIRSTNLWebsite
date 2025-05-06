# FIRST NL Website

This website is developed in NODEJS using EJS. This allows for templates for easier development.

# Adding images

I have added a script to automatically generate various sizes of images for load time efficiency. You can add an image to the public/img_original folder. Then run the image script to generate image files. This script will generate xs,sm,md,lg image sizes for every image recursively in the img_original folder.

```
node img.js
```

# Deploying
the script ejs-static-converter can be used to convert the ejs templates into static html for github pages. The pages.congfig.js file contains the mappings for urls to the respective html file location. This script will render all the pages of the site.

```
 ejs-static-converter.cmd .\pages.config.js
```