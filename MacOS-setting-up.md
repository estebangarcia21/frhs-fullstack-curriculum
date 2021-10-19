# System Setup

## Warning

This file wasn't made by Esteban. There is no fast setup file.
<br />caveat emptor

## Installation (Brew)

If you haven't done anything like this before, run:

```
xcode-select -install
```

and install brew with:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then, install the following with `brew`:

```
brew install node@12 (Must be added to your PATH seperately)
brew install mysql
```

NOTE: Ubuntu isn't needed, and docker MUST be installed with the GUI installer. Packages can be updated with `brew update`.

## Configuring MySQL

start the service with:

```
brew services start mysql
```

Then, configure it with:

```
mysql_secure_installation
```

Respond to the prompts with the following:

```
Keep password validation plugin? n
Re-enter new root password? y
New password? root
Re-enter password? root
Remove anonymous users? n
Disallow remote root login? n
Remove test database and access to it? n
Reload privelages table? y
```

Enter MySQL with:

```
sudo mysql -u root -p
```

and enter in your password (root).
<br />Exit by typing:

```
mysql> exit 
```

## Expo CLI

Install the Expo CLI using `npm`:

```
sudo npm install -g expo-cli
```

# VSCode setup

Simply install vscode with `brew`:

```
brew install visual-studio-code
```

and install the following plugins:

- Prettier - Code Formatter
- Auto Rename Tag
- Live Server
- Tailwind CSS IntelliSense
