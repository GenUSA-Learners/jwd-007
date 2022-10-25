# Create & Clone a Repository to display your personal projects

Create a new repository on your GitHub account and clone it down to your computer so you can edit and make changes to the project.

## For this activity your goal is to

1. Create a repository
        *Go to <https://www.github.com/new>
        * Create new github repo, make it public and add a README.md (do this on github, DO NOT use the "git init" command)

2. Clone the repo to your computer
        *Use the green "Code" button in your repository, select HTTPS, then copy the url
        * Go to your command line, navigate to the directory on your computer that you use to keep your projects (ex. `dev` directory) and make sure you `cd` into that project folder
        *Use the following command: `git clone repo_url`
            * This will create a new repository in your projects folder
            *Open your projects folder in VSCode by either selecting 'file > open' OR the `code .` shortcut
            * Then `cd` into the `root directory` of the repo you just cloned

3. Make a change to the project so that your repo has a modified status.
        * ex. Use your `command line` to add a simple file structure:
    - Add a new file called `index.html`using the `touch` command
    - Add a new folder called `assets` using the `mkdir` command
    - Add a new folder `inside of the assets folder` called `css` -- you'll have to `cd` into the `assets` folder, and then use the `mkdir` command
    - Within the `css folder`, add a file called `style.css`

4. Push your code back to github.
    - `git status` to check your working directory
    - `git add .` or `git add file_name` to stage your changes
    - `git commit -m "some message about what you did"` to commit those changes creating a version of your code.
    - `git push` to push your changes to the remote repository

5. After you push your changes, go to the repository on github and confirm that you have a new file or see the change to "README.md".
