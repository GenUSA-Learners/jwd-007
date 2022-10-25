# jwd-nat-flex-07


Class repository for the JWD National Flex 07 cohort.

This repository will be updated as we go through the program with new information, resources, and activities.

## Directions for Use

- Clone this repository down to your computer
- Create a 'working' branch to work on
  - You can do this with the
  `git checkout -b working` command
  **OR**
  `git branch working`
  followed by `git checkout working`
  - ***You will be completing activities and making any other changes to the repository on your new `working` branch***
- When you need to pull new changes and activities, follow the steps below:
  - Since you'll be in your `working` branch, you'll need to checkout the main branch
    - Run `git checkout main`
    - Run `git pull`
    - Run `git checkout working`
    - Run `git merge main`
  - This should pull all the new changes into your working branch

***NOTE:***
You will not be running any of the following commands on the Main branch of this repository:

- git add
- git commit
- git push

This will cause problems when pulling any new changes or activities.

- *If you were working on the main branch by accident, you may have to stash your changes so that you can pull.* You can do this by following the steps below:
  - From the `main branch`, run `git stash`
  - Then run `git pull`
  - To get your changes back, run `git stash pop`
  - To get all the changes back into your working branch, run `git checkout working` followed by `git merge main`
  - To restore your local main branch to it's unchanged state so that it matches the main branch on github (`origin main` -- this is the remote main branch) and you don't have this problem the next time you try to pull new activities...
    - Run `git checkout main`
    - Then `git fetch origin`
    - followed by `git reset --hard origin/main`
