const { execSync } = require('child_process');

execSync('code --install-extension ./tdd-workshop-snippets.vsix', {
    cwd: "./workshop-assets/tdd-workshop-snippets",
    stdio: "inherit"
});

execSync('npm link ./', {
    cwd: "./workshop-assets/generator-ts-tdd",
    stdio: "inherit"
});

const devBranchExists = !execSync(
    'git show-ref --verify refs/heads/dev',
    { encoding: 'utf8' })
    .startsWith('fatal');

if (devBranchExists) {
    execSync('git branch -D dev');
}

execSync('git checkout -b dev');