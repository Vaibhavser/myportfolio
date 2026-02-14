// Photo Configuration
// Update these paths when you want to change photos manually

export const heroPhoto = 'https://github.com/Vaibhavser/myportfolio/blob/main/Resume%20of%20Vaibhav.pdf';

export const galleryPhotos = [
  'src/app/config/me.jpg',
  'src/app/config/me2.jpg',
  'src/app/config/me3.jpg'
];

export const resumePhoto = 'resume.vaibhavdubey.png';

// Resume File Configuration
// Update this with your actual resume PDF or image file
export const resumeFile = {
  // The downloadable resume file (PDF, DOCX, or image)
  url: 'figma:asset/62d14b9eb93dd45cf3c4e7eac32a1edbdab1b9f2.png', // Update with your resume file path
  fileName: 'Vaibhav_Dubey_Resume.pdf', // The name of the file when downloaded
  // Alternative: You can also use a direct URL to a PDF hosted somewhere
  // url: 'https://example.com/path-to-your-resume.pdf',
};

export const projectPhotos = {
  marshall: 'https://images.unsplash.com/photo-1613262155980-c9e47252316b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHZvaWNlJTIwYXNzaXN0YW50JTIwbWljcm9waG9uZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwOTY4MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  remindKaro: 'https://images.unsplash.com/photo-1746286721374-cd541e26911a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjByZW1pbmRlciUyMG5vdGlmaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzA5NjgyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
};

// Social Media Links
// Update these with your actual social media profiles
export const socialLinks = {
  github: 'https://github.com/Vaibhavser',
  twitter: 'https://twitter.com/Vaibhav85109602',
  linkedin: 'https://linkedin.com/in/vaibhav-dubey-a41734292', // Update with your LinkedIn
  instagram: 'https://instagram.com/vaibhavduttdubey' // Update with your Instagram
};

// Video Configuration
// Change the YouTube video ID to update the introduction video
export const videoConfig = {
  // YouTube video ID (the part after "youtube.com/watch?v=" or "youtu.be/")
  youtubeVideoId: 'dQw4w9WgXcQ', // Replace with your video ID
  
  // Video title and description
  title: 'Meet Vaibhav Dubey',
  description: 'Software Developer & UI/UX Designer',
  
  // Stats displayed below video
  stats: {
    experience: {
      value: '2+',
      label: 'Years Experience'
    },
    projects: {
      value: '10+',
      label: 'Projects Completed'
    },
    satisfaction: {
      value: '100%',
      label: 'Client Satisfaction'
    }
  }
};
