import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Sasmitha',
    lastName:  'Weerakkody',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full Stack Dev',
    avatar:    '/images/avatar-01.jpg',
    location:  'Asia/Colombo',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Sinhala', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/SasmithaDev',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/sasmithadev',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/DevSasmitha',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:sasmith.dev@yahoo.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Full Stack Developer</>,
    subline: <>I'm Sasmitha,A full stack developer passionate about <br/> <InlineCode>Astronomy</InlineCode> and <InlineCode>Psychology</InlineCode>, blending a keen understanding of human behavior with expertise in <InlineCode>React.js</InlineCode>and <InlineCode>Node.js</InlineCode> to create innovative, user-centered digital experiences.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://wa.me/94711414598'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm Sasmitha,A full stack developer passionate about Astronomyand Psychology, blending a keen understanding of human behavior with expertise in React.js and Node.js to create innovative, user-centered digital experiences.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: '9th-Co Innovations',
                timeframe: '2024 - Present',
                role: 'Full Stack Developer',
                achievements: [
                    <>I focus on building end-to-end solutions across front-end and back-end technologies</>,
                    <>My role involves optimizing web applications and delivering high-quality user experiences.</>,
                    <>Last project was a Charity project</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-05.jpg',
                        alt: 'Charity Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Infinity Technologies',
                timeframe: '2023 - 2024',
                role: 'Front End Developer',
                achievements: [
                    <>I specialized in creating responsive and interactive web designs.</>,
                    <>My role involved optimizing user interfaces for enhanced performance and accessibility.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'C3S Business School - Barcelona',
                description: <>BSc (Hons) Business Computing and Information Systems</>,
            },
            {
                name: 'Henegama Central College',
                description: <>Advance Level</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'React.js ',
                description: <>Expert in React.js, crafting dynamic, responsive, and efficient user interfaces.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-06.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-06.webp',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Experienced in building robust applications with Node.js and Next.js frameworks.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-07.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-07.webp',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };