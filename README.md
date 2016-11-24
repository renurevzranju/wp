## Website Performance Optimization portfolio project

Front-End Web Developer Nanodegree Course Fourth Project <a href="http://www.udacity.com" target="_blank">Udacity</a>:<br>
Optimized <a href="https://renurevzranju.github.io/websiteoptimization/">index.html</a> to achieve PageSpeed Insight score of 90 and Optimized script files (main.js) to achieve 60 fps
in <a href="https://renurevzranju.github.io/websiteoptimization/views/pizza.html">pizza.html</a>.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

- Minify the CSS and JS files using Grunt.
- Optimize images with grunt. I also tried using <a href = "http://compressjpeg.com/">Image Compressor</a> to compress my images manually.
- Eliminate the Render-Blocking CSS and Parse-Blocking JS:
	-Inlining the style.css in index.html
	-media query added to print.css(media = "print")
	-Added Google Fonts with script to load asyncronoulsy in the footer from https://www.lockedowndesign.com/load-google-fonts-asynchronously-for-page-speed/
	-Google Analytics script added in the footer

####Part 2: Optimize Frames per Second in pizza.html

- Minify CSS and JS, optimise images, inline CSS, add viewport configuration
- Chane querySelector to querySelectorAll to make it faster
- Deleted determinDx function in order to change changePizzaSizes and also loop is optimized to put newWidth in each randomPizzas.
- Optimize updatePositions function to avoid forced synchronous layout. Phase have five values so, the phase value is put outside the loop in the form of array.

--------------------------------------------------------------
### To run the application

1. Download the repository <a href="https://github.com/renurevzranju/websiteoptimization">Web_Optimization</a> to your Desktop
2. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights and Chrome DevTools!

Or you can use the project uploaded in this link: <a href="https://renurevzranju.github.io/websiteoptimization/" target="_blank">Project 4</a>

-------------------------------------------

### To create the production version

To build the production version, you need to have Grunt installed in project folder.
You also need the /test/ folder, and the gruntfile.js and package.json files in the root. 

Then you go to the console, go inside the project folder, type "grunt" and click Enter.

The /dest/ folder will be created, with all the HTML files, and the subfolders of css, js and img optimized and minized. 

To install grunt, <a href="http://gruntjs.com/getting-started" target="_blank">follow this instructions</a>. 

-----------------------------------------------
###License

this project is licensed under the [MIT License](license.txt)

-------------------------------------------
