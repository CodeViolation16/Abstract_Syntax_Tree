import Parser from "./FrontEnd/parser.ts";
import Environment from "./runtime/environment.ts";
import { evaluate } from "./runtime/interpreter.ts";
import { MK_BOOL, MK_NULL, MK_NUMBER } from "./runtime/values.ts";
repl();
function repl() {
  const parser = new Parser();
  const env = new Environment();
  env.declareVar("null", MK_NULL());
  env.declareVar("true", MK_BOOL(true));
  env.declareVar("false", MK_BOOL(false));
  env.declareVar("x", MK_NUMBER(100));
  console.log("\nRepl v0.1");
  while (true) {
    const input = prompt(">");
    if (!input || input === "exit") {
      Deno.exit(1);
    }
    const program = parser.produceAST(input);

    const result = evaluate(program, env);
    console.log(result);
  }
}
