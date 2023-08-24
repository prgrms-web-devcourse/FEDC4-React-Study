import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
  return (
    <Modal>
      <Form className={classes.form} method="post">
        <p>
          <label htmlFor="body">포스트 내용</label>
          <textarea
            id="body"
            name="body"
            required
            rows={3}
          />
        </p>
        <p>
          <label htmlFor="name">작성자</label>
          <input
            type="text"
            name="author"
            id="name"
            required
          />
        </p>
        <p className={classes.actions}>
          <Link to="../" type="button">
            취소
          </Link>
          <button>작성</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // { body:'', author:''}
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  })
  return redirect('/')
}
