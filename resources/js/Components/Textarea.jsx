import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function Textarea({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            type={type}
            className={
                'border-gray-300 px-5 text-gray-800 placeholder:text-gray-500 h-36 text-sm focus:border-blue-500 focus:ring-blue-500 rounded shadow-sm ' +
                className
            }
            ref={input}
        ></textarea>
    );
});
