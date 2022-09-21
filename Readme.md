## About The Project

This is a study planner designed and impemented by Harshit Agarwar for StrategyCo.Global . One can plan a study session using this webapp and also set the cap of maximum students allowed in the session. 



### Dependencies

* npm
  ```sh
  npm install npm@latest -g
  ```
* Mongodb

  ```sh
    sudo apt update
    sudo apt install mongodb-org
  ```
* Express JS
  ```sh
    npm install express --save
  ```

    

<p align="right">(<a href="#readme-top">back to top</a>)</p>



#Considerations

##DataBase Design 

In our database, there are two tables: one for user ids and passwords and the other for sessions.
In the session, we choose title, subject, start time, and other attributes based on the question. In maxnum is a new field with a counter currnum that, when reached, prevents any other user from registering to the session.

We use three fields in the User table database: username, email, and password. We do this to ensure that each username is unique because it is stored as a key value pair and to avoid user data clashes.


##Security Considerations

* We can use Google authentication to ensure that no one else signs in and changes other sessions. 
* Using a secure website host 
* Adding HTTPS and SSL site protocol for added security.

* Examining user access control

* Password Control, in order to prevent people from using simple strings of characters as passwords, we can add a 'password strength metre' as well as a check to ensure that the passcode is a combination of chars, numbers, and special characters.

* Instead of simply storing the password as a string, we can use a cryptographic technique to secure it.

## Tech Stack Used

  <details>
  <summary>React JS</summary>
  <ol>
    <details>
    <summary>
    Maintainability
    </summary>
    <p>React JS is javascript library with many modules and plugins that one can easily use and incorpate in it's code.</p>
    </details>
    <details>
    <summary>
    Readability
    </summary>
    <p>Most front-end developers are familiar with React which makes it easy to maintain. Although it is sometimes difficult to read due to it's composite nature</p>
    </details>
    <details>
    <summary>
    Scalabilty
    </summary>
    <p>
    React is well-suited to large and complex applications. It is simple to add new code, change existing code, and fix bugs.
We can also use react to add extra features to the front page to make it more functional and elaborate. 
    </p>
    </details>
  </ol>
</details>

<details>
  <summary>Express JS</summary>
  <ol>
    <details>
    <summary>
    Maintainability
    </summary>
    <p>Express.JS is a Node.JS framework, which means that most of the code required by programmers to work with has already been written for them and can be easily maintained. </p>
    </details>
    <details>
    <summary>
    Readability
    </summary>
    <p>Express JS is easy to read and transform.</p>
    </details>
    <details>
    <summary>
    Scalabilty
    </summary>
    <p>
    One can easily build upon and expand using Express JS as many pre-written codes can be found from available open source resources. 
    </p>
    </details>
  </ol>
</details>
<details>
  <summary>MongoDB</summary>
  <ol>
    <details>
    <summary>
    Maintainability
    </summary>
    <p>MongoDB is easy to read and maintain as it has a simple structure. </p>
    </details>
    <details>
    <summary>
    Readability
    </summary>
    <p>MongoDP structure is easy to read and use, and makes it easy for developers to understand project code and make changes/p>
    </details>
    <details>
    <summary>
    Scalabilty
    </summary>
    <p>
    Document Structure of MongoDB is more flexible compaired to others, making it easy for developers to expand upon. Although one can switch to DynamoDB in case of larger datasets or userbase.
    </p>
    </details>
  </ol>
</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

