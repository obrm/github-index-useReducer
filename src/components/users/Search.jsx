import { useGithubGlobalContext, useSearch } from '../../hooks';

const Search = () => {
  const { users, clearUsers } = useGithubGlobalContext();

  const { text, onSubmit, onChange } = useSearch();

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="חיפוש משתמשים..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="חיפוש" className="btn-success btn-block" />
      </form>
      {users.length > 0 && (
        <button
          className="btn btn-light btn-block btn-clear"          
          onClick={clearUsers}
        >
          ניקוי
        </button>
      )}
    </div>
  );
};

export default Search;
