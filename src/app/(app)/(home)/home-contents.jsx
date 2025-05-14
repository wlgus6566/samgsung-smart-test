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

export default function HomeContents({ initialData }) {
  const [form, setForm] = useState({
    description: "", // 초기값 설정!
  });
  return (
    <div className="flex leading-4xlg flex-col gap-4 p-4 bg-gradient-brand shadow-lg">
      <div className="font-poppins">123123</div>
      <div className="font-samsung">font-samsung</div>
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
