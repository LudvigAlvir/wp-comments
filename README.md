# wp-comments

In wordpress admin panel.

settings>discussion uncheck "Comment author must fill out name and email", "Users must be registered and logged in to comment" and "Comment author must have a previously approved comment"

If using acf, post types > "your post name" > advanced settings > general > supports > check the box for comments.

Make sure the box for allowing comments is checked on your posts.

<a href="https://developer.wordpress.org/reference/hooks/rest_allow_anonymous_comments/">Link for documentation about allowing anonymous comments</a>

In your wordpress installation:
wp-includes>rest-api>endpoints>class-wp-rest-comments-controller.php

line 465:
"$allow_anonymous = apply_filters( 'rest_allow_anonymous_comments', false, $request );"
Change to >
"$allow_anonymous = apply_filters( 'rest_allow_anonymous_comments', true, $request );"

documentation for sending comments and query strings allowed <a href="https://developer.wordpress.org/rest-api/reference/comments/">Link</a>
