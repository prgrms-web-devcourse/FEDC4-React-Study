import useForm from "../../hooks/useForm";
import { usePostContext } from "../PostProvider";

const PostAddForm = () => {
  const { onAddPost } = usePostContext();

  const { errors, handleChange, handleSubmit } = useForm({
    initialState: {
      userId: 1,
      title: "",
      body: "",
    },
    onSubmit: (values) => {
      console.log(values);
      onAddPost(values);
    },
    validate: ({ title, body }) => {
      const errors = {};
      if (!title) errors.title = "제목이 없습니다";
      if (!body) errors.body = "내용이 없습니다";
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="title"
            type="text"
            placeholder="title"
            onChange={handleChange}
          ></input>
          {errors.title}
        </div>
        <div>
          <input
            name="body"
            type="text"
            placeholder="body"
            onChange={handleChange}
          ></input>
          {errors.body}
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default PostAddForm;
