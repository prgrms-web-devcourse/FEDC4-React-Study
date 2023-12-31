import { useState } from "react";

interface InitForm {
  userId: number;
  title: string;
  body: string;
  id?: number;
}

interface ValidateForm {
  title?: string;
  body?: string;
}

const useForm = ({
  initialState,
  onSubmit,
  validate,
}: {
  initialState: InitForm;
  validate: (values: InitForm) => ValidateForm; // values를 매개변수로 받고 {} 또는 errors를 반환
  onSubmit: (values: InitForm) => void; // values를 매개변수로 받고 반환하는거 없음
}) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console;
    const newErrors = validate ? validate(values) : {};
    if (Object.keys(newErrors).length === 0) {
      //에러가 없을 경우
      onSubmit(values);
    }
    setErrors(newErrors);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
