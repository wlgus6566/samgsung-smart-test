"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDialogStore } from "@/store/dialog";
import { useState } from "react";
import DialogBase from "@/components/dialog";

export default function DialogDemo() {
  const { dialogList, dialogOpen, dialogClose, alert, confirm } =
    useDialogStore();
  const [formData, setFormData] = useState({
    name: "Pedro Duarte",
    username: "@peduarte",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const openProfileDialog = async () => {
    try {
      await dialogOpen("profile-dialog");
      console.log("profile-dialog 열림");
    } catch (error) {
      console.error("다이얼로그 열기 실패:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">다이얼로그 데모</h1>
        <p className="text-muted-foreground">
          Zustand를 사용한 다이얼로그 상태 관리 예시입니다.
        </p>
      </div>

      <div className="flex gap-4">
        <Button
          variant="default"
          onClick={async (e) => {
            const t = await dialogOpen("test-dialog", {
              callback: () => console.log("111111"),
            });
            console.log("test-dialog 닫힘", t);
          }}
        >
          프로필 수정
        </Button>

        <Button
          variant="destructive"
          onClick={async () => {
            await alert({
              title: "asdfasdf",
              actionBtnProps: {
                variant: "outline",
                onClick: () => console.log("123123"),
              },
            });
          }}
        >
          Alert
        </Button>

        <Button
          variant="destructive"
          onClick={async () => {
            const test = await confirm({
              title: "asdfasdf",
            });
            console.log("test", test);
          }}
        >
          Confirm
        </Button>

        <DialogBase
          name="test-dialog"
          title="프로필 수정"
          description="프로필 정보를 수정하세요. 완료되면 저장 버튼을 클릭하세요.222"
          footer={<Button>변경사항 저장</Button>}
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                이름
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                사용자명
              </Label>
              <Input
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <Button
              variant="destructive"
              onClick={async () => {
                const test = await confirm({
                  title: "asdfasdf",
                  text: "asdfasdf",
                  actionBtnProps: {
                    variant: "outline",
                    onClick: () => console.log("123123"),
                    children: "123123",
                  },
                  cancelBtnProps: {
                    variant: "outline",
                    onClick: () => console.log("123123"),
                    children: "123123",
                  },
                });
                console.log("test", test);
              }}
            >
              계정 삭제2
            </Button>
          </div>
        </DialogBase>
      </div>
    </div>
  );
}
