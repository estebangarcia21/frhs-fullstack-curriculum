#!/usr/bin/env bash

# Setup the Ubuntu development environment.

package() {
    echo $1
    sudo apt -y install $1
}

sudo apt update

echo -e "
=========================
Javascript
=========================
"

# Javascript

sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
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

clear

echo -e "
Installation steps (type in order):
- n
- root
- n
- n
- n
- y

MAKE SURE TO MAKE THE PASSWORD: root
====================================
"

sudo mysql_secure_installation

echo -e "
=========================
Other
=========================
"

# docker

package docker.io
