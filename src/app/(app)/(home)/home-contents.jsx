"use client";

import { FormTextarea } from "@/components/form/form-textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function HomeContents() {
  const [form, setForm] = useState({
    description: "", // 초기값 설정!
  });
  return (
    <div className="flex display-1 flex-col gap-4 p-4 shadow-lg">
      <div className="font-poppins text-4xl">123123</div>
      <div className="font-samsung ">font-samsung</div>
      <Input
        label="label"
        type="search"
        placeholder="placeholder"
        className=""
      />
      <Button variant="brand">버튼</Button>
      <Button variant="primary" disabled>
        버튼
      </Button>
      <Button variant="primary">버튼</Button>
      <Button variant="secondary">버튼</Button>
      <Button variant="outline">버튼</Button>

      <FormTextarea
        label="설명"
        placeholder="내용을 입력해 주세요"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        error={form.description.length < 5 ? "5자 이상 입력해주세요." : ""}
        maxLength={100}
      />
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={1}>123</SelectItem>
          <SelectItem value={2}>2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
