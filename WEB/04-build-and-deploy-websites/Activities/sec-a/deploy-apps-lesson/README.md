# Building Web Apps Debrief

A lesson for learning to build apps and deploy to a service like GH Pages or Netlify

## Getting Started

1. Everyone will do this assignment however you can work in groups to collaborate:
  
    * FORK this repository onto your github
  
    * Copy the https URL from your FORKED repo

    * Navigate to either a standalone Git Bash terminal or the integrated terminal in VS Code on your local machine and `cd` to a place you wish to clone this activity to work on it (either your personal coding development folder or `Desktop` on MacOS or `OneDrive/Desktop` on Win, **NOT** in ~ )
  
    * Once where you need to be in bash, run `git clone ` followed by the URL you copied from your forked copy of this github repository
    
    * Make sure and run `cd deploy-apps-lesson` to move into the repository folder

    * In VSCode, select `File` in the top right, and select `Open Folder` then find the folder you cloned named `deploy-apps-lesson` and open it, **OR**
  
    * Alternatively after running `cd deploy-apps-lesson` in the terminal run `code -a .` to directly open the folder in the window
  
    * Familiarize yourself with the code first in `index.html`. 
  
    * Read the comments in the file and add the corresponding text content to customize the page to your own info, pay attention the comments for instructions
  
    * Move to the `assets` folder, then the `css` folder and finally click on the `style.css` file to open in the editor window! Uncomment the color variables lines and feel free to change the `rgb` color values to change the color scheme

    * Scroll to the bottom of the stylesheet to the media queries and put in comments an explanation of how we are affecting style on different screens
  
    * Save all files that are marked as having Unsaved changes
  
    * Go back to the terminal make sure you are inside `deploy-apps-lesson` directory then run 
    ```
    git add .
    git commit -m "Refactors resume page and stylesheet"
    git push origin main
    ```

2.  Deploy your app on GH-Pages by selecting on your Github the main branch under `Settings --> Pages`, under Branch change the dropdown to the `main` branch, then click `Save` - navigate to the link provided, **OR**

3. Navigate to [Netlify](https://app.netlify.com) sign up for an account by authenticating thru the Github option, and follow these directions [step-by-step-guide-deploying](https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/)

4. When you are finished with the activity, drop a url link to your deployed app in the Chat or in the thread on our student Slack channel!

5. At the end of the allotted time, we will have a few learners share their deployed apps. You will be expected to raise your hand and guide the class to your deployed app.
