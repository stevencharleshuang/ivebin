# IveBin Travel Blogger

# Project Overview

| Day | Deliverable |
| ------------ | ------------- |
|   Day 1 Wednesday |   Wireframes / Priority Matrix    |
|   Day 2 Thursday  |   Project Approval / Pseudo Code  |
|   Day 3 Friday    |   Basic Clickable Model   |
|   Day 4 Saturday  |   Working Prototype   |
|   Day 5 Sunday    |   Final Working Project / MVP |
|   Day 6 Monday    |   Bugs / Styling / Post MVP   |
|   Day 7 Tuesday   |   Presentations   |

## Project Description
IveBin is a travel blogging app that allows users to share their stories along with pictures of their travels. Post MVP, users are able to reference locations they have visited using Google's Places API and include information such as address, hours, price level, ratings and reviews.

* [Youtube (Presentation)](https://youtu.be/F6xA0ToL07M)
* [Heroku (App Deployment)](https://ivebin.herokuapp.com)

## Wireframes
* [Wireframe Image 01 - Whiteboard - General Overview](http://res.cloudinary.com/dk1cgfxkn/image/upload/v1524070206/Wire_Frame_001.jpg)


## Priority Matrix
* [Priority Matrix](https://res.cloudinary.com/dk1cgfxkn/image/upload/v1524073211/Priority_Matrix.jpg)

## ERD
* [ERD](http://res.cloudinary.com/dk1cgfxkn/image/upload/v1524153750/Project_2_ERD_1.jpg)

## Artifacts
* [Day 6 Standups](http://res.cloudinary.com/dk1cgfxkn/image/upload/v1524501945/20180423_Standups_Artifact.jpg)

## Blog Components

### User Stories


#### Landing Page

As a user, when I reach the Landing Page, I want to login or sign up for a new account. I want the option to view a directory of users with public blogs.

#### Directory Page

As a user, when I reach the directory of public blogs, I want to see a gallery of user accounts that link to their respective profiles.

#### Profile Display

As a user, when I've clicked on a profile from the Directory Page, I want to see a user's profile with a user's avatar image along with links to the user's blog posts.

#### Blog display

As a user, when I reach a user's blog, I want to see a blog post with a title, text content, an image related to the text content and links to previous blog posts

#### User Account Page

As a user, once I've logged in or signed up for a new account, I want to see my profile details along with my blog history. I want the option to create a new blog post as well as edit or delete my account or any old blog post.

#### Create New Blog Post

As a user, when I choose to create a new blog post, I want to be able to title my post, submit a picture to go along with the post and enter new content for the body of the blog post.

## Features

### Clickable Model
*   Landing page: Login Button, Register New User, Public Directory of Users
*   Public Directory of Users: Gallery of usernames, links to Individual Public Profiles
*   Individual Public Profiles: Display user's username, email and avatar, sample list of blog entries links to individual public blog entry
*   Individual Public Blog Entry: Input text fields, Post button, Edit Button, Delete Button

### Working Prototype
*   User signup
*   User login
*   User profile with ability to edit or delete account
*   Display users
*   Blog entry creation with ability to edit or delete
*   Display blog entries from a single user
*   Display one blog entry from a single user

### MVP
*   User signup
*   User login
*   User profile with ability to edit or delete account
*   Display users
*   Blog entry creation with ability to edit or delete
*   Display blog entries from a single user
*   Display one blog entry from a single user
*   Flex Box for page designs

### POST MVP
*   API integration for displaying visited locations information
*   WYSIWYG Editor for blog entry content
*   Design enhancements
*   Blog commenting functionality
*   Travel costs or money spent integration
*   Authorization for selective profile viewing


## Functional Components
|   Component   |   Priority    |   Est Time (Hrs)  |   Time Invested (Hrs) |   Actual Time (Hrs)   |
|   --- |   :---:   |   :---:   |   :---:   |   :---:   |
|   Database Creation   |   H   |   1   |   1   |   0.2 |
|   Create User Table   |   H   |   0.5 |   0.5 |   0.5 |
|   Create Blog Table   |   H   |   0.5 |   0.5 |   0.3 |
|   Create New User - Register New User |   H   |   2   |   1   |   3   |
|   Read Users - Users Directory    |   H   |   1   |   1   |   1   |
|   Read User Info - Profile Page   |   H   |   1.5 |   1   |   1   |
|   Update User Info    |   M   |   2   |   2   |   3   |
|   Delete User - Account Deletion  |   M   |   0.5 |   0.5 |   0.5 |
|   Create New Blog Entry   |   H   |   2   |   2   |   3   |
|   Read Blog - Show All Blog Entries From One User |   H   |   2   |   2   |   0.8 |
|   Read Blog - Show One Blog Entry From One User   |   H   |   1   |   1   |   1   |
|   Update One Blog Entry From One User |   M   |   2   |   2   |   3   |
|   Delete One Blog Entry From One User |   M   |   0.5 |   0.5 |   0.5 |
|   Authentication - Login - Research   |   M   |   2   |   2   |   1.5 |
|   Authentication - Login - Planning   |   M   |   0.5 |   0.5 |   0.5 |
|   Authentication - Login - Implementation |   M   |   2   |   2   |   2   |
|   Authorization - Public - Private Page Access - Research |   M   |   1   |   1   |   1   |
|   Authorization - Public - Private Page Access - Planning |   M   |   0.5 |   0.5 |   0.7 |
|   Authorization - Public - Private Page Access - Implementation   |   M   |   1.5 |   1   |   2   |
|   Flex Box    |   L   |   0.5 |   0.5 |   1   |
|   Video Presentation  |   L   |   1   |   1   |   2   |
|   Post MVP: API Integration - Research    |   M   |   1   |   1   |   1   |
|   Post MVP: API Integration - Planning    |   M   |   0.5 |   0   |   0   |
|   Post MVP: API Integration - Development |   M   |   1.5 |   0   |   0   |
|   Post MVP: Design    |   H   |   1.5 |   1.5 |   2   |
|   Post MVP: Comments Section  |   L   |   1.5 |   0   |   0   |
|   Post MVP: Selective Blog accessibility - Planning   |   L   |   1   |   0   |   0   |
|   Post MVP: Selective Blog accessibility - Development    |   L   |   1   |   0   |   0   |
|       |       |       |       |       |
|   Sum Hours   |       |   33.5    |   26  |   31.5    |       |
|   Flex Box    |   L   |   0.5 |       |       |
|   Video Presentation  |   L   |   1   |       |       |
|   Post MVP: API Integration - Research    |   M   |   1   |       |       |
|   Post MVP: API Integration - Planning    |   M   |   0.5 |       |       |
|   Post MVP: API Integration - Development |   M   |   1.5 |       |       |
|   Post MVP: Design    |   H   |   1.5 |       |       |
|   Post MVP: Comments Section  |   L   |   1.5 |       |       |
|   Post MVP: Selective Blog accessibility - Planning   |   L   |   1   |       |       |
|   Post MVP: Selective Blog accessibility - Development    |   L   |   1   |       |       |
|       |       |       |       |       |
|   Sum Hours   |       |   33.5    |   7   |   9.2 |

## Helper Functions

| Function | Description | 
| --- | :---: |  
| Login  | This is the login function that was resppropriated from Ron and Jason's example. It will be helpful in future apps requiring authentication.  |

## Additional Libraries

* Express
* Pg Promise
* bodyParser
* Nodemon
* Morgan
* Dotenv
* Express Session
* Method Override
* Faker
 
## Code Snippet

// One User Private Profile
privateRouter.route('/users/:id')
  .get(AuthService.loginRequired, privateController.getUserEntries,
    publicController.getDirectory, privateViewsController.showPrivateUserProfile)
  .put(AuthService.loginRequired, privateController.editUserInfo)
  .post(AuthService.loginRequired, privateController.postNewEntry)
  .delete(AuthService.loginRequired, privateController.removeUser)

  I'm most proud of my routes setup as this was something I struggled with this unit.
I'm happy with how clean my code came out syntactically speaking.

## Installation Instructions

After forking and cloning down the repo, run npm i to install the dependencies. 
It is likely that you will have to create a .env file with the following code within: 
SERVER_SECRET=secret
DB_NAME=travel-blog
Once that is done, Installation should be complete and you should be able to run the server using 'npm run dev'

## Change Log

I was unable to integrate an external API and a wysiwyg editor for blog content due to time constraints. Other than that, I stayed on course for this project.

## Issues and Resolutions

**ERROR**:       
Cannot GET … when trying to PUT

**RESOLUTION**: 
Was not implementing method-override correctly

**ERROR**:       
Cannot PUT public/users/10/public/users/10 …

**RESOLUTION**: 
Problem with action="" missing / at beginning

**ERROR**:       
Refused to apply style from 'http://localhost:3000/public/css/style.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.                   
**RESOLUTION**: 
Set Absolute path to css i.e. /../css/style.css instead of ../css/style.css

**ERROR**:       
SyntaxError: Unexpected token {

**RESOLUTION**: 
extra } after object function

**ERROR**:       
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

**RESOLUTION**: 
Multiple responses

**ERROR**:
error: invalid input syntax for integer: "Do ic zetawde ba eboztog        
                   
**RESOLUTION**: 
Trying to return data in improper format

**ERROR**:       
Route.get() requires a callback function but got a [object Undefined]

**RESOLUTION**: 
Incorrect call in route to nonexistent function

**ERROR**:       
error: syntax error at or near "$"

**RESOLUTION**: 
mistake in createNewEntry params, fixed to req, res, next

**ERROR**:       
Error: Property 'date_created' doesn't exist.

**RESOLUTION**: 
mistake in createNewEntry params, fixed to req.body

**ERROR**:       
I am error:  { error: date/time field value out of range: "123123123", I am error:  { error: invalid input syntax for type date: "reeqwr"

**RESOLUTION**: 
Needed to specify a real date

**ERROR**:       
I am error:  Error: Property 'user_id' doesn't exist.
                   
**RESOLUTION**: 
Needed to specify user_id

**ERROR**:       
error: time zone "gmt-0400" not recognized

**RESOLUTION**: 
Table Schema Issue, removing Date spec

**ERROR**:    
"  showHomepage(req, res) {
  ^^^^^^^^^^^^

SyntaxError: Unexpected identifier"   
                   
**RESOLUTION**: 
module.exports object missing , after }

**ERROR**:   
"""error"": {},
""message"": ""publicDb is not defined"""    
                   
**RESOLUTION**: 
Syntax Error, "publicDB"

## Unsolved Problems

**Updating User Details due to Hashing**
Because the password was hashed upon creation, it's near impossible to update a hashed password.

**Linking Hijinx**
Sometimes the links would produce unexpected results, most likely due to syntax errors in setting route targets.

## Sources
* Originally Intended for broken image replacement: 
[Question Mark API for broken image replacement](http://pngimg.com/uploads/question_mark/question_mark_PNG129.png)

* Used for Authentication-Authorization research and sample: 
[Sessions-Authentication Tutorial](https://github.com/RonAddy/Sample_Express_App_Auth)

* Used for Authentication-Authorization research and sample: 
[Jason Seminara's lesson on sessions](https://git.generalassemb.ly/wdi-nyc-rover/js-node-sessions-lesson)

* Used for creating database dummy data: 
[Convert CSV](http://www.convertcsv.com/)

* Used for image sample in user creation: 
[NYC Image](https://1dib1q3k1s3e11a5av3bhlnb-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/NYC-aerial-view.jpg)

* Used for background audio in presentation: 
[Background Music during presentation](https://soundcloud.com/steve-moneymoney)
