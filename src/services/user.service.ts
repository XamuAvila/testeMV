import axios from 'axios'
import { User } from '../entities/user.entity';
import { Container, Service } from 'typedi';

@Service()
export class UserService {
  async getUsers(): Promise<User[]> {
    const usersRequest = await axios.get<User[]>(
      'https://jsonplaceholder.typicode.com/users',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    return usersRequest.data;
  }
}
