import React from 'react';
import './Keywords.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../../../Hooks/useFetch';

interface Keyword {
  id: number;
  name: string;
}

const Keywords: React.FC = () => {
  const { id, media_type } = useParams<{ id: string; media_type: string }>();
  const { data: Keyword } = useFetch("/" + media_type + "/" + id + "/keywords");

  return (
    <div className="keywords">
      {Keyword?.keywords?.map((keyword: Keyword, index: number) => (
        <div key={index} className="keyword">
          {keyword.name}
        </div>
      ))}
    </div>
  );
};

export default Keywords;
