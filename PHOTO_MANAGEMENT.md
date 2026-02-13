# Portfolio Configuration Guide

## How to Update Photos, Videos, and Social Links

All photos, videos, and social media links in your portfolio can be easily changed by editing the `/src/app/config/photos.ts` file.

---

## 📸 Photo Locations

### 1. Hero Section Photo
- **Variable:** `heroPhoto`
- **Used in:** Hero section (main profile image)
- **Current:** `figma:asset/10dc9d7fe6d7cbf338371f6bb10c96e0afbd75ae.png`

### 2. Gallery Photos
- **Variable:** `galleryPhotos` (array of 3 photos)
- **Used in:** Photo Gallery section
- **Current photos:**
  - Photo 1: `figma:asset/aa5379aa13b92b871780dcb1e41f117b56344ce2.png`
  - Photo 2: `figma:asset/10dc9d7fe6d7cbf338371f6bb10c96e0afbd75ae.png`
  - Photo 3: `figma:asset/d83fc46d15541c9514c22e1b1852da1b6085473d.png`

### 3. Resume Preview Photo
- **Variable:** `resumePhoto`
- **Used in:** Resume section (preview image)
- **Current:** `figma:asset/62d14b9eb93dd45cf3c4e7eac32a1edbdab1b9f2.png`

### 4. Resume Download File (PDF/DOCX)
- **Variable:** `resumeFile`
- **Used in:** Resume download button
- **Configuration:**
  ```typescript
  resumeFile: {
    url: 'figma:asset/your-resume-file.pdf',  // Your resume PDF/image
    fileName: 'Vaibhav_Dubey_Resume.pdf'       // Downloaded file name
  }
  ```
- **Supported formats:** PDF, DOCX, PNG, JPG
- **Can use:** Figma assets, direct URLs, or hosted files

### 5. Project Photos
- **Variables:** `projectPhotos.marshall` and `projectPhotos.remindKaro`
- **Used in:** Projects section
- **Update these when you have actual project screenshots**

---

## 🎥 Video Configuration

### YouTube Video Setup
To change the introduction video:

1. Open `/src/app/config/photos.ts`
2. Find the `videoConfig` object
3. Update the `youtubeVideoId` with your video ID

**How to get YouTube Video ID:**
- From URL: `https://www.youtube.com/watch?v=VIDEO_ID_HERE`
- Or: `https://youtu.be/VIDEO_ID_HERE`

**Example:**
```typescript
export const videoConfig = {
  youtubeVideoId: 'YOUR_VIDEO_ID', // Replace with your video ID
  title: 'Meet Vaibhav Dubey',
  description: 'Software Developer & UI/UX Designer',
  stats: {
    experience: { value: '2+', label: 'Years Experience' },
    projects: { value: '10+', label: 'Projects Completed' },
    satisfaction: { value: '100%', label: 'Client Satisfaction' }
  }
};
```

### Update Video Stats
You can also customize the statistics displayed below the video:
- **Experience:** Years of experience
- **Projects:** Number of projects completed
- **Satisfaction:** Client satisfaction rate

---

## 🔗 Social Media Links

### Current Social Links
- **GitHub:** https://github.com/Vaibhavser
- **Twitter:** https://twitter.com/Vaibhav85109602
- **LinkedIn:** Update with your profile
- **Instagram:** Update with your profile

### How to Update Social Links

1. Open `/src/app/config/photos.ts`
2. Find the `socialLinks` object
3. Update each social media URL

**Example:**
```typescript
export const socialLinks = {
  github: 'https://github.com/Vaibhavser',
  twitter: 'https://twitter.com/Vaibhav85109602',
  linkedin: 'https://linkedin.com/in/your-username',
  instagram: 'https://instagram.com/your-username'
};
```

**Where Social Links Appear:**
- Navigation bar (desktop and mobile)
- Footer section
- All links automatically update across the site

---

## 🛠️ How to Change Photos

1. Open `/src/app/config/photos.ts`
2. Find the photo you want to change
3. Replace the `figma:asset/...` path with your new image path
4. Save the file

