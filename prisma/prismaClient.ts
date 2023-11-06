import { Prisma, PrismaClient } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library';
import { tmpdir } from 'os'
import fs from 'fs'

let db: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

declare global {
    var db: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
}

 fs.writeFile(
        `${tmpdir()}/server-ca.pem`,
        process.env.CLIENT_CERTIFICATE!,
        err => {
            if (err) return console.log(err)
        }
    )

//check if we are running in production mode
if (process.env.NODE_ENV === 'production') {
    db = new PrismaClient();
} else {
    //check if there is already a connection to the database
    if (!global.db) {
        global.db = new PrismaClient()
    }
    db = global.db
}

export { db };
