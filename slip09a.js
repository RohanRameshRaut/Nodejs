const fs = require('fs');

// HTML content for the form
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>File Upload Form</title>
</head>
<body>
    <h2>Upload File</h2>
    <form action="/upload" method="post">
        <input type="file" name="fileToUpload" id="fileToUpload">
        <input type="submit" value="Upload File" name="submit">
    </form>
</body>
</html>
`;

// Write the HTML content to a file
fs.writeFile('upload_form.html', htmlContent, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('HTML form with upload field has been created!');
});