**Example:**
```typescript
// Change hero photo
export const heroPhoto = 'figma:asset/YOUR_NEW_IMAGE_ID.png';

// Change gallery photos
export const galleryPhotos = [
  'figma:asset/NEW_PHOTO_1.png',
  'figma:asset/NEW_PHOTO_2.png',
  'figma:asset/NEW_PHOTO_3.png'
];
```

---

## 📝 Using Figma Assets

When you upload images from Figma, they will have paths like:
- `figma:asset/[hash].png`
- `figma:asset/[hash].jpg`

Simply copy these paths into the `photos.ts` config file.

---

## 🖼️ Project Photos

For project images, you can use:
1. **Figma asset paths:** `figma:asset/[hash].png`
2. **Unsplash URLs:** `https://images.unsplash.com/...`
3. **Any other image URL**

Update the `projectPhotos` object in `/src/app/config/photos.ts`:

```typescript
export const projectPhotos = {
  marshall: 'figma:asset/your-marshall-project-image.png',
  remindKaro: 'figma:asset/your-remind-karo-image.png'
};
```

Then update `/src/app/components/Projects.tsx` to use these:

```typescript
import { projectPhotos } from '../config/photos';

// In the projects array:
image: projectPhotos.marshall,
// or
image: projectPhotos.remindKaro,
```

---

## ✅ Quick Checklist

- [ ] Update hero photo
- [ ] Update gallery photos (3 photos)
- [ ] Update resume preview photo
- [ ] Update resume download file (PDF/DOCX)
- [ ] Update project photos
- [ ] Update YouTube video ID
- [ ] Update video stats (experience, projects, satisfaction)
- [ ] Update GitHub link
- [ ] Update Twitter link
- [ ] Update LinkedIn link
- [ ] Update Instagram link

---

## 💡 Tips

1. **All changes are in one file:** `/src/app/config/photos.ts`
2. **No coding required:** Just replace URLs and text
3. **Changes reflect immediately:** Save the file and refresh your browser
4. **Keep backups:** Save your old asset IDs before replacing them
5. **Test links:** Make sure all social media URLs work before deploying

---

Need help? All configuration is centralized in `/src/app/config/photos.ts` for easy management!

---

## 📄 Resume Configuration

### Resume Preview Image
The resume preview image is what visitors see on your portfolio:

```typescript
export const resumePhoto = 'figma:asset/62d14b9eb93dd45cf3c4e7eac32a1edbdab1b9f2.png';
```

### Resume Download File
The actual file that gets downloaded when visitors click "Download Resume":

```typescript
export const resumeFile = {
  url: 'figma:asset/your-resume-file.pdf',  // Path to your resume file
  fileName: 'Vaibhav_Dubey_Resume.pdf'       // Name shown when downloaded
};
```

### How to Update Your Resume

**Option 1: Using Figma Assets (Recommended for images)**
```typescript
export const resumeFile = {
  url: 'figma:asset/YOUR_RESUME_HASH.png',
  fileName: 'Vaibhav_Dubey_Resume.png'
};
```

**Option 2: Using Direct URL (For PDFs hosted online)**
```typescript
export const resumeFile = {
  url: 'https://your-website.com/resume.pdf',
  fileName: 'Vaibhav_Dubey_Resume.pdf'
};
```

**Option 3: Using Google Drive or Dropbox**
1. Upload your resume to Google Drive/Dropbox
2. Get the direct download link
3. Use it in the config:
```typescript
export const resumeFile = {
  url: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID',
  fileName: 'Vaibhav_Dubey_Resume.pdf'
};
```

### Supported File Formats
- ✅ PDF (`.pdf`) - Recommended
- ✅ Word Document (`.docx`)
- ✅ Image (`.png`, `.jpg`)

### Best Practices
1. **Use PDF format** for best compatibility
2. **Keep file size under 5MB** for fast downloads
3. **Use a clear file name** like `Vaibhav_Dubey_Resume.pdf`
4. **Update both preview and download file** when you update your resume
5. **Test the download** after updating to ensure it works

---

## 🖼️ Project Photos