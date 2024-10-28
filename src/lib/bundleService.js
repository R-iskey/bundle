const bundles = [
  {
    id: 1,
    name: 'Essential Translation Pack',
    description: `A perfect choice for everyday translation needs, this pack covers general content with accuracy and clarity, making communication across languages effortless.`,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    price: 300
  },
  {
    id: 2,
    name: 'Business Communication Pack',
    description: `Tailored for professional environments, this pack ensures that your business messages, emails, and documents are translated with precision and professionalism.`,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    price: 300
  },
  {
    id: 3,
    name: 'Premium Marketing Pack',
    description: `Designed for marketers, this pack delivers engaging and persuasive translations that maintain the tone and impact of your original marketing content.`,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    price: 300
  },
  {
    id: 4,
    name: 'Technical Expertise Pack',
    description: `Ideal for technical documents and manuals, this pack ensures accurate translation of complex terminology, making sure nothing is lost in translation.`,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    price: 300
  },
  {
    id: 5,
    name: 'Website Localization Pack',
    description: `Translate your website into multiple languages seamlessly, ensuring your content is culturally adapted for global audiences and search-friendly in any language.`,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    price: 300
  },
  {
    id: 6,
    name: 'Legal Precision Pack',
    description: `Focused on legal documents, contracts, and agreements, this pack guarantees meticulous translations that maintain the accuracy and integrity of legal terminology.`,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    price: 300
  },
  {
    id: 7,
    name: 'Corporate Package',
    description: `A comprehensive solution for corporate communication, this pack handles a wide range of business documents, reports, and presentations for multilingual teams.`,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    price: 300
  },
  {
    id: 8,
    name: 'Global Reach Pack',
    description: `Expand your business internationally with this pack, offering translation solutions tailored to global marketing, sales, and business expansion needs.`,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    price: 300
  },
  {
    id: 9,
    name: 'Full-Service Enterprise Pack',
    description: `Our most robust offering, this pack provides a full suite of translation services for large-scale projects, delivering top-quality translations for every department.`,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    price: 300
  }
]

export function getBundleById(id) {
  return bundles.find((bundle) => bundle.id === id) || null;
}

export async function getBundles() {
  return bundles;
}
