# Setting up

## WSL Installation

Install Ubuntu

```
C Drive > Users > Public > Public Downloads > Ubuntu_1804.2019.522_0.appx
```

Open Visual Studio Code. Install the extension: Remote - WSL

### You can use the quick setup script

If you already installed it manually but you are using a different computer, paste this into bash.

```
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/estebangarcia21/frhs-fullstack-curriculum/master/setup.sh)"
```

## Installing the packages

### Refresh APT package registry

```
$ sudo apt update
```

### Node & NPM

Node

```
$ sudo apt install nodejs
```

npm

```
$ sudo apt install npm
```

Use the arrow keys and enter to choose the options when being prompted to restart services.

### Git

Git should already be installed. Confirm by typing in

```
$ git --version
```

You should get something along the lines of...

```
git version 2.17.1
```

### MySQL

```
$ sudo apt install mysql-server
```

```
$ sudo service mysql start
```

Run the security script...

```
$ sudo mysql_secure_installation

Keep password validation plugin? n
Re-enter new root password? root
Remove anonymous users? n
Disallow remote root login? n
Remove test database and access to it? n
Reload privelages table? y
```

Enter mysql using...

```
$ sudo mysql
```

Confirm you are in mysql (should look like mysql> at the very left)

Exit by typing exit...

```
mysql> exit
```

### Docker

```
$ sudo apt install docker.io
```

### Node 12 LTS

Update our node version to Node v12 LTS.

```
$ sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
$ sudo apt -y install nodejs
```

### Expo CLI

Install the Expo CLI using `npm`.

```
$ sudo npm install -g expo-cli
```
