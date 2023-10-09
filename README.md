# `solhint-plugin-code-organizer`

> Ensures contract elements are neatly ordered.

🚧 **Work in Progress**: This plugin is still under development. Use with caution and expect updates.

## 🌟 Overview

Organize your Solidity contracts with ease! This Solhint plugin helps maintain a structured order for various contract elements, boosting code clarity.

## 🚀 Installation

```bash
npm install solhint-plugin-code-organizer --save-dev
```

## 🛠 Setup

1. Ensure you have `solhint` installed:

```bash
npm install -g solhint
```

2. In your `.solhint.json` or equivalent configuration, add:

```json
{
  "plugins": ["code-organizer"]
}
```

## 📘 Documentation

This plugin enforces the following order:

1. State Variables
2. Events
3. Functions
4. Modifiers
5. Others (e.g., enums, structs)

Adjust the severity (`"error"`, `"warn"`, or `"off"`) in your Solhint configuration as needed.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss the desired change.

## 📜 License

[MIT](LICENSE.md)