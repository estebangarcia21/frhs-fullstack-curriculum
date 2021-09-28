#!/usr/bin/env bash

# Install all the necessary things in WSL.

package() {
    echo $1
    sudo apt -y install $1
}

cat <<EOF
=========================
Update APT Repository
=========================
EOF

sudo apt update

# javascript

clear

cat <<EOF
=========================
Javascript
=========================
EOF

sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
package nodejs

package npm

# mysql

clear

cat <<EOF
=========================
MySQL
=========================
EOF

package mysql-server

sudo service mysql start

clear

cat <<EOF
===================================
MySQL Security Configuration
===================================
Installation steps (type in order):
- n
- root
- n
- n
- n
- y

MAKE SURE TO MAKE THE PASSWORD: root
====================================
EOF

sudo mysql_secure_installation

clear

cat <<EOF
=========================
Other
=========================
EOF

# docker

package docker.io
