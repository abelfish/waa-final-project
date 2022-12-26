import React from 'react';

class UploadFilesService {
  upload(file, onUploadProgress) {
    let token = localStorage.getItem('token');
    let formData = new FormData();

    formData.append('file', file);

    // return http.post('/upload', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   onUploadProgress,
    // });
    const boundary = Date.now().toString(16);

    return fetch(
      'http://localhost:8080/files/upload',
      {
        method: 'POST',
        headers: {
          'Content-Type': `multipart/form-data; boundary=${boundary}`,
          Authorization: `Bearer ${token}`,
        },
        body: file,
      },
      onUploadProgress
    );
  }

  getFiles() {
    return fetch('http://localhost:8080/files/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
}

export default new UploadFilesService();
