import {useState, useTransition} from 'react';
import { redirect } from 'react-router-dom';
const UpdatePost = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await UpdatePost(content);
      if (error) {
        setError(error);
        return;
      }
      redirect("/path");
    })
  };
  return (
    <div>
      <input value={content} onChange={(event) => setContent(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending} />
      {error && <p>{error}</p>}
    </div>
  )
}

export {UpdatePost};