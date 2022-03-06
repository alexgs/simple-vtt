# References

Handy links for documentation, articles, and other materials used in this project.

- [Flyway][1], an open-source database migration tool
- [HTTP Status Codes][2]
- [Hasura][3] docs
- [Next.js][4] documentation
- PostgreSQL
  - [Automatic `updated_at` timestamps][5]
  - Check constraints
    - Great StackOverflow post on [referencing different tables][6] (similar to my idea for a post type _XOR_)
    - [Prisma tutorial][7] on how to do this in Postgres (**NB:** not supported on Prisma schema as of v2.30.3 and v3.0.2)
  - Unique constraints
    - Adding [constraints in PostgreSQL][8], including multi-column constraints
- Random.org
  - [Six-character alphanumeric codes][9] suitable for appending to DB usernames
  - [16-character base-62 codes][10] suitable for passwords
- [Task][11] (aka "Taskfile" or "Gotask")
- [Traefik][12]
- UUID-related packages
  - [nanoid][13]
  - [short-uuid][14]
  - [uuid-apikey][15]
  - [uuid][16]
- [Volta reference][17]
- Winston
  - [Docs][18]
  - [Log levels][19]
- [Yup][20] for validating JSON objects and other values

[1]: https://flywaydb.org/documentation/
[2]: https://www.restapitutorial.com/httpstatuscodes.html
[3]: https://hasura.io/docs/latest/graphql/core/index.html
[4]: https://nextjs.org/docs/getting-started
[5]: https://x-team.com/blog/automatic-timestamps-with-postgresql/
[6]: https://stackoverflow.com/questions/10068033/postgresql-foreign-key-referencing-primary-keys-of-two-different-tables
[7]: https://www.prisma.io/docs/guides/database/advanced-database-tasks/data-validation/postgresql
[8]: https://www.prisma.io/docs/guides/general-guides/database-workflows/unique-constraints-and-indexes/postgresql
[9]: https://www.random.org/strings/?num=10&len=6&digits=on&loweralpha=on&unique=on&format=html&rnd=new
[10]: https://www.random.org/strings/?num=10&len=16&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new
[11]: https://taskfile.dev/#/
[12]: https://doc.traefik.io/traefik/
[13]: https://www.npmjs.com/package/nanoid
[14]: https://www.npmjs.com/package/short-uuid
[15]: https://www.npmjs.com/package/uuid-apikey
[16]: https://www.npmjs.com/package/uuid
[17]: https://docs.volta.sh/reference/
[18]: https://github.com/winstonjs/winston#table-of-contents
[19]: https://github.com/winstonjs/winston#logging-levels
[20]: https://github.com/jquense/yup
