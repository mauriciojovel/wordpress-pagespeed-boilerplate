# Wordpress with docker and pagespeed
## Dump database
### Normal Dump
```sh
$ docker-compose exec mysql sh -c 'export MYSQL_PWD="$MYSQL_PASSWORD";exec mysqldump -u wordpress site' > ./database.sql
```

### GZ dump
> If you are running windows you need mount the volume `/docker-entrypoint-initdb.d` and pass the gzip command into the exec and save the
file on the mounted volume.

```sh
$ docker-compose exec mysql sh -c 'export MYSQL_PWD="$MYSQL_PASSWORD";exec mysqldump -u wordpress site' | gzip -9 -c > database.sql.gz
```

## Change the url
```sh
$ sed -i 's/http:\/\/dev.com/http:\/\/mynewsite.com/g' ./database.sql
```

## Debugging.

You only need define your ip address in the os enviroment variable `IP_ADDRESS` on linux for example you can execute the command

```sh
$ IP_ADDRESS=$(ip addr show wlp2s0 | grep -Po 'inet \K[\d.]+') docker-compose up -d
```

Also if you are using `Visual Code` in the debugger process you can add the follow config to support the debbugger:

```json
"pathMappings": {
    "/var/www/html/wp-content":"${workspaceFolder}/wp-content"
}
```
