"use client";

import { useDialogStore } from "@/store/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
export default function AlertDialogBase() {
  const { dialogList, dialogClose } = useDialogStore();

  const alertList = useMemo(() => {
    return dialogList.filter((modal) => modal.name.includes("alert"));
  }, [dialogList]);

  return (
    <>
      {alertList.map((alertData) => {
        const { cancelBtnProps, actionBtnProps, ...data } = alertData;
        console.log("data", data);
        return (
          <AlertDialog
            key={data.name}
            open={dialogList.some((dialog) => dialog.name === data.name)}
            onOpenChange={(open, event) => {
              console.log(event);
              !open && dialogClose(alertData.name, { confirm: false });
            }}
            {...data}
          >
            <AlertDialogContent className={data.className}>
              <AlertDialogHeader>
                {data.title && (
                  <AlertDialogTitle>{data.title}</AlertDialogTitle>
                )}
                {data.text && (
                  <AlertDialogDescription>{data.text}</AlertDialogDescription>
                )}
              </AlertDialogHeader>

              <AlertDialogFooter>
                {data.confirm && (
                  <Button
                    {...cancelBtnProps}
                    autoFocus={data.confirm}
                    onClick={() => {
                      dialogClose(data.name, { confirm: false });
                    }}
                  />
                )}
                <Button
                  {...actionBtnProps}
                  autoFocus={!data.confirm}
                  onClick={() => {
                    dialogClose(data.name, { confirm: true });
                  }}
                />
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        );
      })}
    </>
  );
}
