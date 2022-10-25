# git branching activity

[git cheat sheet](https://docs.google.com/document/d/1VJGwcFLIMXwe2YI8xgXPnuZLCxi6yp42/edit?usp=sharing&ouid=104850350077467742345&rtpof=true&sd=true)

- Start by creating a new repo, you can call it `git-branch-practice`.

- clone the repository to your preferred directory on your computer.

- open the repository in your VScode by using the `code .` command while in your repo in your terminal.

- Once your repo is open in VScode add an `index.html` file and use the `!` shortcut to create your starting code.

- add an `<h1>Hello World</h1>` to the body of the html and then open it in a live server to check that it works.

- If you are on windows please take a moment to set your default shell in VScode to `git bash` by following [this walk-though](https://stackoverflow.com/questions/44435697/vscode-change-default-terminal), use the first green check mark response. If you are on mac, please skip this step.

- push your changes to github. Remember to check the status, add your changes to the staging area, and then commit your changes before you push. If you forget these commands use the cheat sheet that is linked above.

- after visiting github and checking that you successfully pushed the changes to the remote repository come back to your VScode project.

- create a new branch for your project by using this command in the terminal `git branch branch-name` where "branch-name" is essentially a placeholder for the name of your branch.

# creating branches and moving from branch to branch

- move to your new branch using the `git checkout branch-name` command.

- notice that this new branch has the same code as your main branch. Use the command `git branch` to see all branches.

- move back to the main branch by using the command `git checkout branch-name` where in this case "branch-name" would be "main"

- while in the "main" branch add another part to the body of the html `<h1>I am doing it!</h1>`

- after adding to your html, check the status, stage your changes, and then commit them. Don't worry about pushing them right now.

- now create a new branch AND move to it using one single command `git checkout -b branch-name`, this command creates a new branch and moves you there at the same time.

- notice that this branch has the updated html file.

- move to your first branch that you created, and notice that it does not have the current html changes.

# updating branches by pushing and pulling

- move to your main branch and push it to github. Make sure there is nothing that needs to be committed first.

- after you successfully push your main branch to github move to your first branch that has out of date code.

- on your first branch with the out of date code use this command in the terminal to update the branch `git pull origin main`. This command is slightly different then when we are on the "main" branch because we need to specify where we are pulling from and what branch we want. *** "git pull from-where what-branch-from-there"

- on this same branch add this to the body of your html `<p>I do not exist on the main branch...yet</p>`

- after adding the code to the html, check the status, add the changes to the staging area, commit your changes, then push your branch. Since you are pushing a branch other then the main branch you will use a slightly different command. Use `git push origin branch-name` where branch-name is the name of the branch. *** "git push to-where which-branch"

- go to github and look for the Green "Compare and pull request" button, it will be on the "<>Code" tab.

- after clicking the Green "Compare and Pull Request" button, click the next green button to "Create Pull Request"

- on the next page you should see another green button called "Merge pull request", click that and then follow up by clicking "Confirm Merge"

- if you go back to your "<>Code" tab you should see the changes from your branch merged into main.

