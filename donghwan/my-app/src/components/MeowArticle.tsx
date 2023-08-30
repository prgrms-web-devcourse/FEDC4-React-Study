'use client';

import { useEffect, useState } from 'react';

export default function MeowArticle() {
  const [text, setText] = useState('데이터 준비 중...');

  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com/')
      .then((response) => response.json())
      .then((data) => setText(data.data[0]));
  }, []);
  return <article className="font-lg p-4 m-2 bg-lime-800">{text}</article>;
}
