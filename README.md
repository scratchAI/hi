# SB3 to HTML Converter

This repository contains a small script that converts Scratch `.sb3` files into
stand‑alone HTML pages that can run locally.

## Requirements

- [Node.js](https://nodejs.org/) (tested with Node 20)
- npm to install dependencies

## Installation

Install the packager dependency:

```bash
npm install
```

## Usage

Run the converter with a Scratch project file:

```bash
node sb3_to_html.js path/to/project.sb3 [output.html]
```

If `output.html` is omitted, the file will be named `output.html` in the current
directory.

The produced HTML file contains everything needed to run the project offline in
a browser.
