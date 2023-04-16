import { useQuery } from '@apollo/client';
import { QUERY_USERNAMES } from '../utils/queries';

export default function getRanName(){
    const { loading, data } = useQuery(QUERY_USERNAMES);
    const usernames = data?.usernames || [];
    return usernames(Math.floor(Math.random() * 50));
};