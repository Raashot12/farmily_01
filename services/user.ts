
import { UserInfoType } from '../types/user';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const fetchUserDetails = async (): Promise<UserInfoType | null> => {
  try {
    const resonse = await fetch(
      `${API_URL}/v1/user/details`,
    );
    return resonse.json()
  } catch (error: any) {
    
    return null;
  }
};

