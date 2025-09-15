export const templates = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  image: 'images/image-14.svg',
  name: `Template ${i + 1}`,
}));

export const testimonials = [
  {
    img: 'images/testimonial-img.svg',
    text: `"I built my resume in minutes with this tool, and it helped me land an interview at Google. The clean, professional template made my profile stand out—super simple, super fast, and truly effective!"`,
    name: 'Babu Rao',
    role: 'Hired At Google',
    position: 'Product Designer',
  },

  {
    img: 'images/testimonial-img.svg',
    text: `"This builder made job applications so much easier. The templates are professional and the interface is intuitive. Highly recommend!"`,
    name: 'Sara Khan',
    role: 'Hired At Microsoft',
    position: 'UX Designer',
  },

  {
    img: 'images/testimonial-img.svg',
    text: `"The templates are so professional and ATS-friendly. It boosted my chances massively and helped me stand out from other candidates."`,
    name: 'John Smith',
    role: 'Hired At Amazon',
    position: 'Software Engineer',
  },
];

export const companiesLeft = [
  {
    name: 'Google',
    logo: 'images/google-logo.svg',
    bgColor: 'rgba(255, 241, 200, 1)',
    position: { x: 0, y: 0 },
  },
  {
    name: 'Meta',
    logo: 'images/meta-logo.svg',
    bgColor: 'rgba(214, 235, 255, 1)',
    position: { x: 44, y: 96 },
  },
  {
    name: 'Microsoft',
    logo: 'images/microsoft-logo.svg',
    bgColor: 'rgba(225, 255, 190, 1)',
    position: { x: 88, y: 192 },
  },
];

export const companiesRight = [
  {
    name: 'Apple',
    logo: 'images/apple-logo.svg',
    bgColor: 'rgb(0,0,0)',
    position: { x: 106, y: 0 },
  },
  {
    name: 'NVIDIA',
    logo: 'images/nvidia-logo.svg',
    bgColor: 'rgba(206, 255, 120, 1)',
    position: { x: 53, y: 96 },
  },
  {
    name: 'Amazon',
    logo: 'images/amazon-logo.svg',
    bgColor: 'rgb(255, 227, 190)',
    position: { x: 0, y: 192 },
  },
];
