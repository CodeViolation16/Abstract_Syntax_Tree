LIT Programming Language
LIT is a custom programming language that simplifies code writing and converts it into TypeScript. It uses an Abstract Syntax Tree (AST) to interpret custom syntax and generate clean, readable TypeScript code.

Quick Start
Follow these steps to get started with LIT:

Step 1: Clone the Repository
Clone the lIT repository to your local machine:

bash
Copy code
git clone [https://github.com/your-username/lIT.git](https://github.com/CodeViolation16/Abstract_Syntax_Tree/tree/main)
Step 2: Write LIT Code
Write your LIT code in the test.lit file located in the project directory, or create a new .lit file. Here's an example:

lit

lit a = 10;
if a > 5 {
    print("a is greater than 5");
}

Step 3: Run the Interpreter
Run the interpreter to convert your LIT code into TypeScript:

bash
Copy code
node main.ts
This command will parse the test.lit file and generate the corresponding TypeScript output.

