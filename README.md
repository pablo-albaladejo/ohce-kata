# ohce-kata
## A Node js CLI repository

### Background:
#### What is a palindrome word
A palindrome is a word or a number that reads the same backward as forward. Punctuation and spaces between the words or lettering is allowed
#### What is CLI
CLI is a command line program that accepts text input to execute operating system functions.

This repo is a command line program (CLI) creating by Node.js, to test if a word is a palindrome word.

### How to use
You should:
- clone this repository to your local machine.
- Open the repository with your favourite text editor.
- Fnd your local repository folder path in the terminal, then run ```npm i```, it will install all the necessary packages for the programme.
- When the instalation complete, run ```npm start```  in the terminal to start the programme

### Description
- After the user run ```npm start```, the programme will be initialized.
- First, the programme will ask user's name. After typing the name, the programme will greet the user with his/her name, and according the current time, it will use a propiate greeting phrase: ```Good morning``` ```Good afternoon``` ```Good night```, this is the NAME STATE of the programme, no matter what name the use typed in, the programme is clover enough to not to compute if the name is a palindrome word o not.
- Then the programme will ask the useR to type a word. The programme has transited to WORD STATE, in this state the programme will compute every word that the user types in, to see if the input word is a palindrome word or not. If it is, the programme will first print the word that the user has typed in, then it will congratulate the user. If it is not, the programme will only print the input word. In both cases, the programme will continue asking the user to type another word, until the user cancel it.
- User can use command ```Stop!``` to get out of the programme. Just to remind that, in order the cancel the programme, the command should be identical to the word ```Stop!``` with the uppercase ```S``` in the beginning and ```!``` in the end. Otherwise, the programme will consider it as a normal word and will compute it if it is a palindrome word.

### How to test
- When the instalation complete, run ```npm test``` in the terminal to start both unit and e2e tests
- It is possible to run just unit test via ```npm run test:unit```, or just e2e via ```npm run test:e2e```

# At last but not the least, Merry Christmas to all !


### Credits
This code owns to [Xin Jin](https://github.com/lucas1004jx) and [Pablo Albaladejo](https://github.com/pablo-albaladejo) as members of [GuideSmiths](https://github.com/guidesmiths) organization.

The aim of this developent is solution proposal for the [ohce-kata](https://kata-log.rocks/ohce-kata)

Special thanks for the support at e2e test to [Daniel Herrero](https://github.com/danielherrerohernando) and [betisman](https://github.com/betisman). Please see [their amazing kata solution](https://github.com/danielherrerohernando/ohce-kata).