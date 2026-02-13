# Quick Configuration Reference

## 📂 Main Configuration File
**Location:** `/src/app/config/photos.ts`

All photos, videos, and social links are managed in this single file!

---

## ⚡ Quick Updates

### Change Hero Photo
```typescript
export const heroPhoto = 'figma:asset/YOUR_IMAGE_ID.png';
```

### Change Gallery Photos
```typescript
export const galleryPhotos = [
  'figma:asset/PHOTO_1.png',
  'figma:asset/PHOTO_2.png',
  'figma:asset/PHOTO_3.png'
];
```

### Change Resume
```typescript
// Resume preview image
export const resumePhoto = 'figma:asset/YOUR_IMAGE_ID.png';

// Resume download file
export const resumeFile = {
  url: 'figma:asset/YOUR_RESUME_FILE.pdf',
  fileName: 'Vaibhav_Dubey_Resume.pdf'
};
```

### Change YouTube Video
```typescript
export const videoConfig = {
  youtubeVideoId: 'YOUR_VIDEO_ID',
  // ...
};
```

### Update Social Links
```typescript
export const socialLinks = {
  github: 'https://github.com/Vaibhavser',
  twitter: 'https://twitter.com/Vaibhav85109602',
  linkedin: 'https://linkedin.com/in/YOUR_USERNAME',
  instagram: 'https://instagram.com/YOUR_USERNAME'
};
```

---

## 📋 Current Configuration

### Social Media
- ✅ GitHub: `Vaibhavser`
- ✅ Twitter: `@Vaibhav85109602`
- ⚠️ LinkedIn: Update needed
- ⚠️ Instagram: Update needed

### Photos
- ✅ Hero photo configured
- ✅ Gallery (3 photos) configured
- ✅ Resume photo configured
- ✅ Project photos configured

### Video
- ✅ Video section configured
- ⚠️ Update with your actual YouTube video ID

---

## 📖 Full Guide
See `/PHOTO_MANAGEMENT.md` for detailed instructions.