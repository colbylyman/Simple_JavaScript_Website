# Colby Lyman 2/10/2021 Lab 2
## Summary:
#### The purpose of this lab was to create a functioning 'task list'. The user is able to input new tasks and remove tasks. The list is also able to be sorted based on date and hide tasks that are completed. All the data is stored on the user's local storage, making the webpage save between sessions. All of the functionality was done using JavaScript and JSON objects.

---

## Project Overview

The main webpage
![Website Mainpage](src/images/lab2_mainpage.JPG)
The task list can be sorted by task completion or date
![Website Task List Sort](src/images/lab2_sortingpage.JPG)
All task list data is stored in local storage
![List is on Local Storage](src/images/lab2_localstoragepage.JPG)
UML Diagram 2a
![List is on Local Storage](src/images/lab2a_UML.png)
UMl Diagram 2b
![List is on Local Storage](src/images/lab2b_UML.png))

---
## Questions



***What are two differences and similarities between JavaScript and C++?***
JavaScript and C++ use variables differently. JavaScript's variables are dynamic, so you don't have to specify a type when they are created. JavaScript is also a scripting language, it is not complied once and then executed. Creating and calling functions is very similar between the two languages. Using `for` loops and changing variables is also very similar.

***What is the difference between JSON and JavaScript objects?***
A JSON object is essentially just a string. To be read as an object it needs to be parsed into on object again. A JavaScript object is a more traditional object and can have different values assigned to each member.

***If you open your web page in two different browsers, will changes on one appear on the other? Why or why not?***
The changes will not be saved between browsers. Each browser has it's own, independant local storage.

***How long did you spend on this lab?***
<br/>
2a: 12 hours
<br/>
2b: 3 hours

***How did you protect your site against Cross-Site Scripting? Which type of Cross-Site Scripting did you protect against?***
Whenever the user inputs a '<' or '>' it is stored differently (&lt and &gt). This prevents them from being read as a HTMl opening/closing tag. When outputed to the user, they are again converted into their respective symbols.

***What is a Higher-Order Function?***
A high order funtion is a function the runs other functions. It can take a function as an input or output. It then uses that function to complete some tasks, such as sorting the array, which calls the sort function on sets of two array values until it is sorted.

***What are the differences between the oninput, onkeyup, and onchange events? When do they trigger, when might you use one over the others?***
Oninput and onkeyup are very similar. They both listen for input changes, but onkeyup is when the key is released. Oninput is new, so may not be supported by all browsers. Onchange is when the input is changed, but not based on keystrokes. This is useful when your input is not dependant on keystrokes, such as imputing the date.






---

## Lessons Learned:

***Reading Elements from the DOM***
When a user inputs data it can be read using the input items `ID` and `event listeners`. Knowing what kind of data you are reading and how to save it is important. If you do not parse it correctly, it may be stored in your object as a string and not as it's appropriate values. By using a consturctor, objects can be created and stored properly.

***Saving Unsubmitted content***
There a types of event listeners that work not only on content submitted through a forum, but can read user inputs as they are typed. If they are not collected in the right way, (not using `.value`), then they will be read as only HTML objects. As these objects they cannot be read or used. By using `.value` you can accuratly read your user inputed data.

***Outputting the task list***
The task list will not output the correct data if you do not read and store the objects correctly. Even if you have an array of objects, if you do not read it right, it is unusable. Using `${ this.date }` you can access the data stored within objects and output it to the DOM.

## Conclusions

- Manage JavaScript functions and objects
- Read and parse user input into objects
- Store and retreive data as a JSON object within local storage
- Dynamically change content styling on a webpage
## References

- https://github.com/BYU-ITC-210/lab-2a-colbylyman/tree/master/instructions
- https://github.com/BYU-ITC-210/lab-2b-colbylyman/tree/master/instructions
- https://github.com/BYU-ITC-210
- https://www.w3schools.com/js/js_json_objects.asp
- https://stackoverflow.com/questions/5022887/get-id-of-dom-element
- https://stackoverflow.com/questions/20604299/what-is-innerhtml-on-input-elements
- https://www.w3schools.com/js/js_object_constructors.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
- https://www.npmjs.com/package/substring-getter
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- https://stackoverflow.com/questions/2794137/sanitizing-user-input-before-adding-it-to-the-dom-in-javascript
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions