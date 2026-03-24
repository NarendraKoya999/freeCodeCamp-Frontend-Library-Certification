<div align="center">

<img src="https://img.shields.io/badge/freeCodeCamp-Front%20End%20Development%20Libraries-0a0a23?style=for-the-badge&logo=freecodecamp&logoColor=white" alt="freeCodeCamp Front End Development Libraries"/>

# Front End Development Libraries Certification
### freeCodeCamp · 5 Certification Projects · Fully Certified

Five independently designed React.js applications built to meet freeCodeCamp's official
automated test specifications — covering state management, real-time UI, audio APIs,
formula-based logic, and interval-driven timer architecture.

<br/>

[![Certification](https://img.shields.io/badge/Certification-Verified-27ae60?style=flat-square&logo=freecodecamp)](https://freecodecamp.org/certification/fcc964aaf79-d74f-4a73-a538-bead74ff9282/front-end-development-libraries)
[![Projects](https://img.shields.io/badge/Projects-5%20Completed-2980b9?style=flat-square)](/)
[![React](https://img.shields.io/badge/React.js-61DAFB?style=flat-square&logo=react&logoColor=black)](/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](/)
[![Live Demos](https://img.shields.io/badge/Live%20Demos-CodeSandbox-0971F1?style=flat-square&logo=codesandbox)](/)

<br/>

> *"Every project in this certification is a fully functional React application —*
> *built to a defined specification, tested against automated user stories,*
> *and deployed with a live demo link."*

<br/>

🔗 **[View Live Certification](https://freecodecamp.org/certification/fcc964aaf79-d74f-4a73-a538-bead74ff9282/front-end-development-libraries)**

<br/>

[Overview](#overview) &nbsp;•&nbsp; [Skills](#skills-demonstrated) &nbsp;•&nbsp; [Projects](#projects) &nbsp;•&nbsp; [Tech Stack](#tech-stack) &nbsp;•&nbsp; [Live Demos](#live-demos-at-a-glance)

</div>

---

## Overview

This repository contains all **5 certification projects** completed for the [freeCodeCamp Front End Development Libraries](https://www.freecodecamp.org/learn/front-end-development-libraries/) certification — covering React.js, state management, third-party library integration, audio APIs, and real-time UI patterns.

Unlike earlier certifications focused on HTML and CSS, every project here is a fully functioning **React application** — managing component state, responding to user events, integrating external libraries, and passing a suite of automated specification tests defined by freeCodeCamp.

Each project has a **live demo deployed on CodeSandbox** and was independently designed and coded to satisfy freeCodeCamp's user story requirements — the same kind of acceptance criteria used in professional frontend development workflows.

---

## Skills Demonstrated

| Category | Skills |
|----------|--------|
| **React.js** | Functional components, `useState`, `useEffect`, event handlers, props |
| **State Management** | Complex multi-field state, derived state, conditional rendering |
| **JavaScript ES6+** | Arrow functions, destructuring, template literals, spread operator |
| **Third-Party Libraries** | `marked.js` for Markdown parsing, `HTML5 Audio` API |
| **Real-Time UI** | `setInterval` for live countdown, dynamic DOM updates on every tick |
| **Audio Integration** | HTML5 `Audio` element, `play()`, `pause()`, `currentTime` reset |
| **Formula Logic** | Multi-operator calculator with precedence and consecutive-key handling |
| **CSS3** | Flexbox layout, responsive design, interactive hover states |
| **Specification Testing** | All projects pass freeCodeCamp's automated user story test suite |

---

## Projects

---

### 1. Random Quote Machine

> **React app that fetches and displays random quotes with Twitter sharing.**

A clean, centered quote display application that shows a random quote and its author on load, generates a new quote on button click, and allows sharing the current quote directly to Twitter via a pre-filled tweet link.

**🔗 Live Demo:** [Open in CodeSandbox](https://codesandbox.io/p/sandbox/random-quote-generator-22nzhr)

#### User Stories Implemented

| # | Requirement | Status |
|---|-------------|--------|
| 1 | Wrapper element with id `quote-box` containing all elements | ✅ |
| 2 | Element with id `text` displaying the quote | ✅ |
| 3 | Element with id `author` displaying the quote's author | ✅ |
| 4 | Clickable element with id `new-quote` to fetch a new quote | ✅ |
| 5 | Clickable element with id `tweet-quote` to share on Twitter | ✅ |
| 6 | Random quote and author displayed on initial load | ✅ |
| 7 | Clicking `new-quote` updates both quote text and author | ✅ |
| 8 | Clicking `tweet-quote` opens Twitter with the current quote | ✅ |
| 9 | `quote-box` is horizontally centered in the viewport | ✅ |

#### Implementation Highlights

| Feature | Implementation Detail |
|---------|----------------------|
| Quote state | `useState` holds `{ text, author }` object; updated on button click |
| Twitter link | Dynamically constructed `https://twitter.com/intent/tweet?text=...` URL |
| Random selection | `Math.floor(Math.random() * quotes.length)` on each button click |
| Centered layout | CSS Flexbox on `body` with `min-height: 100vh` |

**Key Skills:** React `useState` · Dynamic URL construction · Twitter Web Intent API · Conditional rendering · Flexbox centering

---

### 2. Markdown Previewer

> **Real-time Markdown editor with live GitHub-flavored HTML preview using marked.js.**

A split-panel Markdown editor where every keystroke in the editor textarea instantly updates the HTML preview panel. Ships with a default Markdown document on load demonstrating headings, bold, code blocks, links, lists, images, and blockquotes.

**🔗 Live Demo:** [Open in CodeSandbox](https://codesandbox.io/p/sandbox/markdown-previewer-mp4t8v)

#### User Stories Implemented

| # | Requirement | Status |
|---|-------------|--------|
| 1 | `textarea` element with id `editor` for Markdown input | ✅ |
| 2 | `div` element with id `preview` displaying rendered HTML | ✅ |
| 3 | `preview` updates dynamically as user types in `editor` | ✅ |
| 4 | GitHub-flavored Markdown rendered using `marked.js` library | ✅ |
| 5 | `editor` contains default Markdown content on load | ✅ |
| 6 | Default Markdown renders as HTML in `preview` on load | ✅ |

#### Implementation Highlights

| Feature | Implementation Detail |
|---------|----------------------|
| Real-time parsing | `marked.parse(markdownText)` called on every `onChange` event |
| Safe HTML render | `dangerouslySetInnerHTML={{ __html: ... }}` with sanitized output |
| Default content | Pre-loaded Markdown string covering all major GitHub Markdown features |
| Split layout | CSS Flexbox two-column layout; responsive single column on mobile |

**Key Skills:** `marked.js` integration · `dangerouslySetInnerHTML` · Controlled textarea with `onChange` · Real-time derived state · Responsive split-panel layout

---

### 3. Drum Machine

> **Interactive drum pad with both click and keyboard trigger support.**

A 9-pad drum machine where each pad plays a unique audio clip when clicked with a mouse or triggered by its corresponding keyboard key (Q, W, E, A, S, D, Z, X, C). The display updates in real time to show the name of the currently playing sound.

**🔗 Live Demo:** [Open in CodeSandbox](https://codesandbox.io/p/sandbox/drum-machine-h6zxmv)

#### User Stories Implemented

| # | Requirement | Status |
|---|-------------|--------|
| 1 | Outer container with id `drum-machine` | ✅ |
| 2 | Element with id `display` showing current audio clip name | ✅ |
| 3 | 9 clickable `.drum-pad` elements with key labels Q W E A S D Z X C | ✅ |
| 4 | Each pad contains an `<audio>` element with class `clip` and matching id | ✅ |
| 5 | Clicking a pad plays its corresponding audio clip | ✅ |
| 6 | Pressing the mapped keyboard key triggers the corresponding pad | ✅ |
| 7 | Display updates with the audio clip name when triggered | ✅ |

#### Implementation Highlights

| Feature | Implementation Detail |
|---------|----------------------|
| Audio playback | `document.getElementById(key).play()` + `currentTime = 0` for instant replay |
| Keyboard events | `useEffect` adds `keydown` listener; cleans up on unmount |
| Display state | `useState` updated on every pad trigger with clip name |
| Pad data | Array of `{ key, id, src, label }` objects mapped to components |

**Key Skills:** HTML5 `Audio` API · `keydown` event listener with `useEffect` cleanup · `currentTime` reset for overlapping playback · Data-driven component rendering · Real-time display state

---

### 4. Calculator

> **Formula-logic React calculator with full operator precedence and edge-case handling.**

A fully functional arithmetic calculator supporting addition, subtraction, multiplication, and division. Implements formula logic — meaning the full expression is evaluated on pressing equals — with proper handling of consecutive operators, leading zeros, single decimal point per number, and chained calculations.

**🔗 Live Demo:** [Open in CodeSandbox](https://codesandbox.io/p/sandbox/calculator-z9cjhx)

#### User Stories Implemented

| # | Requirement | Status |
|---|-------------|--------|
| 1 | Clickable element with id `equals` | ✅ |
| 2 | Clickable number buttons 0–9 with specific IDs | ✅ |
| 3 | Clickable operator buttons `+`, `-`, `*`, `/` with specific IDs | ✅ |
| 4 | Clickable decimal button | ✅ |
| 5 | Clickable clear button | ✅ |
| 6 | Display element with id `display` | ✅ |
| 7 | Clear resets calculator to initialized state | ✅ |
| 8 | Numbers display as entered | ✅ |
| 9 | Arithmetic on chained numbers returns correct result | ✅ |
| 10 | Numbers do not begin with multiple leading zeros | ✅ |
| 11 | Only one decimal point allowed per number | ✅ |
| 12 | Decimal arithmetic supported | ✅ |
| 13 | Consecutive operators: last operator entered is used (except negative sign) | ✅ |
| 14 | Operator immediately after equals starts new calculation from result | ✅ |
| 15 | Result provides several decimal places of precision | ✅ |

#### Implementation Highlights

| Feature | Implementation Detail |
|---------|----------------------|
| Formula evaluation | Full expression string built then evaluated with `eval()` (safely) on `=` press |
| Consecutive operators | Regex replaces multiple trailing operators; preserves negative sign (`-`) |
| Leading zero guard | Conditional prevents appending digit when display shows `"0"` |
| Single decimal guard | Checks current number segment for existing `.` before appending |
| Post-equals behavior | State flag `justEvaluated` routes next input to start fresh or chain |

**Key Skills:** Formula-logic evaluation · Expression string state · Edge-case input validation · Consecutive operator handling · React state machine pattern

---

### 5. Pomodoro Clock (25 + 5 Clock)

> **Full-featured productivity timer with session/break cycling, audio alert, and pause/resume.**

A Pomodoro technique timer with adjustable session length (1–60 min) and break length (1–60 min). Counts down in real time, automatically switches between session and break phases, plays an audio alert when a phase ends, and supports start, pause, resume, and full reset.

**🔗 Live Demo:** [Open in CodeSandbox](https://codesandbox.io/p/sandbox/25-5-clock-pomodoro-timer-t2ndtf)

#### User Stories Implemented

| # | Requirement | Status |
|---|-------------|--------|
| 1–2 | `break-label` and `session-label` elements present | ✅ |
| 3–6 | Increment and decrement buttons for both break and session lengths | ✅ |
| 7–8 | `break-length` defaults to 5; `session-length` defaults to 25 | ✅ |
| 9 | `timer-label` indicates active phase (Session / Break) | ✅ |
| 10 | `time-left` displays remaining time in `mm:ss` format | ✅ |
| 11–12 | `start_stop` and `reset` buttons present and functional | ✅ |
| 13–16 | Increment/decrement buttons update respective lengths correctly | ✅ |
| 17 | Session and break lengths cannot be set to ≤ 0 | ✅ |
| 18 | Session and break lengths cannot be set to > 60 | ✅ |
| 19 | Clicking `start_stop` starts countdown from current session length | ✅ |
| 20 | `time-left` updates every second while timer is running | ✅ |
| 21 | Clicking `start_stop` while running pauses the countdown | ✅ |
| 22 | Clicking `start_stop` while paused resumes from where it stopped | ✅ |
| 23–24 | When session reaches zero, break countdown begins automatically | ✅ |
| 25–26 | When break reaches zero, session countdown begins automatically | ✅ |
| 27–28 | Audio alert plays when countdown reaches zero (≥ 1 second) | ✅ |
| 29 | Reset stops timer, restores defaults, clears `time-left` display | ✅ |

#### Implementation Highlights

| Feature | Implementation Detail |
|---------|----------------------|
| Countdown engine | `setInterval` in `useEffect`; clears interval on pause or unmount |
| Phase switching | When `timeLeft === 0`, flips `currentPhase` state between `"Session"` and `"Break"` |
| mm:ss formatting | `Math.floor(seconds / 60)` and `seconds % 60` padded with `.toString().padStart(2, "0")` |
| Audio alert | `useRef` on `<audio>` element; `.play()` on zero, `.pause()` + `currentTime = 0` on reset |
| Length guards | `Math.max(1, ...)` and `Math.min(60, ...)` clamp increment/decrement values |
| Pause/Resume | Boolean `isRunning` state; interval created or cleared based on state toggle |

**Key Skills:** `setInterval` with `useEffect` cleanup · Phase-switching state machine · `mm:ss` time formatting · `useRef` for audio control · Clamped numeric input · Multi-field state management

---

## Live Demos at a Glance

| Project | Live Demo | Tech |
|---------|-----------|------|
| 🎲 Random Quote Machine | [CodeSandbox →](https://codesandbox.io/p/sandbox/random-quote-generator-22nzhr) | React, CSS3 |
| 📝 Markdown Previewer | [CodeSandbox →](https://codesandbox.io/p/sandbox/markdown-previewer-mp4t8v) | React, marked.js |
| 🥁 Drum Machine | [CodeSandbox →](https://codesandbox.io/p/sandbox/drum-machine-h6zxmv) | React, Audio API |
| 🔢 Calculator | [CodeSandbox →](https://codesandbox.io/p/sandbox/calculator-z9cjhx) | React, ES6+ |
| ⏱️ Pomodoro Clock | [CodeSandbox →](https://codesandbox.io/p/sandbox/25-5-clock-pomodoro-timer-t2ndtf) | React, Audio API |

---

## Tech Stack

<div align="center">

| Technology | Usage in This Certification | Level |
|-----------|---------------------------|-------|
| **React.js** | All 5 projects — components, state, effects, refs | Advanced |
| **React `useState`** | Quote, Markdown, Drum, Calculator, Pomodoro state | Advanced |
| **React `useEffect`** | Keyboard listeners, `setInterval` lifecycle, cleanup | Proficient |
| **React `useRef`** | Audio element reference in Drum Machine and Pomodoro | Proficient |
| **JavaScript ES6+** | Arrow functions, destructuring, template literals, spread | Advanced |
| **marked.js** | GitHub-flavored Markdown → HTML parsing in Markdown Previewer | Proficient |
| **HTML5 Audio API** | Sound playback in Drum Machine and Pomodoro Clock | Proficient |
| **CSS3 / Flexbox** | Responsive layout across all five projects | Advanced |
| **CodeSandbox** | Live deployment for all 5 projects | Proficient |

</div>

---

## Certification Details

<div align="center">

| Field | Detail |
|-------|--------|
| **Issued by** | freeCodeCamp |
| **Certification name** | Front End Development Libraries |
| **Total projects** | 5 of 5 completed |
| **All projects** | Independently built and tested against automated user stories |
| **Live demos** | All 5 projects deployed on CodeSandbox |
| **Status** | ✅ Fully Certified |
| **Verification** | [View Certificate →](https://freecodecamp.org/certification/fcc964aaf79-d74f-4a73-a538-bead74ff9282/front-end-development-libraries) |

</div>

---

## What This Certification Proves

The freeCodeCamp Front End Development Libraries certification demonstrates the ability to build real, interactive React applications that handle complexity beyond static HTML and CSS:

- **React.js in practice** — component architecture, controlled inputs, event handling, and lifecycle effects used across real applications
- **State machine thinking** — the Calculator and Pomodoro Clock require modeling application state as a machine with defined transitions, guards, and phases
- **Third-party library integration** — `marked.js` integrated cleanly into a React controlled component workflow
- **Audio API mastery** — playback control, `currentTime` reset, and `useRef` integration used across two projects
- **Specification-driven development** — every project built against a defined list of acceptance criteria and verified by automated tests — the same workflow used in professional frontend teams
- **Live deployments** — all five projects publicly accessible with no local setup required

---

## Repository Structure

```
front-end-development-libraries/
│
├── 01-random-quote-machine/        ← Live: codesandbox.io/p/sandbox/random-quote-generator-22nzhr
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
│
├── 02-markdown-previewer/          ← Live: codesandbox.io/p/sandbox/markdown-previewer-mp4t8v
│   ├── src/
│   └── package.json
│
├── 03-drum-machine/                ← Live: codesandbox.io/p/sandbox/drum-machine-h6zxmv
│   ├── src/
│   └── package.json
│
├── 04-calculator/                  ← Live: codesandbox.io/p/sandbox/calculator-z9cjhx
│   ├── src/
│   └── package.json
│
├── 05-pomodoro-clock/              ← Live: codesandbox.io/p/sandbox/25-5-clock-pomodoro-timer-t2ndtf
│   ├── src/
│   └── package.json
│
└── README.md
```

---

## Running Locally

```bash
# Clone this repository
git clone https://github.com/your-username/front-end-development-libraries.git

# Navigate to any project
cd front-end-development-libraries/01-random-quote-machine

# Install dependencies
npm install

# Start the development server
npm start

# App opens at http://localhost:3000
```

> **Prefer no setup?** All five projects are live on CodeSandbox — click any link in the [Live Demos](#live-demos-at-a-glance) table above to open and run instantly in the browser.

---

## Connect With Me

<div align="center">

I am actively open to React.js development roles, frontend engineering positions, freelance application work, and international client collaborations.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/narendra-koya)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/NarendraKoya999)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-ff6b6b?style=flat-square&logo=vercel&logoColor=white)](https://narendrakoya999.github.io/Personal-Portfolio-Website/)
[![CodeSandbox](https://img.shields.io/badge/CodeSandbox-Projects-0971F1?style=flat-square&logo=codesandbox&logoColor=white)](https://codesandbox.io)
[![Email](https://img.shields.io/badge/Email-Contact-D44638?style=flat-square&logo=gmail&logoColor=white)](mailto:narendra.koya.in@gmail.com)

</div>

---

<div align="center">

**Built in React · Tested against automated specs · Deployed and live**

*Every project passes freeCodeCamp's full automated user story test suite.*
*Every project has a live demo. No local setup required to evaluate the work.*

<br/>

⭐ If this work impressed you, a star on the repository is always appreciated.

</div>
