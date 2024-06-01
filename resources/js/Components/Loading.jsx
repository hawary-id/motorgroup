import { CgSpinner } from "react-icons/cg";

export default function Loading(second) {
    return (
        <div className="flex items-center justify-center w-full py-12">
            <CgSpinner className="text-6xl duration-200 text-primary animate-spin"/>
        </div>
    )
}