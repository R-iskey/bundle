const bundles = [
  {
    id: 1,
    name: 'Bundle 1',
    description: `This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real written text.`,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    price: 300
  },
  {
    id: 2,
    name: 'Bundle 2',
    description: `This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real written text.`,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    price: 300
  },
  {
    id: 3,
    name: 'Bundle 3',
    description: `This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real written text.`,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    price: 300
  },
  {
    id: 4,
    name: 'Bundle 4',
    description: `This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real written text.`,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    price: 300
  },
  {
    id: 5,
    name: 'Bundle 5',
    description: `This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real written text.`,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    price: 300
  },
  {
    id: 6,
    name: 'Bundle 6',
    description: `This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real written text.`,
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
