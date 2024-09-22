import axios from 'axios';

const API_BASE_URL = 'http://assignment.test/api';  // <==== Update this to your API base URL

interface LoginResponse {
  token: string;
}

interface Post {
  _id: string;
  visibility: string;
  title: string;
  content: string;
  user_id: string;
  updated_at: string;
  created_at: string;
}

interface PostsResponse {
  data: Post[];
  message: string;
}

interface PostResponse {
  data: Post;
  message: string;
}

export async function login(email: string, password: string): Promise<string> {
  try {
    const response = await axios.post<LoginResponse>(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    return response.data.token;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}

export async function fetchPosts(token: string): Promise<Post[]> {
  try {
    const response = await axios.get<PostsResponse>(`${API_BASE_URL}/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}


export async function fetchPostById(token: string, id: string): Promise<Post> {
  try {
    const response = await axios.get<PostResponse>(`${API_BASE_URL}/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}