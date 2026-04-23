const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // Create Admin
  const hashedPassword = await bcrypt.hash('Codeian@2026', 10)
  const admin = await prisma.admin.upsert({
    where: { email: 'admin@codeian.dev' },
    update: {},
    create: {
      email: 'admin@codeian.dev',
      password: hashedPassword,
      name: 'كوديان أدمن',
    },
  })
  console.log(`Created admin with id: ${admin.id}`)

  // Create Sample Project
  const project1 = await prisma.project.upsert({
    where: { slug: 'ecommerce-platform' },
    update: {},
    create: {
      title: 'منصة تجارة إلكترونية متطورة',
      slug: 'ecommerce-platform',
      category: 'تطوير ويب',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800&auto=format&fit=crop',
      description: 'منصة متكاملة للتجارة الإلكترونية مع نظام إدارة مخزون وبوابات دفع متعددة.',
      link: 'https://example.com',
    },
  })
  console.log(`Created project with id: ${project1.id}`)

  // Create Sample Team Member
  const member1 = await prisma.teamMember.create({
    data: {
      name: 'أحمد كوديان',
      role: 'مطور واجهات أمامية',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      bio: 'خبير في تطوير واجهات المستخدم باستخدام React و Next.js مع التركيز على تجربة المستخدم.',
    },
  })
  console.log(`Created team member with id: ${member1.id}`)

  console.log('Seeding finished.')
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
