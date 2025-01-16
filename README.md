# PDF Fusion

PDF Fusion is a simple web application built with Node.js that allows users to merge multiple PDF files into a single document. 
The app also supports easy file uploads and serves the merged PDF for download.

## Features

- **Merge PDF Files**: Upload multiple PDF files and merge them into one.
- **Coming Soon**:
  - **Compress PDF Files**: Reduce the file size of PDFs for easier sharing and storage.
  - **Convert PDF Files**: Convert PDFs to other formats (e.g., Word, JPG, etc.).

## Tech Stack

- **Node.js**: A JavaScript runtime environment for building the server-side application.
- **Express.js**: A web framework for Node.js, used to handle routing and HTTP requests.
- **Multer**: Middleware for handling file uploads in `multipart/form-data` format.
- **PDF Merger JS**: A Node.js library for merging multiple PDF files into one.
- **HTML/CSS/JavaScript**: For the front-end user interface and interactions.

<img width="1437" alt="11 5" src="https://github.com/user-attachments/assets/09900f12-1fb5-4323-babd-9b713d68e5b3" />


## Installation

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. **Install dependencies**:
    Ensure you have `Node.js` and `npm` installed, then run:
    ```bash
    npm install
    ```

3. **Run the application**:
    Start the server:
    ```bash
    node src/server.js
    ```

    The application will be accessible at `http://localhost:3000`.

## Usage

- Go to `http://localhost:3000` in your browser.
- Navigate to the **Merge PDF File** option to upload multiple PDFs.
- Once uploaded, the merged PDF will be automatically processed and available for download.

## Future Updates

- **PDF Compression**: Users will be able to compress PDFs to reduce file size.
- **PDF Conversion**: Users will be able to convert PDFs to other formats like Word, Excel, or image files.


