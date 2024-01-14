interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = ({ ...props }: TextareaProps) => {
  return (
    <textarea
      className="px-4 py-2 w-full select-none [outline:none] shadow-md mt-4 rounded-md bg-neutral-800 focus:ring-1 focus:ring-neutral-500 text-white placeholder-neutral-500"
      {...props}
    />
  );
};
