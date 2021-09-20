#!/usr/bin/env bash

# Setup the Ubuntu development environment.

package() {
    echo $1
    sudo apt install $1
}

sudo apt update

echo -e "
=========================
Javascript
=========================
"

# Javascript

package nodejs
package npm

# mysql

echo -e "
=========================
MySQL
=========================
"

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

echo -e "
=========================
Other
=========================
"

# docker

package docker.io
