import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog";
import { useDialogStore } from "@/store/dialog";

export default function DialogBase({
  name,
  title,
  description,
  footer,
  children,
  ...rest
}) {
  const { dialogList, dialogClose } = useDialogStore();
  return (
    <Dialog
      open={dialogList.some((dialog) => dialog.name === name)}
      onOpenChange={(open) => !open && dialogClose(name)}
      {...rest}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
