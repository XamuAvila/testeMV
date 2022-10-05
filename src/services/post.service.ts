import { Post } from "../entities/post.entity";
import axios from 'axios';
import { Container, Service } from 'typedi';

@Service()
export class PostService {
  async getPosts(): Promise<Post[]> {
    const postsRequest = await axios.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return postsRequest.data;
  }
}
