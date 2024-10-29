// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 7,
      name: `Corporate Package`,
      description: `Designed for businesses with diverse communication needs, the Corporate Package offers comprehensive translation services for internal and external documents. Whether it's company reports, presentations, or employee communications, this pack ensures accurate and consistent translations that align with your corporate tone and values, fostering smooth communication across multilingual teams and global markets.`,
      image: 'slide/corporate.png'
    },
    {
      id: 8,
      name: `Global Reach Pack`,
      description: `The Global Reach Pack is your gateway to international success. It provides tailored translation solutions for businesses looking to expand into new markets. From marketing campaigns to product documentation, this pack ensures that your content resonates with diverse audiences while maintaining brand voice and cultural relevance. It’s ideal for companies aiming to scale globally with confidence.`,
      image: 'slide/global-reach.png'
    },
    {
      id: 9,
      name: `Full-Service Enterprise Pack`,
      description: `The Full-Service Enterprise Pack is our most comprehensive offering, providing end-to-end translation services for large-scale operations. This pack is designed to handle complex, multi-departmental projects, including technical documentation, marketing materials, legal content, and more. With a dedicated team of expert translators, we deliver high-quality translations that meet the demands of global enterprises, ensuring consistency and excellence at every level.`,
      image: 'slide/expertise.png'
    },
  ])
}
