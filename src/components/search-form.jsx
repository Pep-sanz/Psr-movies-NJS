"use client";

import { Button, Form, Input } from "antd";
import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const onFinish = async () => {
    onSearch(query);
  };

  return (
    <div className="bg-cyan-800 w-full min-h-28 flex justify-center items-center rounded-sm">
      <Form name="input search" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off" className="!flex !justify-center !items-center gap-4 ">
        <Form.Item name="search">
          <Input placeholder="Search" className="!min-w-[400px]" onChange={(e) => setQuery(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
