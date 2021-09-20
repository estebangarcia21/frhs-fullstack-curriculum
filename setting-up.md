# Setting up

## WSL Installation

Install Ubuntu

```
C Drive > Users > Public > Public Downloads > Ubuntu_1804.2019.522_0.appx
```

Open Visual Studio Code. Install the extension: Remote - WSL

## You can use the quick setup script

```
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/estebangarcia21/frhs-fullstack-curriculum/master/setup.sh)"
```

## Refresh APT package registry

```
$ sudo apt update
```

## Node & NPM

Node

```
$ sudo apt install nodejs
```

npm

```
$ sudo apt install npm
```

Use the arrow keys and enter to choose the options when being prompted to restart services.

## Git

Git should already be installed. Confirm by typing in

```
$ git --version
```

You should get something along the lines of...

```
git version 2.17.1
```

## MySQL

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

## Docker

```
$ sudo apt install docker.io
```

## Kubernetes (Maybe)

Install Micro K8s

```
$ sudo snap install microk8s --classic
```

Add current user to the microk8s admin group

```
$ sudo usermod -a -G microk8s $USER
$ sudo chown -f -R $USER ~/.kube
```

Re-enter session to apply changes

```
$ su - $USER
```

Check status of Kubernetes while it starts

```
$ microk8s status --wait-ready
```

Turn on the desired Kubernetes services

```
$ microk8s enable dashboard dns ingress
```

Start using Kubernetes

```
$ microk8s kubectl get all --all-namespaces
```

Access the Kubernetes dashboard

```
$ microk8s dashboard-proxy
```

Start and stop Kubernetes to save battery on laptops

```
$ microk8s start
$ microk8s stop
```
