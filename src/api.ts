const BASE_URL = 'http://localhost:8080/api';

export type User = {
  user: { username: string; email: string; password: string };
  token: string;
};

export type Video = {
  name: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  thumbnailUrl: string;
  isPublic: boolean;
  _id: string;
};

export type VideoList = {
  ownedFiles?: Video[],
  sharedFiles?: Video[],
  publicFiles?: Video[],
}

const api = {
  register: async (userData: {
    email: string;
    password: string;
    username: string;
  }) => {
    const response = await fetch(`${BASE_URL}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  },
  login: async (userData: { email: string; password: string }) => {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  },
  uploadFile: async (fileData: FormData) => {
    const user: string | null = localStorage.getItem('user');
    const { token }: { token: string } = JSON.parse(user as string);
    const response = await fetch(`${BASE_URL}/file/upload`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        authorization: `Bearer ${token}`,
      },
      body: fileData,
    });
    const data = await response.json();
    return data;
  },
  getUserFilesApi: async () => {
    const user = localStorage.getItem('user');
    const { token } = JSON.parse(user as string);
    const response = await fetch(`${BASE_URL}/file/user-files`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  },

  shareFileApi: async (
    fileId: string,
    email: string,
    read: boolean,
    write: boolean,
  ) => {
    const shareData = {
      email,
      read,
      write,
    };
    const user = localStorage.getItem('user');
    const { token } = JSON.parse(user as string);
    const response = await fetch(`${BASE_URL}/file/share/${fileId}`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(shareData),
    });
    const data = await response.json();
    return data;
  },

  deleteFileApi: async (fileId: string) => {
    const user = localStorage.getItem('user');
    const { token } = JSON.parse(user as string);
    const response = await fetch(`${BASE_URL}/file/delete/${fileId}`, {
      method: 'DELETE',
      headers: {
        'Access-Control-Allow-Origin': '*',
        authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  },

  updateFileApi: async (fileId: string, fileData: object) => {
    const user = localStorage.getItem('user');
    const { token } = JSON.parse(user as string);
    const response = await fetch(`${BASE_URL}/file/update/${fileId}`, {
      method: 'PUT',
      headers: {
        'Access-Control-Allow-Origin': '*',
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fileData),
    });
    const data = await response.json();
    return data;
  }
};

export default api;
