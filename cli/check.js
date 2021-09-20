// @ts-check

/**
 * Verify if you did one of the try-its correctly.
 */

const { existsSync } = require('fs');
const { argv } = require('process');
const path = require('path');

/**
 * Exit the program with a message.
 * @param {*} msg The message to display.
 */
function exitWithMessage(msg) {
  console.log(msg);
  process.exit(1);
}

/**
 * Format an array as a list.
 * @param {Array<string>} arr The array to format.
 * @returns {string} The formatted list.
 */
function fmtList(arr) {
  return '\n' + arr.map((i) => `- ${i}`).join('\n');
}

/**
 *
 * @param {string} name
 * @param {Array} items
 */
function directory(name, items) {
  return {
    directory: name,
    items
  };
}

/**
 *
 * @param {string} name
 */
function file(name) {
  return {
    file: name
  };
}

/**
 * Check if all files in a directory exist.
 * @param {string} cwd The current working directory.
 * @param {array} tree The tree to traverse.
 * @returns {Array} An array of missing files.
 */
function traverseTree(cwd, tree) {
  const missingFiles = [];

  for (const item of tree) {
    const dir = item.directory;

    if (dir) {
      const files = traverseTree(path.join(cwd, dir), item.items);
      missingFiles.push(...files);
      continue;
    }

    if (item.file) {
      if (!existsSync(path.join(cwd, item.file))) {
        missingFiles.push(
          path.join(cwd.split('/').slice(1).join('/'), item.file)
        );
      }
    }
  }

  return missingFiles;
}

// prettier-ignore
// The file trees to check against.
const trees = {
  0: [
    directory('secret', [
      file('somethingSecret.txt')
    ]),
    file('a.txt')
  ],
  1: [
    file('a'),
    file('b.js'),
    file('c.sh'),
    directory('x', [
      directory('y', [
        file('z.o')
      ])
    ])
  ],
  bundle: [
    file('webpack.config.js'),
    file('yarn.lock'),
    file('package.json'),
    directory('src', [
      file('index.html'),
      file('main.js'),
      file('styles.css')
    ])
  ]
};

const title = argv[2] || null;

if (!title) {
  exitWithMessage('Usage: check.js <title>');
}

const currentTree = trees[title];

if (!currentTree) {
  exitWithMessage(
    `No file tree found for ${title}. These are the possible file trees you can check: ${fmtList(
      Object.keys(trees)
    )}`
  );
}

const files = traverseTree(title, currentTree);

if (files.length) {
  exitWithMessage(
    `Missing files in ${title}: ${fmtList(files)}\n\nTry adding these files!`
  );
}

console.log('You did it perfectly! Great job!');
