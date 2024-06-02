import {useActionState} from 'react';
import { redirect } from 'react-router-dom';
import { UpdatePost } from './updatePost';
function EditPost({content, setContent}) {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const error = await UpdatePost(formData.get("content"));
      if (error) {
        console.error(error)
        return error;
      }
      content = formData.content;
      setContent(content);
      redirect("/path")
      return null;
    },
    null,
  );
  return (
    <form action={submitAction}>
      <input type="text" name="content" />
      <button type="submit" disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </form>
  )
}

export {EditPost};