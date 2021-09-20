#!/usr/bin/env bash

# Setup the Ubuntu development environment.

package() {
    echo $1
    sudo apt install $1
}

sudo apt update

# Javascript

package nodejs
package npm

if ! command -v "git" &>/dev/null; then
    echo "git could not be found. Installing..."

    package git
fi

# mysql

package mysql-server

sudo service mysql start

echo -e "
Installation steps (type in order):
- n
- root
- n
- n
- n
- y

MAKE SURE TO MAKE THE PASSWORD: root
"

sudo mysql_secure_installation

# docker

package docker.io
