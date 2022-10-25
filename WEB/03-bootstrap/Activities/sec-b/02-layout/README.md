# Bootstrap Layout

 - Make sure to start by creating a new branch for this activity

- Grab the "CSS" `<link>` from [bootstrap](https://getbootstrap.com/)
    - click "Get Started" to find what you need
    - copy the CSS link and paste it in the designated spot in the index.html

- Grab the JS "Bundle" `<script>` from the same page
    - copy the Bundle and paste it in the designated spot in the index.html

## Set up the layout for your page

- Start by creating a `<div>` with an attribute of `class="container"`
    - Containers are the most basic layout element in Bootstrap and are required when using the default grid system. Containers are used to contain, pad, and (sometimes) center the content within them. While containers can be nested, most layouts do not require a nested container.

- Then, add another `<div>` inside of the container div and give it an attribute of `class="row"`
    - The bootstrap grid is made up of a container that holds rows, and rows that hold columns, and columns that hold content. Each row is a new line on our webpage and can hold 12 columns or any configuration of columns that are sized to equal 12.

- Then, add 3 `<div>`'s inside of the row div and give them all an attribute of `class="col"`
    - When building grid layouts with bootstrap all content will go into a column. If you do not put the content into a column it may work, but it could cause un-forseen errors.

- Add a `<p>` tag to each column that you have created and give each column some content. Ex: Column 1, Column 2,Column 3.
    - assign each column a background color by using the `bg-<color>` class from bootstrap. You will need to use the search-bar in bootstrap to find all the colors you can use.
    - currently the columns are taking up the entire width of the page and are evenly sized. Change the class names of your columns to change their sizing. Ex: `col-2` or `col-10` instead of just `col`. Notice the effect this has on any column you did not change the size of.
    - try making the total value larger then 12 of all the column sizes and see what happens.
    - try making all three columns `col-2` and then use the bootstrap `justify-content-<type>` class on the parent to shift everything to the right, to center everything, to create space around the columns, and space between them.
    - create a style.css file and `<link>` it under the bootstrap link in the `<head>` (order matters). Create a selector for the parent div that holds these 3 columns and set the height to 300px. Then use the `align-items-<type>` bootstrap class in that parent div to adjust the vertical alignment of the columns.
    - now try to adjust the individual columns by adding the bootstrap class of `align-self-<type>` to a column class to make adjustments to it.

- Delete the content from the 3rd column you created and add a `<div>` inside of the it and give it an attribute of `class="row"`
    - You can create more rows inside of columns and then you can create columns inside of that new row. You still get 12 column worth of spacing.
    - add 3 more columns inside of this new row and do like you did before. Give them content, give them a background color, notice how much space they take up now that they are in a nested row.
