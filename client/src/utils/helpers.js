import { useQuery } from '@apollo/client';
import { QUERY_USERNAMES } from '../utils/queries';
import UsernameList from '../components/UsernameList';

const getRanName = () => {
    const { loading, data } = useQuery(QUERY_USERNAMES);
    const usernames = data?.usernames || [];
    const name = usernames(Math.floor(Math.random() * 50));
    return (
    <div>
        {loading ? (
        <div>Loading...</div>
        ) : (
            <UsernameList
            name={name}
            title="Some Feed for Thought(s)..."
          />

        )}
  </div>)
    
};

export default getRanName;