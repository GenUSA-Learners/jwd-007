# Practice Forking a Repository from Github

Click 'Fork' first to make your own personal copy of a repository. Then clone your forked copy down to your machine so you can edit the code.

## For this activity your goal is to...

1. Fork the project

    * Begin by _forking_ this project into a personal repository.
    * To do this, click the `Fork` button located at the top right of this page.

2. Clone the project

    * Navigate to your github profile to find the _newly forked repository_.
    * Clone the repository from **your account** into the directory on your computer that you use to keep your projects (ex. `dev` directory).
    * Open the newly cloned project in a code editor (ex. Visual Studio Code).

3. Edit the _cloned_ project

    * `cd` into the `root directory` of your new cloned repository

    * Use your `command line` to add a simple file structure:
      - Add a new file called `index.html`using the `touch` command
      - Add a new folder called `assets` using the `mkdir` command
      - Add a new folder `inside of the assets folder` called `css` -- you'll have to `cd` into the `assets` folder, and then use the `mkdir` command
      - Within the `css folder`, add a file called `style.css`

4. _Push_ new changes to repository

    * From a _terminal_ navigate back to the `root` directory of the _cloned_ project.
    * From the root directory of the project, execute the following commands:
      * `git add .`
        * Add all files in current directory to the staging area
      * `git commit -m 'Add file structure'`
        * Save all staged changes to local repository
      * `git push`
        * Push changes from local repository to remote repository
      * Go back to your Github Profile, navigate to your forked version of the project, refresh the page & you should see the changes you made to the file structure

<!-- #### Part 5 - Submitting assignment

* From the browser, navigate to the _forked_ project from **your** Github account.
* Click the `Pull Requests` tab.
* Select `New Pull Request` -->
