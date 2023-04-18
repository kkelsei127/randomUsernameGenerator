// import { useQuery } from '@apollo/client';
import { QUERY_USERNAMES } from '../utils/queries';
import UsernameList from '../components/UsernameList';

export default function GetRanName() {
    // const { loading, data } = useQuery(QUERY_USERNAMES);
    const usernames = [] 
    const randomName = Math.floor(Math.random() * 10);
    return randomName;
};

