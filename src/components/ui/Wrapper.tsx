import { ReactNode } from 'react';

type WrapperProps = {
    children: ReactNode;
}

export const Wrapper = ({children}: WrapperProps) => {
    return(
        <div className="flex gap-2 flex-col justify-center max-w-3xl w-full self-center px-4 py-2 pb-5 m-4 shadow-md bg-gray-900 rounded-md">
            {children}
        </div>
    )
}