# Frontend Library Certification related 5 Projects - freeCodeCamp
## Live Certification Here : [freeCodeCamp](https://freecodecamp.org/certification/fcc964aaf79-d74f-4a73-a538-bead74ff9282/front-end-development-libraries)

# 1. Random Quote Machine

## Project Description

The Random Quote Machine is a web application that generates random quotes at the click of a button. The user can view a new quote, its author, and share the quote on Twitter. This project is built using React.js, styled with CSS3, and is responsive across different device sizes.

## Live Demo

You can view the live demo of the project [here](#).

## User Stories

1. **Wrapper Element**: The application contains a wrapper element with the id `quote-box` that houses all other elements.
2. **Quote Text**: Within the `quote-box`, there is an element with the id `text` that displays the quote.
3. **Quote Author**: Within the `quote-box`, there is an element with the id `author` that displays the quote's author.
4. **New Quote Button**: Within the `quote-box`, there is a clickable element with the id `new-quote` to fetch a new quote.
5. **Tweet Quote Link**: Within the `quote-box`, there is a clickable element with the id `tweet-quote` that allows the user to share the quote on Twitter.
6. **Initial Quote Display**: On first load, a random quote and its author are displayed.
7. **Fetch New Quote**: Clicking the `new-quote` button fetches and displays a new quote and its author.
8. **Tweet the Quote**: Clicking the `tweet-quote` link allows the current quote to be shared on Twitter.
9. **Centered Layout**: The `quote-box` is horizontally centered in the viewport.

## Topics Covered

- **React.js**: Component-based architecture, state management, event handling.
- **JavaScript ES6+**: Arrow functions, destructuring, template literals.
- **CSS3**: Flexbox, responsive design, custom styling.

## Features Implemented

- **Random Quote Generation**: Display a random quote and its author from a predefined set or an API.
- **Responsive Design**: Ensures the application looks good on different screen sizes.
- **Twitter Integration**: Allows users to share the quote directly on Twitter.
- **Interactive UI**: Buttons for generating new quotes and sharing quotes on social media.


# 2. Markdown Previewer

## Project Description

The Markdown Previewer is a web application that allows users to type GitHub flavored Markdown in a text area and see the formatted HTML preview in real-time. This project is built using React.js and leverages the `marked.js` library to convert Markdown into HTML.

## Live Demo

You can view the live demo of the project [here](#).

## User Stories

1. **Editor Element**: The application contains a `textarea` element with the id `editor` where the user can input Markdown.
2. **Preview Element**: The application contains a `div` element with the id `preview` that displays the converted HTML.
3. **Dynamic Update**: As the user types Markdown into the `editor`, the `preview` is dynamically updated to display the corresponding HTML.
4. **Markdown Rendering**: The application uses the `marked.js` library to parse and render GitHub flavored Markdown into HTML.
5. **Initial Content**: On load, the `editor` contains default Markdown text that demonstrates various Markdown elements, which is rendered in the `preview`.
6. **Initial Rendering**: On load, the default Markdown in the `editor` is rendered as HTML in the `preview`.

## Topics Covered

- **React.js**: Component-based architecture, state management, real-time updates.
- **JavaScript ES6+**: Arrow functions, template literals, event handling.
- **CSS3**: Flexbox layout, responsive design.
- **Markdown Parsing**: Using the `marked.js` library to convert Markdown to HTML.

## Features Implemented

- **Real-time Markdown Preview**: As the user types, the Markdown is immediately converted to HTML and displayed.
- **Default Markdown Example**: On load, an example Markdown document is provided to showcase various Markdown features.
- **Responsive Design**: The application is designed to work on various screen sizes.


# 3. Drum Machine

## Project Description

The Drum Machine is a web application that simulates a drum pad. Users can click on the pads or press specific keys to play corresponding audio clips. The application displays the name of the audio clip currently being played. This project is built using React.js and styled with CSS for a responsive and interactive experience.

## Live Demo

You can view the live demo of the project [here](#).

## User Stories

1. **Drum Machine Container**: The application contains an outer container with the id `drum-machine` that houses all other elements.
2. **Display Element**: Within the `drum-machine`, there is an element with the id `display` that shows the name of the current audio clip.
3. **Drum Pads**: The application contains 9 clickable drum pad elements, each with a class of `drum-pad`, a unique id that describes the audio clip it triggers, and inner text corresponding to specific keys (Q, W, E, A, S, D, Z, X, C).
4. **Audio Elements**: Each `drum-pad` contains an audio element with a `src` attribute pointing to the audio clip, a class of `clip`, and an id that matches the inner text of its parent `drum-pad`.
5. **Mouse Click Trigger**: Clicking on a `drum-pad` element plays the audio clip contained in its child audio element.
6. **Keyboard Press Trigger**: Pressing the key associated with a `drum-pad` triggers the corresponding audio clip.
7. **Display Update**: When a `drum-pad` is triggered, its associated audio clip's name is displayed in the `display` element.

## Topics Covered

- **React.js**: Component-based architecture, state management, event handling.
- **JavaScript ES6+**: Arrow functions, destructuring, template literals.
- **CSS3**: Flexbox layout, responsive design, custom styling.
- **Audio Handling**: Using HTML5 audio elements to play sounds.

## Features Implemented

- **Interactive Drum Pads**: Click or press keys to play corresponding sounds.
- **Dynamic Display**: The name of the current sound is displayed as it plays.
- **Responsive Design**: The application adjusts well on different screen sizes.


# 4. Calculator

## Project Description

The Calculator is a web application that allows users to perform basic arithmetic calculations. This project is built using React.js and follows the formula logic for calculator input.

## Live Demo

You can view the live demo of the project [here](#).

## User Stories

1. **Equals Button**: The calculator contains a clickable element with the id `equals`.
2. **Number Buttons**: The calculator contains clickable elements representing numbers 0-9 with specific IDs.
3. **Operator Buttons**: The calculator contains clickable elements representing primary mathematical operators with specific IDs.
4. **Decimal Button**: The calculator contains a clickable element for the decimal point.
5. **Clear Button**: The calculator contains a clickable element to clear input and output values.
6. **Display Element**: The calculator contains an element to display values with the id `display`.
7. **Clear Functionality**: Pressing the clear button clears input and output values and resets the calculator to its initialized state.
8. **Input Display**: As numbers are inputted, they should be displayed in the display element.
9. **Arithmetic Operations**: Users can perform addition, subtraction, multiplication, and division on a chain of numbers, and the correct result should be displayed upon pressing equals.
10. **Leading Zeros**: The calculator should not allow numbers to begin with multiple zeros.
11. **Decimal Point**: Clicking the decimal point button should append it to the currently displayed value, and only one decimal point per number is allowed.
12. **Decimal Arithmetic**: Users should be able to perform operations on numbers containing decimal points.
13. **Consecutive Operators**: If two or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative sign).
14. **Immediate Calculation**: Pressing an operator immediately following equals should start a new calculation based on the result of the previous evaluation.
15. **Precision**: The calculator should provide several decimal places of precision for calculations.

## Topics Covered

- **React.js**: Component-based architecture, state management, event handling.
- **JavaScript ES6+**: Arrow functions, destructuring, string manipulation.
- **CSS3**: Flexbox layout, styling.

## Features Implemented

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, division.
- **Decimal Point Support**: Decimal arithmetic and precision.
- **Input Validation**: Preventing invalid input sequences.
- **Clear Functionality**: Resetting the calculator state.
- **Responsive Design**: Layout adjusts for different screen sizes.


# 5. Pomodoro Clock

## Project Description

The Pomodoro Clock is a web application that helps users manage their time using the Pomodoro Technique. This technique involves breaking work into intervals, traditionally 25 minutes in length, separated by short breaks. This project is built using React.js and includes features such as adjustable session and break lengths, a countdown timer, and audio alerts.

## Live Demo

You can view the live demo of the project [here](#).

## User Stories

1. **Break Label**: The clock contains an element with the id `break-label` that displays the string "Break Length".
2. **Session Label**: The clock contains an element with the id `session-label` that displays the string "Session Length".
3. **Break Decrement Button**: The clock contains a clickable element with the id `break-decrement`.
4. **Session Decrement Button**: The clock contains a clickable element with the id `session-decrement`.
5. **Break Increment Button**: The clock contains a clickable element with the id `break-increment`.
6. **Session Increment Button**: The clock contains a clickable element with the id `session-increment`.
7. **Break Length Display**: The clock contains an element with the id `break-length` that displays a default value of 5.
8. **Session Length Display**: The clock contains an element with the id `session-length` that displays a default value of 25.
9. **Timer Label**: The clock contains an element with the id `timer-label` that indicates when a session is initialized.
10. **Time Left Display**: The clock contains an element with the id `time-left` that displays the remaining time in mm:ss format.
11. **Start/Stop Button**: The clock contains a clickable element with the id `start_stop`.
12. **Reset Button**: The clock contains a clickable element with the id `reset`.
13. **Break Length Decrement**: Clicking the `break-decrement` button decrements the break length by 1.
14. **Break Length Increment**: Clicking the `break-increment` button increments the break length by 1.
15. **Session Length Decrement**: Clicking the `session-decrement` button decrements the session length by 1.
16. **Session Length Increment**: Clicking the `session-increment` button increments the session length by 1.
17. **Non-Zero Length**: Session and break lengths cannot be set to <= 0.
18. **Maximum Length**: Session and break lengths cannot be set to > 60.
19. **Initial Timer Start**: Clicking the `start_stop` button starts the timer from the session length value.
20. **Running Timer Display**: When the timer is running, the `time-left` element displays the remaining time in mm:ss format, updating every second.
21. **Pause Timer**: If the timer is running, clicking the `start_stop` button pauses the countdown.
22. **Resume Timer**: If the timer is paused, clicking the `start_stop` button resumes the countdown from where it was paused.
23. **Break Initiation**: When a session countdown reaches zero, the `timer-label` indicates a break has begun.
24. **Break Countdown**: When a session countdown reaches zero, a break countdown starts from the break length value.
25. **Session Initiation**: When a break countdown reaches zero, the `timer-label` indicates a session has begun.
26. **Session Countdown**: When a break countdown reaches zero, a session countdown starts from the session length value.
27. **Time Up Sound**: When a countdown reaches zero, an audio alert plays.
28. **Audio Length**: The audio alert must be 1 second or longer.
29. **Reset Functionality**: Clicking the `reset` button stops any running timer, resets session and break lengths to their defaults, and resets the `time-left` element.

## Topics Covered

- **React.js**: Component-based architecture, state management, event handling.
- **JavaScript ES6+**: Arrow functions, destructuring, string manipulation.
- **CSS3**: Flexbox layout, styling.
- **HTML5 Audio**: Audio playback for alerts.

## Features Implemented

- **Adjustable Session and Break Lengths**: Users can set custom lengths for sessions and breaks.
- **Countdown Timer**: Displays the remaining time in mm:ss format, updating every second.
- **Start/Stop Control**: Allows users to start, pause, and resume the countdown timer.
- **Reset Functionality**: Resets session and break lengths, stops any running timer, and resets the timer display.
- **Audio Alert**: Plays an audio alert when the countdown reaches zero.
