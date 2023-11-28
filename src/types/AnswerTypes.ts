import { ProfileTypes } from "@/types/UserTypes";

interface AnswerTypes {
    _id: string;
    user: {
        _id: string;
        username: string;
        profile: ProfileTypes;
    };
    question: {
        _id: string;
        title: string;
    };
    body: string;
    timestamp: Date;
    upvotes: number;
    downvotes: number;
    comments: Array<string>;
    shareCount: number;
    views: number;
  }
  
  export default AnswerTypes;
  