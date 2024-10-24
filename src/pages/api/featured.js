// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: `Data to enrich your online business`,
      description: `This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real written text.`,
      image: 'https://img.freepik.com/free-psd/3d-illustration-man-flying-catch-golden-coin-business-graph-rendering_1150-53663.jpg?w=996&t=st=1674042834~exp=1674043434~hmac=dc2020c599c47a0e6183090f4a734e9986e0950826ad193b3d28d0e4deeae500'
    },
    {
      id: 2,
      name: `Data to enrich your online business`,
      description: `This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real written text.`,
      image: 'https://img.freepik.com/free-psd/3d-illustration-man-flying-catch-golden-coin-business-graph-rendering_1150-53663.jpg?w=996&t=st=1674042834~exp=1674043434~hmac=dc2020c599c47a0e6183090f4a734e9986e0950826ad193b3d28d0e4deeae500'
    },
    {
      id: 3,
      name: `Data to enrich your online business`,
      description: `This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real written text.`,
      image: 'https://img.freepik.com/free-psd/3d-illustration-man-flying-catch-golden-coin-business-graph-rendering_1150-53663.jpg?w=996&t=st=1674042834~exp=1674043434~hmac=dc2020c599c47a0e6183090f4a734e9986e0950826ad193b3d28d0e4deeae500'
    },
  ])
}
