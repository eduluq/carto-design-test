# INSTALL

To start the server, move to the folder carto-test/app and execute the command:
node app.js. It will listen on http://localhost:3000.

IMPORTANT! I've only been able to prove it on my computer. If you have any problem
running it please contact me at edu@eduluque.com

If you want to access from a external device like a mobile phone, use the
local IP of your computer instead of localhost. Please, note that if you use
an external device it should be connected to the same network as your computer.

I've implemented the Sketch version, which is slightly different to the Invision
prototype.

I've built and tested it only on Chrome v62 and Firefox v57. I've noticed some things
doesn't render correctly in ancient navigators but I've not had time to fix it.

# TECH STACK

The server is build with node.js and express. It uses pug as the view engine and
SASS as css preprocessor. The text content of all the documentation is stored in
the file system (/data).

I've used this web stack because it's the one I'm most comfortable working with.

# FILE STRUCTURE

- /app. It includes the web server logic and views.
- /data. It includes the text content and configuration of the documentation.
- /public. It includes the static files (js, css, images...)
- /src. It includes sass files.

# ADD A FILE OR A NEW GUIDE (OR MODIFY)

You can easily add new categories and guides in the docs sections as well as
articles to each one of the guides. If you modified something, you will have
to restart the server.

## Add a new category

Open the file data/config.js to see all the categories rendered in the docs page.
You can add a new category just adding a new object like this:

{
  title: "Builder",
  description: "Unleash the power of location intelligence with self-service, actionable dashboards you can share with your organization.",
  topics: [
    {
      title: "Static",
      img: "static.png",
      api: true
    },
  ]
},

Note that you can also add guides to the array topics.

## Add a new file

All the content of each guide is stored in the data folder inside another directory
with the same name that its title. For example, in the above example all the content
of this guide is located in the directory "static".

To add new files to a guide, open the config.js file inside its folder. There
you can control the side menu elements(title) and submenus (files).

{
  title: "Home",
  files: []
},

To see a working example of how the side menu is related to the config file, connect
to the url: http://localhost:3000/docs/:routing/:getting-started.

If you click on the links, you will notice that there is content only in the getting
started section. Notice that it is the only file in the data/routing folder.

To add content to one of these links, you should add a new file.txt with the same
name you've used in the menu but in lowecase and replacing " " with "-". (It
supports markdown). To see an example, check the data/routing/getting-started.txt

# IMPROVEMENTS

I've used the file system instead of a database because of lack
of time and simplicity to add content. It would be preferable to store the content
on a db and implement an api to easily add and modify the content instead of
having to handle the config files manually.

To include box-info and box-concept in the markdown you have to include the html
tags. It would be preferable to include shortcuts to add them in the file.txt.

Since the app is mainly content that doesn't use to change, it would be better to
implement all views statically in the public directory instead of having to render
then dinamically with each request.
