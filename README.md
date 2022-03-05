# Simple VTT

**Simple VTT** is a barebones virtual tabletop (VTT) for tabletop games like Dungeons & Dragons.

## Documentation

More information can be found in the [documentation directory][2]. You may also need to put on your big kid pants and refer to individual configuration files (e.g. `Taskfile.yml` or `docker-compose.yml`).

[2]: docs/index.md

## Quick start

Prerequisites
  - [Docker Compose][4]
  - [Doppler][3]
  - [Task][1]

I find it convenient to alias Doppler and Task, like this: `alias task='doppler run -- task'` (single quotes required). Once you are good to go, you can start the application with `task up` and end it with `task down`.

[1]: https://taskfile.dev/
[3]: https://www.doppler.com/
[4]: https://docs.docker.com/compose/

## Copyright

Copyright 2022 Phillip Gates-Shannon. All rights reserved. Licensed under the Open Software License version 3.0.
