import { PrismaClient } from "@prisma/client/edge";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data : {
        name : 'ayush'
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
//
