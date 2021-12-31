// 사용자에게 즉, consumer. 이 클래스를 사용하는 사람에게 파일이라는 것을
// 인자로 받아서 이 파일을 업로드 하고 나서 이 파일을 업로드 했다면,
// 서버에 있는 그 이미지의 URL을 전달해 줄 거임.

class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'pdzaoz52');
    const result = await fetch(
      'http://api.cloudinary.com/v1_1/drqni4rhj/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
