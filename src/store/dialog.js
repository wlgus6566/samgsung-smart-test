import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { v1 } from "uuid";

const defaultBtnConfig = {
  actionBtnProps: {
    variant: "default",
    children: "확인",
  },
  cancelBtnProps: {
    variant: "outline",
    children: "취소",
  },
};

export const useDialogStore = create(
  devtools(
    (set, get) => ({
      dialogList: [],

      alert: async ({ title, text, actionBtnProps, ...props }) => {
        const uuid = v1();
        const { dialogList } = get();
        const activeElement = document.activeElement;
        activeElement?.blur();
        return new Promise((resolve, reject) => {
          set({
            dialogList: [
              ...dialogList,
              {
                name: `alert-${uuid}`,
                trigger: activeElement,
                resolve,
                title,
                text,
                actionBtnProps: {
                  ...defaultBtnConfig.actionBtnProps,
                  ...actionBtnProps,
                },
                ...props,
              },
            ],
          });
        });
      },

      confirm: async ({
        title,
        text,
        actionBtnProps,
        cancelBtnProps,
        ...props
      }) => {
        const uuid = v1();
        const { dialogList } = get();
        const activeElement = document.activeElement;
        activeElement?.blur();
        return new Promise((resolve, reject) => {
          set({
            dialogList: [
              ...dialogList,
              {
                name: `alert-${uuid}`,
                trigger: activeElement,
                resolve,
                title,
                text,
                confirm: true,
                actionBtnProps: {
                  ...defaultBtnConfig.actionBtnProps,
                  ...actionBtnProps,
                },
                cancelBtnProps: {
                  ...defaultBtnConfig.cancelBtnProps,
                  ...cancelBtnProps,
                },
                ...props,
              },
            ],
          });
        });
      },

      dialogOpen: async (dialogName = "", { callback } = {}) => {
        const { dialogList } = get();
        try {
          if (dialogList.some((dialog) => dialog.name === dialogName))
            throw "이미 열려있는 모달";
          if (!dialogName) throw "모달 이름 입력";
          const activeElement = document.activeElement;
          activeElement?.blur();
          return new Promise((resolve, reject) => {
            set({
              dialogList: [
                ...dialogList,
                {
                  name: dialogName,
                  trigger: activeElement,
                  resolve,
                },
              ],
            });
            setTimeout(() => {
              if (callback) callback();
            }, 100);
          });
        } catch (e) {
          console.error(e);
        }
      },

      dialogClose: async (
        dialogName = "",
        { confirm = false, callback } = {}
      ) => {
        try {
          document.activeElement?.blur();
          const { dialogList } = get();
          if (dialogName === "") throw "모달 이름 입력";
          const dialog = dialogList.find(
            (dialog) => dialog.name === dialogName
          );
          if (!dialog) throw "없는 모달 닫음";

          set({
            dialogList: dialogList.filter(
              (dialog) => dialog.name !== dialogName
            ),
          });
          dialog.resolve(confirm);
          if (callback) callback();
          setTimeout(() => {
            dialog.trigger?.focus();
          }, 100);
        } catch (e) {
          console.error(e);
        }
      },

      // 모든 모달 닫기
      dialogCloseAll: () => {
        const { dialogList } = get();
        // 모든 모달의 resolve 함수 호출
        dialogList.forEach((dialog) => {
          if (dialog.resolve) {
            dialog.resolve(false);
          }
        });

        set({
          dialogList: [],
        });
      },
    }),
    { name: "dialog-store" }
  )
);
