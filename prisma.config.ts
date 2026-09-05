import { defineConfig } from "prisma/config";
import { config as loadEnv } from "dotenv";

loadEnv();

// The connection URL is only needed by CLI commands that talk to the database
// (migrate / db push / studio). It is resolved lazily so that `prisma generate`
// — which runs on every install, including on Vercel — never fails when
// DATABASE_URL is absent. At runtime the URL is supplied via PrismaPg in
// app/lib/prisma.ts.
const databaseUrl = process.env.DATABASE_URL;

export default defineConfig({
  schema: "prisma/schema.prisma",
  ...(databaseUrl ? { datasource: { url: databaseUrl } } : {}),
});
