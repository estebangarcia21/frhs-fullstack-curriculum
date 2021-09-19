# CLI

## ls

List the files and directories.

In the current directory...

```
$ ls
```

In a specific directory...

```
$ ls <directoryName>
```

List hidden items as well with the `-a` flag.

```
$ls -a <fileName>
```

## cd

Change the current directory to the specified path.

```
$ cd <path>
```

You can say you want to go to the directory above the current one using `..`

```
$ cd ..
```

## touch

Create a file.

```
$ touch <fileName>
```

You can also create multiple files at once. For example...

```
$ touch a.txt b.txt c.txt
```

## mkdir

Create a directory.

```
$ mkdir <directoryName>
```

You can create a path (multiple directories) using the `-p` flag.

```
$ mkdir -p a/b/c
```

## pwd

Print the current working directory.

```
$ pwd
/some/interesting/directory
```

## rm

Remove a file.

```
rm <fileName>
```

Can not undo! Be careful.

## rm -rf

Remove a directory.

```
rm -rf <directoryName>
```

Can not undo! Be careful.

## chmod

Change the permissions of a file.

```
$ chmod <permissionValue> <fileName>
```

Example

```
$ chmod 0644 Build-Server
```

What we are going to be using is `chmod +x <fileName>`. This makes a file executable.

```
$ chmod +x <fileName>
$ ./<fileName>
```
