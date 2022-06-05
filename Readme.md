# Node.js basics

After cloning the repository switch to the ```task1``` branch:
```sh
git checkout task1
```

### File system (src/fs)

create:
```sh
npm run fs:create
```

copy:
```sh
npm run fs:copy
```

rename:
```sh
npm run fs:rename
```

delete:
```sh
npm run fs:delete
```

list:
```sh
npm run fs:list
```

read:
```sh
npm run fs:read
```

### Command line interface(src/cli)

#### ENV:
```sh
npm run cli:env
```
or:
```sh
RSS_name1=value1 RSS_name2=value2 node src/cli/env.js
```

#### ARGS:
```sh
npm run cli:args
```
or:
```sh
node src/cli/args.js --propName value --propName2 value2
```

### Modules(src/modules)

modules:
```sh
npm run modules
```

### Hash (src/hash)

hash:
```sh
npm run hash
```

### Streams (src/streams)
read:
```sh
npm run streams:read
```

write: 
```sh
npm run streams:write
```
Type data into console and press ENTER. To stop, press CTRL+C.

transform:
```sh
npm run streams:transform
```
Type data into console and press ENTER. To stop, press CTRL+C.

### Zlib (src/zip)

compress:
```sh
npm run zlib:compress
```

decompress:
```sh
npm run zlib:decompress
```
