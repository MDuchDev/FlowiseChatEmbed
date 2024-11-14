type SupportDialogProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (supportData: {
        name: string;
        email: string;
        message: string;
    }) => void;
    backgroundColor?: string;
    textColor?: string;
};
declare const SupportDialog: (props: SupportDialogProps) => import("solid-js").JSX.Element;
export default SupportDialog;
//# sourceMappingURL=SupportDialog.d.ts.map