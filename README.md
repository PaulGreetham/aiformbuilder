# AI Form Builder

AI Form Builder is a web application built with React and TypeScript. It allows users to dynamically create and customize forms through an intuitive interface inspired by conversational AI. The application features a sidebar navigation and dynamically generated forms based on user input.

## Features

- **Dynamic Form Creation:** Users can interact with the AI assistant to create forms by answering questions.
- **Custom Styling:** Utilizes custom CSS variables and media queries for consistent styling.
- **Google Fonts Integration:** The "Roboto" font is used throughout the application for a modern and clean look.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **CSS**: Custom styling with CSS variables and media queries.
- **Google Fonts**: Integration with Google Fonts for custom typography.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/aiformbuilder.git
    cd aiformbuilder
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```sh
    npm start
    ```

4. **Open your browser:**
    Navigate to `http://localhost:3000` to see the app in action.


### Input Required to Mimic AI Response

ai: Hello, what form can I help you create today?

user: An employee tech experience form.

ai. Ok. What would you like to call this form?

user: Tech Expereince Form

ai: What is the first questions you would like to ask?

user: What is your name?

ai: Would you link a text or multiple choice answer?

user: Text

ai: What would you like to ask next?

user: Tech Language Experience

ai: would you like a text or multiple choice or text answer?

user: Multiple Choice

ai: ok. First, what is the name of this question?

user: Tick Your Tech Langage Experience

ai: what options would you like to add?

user: JS, JSX, TSX, Java, Python
