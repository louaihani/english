const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// إعداد المجلدات العامة
app.use(express.static(path.join(__dirname, 'public')));

// إعداد المسار الرئيسي
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// بدء الخادم
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
