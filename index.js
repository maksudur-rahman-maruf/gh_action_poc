const core = require('@actions/core');

function run() {
  try {
    const name = core.getInput('name');
    console.log(`Hello, ${name}! 👋`);
    core.setOutput('greeting', `Hello, ${name}!`);
  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();