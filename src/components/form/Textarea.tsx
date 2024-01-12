interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = ({ ...props }: TextareaProps) => {
  return (
    <textarea
      className="px-4 py-2 w-full select-none [outline:none] shadow-md mt-4 rounded-md bg-gray-100 focus:ring-emerald-500 text-gray-800"
      {...props}
    />
  );
};
