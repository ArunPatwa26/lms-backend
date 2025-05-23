import multer from "multer";

// Use memory storage instead of disk storage
const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
