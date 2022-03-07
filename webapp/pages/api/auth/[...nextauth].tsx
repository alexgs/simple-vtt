import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import * as env from 'env-var';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

const emailSender = env.get('EMAIL_SENDER').required().asString();
const emailUrl = env.get('EMAIL_URL').required().asString();
const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      from: emailSender,
      server: emailUrl,
    }),
  ],
  session: {
    // How long until an idle session expires and is no longer valid (seconds)
    maxAge: 24 * 60 * 60, // 24 hours in seconds
    // Throttle how frequently to write to database to extend a session (seconds)
    updateAge: 60 * 60, // 1 hour in seconds
  },
  pages: {},
  callbacks: {},
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: false,
});
